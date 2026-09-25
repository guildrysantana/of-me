#!/usr/bin/env node
// Check this house's records the way its own contracts read — and only warn.
//
// Every check below enforces a rule that already lives in AGENTS.md or
// records.md as prose, each one written after a real failure: a source cited
// that nobody saved, two people collapsing into one, the same question asked
// twice, a fixed vocabulary quietly growing free spellings. Prose prevents
// when an agent reads it; this catches when one didn't, whoever wrote the
// commit and on whatever model.
//
// THREE RULES OF ITS OWN, and they outrank every check:
//   1. WARN-ONLY. Exit 0 always. A personal repository must never refuse its
//      owner's writing, and a red X on someone's own life is not a feature.
//   2. NEVER WRITES. A validator that edits records is another concurrent
//      author; this one only reads.
//   3. RATCHET, NOT CENSUS. Front-matter checks run on the files a push
//      changed (`--changed <listfile>`), so a house with years of records
//      before the contract is not shouted at for its history. Run with no
//      arguments for a full scan, on purpose. Every check's output is capped.
//
// No dependencies, no build step: `node scripts/validate-records.mjs`.

import { execFileSync } from "node:child_process";
import { appendFileSync, readFileSync, statSync } from "node:fs";

const MAX_PER_CHECK = 10;

// The fixed `source` vocabulary, exactly as records.md states it.
const SOURCES = new Set([
  "self-declared", "conversation", "authored-long-form", "private-notes",
  "handwritten-archive", "correspondence", "contributor", "device-telemetry",
  "workplace-artifact", "third-party-model", "system-inventory", "published-reference",
]);
const CERTAINTY = new Set(["measured", "directly-reported", "recalled", "inferred"]);
const DIMENSIONS_SOURCE = new Set(["declared", "path", "inferred"]);

// `sensitivity` is three fields, exactly as records.md states them. The level says
// how far out a record may travel; compartments say which part of a life it belongs
// to and are deliberately NOT ranked; flags raise the floor and never lower it.
//
// This field was free text for most of this scaffold's life, and a house of a few
// hundred records grows dozens of spellings of it in months — the same failure
// `source` was given a fixed vocabulary to prevent.
// The ratchet is doing the migration: a legacy stamp is only mentioned when its file
// is touched, so nobody is handed a 411-file chore for a contract that arrived after
// the records did.
const LEVELS = new Set([
  "public", "acquaintance", "friend", "circle-of-trust", "confidant", "self",
]);
const COMPARTMENTS = new Set([
  "work", "family", "childhood", "relationships", "health", "recovery",
  "legal", "financial", "creative", "faith", "grief", "reflections",
]);
const FLAGS = new Set(["third-party", "minor", "confidential-duty"]);

// What the 163 legacy spellings were reaching for, so a warning can suggest rather
// than only complain. Longest key first at match time — `highly-personal` must beat
// `personal`, or every record lands one rung too far out, which is the one direction
// of error this field must never make.
const LEGACY_LEVELS = {
  "none": "public", "open": "public",
  "personal": "friend",
  "private": "circle-of-trust",
  "highly-personal": "confidant",
  "maximum": "self", "internal": "self", "private-owner-only": "self",
};
const LEGACY_COMPARTMENTS = {
  professional: "work", medical: "health", bereavement: "grief", venture: "creative",
  addiction: "recovery", marriage: "relationships", childhood: "childhood",
  family: "family", health: "health", recovery: "recovery", legal: "legal",
  financial: "financial", work: "work", grief: "grief",
};

/** Best-effort read of a legacy free-text stamp, for the suggestion only. */
function readLegacySensitivity(raw) {
  const head = raw.toLowerCase().replace(/\s*[—;(].*$/, "").trim();
  let level = null;
  for (const key of Object.keys(LEGACY_LEVELS).sort((a, b) => b.length - a.length)) {
    if (head === key || head.startsWith(key + "-")) { level = LEGACY_LEVELS[key]; break; }
  }
  const compartments = [];
  for (const part of head.split("-")) {
    const mapped = LEGACY_COMPARTMENTS[part];
    if (mapped && !compartments.includes(mapped)) compartments.push(mapped);
  }
  const flags = [];
  if (/third-party/.test(raw.toLowerCase())) flags.push("third-party");
  if (/\bminor\b/.test(raw.toLowerCase())) flags.push("minor");
  return { level, compartments, flags };
}

// Generated or managed files whose contents are not somebody's filing choices.
const SKIP = /^(INDEX\.md|people\/README\.md|people\/constellation\.json|AGENTS\.md|README\.md|records\.md|extraction\.md|the-recognition\.md|\.github\/|scripts\/|web\/|ops\/)/;

function trackedFiles() {
  const rows = execFileSync("git", ["ls-files", "-z"], { encoding: "utf8" })
    .split("\0")
    .filter(Boolean);
  return [...new Set(rows)].sort();
}

/** Same line-scan the derived-files generator uses — simple, machine-written YAML. */
function parseFrontMatter(text) {
  if (!text.startsWith("---")) return null;
  const end = text.indexOf("\n---", 3);
  if (end === -1) return null;
  const out = {};
  let key = null;
  let line = 1;
  const lines = {};
  for (const raw of text.slice(4, end).split("\n")) {
    line += 1;
    const m = /^([a-z_]+):\s*(.*)$/.exec(raw);
    if (m) {
      key = m[1];
      out[key] = m[2];
      lines[key] = line;
      continue;
    }
    // A BLOCK LIST ITEM. This branch used to EXCLUDE them, and the exclusion
    // made `checkRefsExist` a no-op on most of the house: `source_refs:` written
    // in the block form parsed as an empty string, so the check that enforces
    // "never cite a document that does not exist" passed every record without
    // reading a single citation. Both list forms are legal — our builders emit
    // one, every worked example uses the other — so a checker that sees only
    // one form is a checker that is off wherever it matters.
    //
    // Joined with ", " so `listField` reads them exactly as the inline form.
    if (key && /^\s*-\s/.test(raw)) {
      const item = raw.replace(/^\s*-\s*/, "").trim();
      if (item) out[key] = out[key] ? `${out[key]}, ${item}` : item;
      continue;
    }
    if (key && /^\s+\S/.test(raw)) {
      out[key] = `${out[key]} ${raw.trim()}`.trim();
      continue;
    }
    key = null;
  }
  for (const k of Object.keys(out)) {
    out[k] = out[k].replace(/\s{2,}#.*$/, "").replace(/^["']|["']$/g, "").trim();
  }
  return { fields: out, lines };
}

/**
 * A YAML flow list, split on the commas BETWEEN items rather than inside them.
 *
 * A naive split was fine while this only read `compartments` and `flags`, whose
 * items never contain a comma. `aliases` does: the honest way to record a
 * superseded spelling is `"<old name> (this record's title until <date>,
 * superseded)"`, and splitting on every comma turns that one entry into two,
 * the second of which is the fragment `superseded)`. Two records phrasing it
 * the same way would then look like two people sharing a name.
 *
 * A quote only OPENS an item at its start, which is what YAML means and also
 * the difference between working and eating the rest of the line — `[Ana, Tom
 * (Ana's husband)]` is an ordinary entry, and an apostrophe mid-item read as a
 * delimiter swallows everything after it.
 */
function listField(value) {
  if (!value) return [];
  const inner = String(value).trim().replace(/^\[/, "").replace(/\]$/, "");
  const items = [];
  let current = "";
  let quote = null;
  for (const ch of inner) {
    if (quote) {
      if (ch === quote) quote = null;
      else current += ch;
      continue;
    }
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

const findings = [];
function warn(path, line, check, message) {
  findings.push({ path, line, check, message });
}

/** ---- per-file checks: the ratchet half, scoped to what the push touched ---- */

function checkFrontMatter(path, fm) {
  const { fields, lines } = fm;
  if (fields.source !== undefined) {
    const word = fields.source.replace(/\s*\(.*$/, "").trim();
    if (word && !SOURCES.has(word)) {
      warn(path, lines.source, "source-vocabulary",
        `\`source: ${word}\` is not one of the fixed words — records.md carries the list; say the nature of the evidence, never the transport`);
    }
  }
  if (fields.certainty !== undefined && fields.certainty && !CERTAINTY.has(fields.certainty)) {
    warn(path, lines.certainty, "certainty",
      `\`certainty: ${fields.certainty}\` — expected measured | directly-reported | recalled | inferred`);
  }
  if (fields.dimensions_source !== undefined && fields.dimensions_source && !DIMENSIONS_SOURCE.has(fields.dimensions_source)) {
    warn(path, lines.dimensions_source, "dimensions-source",
      `\`dimensions_source: ${fields.dimensions_source}\` — expected declared | path | inferred`);
  }
  // The confidential hold (records.md: "When the words themselves must be kept —
  // but not here"): held material lives in this house's own storage and the
  // house keeps a marker. The marker's one machine-readable duty is saying
  // WHERE — a held marker with no locator names a gap nobody can follow.
  if (/^held\b/.test((fields.storage_class ?? "").trim()) && !(fields.locator ?? "").trim()) {
    warn(path, lines.storage_class, "held-locator",
      "`storage_class: held` with no `locator` — the marker exists so the gap has a name; say where in my storage the held material lives");
  }
  checkSensitivity(path, fields, lines);
}

function checkSensitivity(path, fields, lines) {
  const raw = (fields.sensitivity ?? "").trim();
  if (raw && !LEVELS.has(raw)) {
    const guess = readLegacySensitivity(raw);
    const suggestion = guess.level
      ? ` — reads as \`sensitivity: ${guess.level}\`${
          guess.compartments.length ? `, \`compartments: [${guess.compartments.join(", ")}]\`` : ""
        }${guess.flags.length ? `, \`flags: [${guess.flags.join(", ")}]\`` : ""}`
      : "";
    warn(path, lines.sensitivity, "sensitivity-vocabulary",
      `\`sensitivity: ${raw.slice(0, 48)}\` is not one of the fixed words — expected public | acquaintance | friend | circle-of-trust | confidant | self${suggestion}`);
  }
  for (const c of listField(fields.compartments)) {
    if (!COMPARTMENTS.has(c)) {
      warn(path, lines.compartments, "sensitivity-vocabulary",
        `\`compartments\` carries \`${c}\`, which is not in the fixed set — records.md carries the twelve; a finer detail belongs in the record's prose, not in a thirteenth compartment`);
    }
  }
  for (const f of listField(fields.flags)) {
    if (!FLAGS.has(f)) {
      warn(path, lines.flags, "sensitivity-vocabulary",
        `\`flags\` carries \`${f}\` — expected third-party | minor | confidential-duty; a flag raises the floor and nothing else belongs here`);
    }
  }
}

function checkRefsExist(path, fm, tracked) {
  // EVERY FIELD THAT NAMES A FILE, not the citation fields alone. A receipt
  // that lists what a pass created is the same claim as a citation and fails
  // the same way — worse, because it reads as a record of work done. The rule
  // in the contracts is written about the Afterword's receipt section; a
  // validator reads front matter, and the lie fits there just as well.
  for (const field of [
    "source_refs",
    "corrects",
    "corrected_by",
    "derived_records",
    "memories_touched",
  ]) {
    for (const ref of listField(fm.fields[field])) {
      if (!/[/.]/.test(ref)) continue; // a record_id or a word is not a path claim
      if (!/^[A-Za-z0-9._\-/]+$/.test(ref)) continue;
      const clean = ref.replace(/^\.\//, "");
      if (tracked.has(clean) || tracked.has(`${clean}.md`)) continue;
      warn(path, fm.lines[field], "ref-exists",
        `\`${field}\` names \`${ref}\`, which is not in this repository — a citation naming a document nobody saved reads as sourced and stops anybody looking`);
    }
  }
}

function checkDeadLinks(path, text, tracked) {
  const dir = path.includes("/") ? path.slice(0, path.lastIndexOf("/")) : "";
  let line = 0;
  for (const raw of text.split("\n")) {
    line += 1;
    for (const m of raw.matchAll(/\]\(([^)\s]+\.md)\)/g)) {
      const href = m[1];
      if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith("/") || href.startsWith("#")) continue;
      const parts = (dir ? dir.split("/") : []).concat(href.split("/"));
      const out = [];
      let escaped = false;
      for (const part of parts) {
        if (part === "" || part === ".") continue;
        if (part === "..") {
          if (out.length === 0) { escaped = true; break; }
          out.pop();
        } else out.push(part);
      }
      if (escaped) continue;
      const target = out.join("/");
      if (!tracked.has(target) && !tracked.has(href.replace(/^\.\//, ""))) {
        warn(path, line, "dead-link", `link target \`${href}\` is not in this repository`);
      }
    }
  }
}

function checkAfterwordContract(path, text, fm) {
  const inAfterwords = /^(afterwords|reads)\//.test(path);
  if (inAfterwords && !path.endsWith("README.md")) {
    for (const key of ["questions", "noticings"]) {
      if (fm && fm.fields[key] === undefined) {
        warn(path, 1, "afterword-keys",
          `an Afterword carries \`${key}:\` in its front matter even when empty — empty is a real answer, and a missing key is invisible to the controls at the foot of the page`);
      }
    }
    return;
  }
  // Nothing may cite an Afterword. It points at what to look at; it is never
  // support for a claim. The README and a path index may name the folder —
  // a record citing a dated Afterword is the thing the contract forbids.
  let line = 0;
  for (const raw of text.split("\n")) {
    line += 1;
    const m = /\((?:\.\.\/)*(?:afterwords|reads)\/(?!README)[^)\s]+\.md\)/.exec(raw);
    if (m) {
      warn(path, line, "cites-afterword",
        "this cites an Afterword — nothing may; cite the records it points at instead");
    }
  }
}

/**
 * Anything that can carry a picture says so, even when the answer is no.
 *
 * ONE OWNER FOR THIS RULE, across three folders. An Afterword, a letter and a
 * playlist all take `illustration_object:`, and the reason the key is required
 * is identical in all three, so the check is one function rather than a line
 * added to each folder's own check.
 *
 * ABSENT IS THE FAILURE; EMPTY IS THE ANSWER. `""` means somebody read the
 * telling and found no single object worth drawing — a finished pass with a
 * negative result. A missing key means nothing ran. The two are identical on
 * the page (both draw nothing), which is exactly why the file has to carry the
 * difference: without it, the only visible trace of a skipped step is a
 * picture that never appears, and a picture that never appears is also the
 * correct outcome most of the time.
 *
 * WARN, NEVER FAIL, and nothing backfills. Records written before this rule
 * have no key and will warn until somebody is in the file for another reason.
 * That standing warning is the ledger of how many are outstanding, which is
 * more useful than a sweep that would put a guess in every one of them.
 */
const ILLUSTRATABLE = /^(afterwords|reads|letters|music\/playlist-sources)\//;

function checkIllustrationKey(path, fm) {
  if (!fm || !ILLUSTRATABLE.test(path) || path.endsWith("README.md")) return;
  if (fm.fields.illustration_object !== undefined) return;
  warn(path, 1, "illustration-object",
    "no `illustration_object:` — the key is required even when there is no picture; " +
      'write `illustration_object: ""` to say the telling was read and holds no single object');
}

/**
 * A held marker must not carry the words it exists to keep out.
 *
 * The hold is location (records.md): the material lives in the house's own
 * storage, and the record here is a marker — what kind of thing, where it
 * lives, nothing verbatim. CI cannot read the storage to compare, so it
 * watches for the leak with a mechanical signature instead: quotation. A long
 * quoted span, or a long blockquote, inside a record stamped
 * `storage_class: held` is verbatim wearing formatting — the deterministic
 * slice of a semantic problem, warned on like everything else here.
 */
function checkConfidentialQuotes(path, text, fm) {
  if (!fm || !/^held\b/.test((fm.fields.storage_class ?? "").trim())) return;
  const LONG = 8;
  const words = (s) => s.trim().split(/\s+/).filter(Boolean).length;
  const fmEnd = text.startsWith("---") ? text.indexOf("\n---", 3) : -1;
  const bodyStart = fmEnd === -1 ? 0 : text.slice(0, fmEnd + 4).split("\n").length - 1;
  let line = 0;
  for (const raw of text.split("\n")) {
    line += 1;
    if (line <= bodyStart) continue;
    const block = /^\s*>\s+(.*)$/.exec(raw);
    const spans = [];
    if (block) spans.push(block[1]);
    for (const m of raw.matchAll(/["“]([^"”]{20,})["”]/g)) spans.push(m[1]);
    if (spans.some((s) => words(s) >= LONG)) {
      warn(path, line, "confidential-quote",
        "a held marker carries a long quotation — the words live in my storage and never here; keep the marker to what kind of thing is held, and where");
    }
  }
}

/** ---- whole-house checks: cheap, rare-fire, always on ---- */

function checkQuestionsHeadings(tracked, read) {
  if (!tracked.has("about-me/questions.md")) return;
  const seen = new Map();
  let line = 0;
  for (const raw of read("about-me/questions.md").split("\n")) {
    line += 1;
    const m = /^##\s+(.+?)\s*$/.exec(raw);
    if (!m) continue;
    const key = m[1].toLowerCase();
    if (seen.has(key)) {
      warn("about-me/questions.md", line, "duplicate-question",
        `"${m[1]}" already has a heading at line ${seen.get(key)} — a state question gains another dated line under the heading that is already there, never a second heading`);
    } else seen.set(key, line);
  }
}

function checkFollowUps(tracked, read) {
  if (!tracked.has("about-me/follow-ups.json")) return;
  try {
    const data = JSON.parse(read("about-me/follow-ups.json"));
    if (!Array.isArray(data)) throw new Error("not an array");
    for (const entry of data) {
      if (typeof entry?.topic !== "string" || typeof entry?.phrase !== "string") {
        warn("about-me/follow-ups.json", 1, "follow-ups-shape",
          "entries are `{ topic, phrase, sensitive, added }` — a malformed entry never reaches the home screen");
        break;
      }
    }
  } catch {
    warn("about-me/follow-ups.json", 1, "follow-ups-shape", "not valid JSON — the home screen reads this file");
  }
}

/**
 * A canonical file restating a date that another record owns, without linking it.
 *
 * WHY THIS IS THE CHECK AND NOT "DON'T REPEAT VALUES". A hand-readable store has to
 * repeat a date in prose — "we met on the twelfth" is how a sentence works, and
 * replacing it with a reference would ruin the file for the human and the model
 * that read it directly. What can be required is an ANCHOR: say the date
 * and link the record that owns it, and a correction becomes findable and complete
 * (`scripts/correct-fact.mjs` rewrites exactly the anchored ones). Unanchored is the
 * dangerous kind: nothing connects it to the fact it restates, so it is the mention
 * that survives the correction and quietly contradicts the record a year later.
 *
 * A COINCIDENCE IS A LEGITIMATE ANSWER, and the message says so. Two things can
 * share a date without being the same fact — a Strava ride and a life event, the
 * end of a date range and a birthday. This check cannot tell those apart and does
 * not try; it surfaces the pair and lets a person say "different thing" by doing
 * nothing. That is why it warns and why it is worth tolerating its false positives.
 *
 * ONLY DATES BEFORE THIS YEAR. A date inside a record's own lifetime is far more
 * often a provenance stamp — a note of when something was SAID — than a
 * restatement of when it happened, and warning on those would bury the real
 * findings under attributions of quotes.
 */
function checkOwnedDates(tracked, read) {
  const OWNED = ["date", "date_of_birth", "clean_date"];
  const EVIDENCE = /^(sources\/|drawer\/|afterwords\/|letters\/)/;
  const owners = new Map();
  for (const path of tracked) {
    if (!path.startsWith("timeline/") && !path.startsWith("people/")) continue;
    if (!path.endsWith(".md")) continue;
    let text;
    try { text = read(path); } catch { continue; }
    const fm = parseFrontMatter(text);
    if (!fm) continue;
    for (const field of OWNED) {
      const value = (fm.fields[field] ?? "").replace(/^["']|["']$/g, "").trim();
      if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || owners.has(value)) continue;
      owners.set(value, {
        path,
        id: fm.fields.record_id,
        slug: path.split("/").pop().replace(/\.md$/, ""),
      });
    }
  }

  for (const path of tracked) {
    // `app/docs/` is writing ABOUT this store, not the store restating itself. A
    // design doc quoting a date as an example is not drift and cannot be corrected
    // by the same sweep, so it is out of scope for this check specifically — unlike
    // the sensitivity vocabulary, which those files genuinely do carry.
    if (!path.endsWith(".md") || EVIDENCE.test(path) || SKIP.test(path)) continue;
    if (path.startsWith("app/")) continue;
    let text;
    try { text = read(path); } catch { continue; }
    for (const [date, owner] of owners) {
      if (owner.path === path) continue;
      // THE CURRENT YEAR, COMPUTED. This was a literal 2026 for one afternoon, which
      // is a check that quietly stops working in January: the comment above says
      // "inside a record's own lifetime" and only a moving year means that.
      if (Number(date.slice(0, 4)) >= new Date().getFullYear()) continue;
      if (!text.includes(date)) continue;
      if (text.includes(owner.slug)) continue;
      if (owner.id && text.includes(owner.id)) continue;
      const line = text.split("\n").findIndex((l) => l.includes(date)) + 1;
      warn(path, line || 1, "unanchored-date",
        `restates \`${date}\`, which [\`${owner.slug}\`](${owner.path}) owns, without linking it — link the record that owns the date so a correction reaches this line too, or ignore this if the two only happen to share a date`);
    }
  }
}

function checkBytesInRepo(paths) {
  // The one finding here that cannot be fixed after the fact.
  //
  // Everything else this script warns about is a record that can be edited. A
  // committed photograph cannot: git keeps the blob in every clone forever, so
  // deleting the file later removes it from view and not from the weight. The
  // warning is still worth printing at the earliest moment anyone sees it,
  // because the SECOND mistake is the expensive one — replacing the 3 MB
  // original with a 200 KB copy at the same path, which leaves the 3 MB in the
  // history and adds 200 KB on top. A real house doubled that way and looked
  // tidier for it.
  //
  // The ceiling is the thumbnail ceiling the contracts already name: where a
  // picture IS the record rather than a container for text, a small one may be
  // committed. Above that, it belongs in connected storage.
  const CEILING = 200 * 1024;
  const MEDIA = /\.(jpe?g|png|gif|webp|heic|heif|tiff?|pdf|mp3|m4a|wav|ogg|mp4|mov|webm|zip)$/i;
  for (const path of paths) {
    // Machinery, not records. A house's own scripts and workflows are not the
    // thing this rule is about, and the founder's repository additionally
    // carries the web app, whose art has to be in the repository to be served.
    if (SKIP.test(path)) continue;
    if (!MEDIA.test(path)) continue;
    let size;
    try {
      size = statSync(path).size;
    } catch {
      continue;
    }
    if (size <= CEILING) continue;
    const kb = Math.round(size / 1024);
    warn(
      path,
      null,
      "bytes-in-repo",
      `${kb} KB of file is committed here, and git keeps it in every clone forever — ` +
        "deleting it later frees nothing. Put it in connected storage and keep the " +
        "locator and the hash in a record instead. Do NOT shrink it in place: that " +
        "leaves the original in the history and adds the copy on top.",
    );
  }
}

/**
 * Every name each person record answers to, and who answers to what.
 *
 * ONE PLACE, because two checks need it and they must not disagree about what
 * a name is. `build-derived.mjs` resolves `related_people` through the same
 * four fields when it builds the graph, so a name this cannot see is a link
 * that silently does not exist.
 */
function peopleForms(tracked, read) {
  const people = [];
  const byForm = new Map();
  for (const path of tracked) {
    if (!path.startsWith("people/") || !path.endsWith(".md") || path === "people/README.md") continue;
    const fm = parseFrontMatter(read(path));
    const slugName = path.slice("people/".length).replace(/\.md$/, "").split("-").join(" ");
    const title = (fm?.fields.title ?? "").trim();
    const name = title.replace(/\s*\([^)]*\)\s*$/, "").trim() || slugName;
    const forms = new Map();
    const claim = (value, field) => {
      const v = String(value ?? "").trim();
      if (v) forms.set(v.toLowerCase(), { value: v, field });
    };
    claim(name, "title");
    claim(title, "title");
    claim(fm?.fields.goes_by, "goes_by");
    claim(fm?.fields.full_name, "full_name");
    for (const alias of listField(fm?.fields.aliases)) claim(alias, "aliases");
    people.push({ path, name, norm: name.toLowerCase().replace(/[^a-z ]/g, "").trim(), forms });
    for (const [key, held] of forms) {
      if (!byForm.has(key)) byForm.set(key, []);
      byForm.get(key).push({ path, ...held });
    }
  }
  return { people, byForm };
}

/**
 * A name in `related_people` that resolves to nobody, or to two people.
 *
 * WHY THIS IS WORTH A CHECK. `people/README.md` tells every house that names
 * are the key — that a record naming somebody by an old short name *"goes on
 * finding them"*, and that a name two people answer to *"is dropped and
 * reported rather than guessed"*. Until this check existed, only the first half
 * was true: the link was dropped, and nothing anywhere reported it. A name
 * could point at nobody for years and the only symptom was an absence — a
 * person missing from a graph nobody had counted. Twenty-six of them were found
 * in one house that way, every one passing every other check.
 *
 * IT ASKS EXACTLY WHAT THE GENERATOR ASKS. `build-derived.mjs` resolves a name
 * with ONE lookup: the string as written, lowercased, against title, title with
 * its gloss, `full_name`, `goes_by` and every alias. No stripping, no first-name
 * guess. So this looks it up the same single way — because a validator that is
 * more forgiving than the thing it validates blesses links that are already in
 * the bin, which is the exact shape of the failure it was built to catch.
 *
 * THE LOOSER FORMS EARN THEIR KEEP IN THE MESSAGE, NOT THE VERDICT. Once a name
 * has failed, the gloss-stripped form and the first-name index are asked who it
 * probably meant, and the answer goes in the warning. Naming the fix is most of
 * the value: "no record answers to this" sends somebody reading the roster,
 * "did you mean Ana Reyes?" is already done.
 */
function checkPeopleResolve(tracked, read, inScope) {
  const { people, byForm } = peopleForms(tracked, read);
  if (people.length === 0) return;

  const firsts = new Map();
  for (const person of people) {
    const first = person.name.split(" ")[0].toLowerCase();
    if (!firsts.has(first)) firsts.set(first, new Set());
    firsts.get(first).add(person.name);
  }
  const owners = (key) => [...new Set((byForm.get(key) ?? []).map((h) => h.path))];

  for (const path of tracked) {
    if (!path.endsWith(".md") || path.startsWith("people/") || SKIP.test(path) || !inScope(path)) continue;
    let fm;
    try {
      fm = parseFrontMatter(read(path));
    } catch {
      continue;
    }
    if (!fm) continue;
    // A PORTRAIT IS EXEMPT. A record carrying `subject_is_third_party: true` is
    // an account of somebody who does not live in this house, and the people in
    // it have no records here by design. Held to this rule it fails on every
    // name it carries, and the only way to satisfy it would be to give a
    // stranger a record — which `people/README.md` asks nobody to do.
    if ((fm.fields.subject_is_third_party ?? "").trim() === "true") continue;

    for (const declared of listField(fm.fields.related_people)) {
      if (!declared) continue;
      const held = owners(declared.toLowerCase());
      if (held.length === 1) continue;
      if (held.length > 1) {
        warn(path, 1, "ambiguous-person",
          `related_people names "${declared}", and ${held.length} records answer to it — say the full name when a name is shared, or the link is dropped rather than guessed`);
        continue;
      }
      // Nobody. Say who it probably meant, using the forms the resolver does
      // not try: the name without whatever gloss this record added, then the
      // first name on its own.
      const bare = declared.replace(/\s*\(.*$/, "").trim();
      const near = bare && bare.toLowerCase() !== declared.toLowerCase()
        ? owners(bare.toLowerCase()).map((p) => p)
        : [];
      const shared = near.length === 0 && !bare.includes(" ")
        ? [...(firsts.get(bare.toLowerCase()) ?? [])]
        : [];
      const hint =
        near.length === 1 ? ` — \`${near[0]}\` answers to "${bare}", so drop the parenthetical and it resolves`
        : shared.length === 1 ? ` — did you mean ${shared[0]}?`
        : shared.length > 1 ? ` — ${shared.length} people share that first name; say which`
        : "";
      warn(path, 1, "unknown-person",
        `related_people names "${declared}", and no record in \`people/\` answers to it — the name is the key, so a name nobody holds is a link that silently does not exist${hint}`);
    }
  }
}

function checkPersonCollisions(tracked, read) {
  const { people, byForm } = peopleForms(tracked, read);

  // EVERY NAME A RECORD CLAIMS BESIDES ITS TITLE, because the title is no
  // longer the only one. `build-derived.mjs` resolves `related_people` through
  // `goes_by`, `full_name` and `aliases` too, and — this is the part that needs
  // watching — it lets a `goes_by` OUTRANK a shared first name when counting
  // mentions. That is right: where three people share a first name, one of
  // them is who the house means, and their record says so.
  //
  // It is right only if exactly one record says so. Two records claiming the
  // same short name silently hand every mention of it to whichever the
  // generator reaches first, and nothing else in a house would ever show it.
  // Titles are left to the name comparison below, which says something more
  // useful about two records for one person than "both answer to this".
  const answersTo = new Map();
  for (const [key, claims] of byForm) {
    const declared = claims.filter((c) => c.field !== "title");
    if (declared.length) answersTo.set(key, declared);
  }

  for (const [, claims] of answersTo) {
    const paths = [...new Set(claims.map((c) => c.path))];
    if (paths.length < 2) continue;
    const said = claims[0].value;
    // A `goes_by` collision is the sharp one: that field means "nothing else
    // answers to this", so two of them is a contradiction rather than an
    // overlap. Shared aliases are reported the same way and for the same
    // reason — either way a bare mention cannot be attributed.
    const sharp = claims.filter((c) => c.field === "goes_by").length > 1;
    for (const path of paths.slice(1)) {
      warn(path, 1, "person-collision",
        sharp
          ? `\`goes_by: ${said}\` is also declared by \`${paths[0]}\` — that field means nothing else answers to this name, so two of them hand every bare mention of it to whichever record is read first`
          : `answers to "${said}", and so does \`${paths[0]}\` — a name two people share cannot resolve to either, so anything naming them that way is dropped rather than guessed`);
    }
  }
  for (let i = 0; i < people.length; i += 1) {
    for (let j = i + 1; j < people.length; j += 1) {
      const a = people[i], b = people[j];
      if (a.norm && a.norm === b.norm) {
        warn(b.path, 1, "person-collision",
          `"${b.name}" also has a record at \`${a.path}\` — a new name is not a new person, and two records for one person means every later retrieval reads half of them`);
      } else if (
        a.norm.split(" ")[0] === b.norm.split(" ")[0] &&
        (a.norm.split(" ").length === 1) !== (b.norm.split(" ").length === 1)
      ) {
        const bare = a.norm.split(" ").length === 1 ? a : b;
        const full = bare === a ? b : a;
        warn(bare.path, 1, "person-collision",
          `first-name-only record while \`${full.path}\` shares that first name — say the full name when a first name is shared, or two people collapse into one silently`);
      }
    }
  }
}

/**
 * An older issue of a reissued record that still says it is current.
 *
 * Letters, Afterwords and playlists all reissue the same way: a new file beside
 * the old, the same `record_id`, `version: 2`, every version kept. The shelf
 * groups by the id and shows the newest — and until 2026-09-06 that was the
 * only thing that did. The map listed both issues; the search index held both;
 * a phrase that only the old issue used came back pointing at the old issue.
 *
 * `lifecycle_status: superseded` on the issue being replaced is what takes it
 * off the map and out of the index (records.md carries the two record-level
 * words). This warns once per chain when a non-head member lacks the mark,
 * naming the head, so the fix is one line in one file. The head is the highest
 * `version`, then the latest `created_at` (or `date`, or the file name's date),
 * then the later path — the same order every shelf sorts by.
 */
function checkSupersededMarks(tracked, read) {
  const SHELVES = /^(afterwords|reads|letters|music\/playlist-sources)\//;
  const chains = new Map();
  for (const path of tracked) {
    if (!SHELVES.test(path) || !path.endsWith(".md") || path.endsWith("README.md")) continue;
    let text;
    try { text = read(path); } catch { continue; }
    const fm = parseFrontMatter(text);
    const id = fm?.fields.record_id;
    if (!id) continue;
    const version = Math.max(1, Number.parseInt(fm.fields.version ?? "1", 10) || 1);
    const dated = fm.fields.created_at || fm.fields.date || (/(\d{4}-\d{2}-\d{2})/.exec(path) ?? [])[1] || "";
    const status = (fm.fields.lifecycle_status ?? "").trim();
    chains.set(id, [...(chains.get(id) ?? []), { path, version, dated, status, line: fm.lines.record_id }]);
  }
  for (const [id, members] of chains) {
    if (members.length < 2) continue;
    // Same id at the same version is a collision, not a chain — the map keeps
    // both, and this check has nothing to say about which is right.
    const top = Math.max(...members.map((m) => m.version));
    if (members.filter((m) => m.version === top).length > 1) continue;
    const head = [...members].sort((a, b) =>
      b.version - a.version || b.dated.localeCompare(a.dated) || b.path.localeCompare(a.path))[0];
    const unmarked = members.filter((m) => m !== head && m.status !== "superseded");
    if (unmarked.length === 0) continue;
    const m = unmarked[0];
    warn(m.path, m.line, "superseded-not-marked",
      `shares \`record_id: ${id}\` with \`${head.path}\` (version ${head.version}) and is not marked \`lifecycle_status: superseded\`` +
        (unmarked.length > 1 ? ` — ${unmarked.length - 1} more in this chain` : "") +
        " — the map and the search index read the mark; set it on the issue being replaced, in the same commit that reissues it");
  }
}

/** ---- run ---- */

const args = process.argv.slice(2);
let changed = null;
const listAt = args.indexOf("--changed");
if (listAt !== -1 && args[listAt + 1]) {
  changed = new Set(
    readFileSync(args[listAt + 1], "utf8").split("\n").map((l) => l.trim()).filter(Boolean),
  );
}

const trackedList = trackedFiles();
const tracked = new Set(trackedList);
const read = (path) => readFileSync(path, "utf8");

const perFile = trackedList.filter(
  (p) => p.endsWith(".md") && !SKIP.test(p) && (changed === null || changed.has(p)),
);
for (const path of perFile) {
  let text;
  try {
    text = read(path);
  } catch {
    continue;
  }
  const fm = parseFrontMatter(text);
  if (fm) {
    checkFrontMatter(path, fm);
    checkRefsExist(path, fm, tracked);
  }
  checkDeadLinks(path, text, tracked);
  checkAfterwordContract(path, text, fm);
  checkIllustrationKey(path, fm);
  checkConfidentialQuotes(path, text, fm);
}

checkBytesInRepo(
  trackedList.filter((p) => changed === null || changed.has(p)),
);
checkQuestionsHeadings(tracked, read);
checkFollowUps(tracked, read);
checkPersonCollisions(tracked, read);
// The roster is read whole and only the files in scope are judged — the
// ratchet is about which records get reported on, never about which people
// exist, and a half-read roster would invent unknowns.
checkPeopleResolve(tracked, read, (p) => changed === null || changed.has(p));
checkOwnedDates(tracked, read);
checkSupersededMarks(tracked, read);

/** ---- report: annotations in Actions, plain lines anywhere, never a failure ---- */

const byCheck = new Map();
for (const f of findings) byCheck.set(f.check, [...(byCheck.get(f.check) ?? []), f]);

const inActions = process.env.GITHUB_ACTIONS === "true";
let shown = 0;
for (const [check, list] of byCheck) {
  for (const f of list.slice(0, MAX_PER_CHECK)) {
    shown += 1;
    if (inActions) {
      const at = f.line ? `,line=${f.line}` : "";
      console.log(`::warning file=${f.path}${at},title=${check}::${f.message}`);
    } else {
      console.log(`⚠ ${f.path}${f.line ? `:${f.line}` : ""} — ${f.message}`);
    }
  }
  if (list.length > MAX_PER_CHECK) {
    console.log(
      inActions
        ? `::notice title=${check}::${list.length - MAX_PER_CHECK} more like this — run \`node scripts/validate-records.mjs\` locally for the full list`
        : `… ${list.length - MAX_PER_CHECK} more ${check} findings`,
    );
  }
}

if (process.env.GITHUB_STEP_SUMMARY) {
  const lines = [
    findings.length === 0
      ? "### Records check: nothing to mention\n"
      : `### Records check: ${findings.length} thing${findings.length === 1 ? "" : "s"} worth a look\n`,
  ];
  for (const [check, list] of byCheck) {
    lines.push(`- **${check}** — ${list.length}`);
  }
  appendFileSync(process.env.GITHUB_STEP_SUMMARY, lines.join("\n") + "\n");
}

console.log(
  findings.length === 0
    ? "records check: nothing to mention"
    : `records check: ${findings.length} finding(s), ${shown} shown — warnings only, nothing is blocked`,
);
process.exit(0);
