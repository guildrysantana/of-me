#!/usr/bin/env node
// Regenerate the store's DERIVED files from the repository itself.
//
// Why this exists: INDEX.md and the people/ roster are projections — INDEX.md of the
// file tree, the roster of each person record's front matter. Asking an agent to keep
// them current is asking it to remember bookkeeping, and that instruction has failed
// repeatedly in live use (ChatGPT writing one file per commit and declaring the
// regeneration someone else's job; the story sweep missing links three times running).
//
// Anything computable should be computed. This script is the authority; it runs on
// every push, so no agent — ours, ChatGPT's, or one that doesn't exist yet — ever has
// to maintain navigation by hand.
//
// No dependencies, no build step: `node scripts/build-derived.mjs` from the repo root.

import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ROOT_DESCRIPTIONS = {
  "README.md": "what this store is.",
  "AGENTS.md": "how a connected AI should read, converse, and update this store.",
  "sensitivity-preferences.md": "how I want sensitive things handled.",
};

const DIR_DESCRIPTIONS = {
  "about-me": "who I am — guide, interests, reflections.",
  journal: "dated journal entries, by year.",
  afterwords: "what my guide wrote back after reading something I said.",
  gallery: "saved ways of looking at my photographs — one file per view of the Gallery Wall.",
  domains: "subjects with records accumulating that have not earned a room yet.",
  sources: "the raw material everything else traces back to; `imported/` is what was brought in from elsewhere.",
  writing: "my own writing — the book, and anything else in progress.",
  stories: "told anecdotes (a form, not a topic); `shelf.md` queues the untold ones.",
  drawer:
    "the junk drawer: passing fragments, one line each. `drawer.md` is the whole drawer; any file beside it was earned.",
  people: "canonical identity records, one file per person.",
  timeline: "dated life events, materialized once and referenced.",
};

/** Tracked files only — `git ls-files` respects .gitignore, so node_modules is free.
 *
 * DEDUPED, and that is not defensive coding. During a merge or rebase conflict
 * `git ls-files` prints one row PER STAGE — the base, ours, and theirs — so a single
 * conflicted path comes back three times. This script runs from a hook and from
 * preflight, so it will eventually run while a conflict is open, and when it did the
 * INDEX quietly listed one file three times. Nothing failed; the generated map was
 * just wrong, which is the kind of wrong nobody reads closely enough to catch. */
function trackedFiles() {
  const rows = execFileSync("git", ["ls-files", "-z"], { encoding: "utf8" })
    .split("\0")
    .filter(Boolean)
    .filter((p) => !p.startsWith(".") && !p.split("/").some((s) => s === ".DS_Store"))
    .filter((p) => !isIndexFile(p));
  return [...new Set(rows)].sort();
}

/** Every index this script owns, wherever it sits — never listed, never a source. */
function isIndexFile(path) {
  return path === "INDEX.md" || path.endsWith("/INDEX.md");
}

/** The sub-indexes currently tracked, so one whose folder shrank below the line can go. */
function trackedSubIndexes() {
  return execFileSync("git", ["ls-files", "-z"], { encoding: "utf8" })
    .split("\0")
    .filter((p) => p.endsWith("/INDEX.md"));
}

/**
 * THE MAP, AND WHAT IT LEAVES OUT (2026-09-06).
 *
 * The founder's INDEX.md reached 4,674 rows and 438 KB — four `read` windows
 * for a connected AI, and a third of it was the app's own source. The
 * retrieval decision behind this map called for rollups at about a thousand
 * files; the house passed three thousand with none. Three rules now, applied
 * identically by the TypeScript
 * twin in `web/lib/index-md.ts` (a test holds the two to the byte):
 *
 *   MACHINERY IS NOT A PLACE. Workflows, the app, the ops scripts, the
 *   generator itself: none of it is a record, and none of it belongs on a map
 *   a guide navigates by. The same list the reader hides (`HIDDEN_PREFIXES`).
 *
 *   A BIG FOLDER GETS ITS OWN INDEX. Any folder holding more than ROLLUP_AT
 *   files, at any depth, is one row on its parent's map — pointing at an
 *   INDEX.md of its own, in the same shape — rather than a wall its parent
 *   has to carry. A bulk import of two thousand notes is one line at the
 *   root and a map of its own where it lives.
 *
 *   A ROW SAYS WHAT THE FILE IS, where the file says so: its `index_note` or
 *   `title`, capped, so the map is a map and not a pile of filenames.
 *
 * And two kinds of file are left off without being touched: a record marked
 * `lifecycle_status: archived` or `superseded`, and every member of a version
 * chain but its head. The files stay exactly where they are and open at
 * their own address; only the row goes, the same way a superseded Afterword
 * already yields its page to the newest version.
 */
const MACHINERY = [".github/", ".claude/", "playbooks/", "scripts/", "ops/", "app/", "web/", "media/", "mobile/"];
const ROLLUP_AT = 40;
/**
 * A folder whose README already IS its map never gets a second one. The
 * people roster is generated below, with mention counts and circles, and
 * every reader of `people/` treats each file there as a person — a
 * `people/INDEX.md` would be one more person called Index.
 */
const NEVER_ROLLED = new Set(["people"]);
const NOTE_MAX = 120;
const RETIRED = new Set(["archived", "superseded"]);

/** One INDEX row: the path, in code, linked to itself.
 *
 *  The path stays visible because an index of paths is read by agents navigating by
 *  path. The link is what makes the same row clickable for a person reading the world
 *  in a browser. This is the carve-out in the cross-links rule: a generated path index
 *  is the one place the path IS the link text. A sub-index links relative to its own
 *  folder, so the same row resolves wherever the map sits. */
function indexLink(path, from) {
  const target = from && path.startsWith(`${from}/`) ? path.slice(from.length + 1) : path;
  return `[\`${path}\`](${target})`;
}

function noteFor(meta, path) {
  const fm = meta?.get(path);
  if (!fm) return "";
  const raw = (fm.index_note || fm.title || "").replace(/\s+/g, " ").trim();
  if (!raw) return "";
  return raw.length > NOTE_MAX ? `${raw.slice(0, NOTE_MAX - 1).trimEnd()}…` : raw;
}

function rowFor(path, meta, from) {
  const note = noteFor(meta, path);
  return `- ${indexLink(path, from)}${note ? ` — ${note}` : ""}`;
}

/** Retired records and the older versions of a chain leave the map, not the house. */
function mappable(paths, meta) {
  if (!meta) return paths;
  const chains = new Map();
  for (const path of paths) {
    const fm = meta.get(path);
    if (!fm?.record_id) continue;
    const list = chains.get(fm.record_id) ?? [];
    list.push(path);
    chains.set(fm.record_id, list);
  }
  const older = new Set();
  for (const members of chains.values()) {
    if (members.length < 2) continue;
    const versionOf = (p) => Number(meta.get(p)?.version) || 1;
    // A chain is versions that DIFFER. Two files claiming one id at the same
    // version is a collision the validator names, not a chain — both stay on
    // the map rather than one quietly vanishing.
    if (new Set(members.map(versionOf)).size < 2) continue;
    const head = [...members].sort(
      (a, b) =>
        versionOf(b) - versionOf(a) ||
        String(meta.get(b)?.created_at ?? "").localeCompare(String(meta.get(a)?.created_at ?? "")) ||
        b.localeCompare(a),
    )[0];
    for (const p of members) if (p !== head) older.add(p);
  }
  return paths.filter((p) => !older.has(p) && !RETIRED.has(meta.get(p)?.lifecycle_status));
}

/** The folders under `folder` (one level down) and the files directly in it. */
function shapeOf(paths, folder) {
  const prefix = folder ? `${folder}/` : "";
  const direct = [];
  const children = new Set();
  for (const p of paths) {
    if (prefix && !p.startsWith(prefix)) continue;
    const rest = p.slice(prefix.length);
    const slash = rest.indexOf("/");
    if (slash === -1) direct.push(p);
    else children.add(prefix + rest.slice(0, slash));
  }
  return { direct, children: [...children].sort() };
}

function countUnder(paths, folder) {
  const prefix = `${folder}/`;
  return paths.filter((p) => p.startsWith(prefix)).length;
}

/**
 * Rows for everything under `folder`, into `lines`; big children become one
 * row each and get an index of their own, appended to `out`.
 */
function listFolder(paths, meta, folder, from, lines, out) {
  const { direct, children } = shapeOf(paths, folder);
  for (const file of direct) lines.push(rowFor(file, meta, from));
  for (const child of children) {
    const n = countUnder(paths, child);
    if (n > ROLLUP_AT && !NEVER_ROLLED.has(child)) {
      const target = from && child.startsWith(`${from}/`) ? child.slice(from.length + 1) : child;
      lines.push(`- [\`${child}/\`](${target}/INDEX.md) — ${n} files; see its own index`);
      out.push(...subIndex(paths, meta, child));
    } else {
      listFolder(paths, meta, child, from, lines, out);
    }
  }
}

function subIndex(paths, meta, folder) {
  const out = [];
  const lines = [
    `# INDEX — map of ${folder}/`,
    "",
    `Every file under \`${folder}/\` by path, so a connected AI can navigate straight to`,
    "what it needs. Folders with more than " + ROLLUP_AT + " files have an index of their own.",
    "",
    "> **Generated file — do not hand-edit.** Rebuilt from the repository by",
    "> `scripts/build-derived.mjs` on every push.",
    "",
  ];
  listFolder(paths, meta, folder, folder, lines, out);
  lines.push("");
  return [[`${folder}/INDEX.md`, lines.join("\n")], ...out];
}

/** Every index file, root first: `[path, content]` pairs. */
function buildIndexFiles(paths, meta) {
  const files = mappable(
    [...new Set(paths)]
      .filter((p) => !isIndexFile(p) && !p.startsWith("."))
      .filter((p) => !MACHINERY.some((m) => p.startsWith(m)))
      .sort(),
    meta,
  );
  const out = [];
  const { direct: rootFiles, children: dirs } = shapeOf(files, "");
  const lines = [
    "# INDEX — map of this store",
    "",
    "Every file by path, so a connected AI can navigate straight to what it needs",
    "instead of relying on search. Folders with more than " + ROLLUP_AT + " files have an",
    "index of their own; the row for such a folder links to it.",
    "",
    "> **Generated file — do not hand-edit.** Rebuilt from the repository by",
    "> `scripts/build-derived.mjs` on every push. Add a file and it appears here on",
    "> its own; there is nothing to remember.",
    "",
    "## Root",
  ];
  for (const file of rootFiles) {
    const desc = ROOT_DESCRIPTIONS[file];
    lines.push(`- ${indexLink(file)}${desc ? ` — ${desc}` : ""}`);
  }
  for (const dir of dirs) {
    const desc = DIR_DESCRIPTIONS[dir];
    lines.push("", `## ${dir}/${desc ? ` — ${desc}` : ""}`);
    const n = countUnder(files, dir);
    if (n > ROLLUP_AT && !NEVER_ROLLED.has(dir)) {
      lines.push(`- [\`${dir}/\`](${dir}/INDEX.md) — ${n} files; see its own index`);
      out.push(...subIndex(files, meta, dir));
    } else {
      listFolder(files, meta, dir, "", lines, out);
    }
  }
  lines.push("");
  return [["INDEX.md", lines.join("\n")], ...out];
}

/** Front matter is simple and machine-written here; a line scan beats a YAML dep. */
function frontMatter(path) {
  return parseFrontMatter(textOf(path));
}

/** Each file read once: the roster, the graph, the id map and the index all ask. */
const TEXT = new Map();
function textOf(path) {
  if (!TEXT.has(path)) TEXT.set(path, readFileSync(path, "utf8"));
  return TEXT.get(path);
}

/** What the index needs from every markdown file: a note, and whether the row stays. */
function indexMeta(paths) {
  const meta = new Map();
  for (const path of paths) {
    if (!path.endsWith(".md")) continue;
    let fm;
    try {
      fm = frontMatter(path);
    } catch {
      continue;
    }
    if (fm) meta.set(path, fm);
  }
  return meta;
}

/** The same parse, from text already in hand — `mentionCounts` has read the file
 *  to scan its prose and must not read it a second time to check one field. */
function parseFrontMatter(text) {
  if (!text.startsWith("---")) return null;
  const end = text.indexOf("\n---", 3);
  if (end === -1) return null;
  const out = {};
  let key = null;
  for (const line of text.slice(4, end).split("\n")) {
    const m = /^([a-z_]+):\s*(.*)$/.exec(line);
    if (m) {
      key = m[1];
      out[key] = m[2];
      continue;
    }
    // A wrapped value continues on an indented line — without this, a long
    // `relationship:` gets truncated mid-sentence in the roster.
    if (key && /^\s+\S/.test(line) && !/^\s*-\s/.test(line)) {
      out[key] = `${out[key]} ${line.trim()}`.trim();
      continue;
    }
    key = null;
  }
  for (const k of Object.keys(out)) {
    // Only TWO-plus spaces introduce a YAML inline comment. A single space before
    // "#" is ordinary prose — a hashtag can legitimately open a word in a
    // relationship field, and a greedier rule silently truncates that record
    // mid-sentence.
    out[k] = out[k].replace(/\s{2,}#.*$/, "").replace(/^["']|["']$/g, "").replace(/\s+/g, " ").trim();
  }
  return out;
}

/**
 * A record about somebody who does not live in this house.
 *
 * THIS IS THE ONE FLAG THAT KEEPS A STRANGER OUT OF YOUR OWN GRAPH. When
 * somebody records a portrait of a person they love, that telling lands in the
 * house of whoever sent them the link — yours — because that is what makes it a
 * referral rather than a record of its own. It is the one kind of file here that
 * is entirely about a person who does not live in this house, and it says so
 * three times over: `subject_is_third_party: true`, an `about_person`, and a
 * warning in its first line.
 *
 * Nothing downstream was reading that. So these derived views — which exist to
 * say who is in your life and who turns up alongside whom — counted a stranger's
 * family as yours, and a `related_people:` line added by a later ingest pass
 * knitted them into the constellation. Neither is a mistake you can see and
 * correct: they arrive inside generated files nobody hand-edits, which is
 * exactly the kind of wrong that survives.
 *
 * The flag decides, not the folder. `sources/contributions/` holds real
 * testimony about YOU alongside these, so a rule about paths would either drop
 * your own contributors or keep the strangers. Whatever a record says it is, it
 * is — the same rule the README states.
 */
function isAboutSomebodyElse(fm) {
  return fm?.subject_is_third_party === "true";
}

const ROSTER_BEGIN = "<!-- of-me:roster:begin — generated by scripts/build-derived.mjs -->";
const ROSTER_END = "<!-- of-me:roster:end -->";
/** The ten age bands a reference frame can sit in — tight where a face changes
 *  fastest, wide where it barely does. A face is a sequence, not one
 *  thing, and two stages of the same person can sit further apart than two
 *  different people do; indexing per band is what stops that. */
const AGE_BANDS = [
  ["0-12mo", 0, 1],
  ["12-36mo", 1, 3],
  ["36mo-6y", 3, 6],
  ["6-10y", 6, 10],
  ["10-12y", 10, 13],
  ["13-17y", 13, 18],
  ["18-25y", 18, 25],
  ["25-40y", 25, 40],
  ["40-60y", 40, 60],
  ["60+", 60, Infinity],
];

/** COMPUTED from two real dates, or absent. Never estimated from a face.
 *
 *  A missing band is a usable reference; a wrong one quietly poisons every match
 *  made against it, and nothing downstream can tell the difference. So a frame
 *  whose subject has no birth date on file, or whose own date is a guess, simply
 *  has no band — which is also the honest state of most old scans. */
function ageBandAt(bornOn, takenOn) {
  const born = Date.parse(`${String(bornOn).slice(0, 10)}T00:00:00Z`);
  const taken = Date.parse(`${String(takenOn).slice(0, 10)}T00:00:00Z`);
  if (!Number.isFinite(born) || !Number.isFinite(taken) || taken < born) return null;
  const years = (taken - born) / (365.2425 * 24 * 3600 * 1000);
  const hit = AGE_BANDS.find(([, lo, hi]) => years >= lo && years < hi);
  return hit ? hit[0] : null;
}

const FACES_BEGIN = "<!-- of-me:faces:begin — generated by scripts/build-derived.mjs -->";
const FACES_END = "<!-- of-me:faces:end -->";

/**
 * How many records mention this person.
 *
 * Counted HERE, at commit time, because the alternative is a page reading every
 * file in the world to render one list. The roster is already a projection of
 * front matter; this is one more column of the same projection.
 *
 * Two signals, deduped by file: a `related_people:` declaration naming them —
 * which a record is authoritative about — and their name appearing in the prose
 * of a record that declares nothing. Their own file never counts itself.
 */
function mentionCounts(paths, people) {
  const counts = new Map(people.map((p) => [p.slug, 0]));

  // A bare first name only counts when it belongs to exactly one person.
  // A scaffolded AGENTS.md already states the hazard — say the full name when a
  // first name is shared, because a record saying only the first name cannot
  // mean one of two people who answer to it. The first version of this counter
  // walked straight into it: in a live world, two people sharing a first name
  // scored an identical 150, and another such pair an identical 103. Identical
  // numbers for two different people is the tell that a count is measuring the
  // pattern rather than the person.
  // EVERY FORM, AND THE HOLE THIS CLOSES WAS IN THE OLD RULE'S BLIND SPOT.
  //
  // The guard below has always excluded a shared FIRST name. What it could not
  // exclude was a shared WHOLE name, because the full name went into the search
  // list unconditionally — and in a house that titles close people with one
  // word, a whole name IS a first name. Somebody titled with a first name that
  // two others share therefore scored every file containing that word,
  // including the files about the other two. The number was the pattern's, not
  // the person's, which is exactly what the note above says is the tell.
  //
  // It surfaced when such a title gained a surname and the count fell to zero:
  // the retitle did not break the count, it revealed that the count had never
  // belonged to that person. Counting all four name fields, and dropping any
  // form more than one person answers to, is the honest version.
  const formsOf = (p) =>
    new Set(
      [p.name, p.fm.full_name, p.fm.goes_by, ...listField(p.fm, "aliases")]
        .map((n) => String(n ?? "").replace(/\s*\([^)]*\)\s*$/, "").trim())
        .filter(Boolean),
    );

  // GOES-BY SETTLES A COLLISION THAT SHARING A FIRST NAME WOULD OTHERWISE CAUSE.
  //
  // Where three people in a house share a first name, that bare name is shared
  // by the arithmetic and not in life: one of them is who anybody there means
  // when they say it, and their record says so in `goes_by`.
  //
  // `goes_by` is a DECLARED fact and a shared first name is an inference, so
  // the declaration wins — the same ordering this house uses everywhere else.
  // When exactly one person declares a form, it is theirs. When two do, nobody
  // gets it, which is the case the guard was written for.
  const declarers = new Map();
  for (const p of people) {
    const said = String(p.fm.goes_by ?? "").trim().toLowerCase();
    if (said) declarers.set(said, (declarers.get(said) ?? 0) + 1);
  }

  // WHAT EACH PERSON CLAIMS, worked out once and used for both halves. Counting
  // owners over one list and building patterns from another is how a form with
  // exactly one owner got searched for everybody who merely shared it: the
  // count said unambiguous, the pattern list said mine, and neither was
  // checking the other.
  const claimed = new Map();
  for (const p of people) {
    const mine = String(p.fm.goes_by ?? "").trim().toLowerCase();
    const forms = new Set(formsOf(p));
    forms.add(p.name.split(" ")[0]);
    claimed.set(
      p.slug,
      [...forms].filter((form) => {
        const key = form.toLowerCase();
        // Somebody else's declared name is not one of mine.
        return !(declarers.get(key) === 1 && mine !== key);
      }),
    );
  }

  const formOwners = new Map();
  for (const forms of claimed.values()) {
    for (const form of new Set(forms.map((f) => f.toLowerCase()))) {
      formOwners.set(form, (formOwners.get(form) ?? 0) + 1);
    }
  }

  const esc = (n) => n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const names = people.map((p) => {
    return {
      slug: p.slug,
      patterns: [...new Set(claimed.get(p.slug) ?? [])]
        // Unambiguous only — a form two people answer to cannot be counted for
        // either of them without inventing a number.
        .filter((n) => n.length > 2 && formOwners.get(n.toLowerCase()) === 1)
        // A ONE-WORD NAME HAS TO LOOK LIKE A NAME.
        //
        // One word matched case-insensitively is a word, not a name: a record
        // titled with an ordinary lower-case word scored every file containing
        // that word in ordinary prose — twenty-seven of them, for somebody
        // named once on a photograph and nowhere else. Requiring a capital is
        // the whole fix, and it costs nothing: a person's name is capitalised
        // wherever it appears, and a full name still matches case-insensitively
        // because surnames get spelled inconsistently.
        .filter((n) => n.includes(" ") || /^\p{Lu}/u.test(n))
        .map((n) => new RegExp(`(?<![\\w-])${esc(n)}(?![\\w-])`, n.includes(" ") ? "i" : "")),
    };
  });
  for (const path of paths) {
    if (!path.endsWith(".md")) continue;
    if (path.startsWith("people/")) continue; // a person's own file isn't a mention
    let text;
    try {
      text = textOf(path);
    } catch {
      continue;
    }
    // A portrait names its subject throughout, and your own people surface in
    // it too — somebody describing a person they love reaches for a comparison.
    // Counting either inflates a number that is supposed to mean how much of
    // YOUR life this person is in.
    if (isAboutSomebodyElse(parseFrontMatter(text))) continue;
    for (const n of names) {
      if (n.patterns.some((re) => re.test(text))) counts.set(n.slug, counts.get(n.slug) + 1);
    }
  }
  return counts;
}

/** Everyone with a record, read once — the roster table and the graph share it. */
function rosterPeople(paths) {
  const people = [];
  for (const path of paths) {
    if (!path.startsWith("people/") || !path.endsWith(".md")) continue;
    if (path === "people/README.md") continue;
    const fm = frontMatter(path);
    if (!fm?.record_id) continue;
    const slug = path.slice("people/".length).replace(/\.md$/, "");
    people.push({
      path,
      slug,
      fm,
      // The person's own words for their name when the record carries one;
      // otherwise the slug, title-cased: "ann-marie" → "Ann Marie", never
      // "Ann marie" — which is what the reader was showing (2026-08-06).
      name:
        (fm.title ?? "").replace(/\s*\([^)]*\)\s*$/, "").trim() ||
        slug.split("-").filter(Boolean).map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    });
  }
  return people;
}

function buildRoster(paths, people) {
  const counts = mentionCounts(paths, people);

  // Grouped by circle, because past a couple of dozen people one table is a pile and
  // a pile is not how anyone holds the people in their life. The grouping is only
  // rendered once it is EARNED — see `groupRoster` — so a small world still gets one
  // clean list instead of a scattering of one-person headings.
  const rows = new Map();
  for (const { path, slug, fm, name } of people) {
    const row =
      `| [\`${path.slice("people/".length)}\`](${path.slice("people/".length)}) | \`${fm.record_id}\` | ${name} | ` +
      `${counts.get(slug) ?? 0} | ${fm.relationship ?? "—"} | ${fm.sensitivity ?? "—"} | ` +
      // LIFECYCLE, ADDED 2026-09-03, and it is not bookkeeping.
      //
      // Any surface that offers a list of people to choose from has to be able
      // to leave out the ones who have died. That fact was already on the
      // records and had no way OUT of them: the roster is the one read a page
      // can afford — opening every person file while somebody waits is not an
      // option — and this column was not in it. A picker that offers somebody
      // you have lost is the kind of small cruelty a product only gets to
      // commit once, and it looks like a feature working.
      `${fm.lifecycle_status ?? "—"} |`;
    for (const circle of circlesOf(fm)) {
      if (!rows.has(circle)) rows.set(circle, []);
      rows.get(circle).push(row);
    }
    // Surface schema drift instead of absorbing it. Three records once used
    // a field named after the subject instead of `relationship` — written in the
    // SAME agent run as one that used
    // `relationship`, so drift is intra-session and "be consistent" is not a
    // usable instruction. A dash in the roster is the visible symptom; this is
    // the visible cause.
    // `title` belongs on this list and its absence was invisible for a different
    // reason than the others: the roster FALLS BACK to a title-cased slug, so a record
    // missing it still renders a plausible-looking name and nothing looks wrong. Three
    // records wrote `name:` instead — the same intra-session drift described above,
    // one field over — and every tool that resolves a person by `title` silently
    // dropped them: the roster export handed to a content pass, the people graph, and
    // the validator's own known-person set. A whole extraction ran without them, and
    // the readers were right to refuse the names, because adding one would have failed
    // validation. A fallback that hides a missing required field is worse than a dash.
    for (const field of ["record_id", "title", "relationship", "sensitivity"]) {
      if (!fm[field]) console.warn(`⚠ ${path}: missing front-matter field \`${field}\``);
    }
  }
  return [
    ROSTER_BEGIN,
    "",
    `_${people.length} records. Generated — edit a person's front matter, not this table._`,
    "",
    ...groupRoster(rows, people.length),
    "",
    ROSTER_END,
  ].join("\n");
}

const HEADER = [
  "| Record | `record_id` | Name | Mentions | Relationship | Sensitivity | Status |",
  "|---|---|---|---|---|---|---|",
];

/** The circles a person belongs to, or the catch-all. Never invents one. */
function circlesOf(fm) {
  const raw = fm.circles;
  if (!raw) return [UNFILED];
  const values = (Array.isArray(raw) ? raw : String(raw).replace(/^\[|\]$/g, "").split(","))
    .map((v) => String(v).trim().replace(/^["']|["']$/g, ""))
    .filter(Boolean);
  return values.length ? values : [UNFILED];
}

const UNFILED = "unfiled";

/**
 * One table, or one per circle — and the world decides which, not this script.
 *
 * A grouping has to be worth its own headings. Splitting eight people across five
 * circles is not navigation, it is a scattering of one-row tables that is harder to
 * read than the pile it replaced. So the split is EARNED: enough people to be worth
 * grouping, and at least two circles that actually hold somebody. Below that, one
 * list, exactly as before.
 *
 * Same rule as the drawer, and for the same reason — a container that arrives before
 * there is anything to put in it is the product deciding how someone's life is shaped.
 */
function groupRoster(rows, total) {
  const named = [...rows.keys()].filter((c) => c !== UNFILED);
  const earned = total >= 12 && named.filter((c) => rows.get(c).length >= 2).length >= 2;
  if (!earned) {
    return [...HEADER, ...[...rows.values()].flat().sort()];
  }
  const out = [];
  // A circle holding one person is a real circle with a thin roster, not a section.
  // Giving it a heading of its own is the scattering this function exists to avoid —
  // and it reads as though the circle itself were trivial, when what is actually thin
  // is how many of its people have records yet. They gather under one heading, which
  // says the true thing: these circles exist and barely anyone in them is written down.
  const big = named.filter((c) => rows.get(c).length >= 2);
  const thin = named.filter((c) => rows.get(c).length < 2);
  const order = [
    ...big.sort((a, b) => rows.get(b).length - rows.get(a).length || a.localeCompare(b)),
    ...(rows.has(UNFILED) ? [UNFILED] : []),
  ];
  for (const circle of order) {
    const label = circle === UNFILED ? "No circle yet" : circle;
    out.push(`### ${label} (${rows.get(circle).length})`, "", ...HEADER, ...rows.get(circle).sort(), "");
  }
  if (thin.length) {
    const rowsThin = thin.flatMap((c) => rows.get(c));
    out.push(
      `### Circles with only one record so far — ${thin.sort().join(", ")}`,
      "",
      ...HEADER,
      ...rowsThin.sort(),
      "",
    );
  }
  return out;
}

/**
 * WHO APPEARS WITH WHOM — the evidence behind the constellation chart.
 *
 * Same reason as `mentionCounts` above, one step further: a page cannot read a
 * whole house to draw one picture. Every pair of roster names that share a record,
 * counted once here, so the chart reads a single file. Anything computable is
 * computed, at commit time — the same rule the index and the roster are built on.
 *
 * What this deliberately does NOT record is anybody's years. `known_from` and
 * `known_to` are the part a person edits on that page, and a generated copy of a
 * number somebody just corrected would show them the old one until the next push.
 * The chart reads the years live from each person's own record; only the graph —
 * which no correction of theirs changes — is frozen here.
 *
 * A person's OWN file naming their relatives is a claim about them, not a scene
 * they were both in, so `people/` is not evidence. Neither are the folders that
 * describe how the record was made rather than what a life holds, nor a record
 * that says it is about somebody else's life — see `isAboutSomebodyElse`.
 */
const GRAPH_PATH = "people/constellation.json";
const GRAPH_SKIP = ["sources/extraction/", "ops/", "scripts/", ".github/", "web/", "app/"];
const GRAPH_CAP = 4000;
const SEP = "\u0000";

/**
 * A YAML flow list, split on the commas that separate items and not the ones
 * inside them.
 *
 * A NAIVE SPLIT CUTS NAMES IN HALF. This read `[...]` and split on every comma,
 * which is right until an item contains one — and `aliases:` is full of them,
 * because the honest way to record a superseded spelling is
 * `"<old spelling> (this record's title until <date>, superseded)"`. That one
 * entry became two, the second of which was the fragment `superseded)`, claimed
 * by every record that phrased it the same way and therefore reported as an
 * ambiguous name.
 *
 * It cost nothing while this only read `dimensions` and `related_people`, whose
 * items never contain commas. The moment aliases became resolution keys it
 * started putting fragments of sentences into the name index, and a fragment
 * two records share is indistinguishable from two people sharing a nickname.
 */
function listField(fm, name) {
  const raw = fm[name];
  if (!raw) return [];
  const inner = String(raw).trim().replace(/^\[/, "").replace(/\]$/, "");
  const items = [];
  let current = "";
  let quote = null;
  for (const ch of inner) {
    if (quote) {
      if (ch === quote) quote = null;
      else current += ch;
      continue;
    }
    // A QUOTE ONLY OPENS AN ITEM AT ITS START, which is what YAML means and
    // also the difference between working and eating the rest of the line:
    // `[Ana, Tom (Ana's husband), Bo]` is an ordinary line in a house, and an
    // apostrophe mid-item treated as a delimiter swallows everything after it.
    // Quoted items are quoted from the first character.
    if ((ch === '"' || ch === "'") && current.trim() === "") {
      quote = ch;
      continue;
    }
    if (ch === ",") {
      items.push(current);
      current = "";
      continue;
    }
    current += ch;
  }
  items.push(current);
  return items.map((v) => v.trim()).filter(Boolean);
}

/**
 * Every name a person answers to, pointing at the one this house files them under.
 *
 * WHY THIS EXISTS. `related_people:` used to resolve by exact string match
 * against a person's title and nothing else, so a link held only while every
 * record that mentioned somebody spelled them exactly as their title did. That
 * is fine until a title changes — and titles need to be able to change, because
 * a house naturally files the people closest to its owner under one short name,
 * and a short name is what nothing outside the house can find them by.
 *
 * Retitling before this existed would have been silent data loss: in a mature
 * world several hundred records can name one person by their short name alone.
 * Exact match would simply have stopped finding them — no error, no warning,
 * the links gone. So the resolver learns the other spellings FIRST, and then a
 * title can move with the old references still landing.
 *
 * A NAME TWO PEOPLE ANSWER TO RESOLVES TO NEITHER. Two men with the same first
 * name is the oldest hazard in a personal record, and a collision here would
 * merge two lives rather than fail. Ambiguous forms are dropped, which is a
 * visible gap instead of a confident wrong answer.
 */
const AMBIGUOUS = Symbol("two people answer to this");

function nameIndex(people) {
  const index = new Map();
  const claim = (form, canonical) => {
    const key = String(form ?? "").trim().toLowerCase();
    if (!key) return;
    const held = index.get(key);
    if (held === undefined) index.set(key, canonical);
    else if (held !== canonical) index.set(key, AMBIGUOUS);
  };
  for (const person of people) {
    claim(person.name, person.name);
    // The title as written, parenthetical and all — `Ana (my neighbour)` is
    // what a record written before the gloss was stripped will be carrying.
    claim(person.fm.title, person.name);
    claim(person.fm.full_name, person.name);
    claim(person.fm.goes_by, person.name);
    for (const alias of listField(person.fm, "aliases")) claim(alias, person.name);
  }
  return index;
}

/** The canonical name for a declared one, or null when nobody or nobody unambiguous. */
function resolveName(index, declared) {
  const found = index.get(String(declared ?? "").trim().toLowerCase());
  return found === undefined || found === AMBIGUOUS ? null : found;
}

function buildGraph(paths, people) {
  const index = nameIndex(people);
  const weight = new Map();
  const because = new Map();
  const bands = {};
  let scanned = 0;

  for (const path of paths) {
    if (!path.endsWith(".md")) continue;
    if (path.startsWith("people/") || GRAPH_SKIP.some((p) => path.startsWith(p))) continue;
    let fm;
    try {
      fm = frontMatter(path);
    } catch {
      continue;
    }
    if (!fm) continue;
    // A stranger's people are not evidence of who YOU appear with. The record
    // declares that itself; an ingest pass that later adds a `related_people:`
    // line cannot undeclare it.
    if (isAboutSomebodyElse(fm)) continue;
    // Resolved rather than matched, so a record naming somebody by any form
    // this house knows them by still links — and two records naming the same
    // person differently collapse to one edge rather than two.
    const named = [
      ...new Set(
        listField(fm, "related_people")
          .map((n) => resolveName(index, n))
          .filter(Boolean),
      ),
    ].sort();
    if (named.length === 0) continue;
    scanned += 1;

    const dim = listField(fm, "dimensions")[0];
    if (dim) {
      for (const n of named) {
        bands[n] = bands[n] ?? {};
        bands[n][dim] = (bands[n][dim] ?? 0) + 1;
      }
    }
    for (let i = 0; i < named.length; i += 1) {
      for (let j = i + 1; j < named.length; j += 1) {
        const key = `${named[i]}${SEP}${named[j]}`;
        weight.set(key, (weight.get(key) ?? 0) + 1);
        const why = because.get(key) ?? [];
        if (why.length < 2) why.push(path);
        because.set(key, why);
      }
    }
  }

  const all = [...weight.entries()].sort((x, y) => y[1] - x[1] || x[0].localeCompare(y[0]));
  const kept = all.slice(0, GRAPH_CAP);
  return `${JSON.stringify(
    {
      generated: "scripts/build-derived.mjs — do not hand-edit; rebuilt on every push.",
      scanned,
      dropped: all.length - kept.length,
      bands,
      pairs: kept.map(([key, w]) => {
        const [a, b] = key.split(SEP);
        return [a, b, w, because.get(key) ?? []];
      }),
    },
    null,
    1,
  )}\n`;
}

/** Replace the managed block, or append the section if this is the first run. */
function spliceRoster(readme, block) {
  const start = readme.indexOf(ROSTER_BEGIN);
  const end = readme.indexOf(ROSTER_END);
  if (start !== -1 && end !== -1) {
    return readme.slice(0, start) + block + readme.slice(end + ROSTER_END.length);
  }
  const heading = readme.indexOf("\n## Roster");
  const head = heading === -1 ? readme.trimEnd() : readme.slice(0, heading).trimEnd();
  return `${head}\n\n## Roster\n\n${block}\n`;
}

/** The faces block sits after the roster, between its own markers. An empty index
 *  removes the block rather than leaving a heading with nothing under it. */
function spliceFaces(readme, block) {
  const body = block.includes("| `") ? `${block}\n` : "";
  const start = readme.indexOf(FACES_BEGIN);
  const end = readme.indexOf(FACES_END);
  if (start !== -1 && end !== -1) {
    return readme.slice(0, start) + body + readme.slice(end + FACES_END.length).replace(/^\n+/, body ? "" : "\n");
  }
  return body ? `${readme.trimEnd()}\n\n${body}` : readme;
}

// Ownership: this script owns INDEX.md and the
// people roster. A world may carry other generated tables owned by tooling that
// is not scaffolded here — so anything a world must maintain on its own has to
// live in this script. Two tools writing
// one file is what left CI permanently red: this script indexes every tracked
// path, the Python one indexed markdown alone, and each called the other's
// INDEX.md stale. One owner per file.
/**
 * WHERE A RECORD ID MEANS SOMETHING — and the only place it does.
 *
 * A share link has to point at one record, and it must not point with a path. A
 * path carries a name: `people/<somebody>.md` stored on a server is a durable fact
 * about a person who never signed up and cannot ask what is held about them. So a
 * link stores the record's own id and nothing else, and this file is the map that
 * turns one back into a file.
 *
 * It lives HERE, in the house, so the only place those ids mean anything is the
 * repository their owner controls. Read it and a share resolves in one lookup;
 * lose it and every outstanding link stops working, which is the correct failure —
 * a link that cannot find its record must show nothing rather than guess at a
 * neighbouring file.
 *
 * Generated, never hand-edited, like everything else this script owns.
 */
const RECORD_IDS_PATH = "record-ids.json";

function buildRecordIds(paths) {
  const map = {};
  const collisions = [];
  for (const path of paths) {
    if (!path.endsWith(".md")) continue;
    // `frontMatter` returns null for a file with none — most of a house.
    const id = (frontMatter(path)?.record_id ?? "").trim();
    if (!id) continue;
    // FIRST WINS, and a collision is recorded rather than resolved. Two files
    // claiming one id is a real defect in a house — ids are minted at random for
    // exactly that reason — and silently preferring one would make a share link
    // open a file its owner did not choose.
    if (map[id]) {
      collisions.push(`${id}: ${map[id]} · ${path}`);
      continue;
    }
    map[id] = path;
  }
  if (collisions.length > 0) {
    console.log(`record ids claimed twice, first kept: ${collisions.join(" | ")}`);
  }
  return `${JSON.stringify({ generated_by: "scripts/build-derived.mjs", ids: map }, null, 2)}\n`;
}

/** The face index: every `reference_frames:` block in the house, in one file.
 *
 * Why this is generated rather than maintained. Identifications are the connective
 * tissue between a photograph and a person's whole history, and they only compound
 * if a later pass can find them. Scattered across ninety-six person records they are
 * findable in principle and read by nobody; collected here they are one file to open
 * BEFORE looking at a new batch, which is the only order that helps.
 *
 * The front-matter block is deliberately small — a storage file id, roughly when, and
 * one line on what the person looks like in it. The id is the join: it survives every
 * rename, which a filename does not.
 */
function referenceFrames(text) {
  if (!text.startsWith("---")) return [];
  const end = text.indexOf("\n---", 3);
  if (end === -1) return [];
  const lines = text.slice(4, end).split("\n");
  const start = lines.findIndex((l) => /^reference_frames:\s*$/.test(l));
  if (start === -1) return [];
  const frames = [];
  for (const line of lines.slice(start + 1)) {
    // Any non-indented line ends the block — the next front-matter key.
    if (/^\S/.test(line)) break;
    const open = /^\s*-\s*file:\s*(\S+)\s*$/.exec(line);
    if (open) {
      frames.push({ file: open[1] });
      continue;
    }
    const field = /^\s+(when|looks_like|band):\s*(.*)$/.exec(line);
    if (field && frames.length > 0) {
      frames[frames.length - 1][field[1]] = field[2].replace(/^["']|["']$/g, "").trim();
    }
  }
  return frames;
}

function buildFaces(paths) {
  const rows = [];
  for (const path of paths) {
    if (!path.endsWith(".md")) continue;
    let text;
    try {
      text = textOf(path);
    } catch {
      continue;
    }
    const frames = referenceFrames(text);
    if (frames.length === 0) continue;
    const fm = parseFrontMatter(text) ?? {};
    // `faces_of:` names the person when the record is not titled after them —
    // this house's own subject has frames too, and they live in a note rather
    // than in a person file, because the whole house is already about them.
    // A band written by hand stands; otherwise compute it, and leave it off when
    // either date is missing or approximate. A `when` carrying "c." or a bare
    // year is a guess, and a guessed band is worse than no band at all.
    const born = fm.born_on || fm.date_of_birth;
    for (const f of frames) {
      if (f.band || !born || !f.when || !/^\d{4}-\d{2}-\d{2}$/.test(f.when)) continue;
      const band = ageBandAt(born, f.when);
      if (band) f.band = band;
    }
    rows.push({ path, who: fm.faces_of || fm.title || path, frames });
  }
  rows.sort((a, b) => a.who.localeCompare(b.who));
  const total = rows.reduce((n, r) => n + r.frames.length, 0);
  const out = [
    FACES_BEGIN,
    "",
    "## Faces — the reference frames",
    "",
    `${rows.length} ${rows.length === 1 ? "person" : "people"}, ${total} reference ${total === 1 ? "frame" : "frames"}.`,
    "",
    "**Open this before you look at a new batch of photographs, not after.** Each row",
    "is a picture whose subject was named by the person whose house this is — so it is",
    "a thing to recognise against, not another guess. Point an image viewer at the file",
    "id; the id survives renames, the filename does not.",
    "",
    "**This is not face recognition.** It is one picture held beside another by",
    "something that can be wrong. An identification made this way stays a proposal",
    "until it is confirmed, and the record should say so.",
    "",
  ];
  for (const row of rows) {
    out.push(`### ${row.who}`, "");
    out.push(`[Their record](${row.path.startsWith("people/") ? row.path.slice("people/".length) : `../${row.path}`})`, "");
    // Coverage, not count, is the measure: three frames from one
    // afternoon are one band. Naming the bands they DO have makes the empty ones
    // the obvious ask without a second table about absence.
    const bands = AGE_BANDS.map(([name]) => name).filter((name) =>
      row.frames.some((f) => f.band === name),
    );
    const unbanded = row.frames.filter((f) => !f.band).length;
    out.push(
      bands.length > 0
        ? `Bands covered: ${bands.join(" · ")}${unbanded > 0 ? ` — and ${unbanded} undated` : ""}.`
        : `No frame here is dated well enough to band${unbanded > 0 ? ` — all ${unbanded} undated` : ""}.`,
      "",
    );
    out.push("| file id | when | age band | what they look like in it |", "| --- | --- | --- | --- |");
    for (const f of row.frames) {
      out.push(`| \`${f.file}\` | ${f.when ?? "—"} | ${f.band ?? "—"} | ${f.looks_like ?? "—"} |`);
    }
    out.push("");
  }
  out.push(FACES_END);
  return `${out.join("\n")}\n`;
}

const files = trackedFiles();
const people = rosterPeople(files);
const indexFiles = buildIndexFiles(files, indexMeta(files));
const writes = [...indexFiles];
try {
  // The face index rides in the roster file. It is about people, and a non-person
  // file inside people/ reads as a person to everything that treats that folder as
  // the roster — including the check that stops founder content shipping, which
  // took "faces" for somebody's name.
  const readme = spliceRoster(readFileSync("people/README.md", "utf8"), buildRoster(files, people));
  writes.push(["people/README.md", spliceFaces(readme, buildFaces(files))]);
} catch {
  // No people/README.md in this store yet — INDEX alone is still worth writing.
}
// The constellation graph, but only once there is a second person to connect to.
// A world with one record does not need a picture of who they appear with, and a
// file full of nothing is a file somebody has to wonder about.
if (people.length >= 2) writes.push([GRAPH_PATH, buildGraph(files, people)]);
// The share map. Written whenever anything in the house carries an id — a house
// with no ids yet gets no file rather than an empty one nobody can interpret.
{
  const ids = buildRecordIds(files);
  if (!/"ids": \{\}/.test(ids)) writes.push([RECORD_IDS_PATH, ids]);
}

// A folder that shrank below the line no longer needs its own map. Removed
// here, so the workflow's `git add` stages the deletion with everything else.
let removed = 0;
const kept = new Set(indexFiles.map(([path]) => path));
for (const stale of trackedSubIndexes()) {
  if (kept.has(stale)) continue;
  try {
    unlinkSync(stale);
    removed += 1;
    console.log(`removed ${stale} (its folder no longer needs its own index)`);
  } catch {
    /* already gone */
  }
}

let changed = removed;
for (const [path, content] of writes) {
  let before = null;
  try {
    before = readFileSync(path, "utf8");
  } catch {
    /* new file */
  }
  if (before !== content) {
    mkdirSync(dirname(path), { recursive: true });
    writeFileSync(path, content);
    changed += 1;
    console.log(`updated ${path}`);
  }
}
console.log(changed === 0 ? "derived files already current" : `${changed} file(s) regenerated`);
