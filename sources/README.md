<!-- OF-ME:BEGIN managed — this section is regenerated when you update your tuning. Edit below the END marker instead. -->
---
record_type: folder-readme
title: sources/ — where everything I said came from
index_note: "the source registry: one manifest per source, the evidence every claim in this house traces back to"
---

# sources/

**Every claim about my life has to trace back to something in here.** This
folder is the registry: one file per source, giving it an identity, a locator,
where it came from, how sensitive it is, and which records were derived from it.

A manifest **references** a source. It does not replace it. The point of the
distinction is that you can always tell what is backing a sentence — and, just
as importantly, when nothing is.

## The folders inside it

| Folder | What lands there |
|---|---|
| `dictations/` | my own voice, recorded and transcribed |
| `contributions/` | somebody else's telling, given once through a link |
| `written/` | something I typed rather than said, in the moment |
| `imported/` | documents I brought in from somewhere else — a notes app, an export, a folder of files |
| `artifacts/` | the thing itself when it is not prose — a scan, a photo, a report, a dump |
| `extraction/` | the record of a bulk read: which batch, how many came in, what was made from them |

**The first four hold what I said or wrote; the last two hold everything around
it.** An artifact is evidence I cannot re-say — a letter photographed, a health
report, an export nobody is going to retype — and an extraction record is the
receipt for a pass over a pile of them, so a claim can be traced back not just to a
source but to the reading that produced it.

A file sitting loose in `sources/` itself is a manifest for a source that lives
**outside** this house — an account, a service, a stack of paper. It is a pointer,
not a copy.

**Nothing about me is concluded in here.** This folder holds what I said and where
it came from. What it *means* belongs in a room — and that record points back to the
file in here that backs it.

## The recording is the source. The transcript is a copy of it.

For anything under `dictations/` and `contributions/`, **the audio is the
primary artifact and the words are derived from it.** The recording is kept, in
full, and it is reachable from the record itself: open the record and the
player is at the top of the page, one block per part, above the words it
produced.

This matters when you are reading a transcript and something does not parse.
Machine transcription mishears names, drops the ends of sentences, and
occasionally invents a word. **The recording settles it and the transcript does
not.** If a part failed to transcribe, the record says so where that part's
audio is — the words below simply skip that stretch, and you should not read the
jump as something I did not say.

Two things follow from that, and both are rules rather than suggestions:

- **Never treat a transcription artifact as evidence of anything.** A garbled
  clause is a microphone problem, not a person trailing off.
- **A contribution is testimony, not truth.** It is evidence of what that person
  says, exactly as they said it, and it never becomes a fact about me by being
  written down. Their voice being audible does not upgrade it.
- **And neither does anything another member shared with me.** A letter or an
  Afterword somebody deliberately sent lands in `sources/received/` and is held
  exactly the same way: their account of themselves, never a fact about them, and
  **never my own words** — so it can never pay for a claim about my past, and two
  of them can never add up to a pattern about me. **A received Afterword
  is stricter still.** It is that person's guide's reading of them, it arrives
  `epistemic_status: derived-interpretation`, and the rule an Afterword carries
  in its own house travels with the copy: **nothing may cite it**, including
  another Afterword. Being in `sources/` does not make it a source — a folder
  name is not a promotion.

## Bytes: where a file actually lives, and how it gets here

**Bytes never go in my repository — not a photo, not a scan, not a recording.** A
file committed to git is in every clone of it forever, so that mistake cannot be
undone later. Files go to my connected storage, or to Of Me's own if I have not
connected any. **Say which one it landed in** when you write the record: a
locator that doesn't name the place is how a file goes missing between the upload
and the paragraph about it.

**So when something should be KEPT, ask me for it with a link.** The
`upload_link` tool gives you a URL, you give the URL to me, I tap it and pick the
file. It goes straight into my storage at full quality, one file per link, and
the link closes after that.

**Say what you are asking for and hand it over plainly** — *"here's a link to
drop that screenshot in"* — and **never describe it as something you did.** I am
the one uploading. If it does not come back, the file is still owed and the
record has to say so.

**Never try to carry the bytes yourself, and never ask me to paste a key.** Every
door a model can call takes file content inside the tool call, so the file passes
through your own reply — a 400 KB scan is over half a million characters and
arrives corrupted or shrunk past reading. The link exists because that cannot be
fixed by trying harder.

**If the tool is not there, say so and tell me I can add it from my own page.**
Don't leave me thinking it is impossible, and don't invent another route.

## Reading rule

- **In-repo primary** sources can be read directly. Go to them and verify;
  named-anecdote retrieval keys resolve into them.
- **External** sources cannot be re-retrieved from this house. Their summaries
  are all there is — weight them as derived, partial, and, for the ones I wrote
  about myself, persuasive rather than validated.
- **Machine transcripts** are primary interaction artifacts that may contain
  errors. Treat exact wording cautiously when the output looks malformed;
  emotional and relational readings of them remain explicitly derived.

## My own reflections do not need a manifest

Anything I authored in this house directly — reflections, the working notes
about me under `about-me/` — is primary self-report. The file **is** the source.
Do not create a manifest that points at a file sitting in the same repository.

**The one pointer at files inside this house is the receipt in `extraction/` for
documents brought in together.** When an import lands, one record there says which
files arrived, how many were folded into a page of short notes, and — once a pass
has read the batch — what was made from them. Its `derived_records` stays empty
until then, which is how anyone can tell an unread import from a read one.

## When an Afterword stops partway

Every focused submission gets read back to me: Utah writes an Afterword into
`afterwords/` naming what changed. That write-back is a separate step from filing the
source, and it can fail on its own — a pass that is interrupted leaves the
record here intact and no Afterword beside it.

**That is not a lost recording and it must never be described as one.** What I
said is archived, the transcript is committed, and the records the pass wrote
are written. The only thing missing is the write-back, and it can be run again
from the Afterwords page, which lists any that stopped and offers to re-read them.

So: if a source in here has no Afterword, say plainly that the write-back has not
happened and point at `https://ofme.ai/afterwords`. Do not tell me the recording
failed, and do not quietly write a replacement Afterword of your own — a second one
about the same telling is a duplicate, not a repair.

## Linking to my files

**Every link to a file in my house is written as `/house/` + the path from the
top of the repository**, with no `../` and no `.md` stripped:

```markdown
[The recording](/house/sources/dictations/<the-file>.md)
[Their account of it](/house/sources/contributions/<the-file>.md)
```

Relative markdown links are correct in a text editor and dead on the page.

**If my records already say `/rooms/`, leave them.** That was this page's
address until 2026-08-11 and every one of those links still opens — they
redirect permanently. Nothing needs rewriting, and rewriting them would touch
hundreds of files to change something that already works.

## What a manifest holds

```yaml
---
record_id: src-<id>
record_type: source
source_kind: <what kind of thing this is>
title: "<what it is, in plain words>"
location: in-repo | external | mixed
locator: "<where the thing itself actually is>"
epistemic_status: <how much weight it can carry>
sensitivity: <how it should be handled>
provenance: "<how it got here, and through whose hands>"
derived_records:
  - <records written from it>
---
```

**`location` and `locator` are the two that earn this folder its existence.**
Everything else can be reconstructed by reading the file; those two are the
answer to "can I go and check?", and a manifest that leaves them vague has
recorded a source without making it verifiable.
<!-- OF-ME:END managed -->

## My own notes on my sources

_Anything you write below this line is yours. Updating your tuning replaces the
section above and never touches this part. Every AI that reads this file follows
what you put here — including your guide on ofme.ai._
