<!-- OF-ME:BEGIN managed — this section is regenerated when you update your tuning. Edit below the END marker instead. -->
# People — one file per person

The canonical home for **person records**: one file, one person, the single place
they are represented. Everything else that mentions them — a story, a reflection, a
letter — refers to that record instead of growing a competing biography.

## What belongs here, and what doesn't

A person record is **sparse, durable identity**: who they are, how they relate to
me, what they've been called, where the information came from. It is deliberately
not a psychological profile, and it is not a place to accumulate observations about
somebody.

| It is… | It goes… |
|---|---|
| who someone is, and how they relate to me | here, one file |
| what happened between us once | `stories/` — referencing this record |
| my current read on someone, in a specific context | with the work it came from, referencing this record |
| a name that walked past in one sentence | stays inline; no record |

**The last row matters more than it looks.** A record for everyone ever mentioned
turns this folder into a contact list I did not ask for, and it means my private
account of a stranger outlives the sentence it was in.

## This is the registry, not the relationship

**One record per person: who they are, how they relate to me, how to handle
them.** That is what this folder is for, and it is genuinely a roster — the
thing every other record points back through when it names somebody.

**What it cannot hold is what those relationships are actually like.** My
marriage is not a fact about one person. Neither is being somebody's parent,
nor what my household runs on, nor the thing we do every year without deciding
to. Those belong in a room of their own, and my guide will offer me one rather
than assume it — see [where a subject goes before it earns a room](../domains/README.md).

So: a person turns up here. What happens *between* us turns up there, and the
two point at each other.

## When a record comes from a one-sided source

Some of the most detailed writing anyone ever does about another person is produced
by an exercise with a **built-in polarity** — an inventory of resentments, a list of
people harmed, a grievance letter, a therapy worksheet, a legal statement, an exit
interview. These are gold: specific, dated, unflinching, and usually the only place a
relationship was ever written down at all.

They are also, by construction, **incapable of recording anything else.** A list of
people I harmed cannot contain the afternoon that went well. Build a person record
out of one and the person arrives permanently filed at their worst moment with me —
not because anyone judged them, but because the instrument had one setting.

**So when a record's sources are all one polarity, say so, and treat it as a gap
rather than a portrait.**

- **Name the instrument in `source_refs`,** never just the claim. "From the list of
  people I'd hurt" tells a later reader what kind of light this was written in.
- **Do not let the framing leak into `title` or `relationship`.** Those fields
  describe who somebody is, not the worst thing that happened between us.
- **Go looking for the other half, and file it when it turns up.** A warm email years
  later, a photograph, a note about something they were good at. One of these is worth
  more than another paragraph from the same inventory, because it is the only kind of
  evidence that can change the shape of the record.
- **Many of these relationships ended fine.** An inventory is written at one moment,
  usually a hard one, and the record keeps that moment long after the people involved
  have moved past it. **The archive does not update itself when a friendship recovers.**

This is the same failure as a reader who is told who I am and finds more of what it
was told, and as a count that reports whatever was imported most — one more way an
instrument's shape gets mistaken for a life's shape. The tell is the same: everything
in the record agrees with everything else, and nothing contradicts.

## Other people's privacy

**A person record is my account of somebody, not a fact about them.** They did not
consent to it, they cannot see it, and they cannot correct it. So:

- **Record what I said, not what you concluded.** Their part in my life is mine to
  record; their diagnosis, their finances, their marriage, and their private history
  are theirs, and they do not become mine by touching my story.
- **Ask before filing a third party**, especially a private one. Naming someone
  inside a story is not the same as recording them.
- The handling in [my sensitivity preferences](../sensitivity-preferences.md) governs every one
  of these files,
  and a person's own `sensitivity` field can only make it stricter, never looser.

## Front matter

The roster below is generated from these fields, so a record missing one shows a
dash and `scripts/build-derived.mjs` prints a warning. Use exactly these names —
a field named after the subject instead of `relationship` is the single most common
drift, and it happens *within* one session, so "be consistent" does not prevent it.

| Field | Required | Notes |
|---|---|---|
| `circles` | no | which parts of my life they belong to — see below |
| `known_from` / `known_to` | no | the years they were in my life — see below |
| `era_source` | with the above | `stated` · `inherited from <name>` · `era-word` |
| `record_id` | yes | `ppl-` + 8 hex characters, stable forever |
| `record_type` | yes | always `person` |
| `title` | yes | their **full name** where I know it — see below |
| `goes_by` | no | what I actually call them, when that is not the title |
| `full_name` | no | the longer legal form, when the title is shorter |
| `aliases` | no | every other name they answer to — maiden, married, an import's spelling |
| `relationship` | yes | one line of plain prose — **not** a variant named after me |
| `sensitivity` | yes | how carefully this record is handled; compound it when more than one person is exposed by it |
| `lifecycle_status` | yes | `active` · `historical` · `lost-contact` · `deceased` |
| `epistemic_status` | yes | `directly-reported` · `sourced` · `inferred` |
| `date_of_birth` | no | `YYYY-MM-DD` — see dates, below |
| `anniversary` | no | `YYYY-MM-DD` |
| `died_on` | no | `YYYY-MM-DD` |
| `source_refs` | yes | a list — where each claim came from |

```markdown
---
record_id: ppl-3f9a1c04
record_type: person
title: <their name>
relationship: <one line — who they are to me>
sensitivity: <e.g. private-family>
lifecycle_status: active
epistemic_status: directly-reported
source_refs:
  - <path to where this came from>
---

# <their name>

A few sentences of durable identity. What I'd need to know to talk about them
in a year.
```

## Names — the surname goes in the title, the short name goes beside it

**Title them the way a stranger would have to write it down; call them what you
call them in `goes_by`.** Somebody's file is easiest to name after the word you
use — *Mum*, *Dad*, a first name — and for a while that is fine, because you know
who you mean. It stops being fine the moment anything outside this house has to
find them: an address-book export, a birthday list, a photo caption, another
person with the same first name.

```yaml
title: Thomas Ashgrove Sr
goes_by: Tom
aliases: ["Thomas Ashgrove", "Tommy"]
```

**Nothing breaks when a title gains a surname**, because `related_people`
resolves through **all four** — title, `full_name`, `goes_by` and every alias.
A record that named somebody by their old short name goes on finding them.

**A name two people answer to resolves to neither.** Two uncles with the same
first name, two friends with the same nickname: the link is dropped and
reported rather than guessed,
because a wrong merge is two lives in one file and it is silent. That is the
reason to write the surname down while you know it — not tidiness.

**A name is looked up exactly as it was written.** One lookup, against those
four fields — no guessing at a shortened version, no stripping of anything you
added. So `Ana Reyes (my neighbour)` finds her if that is her title, and does
not if you invented the parenthetical for this one record. A bare first name
finds her only if her record says `goes_by`.

**Nothing about that failure is visible in the file**, which is why it is
checked. The record still lists the name, still reads as filed; the link simply
is not in the graph. `scripts/validate-records.mjs` warns on every name that
resolves to nobody or to two people, and says which record it probably meant —
one house had twenty-six of these, some years old, every one passing every other
check.

**An alias is not a second person.** A married name, a maiden name, a legal
spelling, the version an import happens to use: all of them belong in
`aliases` on the one record. A new name is a resolution, never a discovery.

## Dates — a day this record knows, or nothing at all

Three optional fields, and anything that reads them wants a full `YYYY-MM-DD`:
`date_of_birth`, `anniversary`, `died_on`. A partial date cannot set a
reminder, so a looser one is read as no date rather than half of one.

**A birthday is mostly a day.** Roughly two in five contacts in a real address
book have a month and a day and no year. Write **1900** as the year for those,
with `  # year unknown` after it so the file says so in words — a record that
claims somebody was born in 1900 is worse than one that admits it does not know.

**`lifecycle_status: deceased` is the one that has to be right.** Any surface
offering a list of people to choose from reads it to leave out the ones you have
lost, and a page offering to buy a birthday card for somebody who died is a
small cruelty a product only gets to commit once.

## Circles — how the list stops being one blob

Past a couple of dozen people this folder reads as an undifferentiated pile, and a
pile is not how anyone holds the people in their life. `circles` is the grouping:

```yaml
circles: [work, climbing-gym]
circles_source: inferred
```

**There is no list of circles, and that is deliberate.** They are invented from a
specific life — one person's are `work`, `neighbours`, `grade-school`, `choir`;
another's are nothing like that. A vocabulary shipped in this file would be somebody
else's life handed over as a schema, and everyone would quietly file themselves into
categories that came from a stranger. Write the word that is true and move on.

**One circle until a split is earned.** `work` does not become `work-london`
and `work-berlin` because two offices exist; it splits when the
single circle has grown too big to read AND something real separates the people in it
— a different city, a different meeting, a different school, a different address.
Subdividing early invents a distinction and then goes looking for people to put in it.
Same rule as `drawer/`: containers are earned.

**Fuzzy until confirmed, and it must say which it is.**

| `circles_source` | Means |
|---|---|
| `declared` | I said so, about this person. Never overwritten. |
| `sourced` | Read off something I made — an exported contact group, a team list, a roster. My grouping, but not my sentence about this person. |
| `inferred` | A guess from where this person shows up. **A question, not a fact.** |

`sourced` sits in the middle on purpose. A list somebody curated themselves is far
better evidence than a machine counting folders — and still not a statement about any
one person in it. The first such import came with its owner's own warning that one
list held more work people than the list named for work, which is what these are like.

**A source used to FILL a field can no longer TEST it — decide which job it has
before you use it.** The first curated list to arrive here was the only independent
check that existed on circles a script had already guessed. It was spent filling six
records, and the moment that was done the accuracy of the guessing became unmeasurable
— every remaining overlap between the two was a copy of one into the other. Nobody
chose that; nobody noticed there was a choice.

An imported list is usually worth more as a scoring set than as content, because
filling is cheap and can be redone later, while an independent check exists exactly
once. **Hold part of it back**, or at minimum record which records came from it, so a
later pass can tell what was inferred from what was confirmed. Same instinct as the
rule that a guess never becomes the input to another guess: keep the thing that can
falsify a claim separate from the thing that produced it.

An inferred circle is worth having — it makes the list navigable on day one instead
of after an afternoon of filing — but it is the AI's guess about somebody's life, so
it is offered rather than asserted, and one guess never becomes the input to another.
When I confirm one, set `declared` and stop asking.

**A person can be in several,** and the interesting ones usually are. Someone who is
both `work` and `choir` is a different kind of relationship from someone who is
only one, and that is visible only because both were written down. Circles are tags,
not folders — nothing is mutually exclusive and nothing has to pick a primary.

**A free vocabulary grows synonyms; check before inventing a word.** The rule against
two field names for one field applies to values too, and it is easier to break here
because each circle is written on a different day. One world ended up with `work` and
`professional` as separate circles holding the same kind of person — one came from a
folder name, the other from an exported contact list, and nothing read both. Before
writing a circle, look at the ones this world already uses and reuse the word if it
means the same thing.

## When someone was in my life

`known_from` and `known_to` are years. They describe the **relationship**, not the
filing — and that distinction is the whole reason the field exists.

**Do not compute this from record dates.** The obvious shortcut is to average the dates
of the records naming somebody. It fails badly: in one world 44 of 65 dated records
took their year from the day the note was *typed*, so a thirty-year friendship rendered
as three years old and everybody piled into the last two years. **A date on a record is
when it was written down. A person's era is when they were there.** Those are different
questions and only one of them is about a life.

The good news is that the answer is usually already written, in `relationship`, in
plain prose — *"ages 3 to 10"*, *"girlfriend ~1998–2001"*, *"about three years,
2023–2026"*, *"closest friend from adolescence; ~34 years known"*. Read it from there.

| `era_source` | Means |
|---|---|
| `stated` | A year range, or an age range anchored to my birth year. My own account; outranks everything. |
| `inherited from <name>` | The relationship runs **through** somebody else — "her mother", "his brother", "married to". Take their years. |
| `era-word` | "childhood", "high school", "college". A decade wide, and marked so nobody mistakes it for a date. |

**Inheritance beats era words, and getting that order wrong is a real bug.** Somebody
recorded as a childhood friend's mother should take that friend's actual years, not a
generic childhood range — the pointer is specific and the era word is not. Chains work:
if I knew someone from 8 to 13, I knew their mother then, and their sibling too.

**Anchor age phrases to a birth year found in the house, not to a constant** — and take
it only when two sources agree, because every age phrase downstream depends on it and a
single typo moves a whole life sideways.

**The era vocabulary is small on purpose, and it is not the same thing as the circle
vocabulary.** Two words get shipped here — **life stages** (grade school, high school,
college) and **kinship** — because those are the only ones that mean the same thing in
every life. A run of school years is a run of school years anywhere.

Everything else — a club, a team, a congregation, a city, a band, a job — is a **named
period, and it belongs to the person, not to this file.** The template ships none of
them and never will: the moment it lists `sport` and `religion` it has decided which
lives are normal. Write the period the way it is actually called and give it years.

**Do not date a period by counting mentions of it.** It is the obvious shortcut and it
fails in a specific way worth knowing: somebody talks about a place for decades after
leaving it. Measured on one world, a university came out as 1999–2004 when dated by
records of things that HAPPENED, and 2000–2026 when dated by every record that
mentioned it — the second number is not a university era, it is a lifetime of telling
stories about one. **A mention is not a membership.**

**Kinship only counts when it is kinship to me.** "Her mother", "his brother", a friend
described as "a husband and new father" — those are other people's families, and a
matcher that reads any kinship word will mark all of them as lifelong relations of
mine. And a descendant did not arrive when I did: a child's years start at their birth,
so if that is unknown, record the earliest year they actually appear and say the start
is a floor rather than a fact.

**Leave people unplaced when the record does not say.** An unplaced person is a real
finding: it means this world knows who they are and not when. That gap is worth seeing,
and filling it with the average of an archive hides it behind a number.

## Confirming circles — what to check, in order

Inferred circles are guesses, and confirming all of them one person at a time is the
slowest possible way to fix them. Two passes, cheapest first:

**1. Confirm the VOCABULARY (minutes, and do it first).** There are only ever a
handful of circle names, and every wrong one is wrong across everybody in it — so a
single bad word costs more than a dozen bad assignments. For each circle, one test:

> **Would the people in it recognise each other as belonging to the same group?**

If yes, it is a circle. If no, it is a **topic** — something the person does, not a
set of people — and it belongs in a record's `dimensions`, not on a person. A circle
named for an activity is the usual way this goes wrong, because a script counting
where somebody gets *written about* cannot tell the riding club from the family
members who happen to appear in the ride notes. Both land in the same bucket and only
one of them is a circle.

**2. Then correct ASSIGNMENTS, and only the ones the vocabulary pass made suspect.**
After a bad circle is removed or renamed, most of what is left is either obviously
right or obviously wrong at a glance down the roster. The ones worth real attention
are people carrying **more circles than they should** — a script that reads folder
share gives the people who appear most often the most circles, so the closest
relationships accumulate the most noise. Someone's spouse is the likeliest record in
the world to have picked up a circle they do not belong to.

**Correcting one is not extra work — it is the point.** A corrected circle becomes
`declared` and is never guessed at again.

**The roster is generated.** `scripts/build-derived.mjs` rebuilds a table of every
record in this folder on each push and maintains it below, under `## Roster`. Edit a
person's front matter, never that table — it is overwritten every time.

**Its `Mentions` column is a text match, not a fact about your life.** It counts
files containing a name this record answers to — including the bare first name,
which is claimed automatically. So a brand-new record for somebody barely
written about can arrive showing dozens, because a colleague, a musician and a
character in something you quoted share that first name and none of them has a
record here to declare the clash. The number is a search result. Read it as one,
and trust the writing over the count.
<!-- OF-ME:END managed -->

## My own notes on people

_Anything you write below this line is yours. Updating your tuning replaces the
section above and never touches this part. Every AI that reads this file follows
what you put here — including your guide on ofme.ai._

## Roster

<!-- of-me:roster:begin — generated by scripts/build-derived.mjs -->

_0 records. Generated — edit a person's front matter, not this table._

| Record | `record_id` | Name | Mentions | Relationship | Sensitivity | Status |
|---|---|---|---|---|---|---|

<!-- of-me:roster:end -->
