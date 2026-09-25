<!-- OF-ME:BEGIN managed — this section is regenerated when you update your tuning. Edit below the END marker instead. -->
# The shape of a record — the write contract

Every record in my home opens with front matter saying what it is. AGENTS.md
carries the shape and the safety rules; this file is what a writer keeps open
while actually filing — the fixed vocabulary, the craft, and how sharing is
decided.

```
---
title: <what a person would call this>
type: person | event | story | note | source
date: YYYY-MM-DD
certainty: measured | directly-reported | recalled | inferred
sensitive: true | false
people: [Name, Other Name]
source: <how this arrived — one fixed word, detail in parentheses>
---
```

## `source` is how it arrived, and the words are fixed

Pick one, and put any detail in parentheses after it — `private-notes (Apple Notes
export)`, `conversation (with you, <the date>)`:

`self-declared` (I answered a direct question) · `conversation` (I said it to you)
· `authored-long-form` (my own writing, meant for readers) · `private-notes` (notes
to myself) · `handwritten-archive` (scanned paper) · `correspondence` (letters and
cards) · `contributor` (someone else's account of me) · `device-telemetry`
(measured, not narrated) · `workplace-artifact` · `third-party-model` (an AI's
synthesis about me) · `ai-chat` (a conversation between me and an AI, archived
whole — the two-way transcript is itself the artifact) · `system-inventory` (a
machine listing of my own things) · `published-reference` (published work, not
about me)

**`ai-chat` is not `conversation`, and the difference decides how the
Afterword reads it.** `conversation` means the material arrived by me saying it
— the transport. `ai-chat` means the archived chat IS the thing being kept:
an AI was answering me the whole time, so I have already lived the in-the-moment
analysis. The Afterword contract treats those sources differently — see
[what my guide writes back](afterwords/README.md) — which only works if the
archive is stamped when it is filed. **Whatever archives a chat writes
`ai-chat`, in `intake_channel` or `source_kind`, with detail in
parentheses as usual — `ai-chat (ChatGPT, instant chat)`.**

**Say the nature of the evidence, never the transport.** "upload" tells you a file
moved; it does not tell you whether it holds a diagnosis or a grocery list.

**The fixed words are the entire point.** Left free, this field fills with three
spellings of the same fact and none of them can be added together — which is exactly
what happened in the world this scaffold comes from: the same fact recorded three ways
by three different write paths, so the origin of a thousand records counted for
nothing. **A record with no `source` is a data point no one can weigh later.** These
words are what eventually let my home say something no other software can: *you told
me you cared most about these things, and your notes, your stories and the people who
know you each said something different.*

## `lifecycle_status` — where a record is in its own life

Most records are `active` and never say otherwise. Two more words are read by the
machinery, and only these two:

- **`archived`** — kept, and out of the map, the index and the counts. The file still
  opens at its path; it just stops turning up. For a record whose day has passed but
  whose words are worth having.
- **`superseded`** — an older issue of something reissued under the same
  `record_id` (a letter, an Afterword, a playlist). The newest issue speaks for the
  chain; set this on the issue being replaced, in the same commit that reissues it.

**Neither is a deletion**, and neither is decided quietly: a mark is one line in the
record, written where the next reader sees it, and taken back by editing that line.
On a person's file this field describes the relationship — `historical`, `deceased`,
`lost-contact` — and nothing reads those words as anything but what they say.

## Writing about the worst thing that happened to me

AGENTS.md carries the rules — apparatus in the front matter, never a table of how
somebody was hurt, never my own faults set beside a person who hurt me. This is the
craft behind them, and the incident that produced them, because a rule without its
failure gets simplified away by the next person who reads it.

**The incident.** I gave an early, frightening memory involving a parent. It came back
to me correctly sourced and correctly labelled, and laid out as evidence: a comparison
table of the occasions that person had frightened me, a note about whose account this
was inside every paragraph, and a line connecting a word I used about them to a word I
had once written about myself. **Every single move followed a rule.** Read together they
were a case file about my childhood, and what I said was that it read like a man
confiding in an algorithm. Nothing in it was inaccurate. That was the problem.

**Why the inventory rule is absolute.** My recovery work and my therapy notes are in
here because I was willing to write them down, for my own benefit. Noticing that a word
I once used about myself is the word I now use about somebody who hurt me is easy to
spot, impossible to unread, and cruel however carefully it is hedged. The hedging makes
it worse, not better: it shows the thought was considered and written anyway.

**Why prose and not a table.** A table is a thing you do to data. Three rows and a
column header turn three occasions into a dataset, and a dataset is something being
analysed rather than something that happened to a person. The same three facts in
sentences carry identical information and stay a life. This is not a style preference —
it is the difference between a record I can bear to open and one I cannot.

**And meet it before you file it.** The first line of the record is the one that decides
which of the two it is. If the opening sentence of a record about the worst thing that
ever happened to me would also serve as the opening line of a case file, write it again.

## When I tell you something true but the evidence can't live here

Some of what I tell you is worth keeping while the **thing I learned it from** is not
mine to store — a recording of other people, an employer's confidential material, a
document I only had the right to read. When I say a source is not appropriate for this
house, the finding does not die with it. **Keep the finding; do not keep the evidence;
and say so on the record.**

Such a record carries `epistemic_status: directly-reported` — because I am the one
attesting it — plus two fields:

```
evidence_retention: not-retained-by-owner-instruction
provenance_note: <one line: what class of source this came from, and why it isn't here>
```

Three rules follow, and none of them are negotiable:

- **Never reconstruct the source.** Do not quote it from memory in a later session, do
  not re-import it because it would help, and do not cite it as though it were on disk.
  If a claim needs the source to stand up, the claim is written wrong — rewrite it as
  something I attested.
- **Findings, never verbatim.** A conclusion about a person or a situation is mine to
  hold. A transcript of what somebody said, attributed and dated, is a different object
  carrying a different risk, and it is the object I asked you not to keep. Paraphrase;
  never preserve a quote to make the paraphrase feel better sourced.
- **Weigh it honestly afterwards.** `directly-reported` is rank 4, not rank 5. Without
  the artifact it cannot be re-checked, so when it later conflicts with something
  measured, the measured thing wins — and if I ask how you know, the answer is "you
  told me on <date>", never a citation.

**This costs the audit trail, and it is the right trade.** It is what keeps the record
usable at all for the parts of my life where the evidence belongs to somebody else.

## When the words themselves must be kept — but not here

The section above is for evidence I should not hold at all. This is its complement:
**I want the exact words kept, and they are confidential.** The mechanism is
location, and location is the whole of it: **held material lives in my own
storage and never enters my home.** Not committed, not quoted, not summarized in
detail. There is no special id scheme and no pointer field — being in my storage
and not in my home IS the hold. AGENTS.md carries the trigger ("this is
confidential"); this is the mechanics.

**Where held things live.** A held recording lands in `audio/held/` in my
storage — the transcript beside its audio, held text beside those, all of it
flat and named the same way as everything else. One room, one level, so a
person can see what is in it without opening anything.

**The record in my home is a marker, not a record of what was said.** A hold
removes the words, never the fact — a conversation that leaves no trace here is
one this house will later deny happened, and an answer built on that denial is
a guess dressed as knowledge. So the shape is filed like any record, scrubbed
exactly as my rules already require, carrying:

```
storage_class: held
record_id: held-9f21ab03
locator: <where in my storage it lives — e.g. audio/held/held-9f21ab03.md>
```

with `date` and whatever context is safe in prose — what kind of thing it was,
no more. The `locator` is a path in my own storage, never a share
link: a link is a credential, and the identifiers rule already bans it.

**And no title, anywhere.** Not in the front matter, not as a heading, and not
in the filename — at either end. The marker is named for its minted id and so is
the file in my storage, because the `locator` names that file and a readable
name there is a readable name here. The title lives inside the held file, in my
own storage, where the words already are.

The reason is that the alternative is a judgement call, made once, permanently:
"a plain, non-revealing title" sounds safe and is not. It is confidential
*because of what it is about*, so the safe title and the useful title are the
same string, and whoever writes it is choosing under pressure to be helpful.
An id is minted from randomness and cannot be talked into saying anything.

Four rules, none negotiable:

- **The marker obeys every scrubbing rule as if it will be read by everyone who
  ever reads my home** — because it will. A hold is where the words go, never a
  licence to loosen what stays. When in doubt, the marker carries less.
- **Held material is not a source.** Nothing catalogues the `held/` folder,
  nothing archives it, and its words are never read back into a record — not
  partially, not later. Open it only when the task in front of us genuinely
  needs the words and I have given you storage access in this conversation, and
  quote it onward to nobody without me.
- **Absence from my home is the mechanism, not a defect.** Never report a held
  thing as missing or nonexistent because it is not in my home — that is the
  hold working. The marker says where it lives; my storage is where to look,
  and only with my say-so.
- **Held material that is gone from my storage was deleted on purpose.** That is
  the design: removing the one copy removes the words everywhere, and the
  marker quietly stands. Treat the absence as my decision, never as damage — do
  not reconstruct the words from memory, and do not ask me to re-supply them.

The `sensitivity` fields on the marker still apply — a hold usually rides with
`flags: [third-party]` or `confidential-duty`, and `sensitivity: self` is the
usual floor: it goes nowhere, ever, without me.

**The marker is rich in its keys and poor in its prose.** Retrieval runs on the
structured fields, so those carry the routing — the date, what kind of thing it
was, `compartments`, `dimensions`, `people`, the locator. The prose says what
KIND of thing is held and never the subject. That is what lets a later reader
know there is something here without learning what it was.

**`people` takes who the held thing was WITH, never who it was ABOUT.** Someone
in the room belongs there — leave them out and a question about them silently
omits that anything exists, which is the failure this whole section is for.
Someone the material merely concerns does not belong there: their name beside a
hold is itself a disclosure, and the third-party rule already governs it.

**Where a tool exists, use it.** `keep_out` performs both halves in one act —
the words to my storage, the marker here — so a hold cannot leave a file in my
storage that nothing in my home points at. Where no such tool exists, write
nothing of it anywhere, say so plainly, and hand the words back for me to
place. A hold you cannot perform is not one you may approximate, and a marker
owed out loud beats a gap nobody can see.

## References arrive on a fixed ladder

Whenever you reach outside my life for a reference — in conversation, an
Afterword, a letter, a playlist's reasons, a reading — how it arrives is law,
not a setting.
The dollar values are a quiz board's: a $100 reference is one the whole table
gets, a $500 is the deep cut. **The difference between readers is not
intelligence — it is what a life has had time for**, and the ladder closes
that gap:

| Depth | Minimum hand |
|---|---|
| $100–$200 | **cold** — dropped in, unelaborated, moved past. The catch is certain, so a footnote would be an insult. |
| $300 | **mixed hand** — the catch made likely without visible teaching, method rotating: seeded before the name, carried by the sentence's own action, or sparingly one folded-in clause. Never the same trick twice running; an explanation bolted on after the name grates fastest. A miss must leave the sentence whole. |
| $400–$500 | **walked-through** — a short setup before the reference does any work, or it is not used at all. |

**The ladder is a floor, never a ceiling.** More hand than the rung requires is
always allowed — but only as a telling that carries an angle. A walk that
delivers a definition is worse than the cold drop it replaced: an angle is new
even when the reference isn't, and a definition grates at every depth. A
smaller or faster model hugs the floor and trusts the ladder rather than its
own walks.

**And the floor can be earned downward.** At first contact it is universal.
When I demonstrably catch cold cuts above my floor — I riff back, I build on
the reference, repeatedly — the hand may thin at that altitude, the way
footnotes fall away between friends. Three rules keep that honest: it runs on
**observed catches, never assumptions** (below roughly a dozen, it is noise);
one bounced reference resets the altitude; and it is **never announced** — a
graduation ceremony is a score, and nothing here scores me. Observing catches
is notebook-class observation, so **where my notebook dial is off, the floor is
permanent.** And the descent is **mine alone**: anything addressed to someone
else — a letter, a playlist made for them — runs at the universal floor, always.
Nobody consented to having their catches watched, and the descent is a
relationship with me, not a property of the writing.

**Rare, and varied — like a person, not a bit.** One reference in every few
artifacts, not one per artifact; most things I say earn none, and that is the
resting state rather than a failure. And when one does land, vary everything —
the well it comes from, the rung it sits on, the method that delivers it. The
same well twice running, or a reference in every reply, stops being a gift and
becomes a party trick about my life; in human company, variation is how you can
tell someone is talking *with* you and not doing their material.

This was calibrated live in the world this scaffold comes from: its first
holder declared himself cold-at-any-depth, moved rung after rung across four
tastings, deleted the dials once the ladder made the whole board followable —
and then asked what total forgiveness costs. The earned descent is the answer:
forgiving the way a new friendship is, and not required to stay that way.

## A reading is a bigger claim, and it carries more duties

Some of what is worth keeping about me is not a fact but a shape — how I grade
shortfall, what I protect without noticing, what I reach for under pressure. You
may propose one **only if my sensitivity preferences turn the notebook dial on**;
done honestly it is among the most valuable things this record can hold, and it
is held to more than the ordinary contract:

- **Cross-domain evidence.** A pattern seen in one arena of my life is context,
  not character. A reading needs dated, cited instances from more than one.
- **Counterevidence in the same file.** Where it might be wrong, what would break
  it, and whether it flatters me — a reading that compliments its subject gets
  the most suspicion, written down rather than assumed.
- **Outside frames are lenses, never evidence.** History, philosophy, the arts
  may *name* the shape and give it company; they never count toward it. My
  record is the only witness. A frame I supply myself is different — that is
  evidence of how I see it, and the reading should say so. And a frame arrives
  on the fixed ladder above — with [my register](register.md) still deciding
  whether references happen at all, and from which wells.
- **`proposed` until I say otherwise.** I can endorse it — say so, dated, on
  the record — correct it, or erase it. Endorsed is still a working
  interpretation, *as of* a date: never a verdict, never a trait list, and
  nothing may cite it as support for a claim about me.

A reading is its own file in `about-me/`, titled as what it reads. Nothing in
this section relaxes "never promote a day into a disposition" — it is the
disciplined path through it.

## Use my words, not a vocabulary I never use

If I give you a list of terms to work from — virtues, values, principles, whatever a
tradition calls them — treat it as a candidate list, not permission to speak. Any word
on it that appears **nowhere in anything I have written** is a word I do not use, and
putting it in my mouth is how you tell me you are working from a template instead of
from me. It can still help you find things; it does not get said back to me unless I
say it first. Cheapest possible check, and the failure it prevents is the one where I
close the laptop.

## Four more things worth catching in the same pass

They cost nothing while you have the material open and can only be recovered later by
re-reading all of it:

- **How much it mattered** — which is not how much I wrote about it. Whatever I
  imported most of will always look most important, and that is a fact about the
  import.
- **Which chapter of my life it belongs to**, in my words rather than the year. I
  remember in eras — "before we moved", "the bad year", "when the kids were small" —
  and you cannot work those out from dates afterwards.
- **What state I was in.** Hadn't slept. Sick that month. Newly bereaved. Three hours
  into something hard. This is the evidence that keeps one bad day from being read as
  my character, and without it you cannot tell the difference.
- **Whether it was the first time or again.** Only visible to someone looking across
  my whole record, so it has to be noticed while you are.

## What a file in my storage is called

Bytes never live in my house, so a file's NAME is the only thing a person
browsing my storage has to go on — and the only thing a model retrieving from it
can match against. One system, and the name carries it:

```
<room>-<kind>-<who>-<what it is about>[-YYYY-MM-DD][-HH-MM][-anything useful]
```

**Five flat rooms** — `audio/`, `photos/`, `video/`, `scans/`, `other/` —
and everything a folder used to say lives in the name instead. A folder per
thing is a good filesystem and a bad index: you cannot see what you have
without opening all of it.

**Which room takes what is decided by the file, not by its history.** A picture
goes to `photos/`, a recording to `audio/`, a video to `video/`. **Anything
that is a page goes to `scans/` — a PDF always, whether or not it was ever on
paper.** A spec exported straight from an editor and a letter photographed on a
kitchen table are the same thing to whoever opens them: a document you read. And
`other/` is for what nobody reads that way — a spreadsheet, a data export, a
script, a config, a device dump.

**So the test is what you would DO with the file.** Not how it was made: whether
something was scanned or born digital is invisible a year later and answers no
question anybody asks. "Can I read this?" and "does a machine read this?" are
answerable by looking, and they put the same file in the same room every time.

**`<kind>` is provenance for audio and what-it-is for everything else.** With a
recording, who held the microphone IS the kind — `dictation` when it is mine,
`contribution` when somebody recorded it for me. With a scan, `letter`,
`card`, `literature` or `document` tells a browser something that "upload"
never would.

**What it is comes before when it happened.** My storage already sorts by date
from its own metadata, for free. Sorting by name is only worth having if it
groups by KIND — every letter together, every page of one notebook together.

**Leave the date off when you don't know it.** The day you happened to file
something is not the day it happened; a 1998 pamphlet stamped 2026 is a wrong
fact, and the rule against inventing one already covers it. The clock is for
recordings only, where two sittings in a day are genuinely different things.

**The last slot is for anything a machine or a later reader will want back** — a
camera number, a page, a part. It is not decoration: where a set of scans came
off one camera roll, that sequence is often the only evidence that a page is
MISSING, and prose names destroy it.

## Rename it the first time you touch it

**Always, and without asking me.** A file that arrived from a camera, a phone or
an export carries a name nobody chose, and the moment before anything cites that
name is the only moment renaming is free — afterwards it costs a rewrite of every
record that names it. So this is not a judgement call and not something to offer:
if you are cataloguing a file whose name is not in the grammar above, it gets
renamed in the same pass.

## Point at a file by its id, not by where it sits

A name and a folder are how *I* find a file. Neither is how a RECORD should find
it. Storage gets reorganised — a folder renamed, two rooms consolidated, a
hundred scans flattened out of a subfolder somebody made by hand — and every
record citing a path goes stale silently. The file is fine. The record now
points at nothing, and nothing tells anybody.

**The id survives all of it.** Moving a file does not change its id, and neither
does renaming it. So a locator leads with the id and carries the path second, as
a convenience for me:

```
locator: <room>/<file name>  (id: 1abc…)
```

**Where a record identifies something BY its file name** — a register, a page
sequence, a set of scans off one camera roll — **keep the old name beside the new
one when it changes.** A rename is cheap. A citation that no longer resolves is a
hole in the evidence, and four records citing the same `IMG_0666` do not all get
fixed by somebody remembering to.

**This is the rule that pays for itself later.** Naming a file on arrival is
free. Renaming it after something cites the name costs a rewrite of everything
that cites it — and the reorganisation nobody got round to is always the one
that ends up being done under pressure.

## Writing a photograph's caption: tell it, don't inventory it

**Narrate the scene the way you would tell somebody about it after dinner.** Who
is in it, what is happening, where, and — where you can honestly guess — why it
was worth taking. That is a caption. A sweep of everything visible is not: nobody
needs the pattern on the curtains, the make of the chair, or a note that the
resolution is low, and a paragraph of those buries the one sentence that says
what the picture IS.

**Keep it to a couple of sentences.** The details that belong are the ones a
person would actually say out loud, and the test is whether the sentence would
survive being read back to the person in the photograph.

### The specific detail is where a caption invents

**A caption is written by LOOKING, which makes every noun in it a claim.** The
rule against inventing already covers this and it does not feel like inventing at
the time — it feels like describing. It is the same failure as a figure read off a
picture: confident, specific, and unverifiable by whoever wrote it.

**Four wrong facts in one caption, from a real house.** Eleven people round a
Christmas tree. A boy was *"grinning through his braces"* — he had none. Two
people *"have their arms round each other"* — one arm, one way. A t-shirt was
*"Montana"* — four letters were legible and the rest was filled in. A hoodie was
called grey — it was not, under a tungsten lamp. All four were read back in
one sitting.

**So, the kinds that are almost always a guess:**

- **Words on clothing.** A partly legible brand becomes the nearest word you know.
  If it cannot be read whole, it is *a t-shirt*.
- **Colour under a house light.** Tungsten turns warm tones grey and navy black. Say a
  colour when it is unmistakable and otherwise leave it out.
- **Teeth, glasses, jewellery, tattoos.** Small, low-contrast, and a claim about
  somebody's body.
- **Who is touching whom.** *"Arms round each other"* is two claims, and usually
  only one of them is in the frame.
- **Ages and relationships.** A child's age read off their face is a guess with a
  year of error in it.

**And the fairness one, which is not about accuracy.** If a caption singles out
one child by name or by description, name the other too. A record that mentions
one sibling and not the other is a record that will one day be read by both.

**When in doubt, say less.** A caption that describes the scene truthfully and
leaves out the brand, the colour and the orthodontics is a good caption. One that
gets four details wrong is not a richer version of it — it is a worse one, and
every wrong detail is a thing somebody has to notice and correct.

### When they are in it, the photograph is about them

**A caption is written from this person's side of the camera, and the moment you
learn they are in the frame it is a different photograph.** One member, on a
caption of his own childhood that read *"two dozen children in costume lined up
across the chancel"*:

> *"Not only does my name get called out in the captions, but it also becomes
> less about various kids and more 'he stands at the edge of a group of
> children, dressed in a Mariachi hat and holding maracas, US flags everywhere,
> clearly some sort of production about the different cultures of the world.'"*

Both captions are accurate. Only the second one is HIS. The first files his own
childhood as a scene he happens to appear in — which is how a record of
somebody's life ends up reading like a stranger's photo album.

**So when they, or somebody close to them, are in a photograph:**

- **Open on them, not on the crowd.** Where they are standing, what they are
  wearing, what they are holding. The rest of the frame is what is around them.
- **Keep the scene** — it is why the picture exists — but as the setting rather
  than the subject.
- **A crowd is not the subject just because it is most of the pixels.** Twenty
  children and one of them is theirs: the caption is about the one.

### A NAMED FACE MAKES ITS CAPTION STALE

**This is the part that has to be caught by machine, because nobody will
remember.** A caption is written at a moment, from what was known then. A face
gets tapped six months later and the photograph quietly becomes a different one — and the sentence under it still describes a room of strangers.

**The signal is computable and needs no ledger.** A caption that binds a face
(`{{n:…}}`) heals itself: the span renders the name the moment one exists. The
one that cannot is the caption written before anybody knew — no span, no
mention of that person, and now a named face in the frame. **That is the
photograph to revisit**, and finding them is a question anybody can ask of the
record: which photographs have a named face whose caption never mentions them?

This belongs in whatever pass takes stock of what has changed. A face newly
named is one kind of change among many — a date corrected, a person record
merged, a name spelled properly at last — and all of them have the same shape:
something the record believed when a sentence was written is no longer what it
believes.

### Before you claim where anybody is, go and look at the pixels that settle it

**The best sentence in a caption and the worst come out of the same faculty, and
the difference between them is how hard you looked.** Somebody reading a caption
of a photograph they had looked at for forty years: *"I actually love the
things like 'Gizmo under the bench' because I literally have never known he was
under there … but you do get some things wrong like 'three along the front, one
draped over the back' which is just weird."*

**The first instinct is to ban the risky kind of claim. That is the wrong
lesson, and the reason is in what came next:** *"the funny thing is your inference is highly
inaccurate when you can actually just see that they're on the ground between the
couch and the coffee table."* The information was never missing. It was being
read off a downscaled copy — a 520-pixel tile of a four-megapixel scan — where
the cushion behind a boy's shoulder and the floor he is sitting on are the same
handful of pixels. Looked at properly, with a crop of the part of the frame that
would settle it, the answer is not a judgement call at all: the carpet, the dog
at floor level and the base of the coffee table are all plainly there.

So the rule is about EFFORT, not about caution:

1. **Know which claims fail quietly.** A thing is checkable in a second — the dog
   is under the bench or it is not — and being wrong about one fails LOUDLY, at
   a glance. An arrangement has to be reconstructed before it can be checked:
   who was on the sofa, who on the floor, how many along the front. Those read
   fluent whether or not they are true, which is what makes them dangerous.
2. **So do not write one off a thumbnail. Crop and look again.** Take the region
   of the ORIGINAL that would settle it, at a size where it can settle it, and
   look a second time before the sentence goes in. A contact sheet is for
   triage; it is not evidence.
3. **If it is still ambiguous at full size, leave it out.** Then it genuinely
   cannot be resolved from the photograph, and a sentence about it is a guess
   wearing the clothes of an observation.

**AND ONE ERROR MORE RESOLUTION WILL NEVER FIX: higher in the frame is not
higher up.** A photograph flattens depth into height, so somebody further away
sits higher in the picture than somebody near the camera standing on the same
floor. Read that as elevation and you get a confident, fluent sentence about a
person being up on something they were never on. The same person, on the same
photograph: *"he wasn't 'higher up' — it's an L-shaped sectional and he was down
at the far end."*

**Face size settles it, and it is measured rather than judged.** Where a face
index has run, every face already carries a box, and the area of that box is a
depth cue: a face further from the camera is smaller. On that photograph the
highest face in the frame was also the smallest — a little over a third the area
of the lowest one — which is a person at the far end of the room, not a person
up on the back of a sofa. **Higher in the frame AND smaller means further away.
Higher and the same size or bigger is the only case that means higher up.**

Without a box, the same check runs by eye on a crop: compare head sizes, and
look for the floor line, a table edge, a skirting board — the things a room
gives you for free that say which way is back.

**WORK OUT WHERE THE CAMERA WAS BEFORE YOU READ ANY OF IT.** All of the above
assumes a camera at roughly eye level, and the moment it is not, every one of
these cues bends. One member named the case that breaks it worst: *"especially
important when the photograph was taken from higher up — like someone standing
at the entrance of a sunken living room where people are sitting."* Shot from
above, the floor fills the frame, everything further away climbs higher in it,
and people genuinely lower than the camera read as stacked up a wall.

It is visible in the frame and costs one look:

- **Are you seeing the TOPS of things** — the table top, the back of the sofa,
  the crowns of heads — or their fronts and undersides? Tops mean the camera was
  above them, and every position you read has to be re-read as a plan view
  rather than an elevation.
- **How much floor is in shot versus ceiling or wall?** Mostly floor is a camera
  looking down.
- **A step, a rail, a change of floor level** is the room telling you outright
  that "lower in the room" and "lower in the frame" have come apart.

When the camera is above the scene, say WHAT people are doing and leave where
they are sitting to whoever was in the room.

**And name the things.** The dog, the copper pans, the lily, the plaid sleeve,
the bare feet. That is where the value is — it is how somebody finds out what
was in their own photograph after forty years — and it is the safe kind of claim
because they can check it instantly.

**Mark a guess as a guess.** "Everyone dressed up, so probably Easter."

**None of this binds THEM.** That same member rewrote the caption themselves —
*"three boys sprawled across the gold sectional and a fourth on the ground, all
watching something off to the left"* — which is an arrangement, and right,
because they were in the room. Their words go in verbatim and are never edited
toward this rule. The discipline is on inferring from pixels, not on somebody
telling you where they were sitting.

### Tie the words about a face to that face

**When a caption describes somebody you cannot name, bind the words to the box.**

```
{{2:An unidentified girl}} at a lectern, reading aloud to the room.
```

The number is that face's number in the photograph — the same one its box
carries. Nobody ever sees the braces: every surface renders the span, showing
the words while the face is unnamed and the NAME the moment one is attached.

**Without the binding, a caption cannot be corrected without guessing.** A
photograph with two unnamed people has two hedges in its caption, and nothing in
the prose says which is which — so naming one either rewrites the wrong half of
the sentence or, more usually, gives up and leaves a caption contradicting the
picture above it. A name on the wrong person is worse than a hedge.

**Bind only what a name would replace.** `{{2:An unidentified girl}}` is right;
`{{2:An unidentified girl at a lectern reading aloud}}` throws the whole scene
away the moment anybody taps her face.

## Looking at a photograph: metadata first, then your eyes

**A photograph is not a document, and reading its text is not looking at it.** A
connector that offers to read a file hands back an extraction — for a photograph,
usually nothing at all. Reported as an empty source that is correct about what
arrived and wrong about the file, and it is how a picture gets catalogued as
though it held nothing.

**If you can run commands, this is the pass, and the order is the point.**

1. **Get the bytes onto disk.** Whatever door they came through, write them into a
   working folder. Bytes passed through a reply arrive shrunk or corrupted; bytes
   in a file are the file.
2. **Read the metadata BEFORE you look at anything** — every image at once, as one
   table: capture date, camera make and model, pixel dimensions, whether it carries
   GPS, and a sha256.
3. **Make viewing copies** — auto-oriented from the EXIF, scaled down, and **not
   scaled down past 1400 pixels on the long edge.** That number is not a
   preference. It was measured on a real failure: at 520 the floor a boy was
   sitting on and the sofa cushion behind his shoulder are the same few pixels,
   and the caption said he was on the sofa. At 1100 the carpet, the dog at floor
   level and the base of the coffee table are all plainly there. A copy too
   small to answer the question produces a confident answer anyway.
   The originals stay untouched; the copies are what you open.
4. **Then look at every one**, by opening the files, so the pictures actually reach
   you. Never from the filename.
   **A contact sheet is triage, never evidence.** Several pictures tiled into
   one image is a cheap way to see what a batch HOLDS; it is far too small to
   write a caption from, and a sentence written off one will be fluent and
   wrong.
   **And when a sentence is about to say where somebody is, crop and look
   again** — the region of the ORIGINAL that would settle it, big enough to
   settle it (about 1000 pixels across the region itself). That second look is
   cheap and it is the difference between a detail somebody has never noticed in
   their own photograph and a detail that is simply not true.
5. **Then cross-check what you saw against what my record already says** — the
   timeline, the people, the sources that exist — before you write a word.

**No shell?** Use an image-viewing tool if one is connected. With neither, say you
could not see it.

### The date is usually on the back — open every page before you call it undated

**A scan of a photograph is very often two scans**, because whoever kept the
album turned the print over. So a multi-page PDF is not one picture with
padding: **page two is the evidence.** Treat a page count above one as a
promise that something is written down, and open every page before writing
`undated`, `year unknown`, or a question asking me for a date I already
answered thirty years ago.

The failure is quiet and it is mechanical: the front is the interesting page,
so it is the page that gets looked at, and the page that would have settled
the year is never opened. It costs a scroll now and a re-read of the whole
batch later.

**Finding the backs is cheap to automate.** A back is nearly all paper and
almost no colour — score each rendered page for how much of it is bright
low-saturation pixels against how much is saturated, and the handwritten
sides sort straight to the top. That is triage, not evidence: open the ones
it flags and read them properly.

**What a back carries, in rising order of usefulness:**

- **A bare year.** Enough on its own, and the commonest case.
- **A name, an age, a weight, a team.** Cross-check these against anything
  else dated — a form, a school record, another print — because two
  measurements a season apart are how a year gets confirmed rather than
  assumed.
- **A naming key, row by row.** Usually the only place a group photograph's
  people are identified at all, and often it names somebody who matters
  elsewhere in my record, years before that record thought they appeared.
- **A note about the composition** — *the one at the top of the ladder is so-and-so*.
  This is the sleeper. It is the handle that tells you WHICH print a back
  belongs to when several look alike, and it works on words rather than on
  pixels, which is the whole reason it beats matching by eye.

### Near-identical pictures: identify them, never guess between them

A group photograph taken every year in the same place is the hardest thing in
an archive, and a confident wrong year here is expensive — it puts a child at
the wrong age in a record nobody will re-check.

**Do not match them by image similarity.** Colour and layout comparison fails
on exactly this material, because the mount, the wall or the water dominates
the signal and the thing that differs is a few faces. Measured on a real
batch, the top matches were wrong about as often as right.

**Use the three handles that are made of words, in this order:**

1. **The back**, per the section above.
2. **Where it is mounted.** A print stuck onto a page that names its season
   inherits that season. This is the strongest evidence in most albums and it
   needs no visual judgement at all.
3. **Process of elimination**, once the set is closed. If an album holds one
   photograph per year for a known run of years, and every year but one is
   accounted for, the last is determined. Say so, and say it was reached by
   elimination rather than by recognising it.

**And a physical landmark that changed once is worth more than any of them** —
a fence that went up, a sign that was replaced, a deck that was built. Ask me
which year that changed and one answer dates a whole run. That is a question
worth asking; *"which year is this?"* asked about five near-identical prints
is not.

**When none of the three closes it, leave the year off and say why.** An
undated print with its series named is honest and is still a photograph; a
guessed year is a fact with nothing on the page to show it was a guess.

### Dating a face: anchors, kit, and what I am ground truth about

Most archives contain photographs of the same person years apart, and the
temptation is to estimate an age by eye. Don't. **Estimate against dated
photographs of that same person**, which a family archive almost always
supplies — a sports form stating an age, a school record with a grade, a print
whose back gives a year. Build the ladder first, then place the undated picture
on it. An age read freehand is a guess with a number on it; an age read against
a dated rung is an argument somebody can check.

**Kit dates well. Wearables date nothing.** Anything replaced on a cycle — a
team shirt, a racing suit, a school uniform, a season's boots — moves year to
year and is strong evidence. Anything kept until it breaks — a watch, a chain,
glasses, a favourite jacket — persists for years and is worth nothing for a
date. Measured on a real archive: a wristwatch ran unbroken from a subject's
seventh birthday to his eleventh across every summer photograph, while the
swimsuit changed roughly every other season. **Reach for the thing that gets
outgrown.**

**Read the face, not the pose.** A seated posture, a dark room, a low camera
angle and long limbs all read as older, and none of them is evidence. Cheek
fullness, jaw softness and the proportion of the head to the body are. Crop to
the face and look at size before a sentence says anybody's age.

**And I am ground truth about my own face.** When I say *that is not what I
looked like at fourteen*, I am right and you are wrong — I have seen that face
every day of my life. **But do not simply agree.** Ask which dated picture it
sits with, then go and check the comparison I named. Agreeing is worth nothing
to me; confirming my read against my own dated material adds something, and
occasionally finds that the anchor I named says something slightly
different.

### A bound from one thread does not transfer to another

Dating by a life event — a move, a job change, a wedding — works only for
material that event actually governs. The failure is quiet: a bound gets found,
it is clean and satisfying, and it gets applied to something it has no
authority over.

A worked example, from a real session. A house move was used to date a
photograph taken at a swimming club, on the reasoning that the subject could
not have swum there after leaving town. He could — it was a different club from
the one the move affected, and he had belonged to both at once **for four
years**, which his own club table already said. The overlap was sitting in the
record, written down, and went unread because the bound felt tidy.

**So before a life event dates anything, name what it governs and check the
record for an overlap.** Two memberships, two schools, two cities at once are
ordinary. And when a bound does hold, say which thread it holds for.

### Count the containers before you date their contents

When an album, a folder or a set of mounts holds one item per period, **count
the slots against the years available before assigning any of them.** If there
are more containers than years, something in the frame is wrong — the span is
short, one container is not what it looks like, or two are the same period —
and finding that out first is cheaper than discovering it after six items are
captioned.

Say the mismatch out loud in the record rather than quietly picking the
assignment that fits. *"Five mounts, four years"* is a fact I can resolve in
one sentence. A set of confident captions that silently drops the fifth is one
I will never think to question.

**And verify the set before you date the set.** One misfiled member corrupts an
elimination — a photograph from a different sport sitting inside a run of
near-identical ones will take a year that belonged to something else, and every
assignment after it shifts. Check that every member is what its name says
before the years go on.

### A measurement over a photograph can measure the damage instead

Automatic measures over scanned prints — how much of the frame holds people,
how dense a crowd is, how bright or saturated a region runs — are cheap and
they are worth running. **But a print is a physical object with a history**,
and the thing a detector finds missing is as often damage as absence.

Flash glare on a sleeve, a faded corner, a crease, a shadow across one end, a
scan that clipped an edge: each removes real content from the file, and every
count run over that file reports the removal as a fact about the subject. The
number comes back clean, with decimal places, and says the opposite of what
the picture says.

The worked failure: a count of how much of each frame a group occupied
reported one team photograph as half the size of its neighbours, which fitted
the theory beautifully. The right third of that print was blown out by flash
on the plastic sleeve. The detector found no faces there because it could not
see, and the photograph is of a full team.

**So look at the picture before you report a number about it**, and treat any
measure that lands near an edge, a corner or a bright patch as suspect until
you have. Where a measurement and a look disagree, the look wins — and say in
the record that the number was wrong and why, because the same detector will
be reached for again.

### Why the metadata comes first

**A file's timestamp is when it was exported, not when it was taken.** A batch
that all reads as this month is usually a batch that was COPIED this month, and
the capture dates inside can span twenty years. Dating a photograph from its file
is the commonest way a wrong year enters a record, and it enters as a fact with
nothing on the page to show it was a guess.

**Camera clocks disagree, and the disagreement is evidence.** Two cameras at one
event can be a year apart. That is not a tie to average — it is one clock set
wrong, and a third source settles it: what my record already says happened that
day. Write down which one you believed and why.

**GPS rides inside a photograph.** Whether it is there is part of knowing what the
file is, and it belongs in the handling note rather than being discovered by
somebody else later.

**And the hash is free while you are already reading every file.** It is what
makes the file citable and what lets a later pass prove it is the same one.

### How a file got here is a signal about how much it matters

**A camera roll is mostly junk and a scan never is.** Ten thousand phone
photographs accumulate because the phone was in somebody's pocket; a scan exists
because a person sat down, put one print on a glass plate, and did it again. That
effort is evidence, and it is in the metadata, free, before anybody looks at
anything.

**So read the batch for how it was assembled, and spend accordingly:**

- **A scanner where the camera should be** — a make you have never heard of, a
  model with "scanner" or a controller name in it, several files sharing one
  scanning session minutes apart. Somebody digitised these one at a time.
- **No metadata at all.** An export that stripped it, a studio's delivery, a file
  saved out of something else. It arrived through a person's hands, not a
  shutter.
- **A folder somebody built.** Files moved deliberately into one place are a
  selection — the choosing already happened, and it was not done by an algorithm.
- **Against that, a straight camera roll dump**, where the phone's own model is on
  every file and the dates run continuously. Most of it is duplicates, receipts,
  screenshots and the floor.

**The deliberate ones get the deep pass**, every time: look longer, name everybody
you can, ask about them by preference, and never let one sit with a caption that
describes clothing. They are usually the oldest material in a batch and the only
copy of it anywhere — the frames whose originals are in somebody's loft, or gone.

**And never rank by resolution.** A 600×400 scan of a photograph from before
anybody here was born outranks a 12-megapixel picture of a car park, and sorting a
batch by file size puts them in exactly the wrong order.

### What comes back with the description

Everything the naming grammar wants is now in hand — what it is, who is in it,
what it is about, and the real date — so rename in the same pass.

**And what you could not resolve stays unresolved.** A face nobody named, an
undated print, a screenshot of something you cannot place. A list of open
questions is a true record; a confident guess about who a child is is not.

## Name the people, in the caption of the frame they are in

**Names are the connective tissue.** A photograph with a name in it joins to that
person's record, to every other frame they are in, and to the years of their life
I have written down elsewhere. A photograph with *"a man in a red jumper"* in it
joins to nothing, and it never will — the jumper is not a key anybody can search,
and I will not remember it either.

**So try, on every frame, every time.** Not only where it is easy.

**The identification goes in that frame's own caption.** Not in a paragraph above
the table, not in a note at the foot, not in the person's record instead. Those
are all the same failure: the name is in the file and not on the picture, so the
next pass reads the caption, sees *"the same man again"*, and the identification
is lost even though it is forty lines up the page. **If a name is not in the
caption, that photograph is not identified.**

**The test is whether they belong to this life, not whether naming them is easy.**
Somebody centred, posed, repeated across frames, or at a family occasion is worth
working at. A crowd behind, a passer-by, a stranger at the next table — those are
extras, and saying so is a real answer.

**Mark the ones you cannot name as unnamed, in the caption, in a word you can
search for.** *"An **unidentified** woman in a green coat"* is honest and it is
countable: it tells me how much of my own archive is still anonymous, and it is
the list to hand me next time I have ten minutes. A caption that just describes
the coat hides the gap inside a sentence that reads like an answer.

**When a name arrives later, put it in every caption it belongs in.** Resolving
somebody in conversation and writing it only where the conversation happened
leaves the pictures exactly as anonymous as they were.

**And rename the file, because the name goes in the filename too.** The grammar
has a slot for who is in it, and `a-man-in-a-cream-suit-and-a-boy` is that slot
filled with clothing. A filename is what I see in my own storage, what I search
when I am not talking to you, and the thing most likely to outlive every record
here — so the moment somebody is named, that name belongs in it. Rename the file,
update every record that spells the old name, and let the id carry the join while
you do.

### Build the index of faces, so the next pass starts ahead

The point of this is cumulative, and it only compounds if the identifications are
kept somewhere a later pass will look.

**Each person's own record is that place.** When a frame identifies somebody
well — face clear, named with confidence — note it in their record as a
reference: the file's id, the year, and one line on what they look like in it.
Two or three per person is plenty, and spread across decades beats three from one
afternoon, because the job is recognising them at every age.

**The id, never the filename.** A file gets renamed the first time anybody
touches it, and a reference pointing at a name is a reference that stops
resolving. The id is what survives.

**Then open those before you look at a new batch, not after.** Read the reference
frames for the people who come up often, so you are looking at the new
photographs already knowing what these faces look like. Checking afterwards is
how somebody I see every week gets written down as a stranger.

**Be honest about what this is.** It is your eyes comparing one picture to
another, not face recognition, and it is wrong often enough that every
identification you make is a proposal until I confirm it. Say so on the record.
The reference frames raise the hit rate; they do not turn a guess into a fact.

**Index a person once per age, not once.** A face is a sequence, not one thing,
and two stages of the same person can look less alike than two different people
do. The stages worth keeping separate are tight where a face changes fastest and
wide where it barely does: under a year · one to three · three to six · six to
ten · ten to twelve · thirteen to seventeen · eighteen to twenty-five ·
twenty-five to forty · forty to sixty · sixty and over.

**A person is well covered when their stages are spread, not when their frames
are many.** Three good pictures from one afternoon are one stage. So the useful
thing to tell me is which stages are *missing* — *"I have you at four and at
thirty and nothing in between"* is an ask I can act on; a count of frames is not.

**Work the stage out from two real dates, or leave it off.** Their birth date
and the picture's own date, subtracted. Never estimated from the face — a stage
you guessed wrong poisons every later comparison made against it, and nothing
afterwards can tell it was a guess. The one exception is where the stage is much
wider than your uncertainty: a small child in an undated frame is somewhere in
*three to six* whatever year it was, and that is safe to write.

**Child-to-adult is where this is weakest, and it does not improve with
effort.** The same is true of every tool that does this, including the ones that
do it properly — matching a baby to an adult is the hardest case there is, and
old scans are made of exactly that. So on childhood frames, lean on what only I
can tell you: the house in the background, whose clothes those were, the dog.
Ask me, rather than comparing harder.

**And do not re-count a picture to make the names fit.** When I name four people
and you counted five, the count is the thing to doubt — going back and finding a
fifth to justify the number invents a person who does not exist, and it will read
like evidence forever. Ask me. *"I count five and you named four — which is it?"*
costs one line.

### Sort the questions by how many faces are unnamed

When a pass has to choose which frames to ask me about, **the densest unnamed
frame wins.** Not the most striking one. A wall of something odd makes a better
question to write and a worse question to ask: it resolves one curiosity. The
group photograph with six unnamed faces in it resolves six people, several of
whom probably have records here already.

**Headcount is the better sort and it is free** — you counted the faces when you
looked.

## Show me the batch before you file it

You have just looked at thirty photographs I have not seen in years, and you are
about to write down what they are. **That write is the moment to stop**, because
it is the last one where a correction is free. Afterwards my record says a
stranger in a kitchen is my aunt, and nothing in it will ever look wrong enough
to check.

### Tell it. Do not list it.

In capture order — you have the real dates from the metadata pass — as one short
piece of writing. Group what belongs together, because a roll of film is not
thirty separate events. Keep the detail that makes one recognisable: a person
recognises their own life by the specific thing, never by the caption.

> **A manifest:** *"14 images. 6 outdoor, landscape orientation, 2019-07-14.
> 3 interior with two adults. 1 document, handwritten, undated. 4 incidental."*
>
> **A telling:** *"All fourteen are from one Sunday in July 2019. It opens
> outdoors — six frames of the same stretch of water, taken minutes apart, as
> though somebody was waiting for the light. Then indoors: two people at a
> table, the second frame the same as the first except one of them has turned
> around. Near the end there is a handwritten note, no date on it, in a hand
> that is not yours. The last four are the floor, a bag, and somebody's thumb."*

Both are accurate. Only one of them can be corrected by somebody who was there.

**It must be short.** A telling that takes longer to read than the pictures took
to look at has stopped being a courtesy.

**And only when you actually looked.** A telling assembled from filenames and
dimensions is fiction with a confident voice, and it is worse than saying you
could not see them.

### Name the gaps inside the telling, not in a list underneath

A face nobody named. An undated print. A place you cannot place. Those belong in
the sentence where they happen — *"in a hand that is not yours"* — because that
is where I can answer them. A list of open questions at the foot is apparatus,
and apparatus goes at the foot, or in the front matter, or nowhere.

### Then one question, and then wait

> *"Did I get anything wrong, or is this ok to publish?"*

**Nothing is written until I answer.** Not a draft record, not a stub, not a
placeholder to be corrected later. The whole value of asking is that the answer
arrives before the record does.

**What my yes permits, and what it does not.** It means: write this into my
record. It does NOT mean share it, show it to anyone, or widen anything —
"publish" here is my word for committing it to my own house. Widening is a
separate act and always mine, exactly as it is everywhere else.

**And for a batch of photographs, that commit is the whole of it — the register
IS the publishing.** My Gallery Wall at ofme.ai/gallerywall is built from
registers: one file per batch under `sources/`, **with `photos` in its name**
— `sources/<YYYY-MM-DD>-photos-<what>.md` — holding one table with a row per
picture. The wall finds a row's cells by the header names, so use these:

| File | Taken | Camera | Wall | Caption |
| --- | --- | --- | --- | --- |
| `photo-portrait-ana-reyes-on-the-porch-2012-06-10.jpg` | 2012-06-10 | Nikon D60 | yes | Ana on the porch, squinting into the sun. |

The File cell is the name alone, in backticks, exactly as the file is named in
the photos room of my storage — never a path, never an id. `yes` or an empty
Wall cell hangs it; `no` keeps the file and its row and leaves it off the wall.
A scan's row works the same way under its `scan-` name. Once that file is
saved there is no further step, no gallery action to find, and nothing to do on
the page — when you save through my connector, the receipt says whether the
wall reads the file; believe it. Sharing a photograph or a wall is mine, done
on the page, never yours. And never sign in to ofme.ai as me: not with a code
from my email, not with a sign-in link, not to finish anything. If something
seems to need it, tell me what and stop.

**A picture that is ABOUT another picture belongs inside it, not beside it.**
Scan a box of prints and you get three things for one photograph: the print,
the back of it with the year and the names written on it, and the album page it
was mounted on. All three are worth keeping. Only the first is worth hanging —
a wall where every picture appears three times, twice as a rectangle of
handwriting, is a wall nobody scrolls. The other two become thumbnails inside
the photograph's own page, and they keep their own address, their own faces and
their own caption. **Nothing is hidden and nothing is deleted.**

- **A back needs nothing written anywhere.** Name it for its front and the two
  find each other: `<the same words>-back` beside `<the same words>`, exactly
  as a photograph's moving half is named for its still. The extension may
  differ. A back whose front is not in the house goes on hanging by itself
  rather than disappearing — so a sheet of a dozen backs belonging to no single
  print stays where it is, correctly, with no special case for it.
- **An album page says so in the Wall cell**, because no join can find it: the
  words differ, and one page often holds several prints, so anything loose
  enough to marry them would marry things that are not married. Put the print's
  filename in the cell — with its room when it lives in another one, as an album
  page in the scans room usually does.

| File | Taken | Camera | Wall | Caption |
| --- | --- | --- | --- | --- |
| `scan-album-me-the-1994-season.pdf` | 1994 | - | photos/photo-print-me-the-1994-team.png | The mounted page, with the year in pen. |

**Only where it is genuinely one print's page.** A page of certificates, a mount
whose photograph has been cut out, a frame holding twelve portraits, or a year
with two prints that could both be the one — those are pages in their own right
or genuinely ambiguous, and they keep hanging. A wrong one files one team's page
under another team's photograph, which reads as correct and is not.

**And say which pictures I have actually spoken to.** A caption an AI wrote
from looking at a photograph is a description. A caption that came out of my
mouth is testimony. The two are different facts everywhere else in this house,
and on a wall they look identical — same font, same place, same confident
sentence under the picture — so three hundred photographs can read as finished
when most of them are a machine describing what it can see.

A **Said** column carries the day I told one first hand. Empty is the honest
default and the useful one: it is what turns the wall into a list of what still
wants my voice, and it is a filter on the page.

| File | Taken | Camera | Wall | Said | Caption |
| --- | --- | --- | --- | --- | --- |
| `photo-portrait-a-friend-on-the-porch-2012-06-10.jpg` | 2012-06-10 | Nikon D60 | yes | 2026-09-19 | Squinting into the sun, the afternoon we finished the deck. |

**A date, or nothing.** `yes` in that cell is somebody asserting testimony
without saying when, and it is the half that rots — months later nobody can
tell whether it was me or a tidy-up that put it there. **Only fill it in when I
have actually said something about that picture**, and never because the
caption reads well.

**And most of the time you will not have to.** If I record while walking my own
wall, the recorder marks which photograph was on screen and my words are
attributed to each one — so those get marked as told on their own, with the day
I said them. The cell is for what that cannot catch: a story I typed, or told
you somewhere else.

**If I say you got something wrong, fix it and say what changed.** One line. Do
not re-tell the whole batch back to me; I have just read it.

### The questions ARE the deliverable — write them down before you ask

A batch of photographs makes two things. One is a set of records. The other is a
list of holes only I can fill: a face nobody named, a room nobody placed, an
occasion with no name, a date the camera and the clock on the wall disagree
about. **The second one is worth more than the first**, and it is cheapest now,
while the pictures are still in front of you — go cold on this and somebody has
to open all of them again to work out what to ask.

So **compile them and write them into
[the questions I have answered](about-me/questions.md) as `(pending)` headings
the moment the pass is done.** Not after I answer. Not if I answer.

**This is not the same as the `questions:` list in a record's front matter.**
That is where a question is STORED, beside the thing it is about. The questions
file is the only place anybody LOOKS for one — it is what gets read before I am
asked anything, and it is the whole memory of what has already been asked. A
pass that files a hundred photographs and leaves its questions in front matter
has made them invisible to the one reader that needed them.

**Shape them as a telling, not as a name.** *"Who is the man in the cream
suit?"* gets four words back. *"Tell me about the man in the cream suit with the
boy on his lap, by the stone fireplace with the copper pans"* gets the
afternoon — and the reason that works is in the "Scenes" rule at the top of the
questions file.

### Then ask whether I have time

Once it is written and you have told me where:

> *"Saved. I do have some questions that would help clarify the record. Do you
> have time?"*

**If I say yes**, ask them one at a time, and stop when I stop. Questions about
what the record cannot see on its own — who someone is, what was happening, when
something was really taken. Not how a picture made me feel, unless I open that
door. As I answer, the answer replaces the `(pending)` marker.

**If I say no, that is a complete answer and costs me nothing.** They are already
written down, so nothing is lost by my saying it. Do not ask why, do not ask a
smaller version of the same question, and do not raise them again in this
conversation.

**And if I am not there at all — asleep, gone, "just run through it and I'll
confirm later" — that is the same as no.** Write them, say they are waiting, and
stop. **The one thing that must never happen is a pass that ends with no
questions anywhere**, because I was not available to be asked.

**Three at most OUT LOUD.** Anything past the third is an interview, and an
interview at the moment I hand you something is how I learn to stop handing you
things. **The cap is on asking, never on recording** — a hundred photographs can
honestly raise a dozen open things, and every one of them belongs in the file
even though only three are ever said to me.

### And offer me the whole list, for answering out loud

The cap of three exists so you do not interview me while I am handing you
something. **It is the wrong cap when I have sat down to answer** — twelve
questions is five minutes of talking and forty minutes of typing, which is the
whole reason most of them would otherwise never get answered.

So once they are written, offer it, once:

> *"There are nine of these. Want the whole list here, so you can answer them
> out loud?"*

**If I say yes, put the list in the conversation** — numbered, one line each,
plain sentences with no markdown apparatus, so it survives being read aloud or
pasted into something else. Then:

> *"Close voice when you're done, come back, and paste the answers — I'll file
> them."*

**That round trip is the point.** A live voice session usually has no connection
to my house at all: it can hear me and it cannot write anything down. The
questions file is what crosses the gap in one direction, and me bringing the
answers back is what crosses it in the other. Neither half needs a connector.

**When the answers come back, they are a source.** Archive what I actually said
before deriving anything from it, then put each answer under the heading that is
already in the questions file, replacing its `(pending)` marker on its own dated
line. Anything that ran long becomes its own record, with the one-line opening
back in the questions file — the same rule as every other answer.

**And if I never come back, nothing is lost.** The questions are already
written; they wait. That is the entire reason they are written before the offer
is made rather than after I accept it.

## What the record knows about a file, and how to find out

**A file in storage that nothing in the record mentions is not a file you have.
It is a file nothing can find.** No search returns it, no reader knows it is
there, and the only thing that will ever surface it is somebody scrolling a
folder. Knowing which files those are is a count, not a judgement — so count
them rather than guessing from a listing.

`stocktake` is that count: every file in storage against every mention of one
in the record. It writes what it found as a record and its answer names where —
read that file, because the count itself is the answer and nothing paraphrased
from a tool result is. It reads the whole house, so run it once and read the
record rather than running it twice. And it counts without tidying: nothing is
moved, renamed or deleted, and what to do about what it finds is mine.

### The id is the join, and the name is only a fallback

**A name comparison invents orphans.** A file sitting in one room in the morning
can be in another under a different name by the afternoon — renamed by a
different writer, which is ordinary in a house several things write to. Its
record still cites it correctly by id; only the name has gone stale. Report that
file as missing once and nobody reads the next report.

So there are three answers, not two, and the middle one is the useful one:

- **cited by id** — found however it is renamed. This is what filed means.
- **found only by its name** — real today, and it breaks silently the next time
  anything tidies a folder. The fix is one edit: put the id beside the name in
  the record that cites it.
- **mentioned nowhere** — invisible.

**Write the id down at the moment you file something**, beside the name. The
name is what a person reads; the id is what survives.

### A recording nothing mentions is usually one nothing has read

**This is the commonest thing a count turns up, and it is not a filing mistake.**
Every route to a transcript in an ordinary setup runs off the moment of
recording: the recorder transcribes what it has just received. A recording that
reached storage any other way — uploaded straight in, carried over from an old
phone, recovered in a migration — has never been offered to a transcriber at
all. Nothing is broken; nothing ever looked at it.

So a recording under `mentioned nowhere` has three possible causes, not two,
and **the third is the one that costs**:

- **A duplicate of a sitting already archived.** Byte size answers this faster
  than listening — a re-upload matches an archived recording's size exactly
  while carrying a different id and a timestamp a minute or two off. Safe to
  lose.
- **A sitting nobody has read.** The one thing in a house that cannot be
  reconstructed from anything else, so it is transcribed and filed before
  anything else is decided about it.
- **One that was deliberately never filed** — a meeting, an appointment,
  somebody else's hard conversation. **The absence is the point, not a gap.**

**Nothing in a listing tells these apart, and the third looks exactly like the
second.** A file sitting in the right room under a sensible name, with no record
anywhere, reads as unfiled — and every visible piece of evidence points the
wrong way. So: **read the opening before writing anything.** If it is a room of
people, or anyone in it did not know a record was being kept, stop, write
nothing of it, and say so. It wants holding, not filing.

**And a recording older than the ability to mark something confidential cannot
be trusted to carry the mark.** Whatever switch or setting holds something out
is set before a recording, so it can never reach back over what came earlier.
Anything from before it has to be read, not trusted.

`transcribe` is what reads one: a file in storage, by its path, and words
back, **nothing filed**. That is deliberate — where a transcript belongs, what
is durable in it, who else is in it, what is sensitive, is the whole of the
judgement, and a transcriber is the wrong place to make it. Write the record
afterwards the way any source is written, and read it back both directions.

**A held recording is refused.** Words held out of the house on purpose are not
read back into it, and a tool that would is exactly the shape that quietly
undoes the hold. The refusal is the hold working; never route around it by
another door.

### A partial count says so, in its own first line

Reading every document is what makes the answer true — a document left unread is
a citation that cannot be seen, which turns a filed file into a false orphan. A
pass that ran out of room is still worth having and is **not the same claim**, so
it opens by saying how much of the record it managed to read. Never quote a
partial count as though it were complete.

## A figure read off a picture is a claim, not a measurement

When something arrives as an image — a dashboard, a health card, a statement, a
scoreboard — the durable artifact is **the values, in a record**. Not the picture, and
not a description of the picture. Get the numbers and the quotes out, file them where
they belong, and keep the image only where the image itself is the primary document.

Two things go wrong here, and both are quiet:

- **Reading by position instead of by label.** Cards put unrelated quantities in
  adjacent tiles of identical styling — a nightly figure beside a rolling average, a
  duration beside a deficit. **Read the label, every time.** One misread tile becomes a
  fact, and a fact becomes a finding.
- **Narrating it back to me.** I was looking at the picture when I sent it. Reading my
  own numbers aloud in tidier language is not analysis. Extract, file, then tell me the
  thing the *stored* record supports that one screen cannot — a comparison, a base
  rate, a trend, a contradiction.

**Reconcile before you commit, wherever the source allows it.** Most cards are
over-determined: the parts sum to the total, two figures imply the third, the clock
times span the interval they claim. Check those identities at extraction time rather
than after I notice. Where a source offers nothing to check against, say so in the
record's note and treat the value as weaker evidence.

**When a number turns out to be wrong, re-derive everything built on it.** A bad figure
rarely sits inert — it produces a conclusion. Correcting the cell and leaving the
conclusion standing is worse than either alone. Log what was wrong, in which direction,
and what it caused, in the record and not only in conversation.

## Facts from outside my life: retrieve them, don't recall them

**Structure survives recall; specifics do not.** The design of a study, the direction of
its effect, the shape of a law or a story — those come back right. Sample sizes, dates,
which group got which result, exact wording — those come back wrong, and they are
precisely the parts that make a claim quotable.

- **Anything load-bearing enough to write down is load-bearing enough to look up.**
  Names, dates, sample sizes, effect sizes, attributions, statutory text, quotations.
- **If it cannot be retrieved, mark it `certainty: recalled`.** The field exists for
  exactly this, and silence reads as verified.
- **Prefer the structural claim to the vivid one.** The vivid version travels further
  and is likelier to be false.
- **Never repair a citation from memory.** A confident correction to a remembered fact
  is a second guess wearing the costume of a fix, and it is harder to challenge than the
  error it replaced.
- **Write it down when I catch one.** A mistake made in conversation and caught in
  conversation leaves no trace, so the record quietly under-counts the one class of
  failure it most needs to know about.

## `sensitivity` is three fields, and the words are fixed

Same argument as `source`, and the same failure if it is left free. A level, the
compartments it belongs to, and any flag that raises the floor:

```
sensitivity: confidant
compartments: [recovery, family]
flags: [third-party]
```

**`sensitivity` is how far out this may go**, and the words are the same words I
use for the people themselves — deliberately, so a record and a reader can be
compared without a translation table:

`public` (nothing to protect) · `acquaintance` · `friend` · `circle-of-trust` ·
`confidant` · `self` (goes nowhere)

**`compartments` is which part of my life it belongs to**, and it is not ranked:

`work` · `family` · `childhood` · `relationships` · `health` · `recovery` ·
`legal` · `financial` · `creative` · `faith` · `grief` · `reflections`

**`sensitivity_note` is for the handling instruction the three fields cannot
carry** — *"never surface externally"*, *"redacted copy only"*, *"attached to a
private thread"*. Free text on purpose, because it is a sentence to a human and
not a value to compute on. Nothing reads it to decide anything; it is what a
reader is owed when the fields alone would let them do the wrong careful thing.

**`flags` raise the floor and never lower it:** `third-party` (somebody else's
material rides along) · `minor` (a child who can consent to nothing) ·
`confidential-duty` (a relationship that binds whoever heard it — a doctor, a
therapist, a member of the clergy, and the equivalents inside whatever practice or
programme I am part of).

### The four rules that make the fields mean anything

- **A level says how far out, not how bad.** It is a ceiling on travel, not a
  judgment about the thing. The heaviest thing in here is not shameful; it is
  simply mine to give, and a high number says only that I have not given it yet.
- **A compartment is not a rank, and the two axes are independent.** Someone I
  speak to in confidence about one part of my life may hold things my own family
  never sees, and no single number can say that. Level answers *how far*;
  compartment answers *which part of my life*.
- **`confidential-duty` is outside the scale and clears no level.** It is a duty
  the holder took on, and it does not bend to how close anybody is. It is
  the heaviest thing a record can carry and my app says so before anything
  moves — but it is **not a lock on me**. A block never protected the material;
  it only stopped my own house recording that it left. So the app warns, I
  decide, and the sending is written down.
- **Missing or unrecognized reads as `self`.** Ambiguity is never eligible to
  travel, and a stamp nobody can parse is ambiguity.

**And a stamp decides what may be *offered*, never what is sent.** Nothing leaves
because a field allowed it; things leave because I said so, having read the words
(see below). That is what keeps a wrong stamp an annoying suggestion instead of a
disclosure I never made.

**No stamp refuses me, and that is settled.** Every level, every flag, every
`external_surfacing: blocked` — my app puts what the record carries in front of
me and asks; none of them ends the road. The one exception is mechanical rather
than a judgement: a record with no `record_id` has no handle to point a link
at, so there is nothing to hand over yet.

**The reason is not that the rules are soft.** It is that I can print any of this
to a PDF and email it, so a refusal stops nothing — it only moves the act
somewhere this house cannot see, and then *"write down what I actually shared and
with whom"* never happens. A gate that costs me the ledger and protects nothing
is worse than the warning it replaced.

**`minor` keeps its friction anyway.** Not as a lock — the same argument holds —
but a child cannot say whether they mind, and the difference between a decision I
made and a tap I made while thinking about something else is the whole of what
this can offer me there.

**Which means a level is where you start me, and never a lock on me.** `self` on
a record does not say I may not share it — it says *do not put it in front of me
to share*. A share control that refused my own material on the
strength of that stamp — and told me to widen it if I wanted to send something
once — was this rule broken twice: once for refusing me, and once for making the
sending reclassify the record. Anything of mine is mine to give at any moment, and a stamp that
refused me my own material would be my own record telling me what I am allowed to
say about my life. These fields bind what this system suggests, not what I do.

**The one thing a level does not decide is somebody else's material.** Where a
record carries `third-party`, the person whose words those are has a say that is
not mine to overrule, and where it carries `confidential-duty` there is a duty in
the way that no setting of mine clears. Those are not restrictions on my
openness — they are other people's, kept where I can see them.

## Sharing: how widening actually works

**Widening is my act, one step at a time**: a named person, then a circle I named,
then wider. Never inferred from context, never a side effect of something else I asked
you for, and never decided by you because it seemed helpful.

**Circles belong to the people, not to the memories.** Label the handful of people I
actually have records for, once — not the thousands of things I have written. And **do
not assume an ordering**: family is not automatically closer than friends, and for
plenty of people it is the reverse.

**When something does go out, write down what I actually shared and with whom.** Who
knows what is history, not a policy I set in advance — and it is how you know whether
to ask me before saying the same thing to someone else. That record is itself among
the most private things here: *"you've never told your brother about this"* is a true
sentence that can land as an accusation.

**A record about someone else carries their privacy too**, and my own openness does
not unlock their half. Whether they'd want it shared, and whether anyone ever actually
asked them, are two different facts — never treat the first as settled by the second's
absence.

## `illustration_object` — the one line that survives a model that cannot draw

A record may carry a picture: one object from the telling, at
`illustrations/<record_id>.png` in my media store. Some of what I connect can
draw and some cannot, and **the half that matters is the same either way** — the
choice of object, which only something that read the telling can make.

```yaml
illustration_object: a weathered dock piling
illustration_surface: isolated, with nothing around it   # optional, placement only
```

**Write it whenever a picture is wanted, before knowing whether you can make
one.** The prompt is rebuilt from this line, in whatever the house style is at
the time, so what is stored never goes stale and never has to be re-derived by
reading the whole record again. A model that cannot generate images writes the
line and stops, and that is a finished job rather than a failure.

**And write it when a picture is not wanted, empty.** On anything that can carry
one — an Afterword, a letter, a playlist — the key goes in either way:

```yaml
illustration_object: ""    # read it; no single object in this one
```

The two look identical on the page, which is the point: an empty value draws
nothing, exactly as a missing key drew nothing. What they do not look identical
to is the next reader. An empty value says somebody read the telling and decided
against a picture. A missing key says nobody ran the pass — and a decision
nobody can distinguish from a skipped step is not a decision anybody can rely
on. It is the same discipline the `questions`/`noticings` lists follow, and
for the same reason: **empty is a real answer, absent is a gap.**

**The line is not a promise that a picture exists.** The record says what was
wanted; the media store says what was drawn. A record carrying this line with no
file beside it is simply a picture nobody has made yet — and the page shows
nothing at all in the meantime, exactly as it would if the line were absent.

## `record_id` — one numbering convention, every kind of document

**Every record gets one, and they are all built the same way:**

```
<prefix>-<eight random hex characters>       ppl-79e137fd · evt-cb467b04 · ltr-3f9a1c27
```

**Random, never sequential.** A counter is a shared variable with no lock, and
more than one AI writes my home. Two of them took "the next number" on the same
afternoon once and produced two different sets of claims under the same ids; git
merged both without a conflict, because nothing textually overlapped, and every
citation written before that day quietly became ambiguous. Eight hex characters
cannot collide by accident and need nobody's permission to mint.

**The prefix says what kind of thing it is:**

| Prefix | What it identifies |
|---|---|
| `ppl-` | a person |
| `evt-` | a dated event in my timeline |
| `src-` | a source — the raw material something was written from |
| `sty-` | a story |
| `rfl-` | a reflection |
| `ltr-` | a letter |
| `pl-` | a playlist |
| `list-` | a task list |
| `afterword-` | an Afterword |
| `idx-` | an index over another record |
| `dec-` | a decision |
| `note-` | a note that is none of the above |

A kind with no prefix on this list gets a short new one, lower-case, said once
and then used consistently — the list is not closed, it is just not improvised
differently each time.

**Never rewrite one.** An id is what other records cite and what a share link
points at, so changing it breaks things that already exist and cannot be found
to fix. A record that somehow has none simply gets one added.

**Afterwords are the one deliberate exception, and it is not a free hand.** Theirs
is minted from the submission they read rather than at random, so the same
telling can never produce two Afterwords with two ids — which is the whole of
"one telling, one Afterword" enforced in arithmetic rather than in prose.

**Why it matters beyond tidiness:** the id is the handle. A record with one can be
handed to a named person, can be pointed at from another record, and can carry an
illustration (`illustrations/<record_id>.png`). A record without one has none of
that, and the page says so honestly rather than hiding the control.

## `created_at` carries the time, not just the day

**Stamp the full moment you wrote it** — `created_at: 2026-08-21T22:04:00Z` — not
the bare date. One line, and it costs nothing at write time.

**What it buys:** the lists I actually read — my Afterwords, my letters, my
playlists — are ordered newest first, and a date alone cannot order two things
written on the same day. Those lists fall back to the filename, so within a day
they come out alphabetically by slug, which is indistinguishable from random. I
found my own letter sitting third of three: *"tho it was the last one i wrote."*

**A bare date is not wrong, it is just older.** A full timestamp sorts above a bare
date on the same day, which is arithmetic rather than a rule somebody chose, and it
is right in the only case it arises: everything carrying a bare date was written
before this line existed.

**`date:` is untouched by this.** That field is when the thing in my life
happened, and a day is usually all anybody knows about it. `created_at` is when
the file was written, which is a moment you were present for. Do not put a
guessed time on either one — no `T00:00:00` to satisfy a format.

## The checks run themselves

This contract has a machinery half: `scripts/validate-records.mjs` runs after every
push and warns — never blocks — when a record breaks a rule on this page: a free
spelling in `source`, a citation naming a file nobody saved, two people sharing a
first name with one record missing its surname. If it is in my home, you can run it
yourself after a filing pass; its warnings are the contract talking, not a build
failing.
<!-- OF-ME:END managed -->

## My own rules for records

_Anything you write below this line is yours. Updating your tuning replaces the
section above and never touches this part. Every AI that reads this file follows
what you put here — including your guide on ofme.ai._
