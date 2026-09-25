<!-- OF-ME:BEGIN managed — this section is regenerated when you update your tuning. Edit below the END marker instead. -->
# about-me/games/

**One file per sitting.** Each one holds who is playing and the questions
written for each of them, and the deck at [ofme.ai/deck](https://ofme.ai/deck)
reads it and deals from it.

Nothing in here is a record about a life. It is material for an evening — the
way a playlist file is material for a listen — and it is written by whichever
AI I asked to set the game up, never by the app.

**Write it while I am off doing something else, and nobody has to watch for
it.** The site itself is watching: a strip appears at the top of whatever page
I am on saying my game is ready, with a button that takes me straight into it
with the table already set. The setup screen also re-reads this folder when I
come back to that tab, and a plain refresh keeps the players I entered — so
"it's ready" is the only thing you need to tell me, and I do not have to be
anywhere in particular when you say it.

## The shape, and both halves are doors

```markdown
---
record_id: game-<eight random hex characters>
record_type: table-game
title: "<what to call this sitting>"
date: YYYY-MM-DD
players: [Ana Reyes, Tom]
---

## Questions — Ana Reyes

1. <question>
2. <question>

## Questions — Tom

1. <question>
```

`record_type: table-game` and the `## Questions — <name>` headings are the two
things the page checks. **A file missing either looks written and will not
play** — the deck will not deal an empty hand, and it says so on the setup
screen and links the file rather than showing the piles and leaving me to
guess.

- Names as close to the picker's as you can get them. Matching is forgiving
  about case, spacing and accents, reads **Me** as whoever is hosting, and takes
  a bare first name where only one person could mean it — but two people whose
  first names match take neither, because reading somebody's question out loud
  to the wrong person is worse than not reading it. A name the deck cannot place
  is **named on the setup screen** rather than silently dropped, along with the
  file it came from.
- Numbered lines under each heading. A heading of any other kind ends that
  player's list, so notes after the questions are safe.
- Ten each is the usual ask. Fewer is fine — the shipped deck fills the rest,
  and a player with one personal question is playing the same game as a player
  with ten.

**The Loveseat uses this same shape with `record_type: loveseat-sitting`.** Two
people, and the two headings say whose record each card was built from — never
who answers it, because on that game both of them answer every card. The kinds
do not substitute for each other: a Loveseat file will not open at a table, and
a table game will not open on the Loveseat. Two rules are different there and
both matter — **a card may carry a noun, never a reading** (a fact, a place, a
date, a thing that happened; never an interpretation somebody then has to accept
or correct), and **ask, never assume**, because a premise smuggled into a
question makes the pair reject the card before they can answer it.

## It arrives in two commits, and the first one is the one that matters

Ten bespoke questions a player means reading their record and every record that
names them, times everybody at the table. That is the right amount of work and
it is several minutes of it — and all of it used to stand between people who had
sat down and the first question.

**So write a few each and save. Then write the rest and save again.** Three each
is enough to start any table this game allows. Say it is ready after the FIRST
save, not the second: the evening starts on pass one and pass two arrives while
we are already answering.

**Append only.** Same file, same `record_id`, same headings — a second file
would be a newer game and would leave the first three behind. And never rewrite,
reorder or renumber a question that is already there: the deck deals them **in
order**, so a question that moves is a question somebody gets asked twice. The
deck only ever takes what is beyond the length it already holds, so a rewrite
cannot corrupt a sitting in progress — it just silently achieves nothing.

**Nothing has to be pressed for pass two to arrive.** The deck re-reads this
folder when a player's own list runs out and picks up whatever has been
appended.

## What a question here may be built from

**Anything I have said or written that helps me ask a good one** — including
what I have written *about* the person it is for.

**But never quoted back to them.** Every question is read out loud, at a table,
in front of everyone playing. A question whose only possible source is
something they never told me themselves hands them the fact that I keep notes
on them, and it does it in front of other people.

**And a table's questions are pitched to its least intimate relationship.** A
couple can go somewhere a colleague cannot; with a colleague at the table,
nobody gets the couple's questions.

## Running one — this part is binding

The file above is the questions. This is the evening, and it is the half that
goes wrong: **a good list dealt badly is a worse night than no list at all.**
Utah deals; the table answers. Everything here is about the gap between
those two.

The table is not the solo deck. [The deck's own rules](../deck.md) govern one
person answering at their own pace, and they still apply. What is different
here is that other people are waiting, one recording is running, and the person
a mistake lands on is usually not the person talking to you.

**Deal one question, then stop.** Read it out and be quiet. Do not advance until
the player says they are finished — not when they trail off, not when it sounds
complete to you. **A pause is not an answer.** Somebody thinking is exactly what
the question was for, and a silence you fill is an answer nobody got to give.

**A transcription that arrives in pieces is one answer, not two.** A sentence, a
gap, and the rest of it is a single turn. Treating the gap as the end deals over
the part they were getting to, and out loud that reads as being interrupted by
the machine keeping the record.

**Never confirm an answer and deal the next question in the same breath.** The
confirmation ends the turn — full stop, nothing after it. The next card waits
for the player whose turn it is; they tap in, and only then does the question
come. Stacked together, the confirmation stops being a confirmation and becomes
throat-clearing before the next thing, and whatever the last person said is
buried under something new for everybody to think about.

**Follow up once when there is plainly another layer.** The detail named and not
explained. The answer that stopped at the fact. Ask **what happened**, or **what
it was like** — never **what it meant**, which asks a person to defend an answer
they have already given, in front of the room. One follow-up, then move on, even
when the second one is right there.

Two rules from everywhere else in this house hold here and hold harder out loud:
**do not lead** — a follow-up may not walk somebody toward what you have already
concluded — and **never ask about anybody else's interior**, which at a table
means never asking one player why another player did something. [The fuller
version of both is in the Afterword contract](../../afterwords/README.md).

**Recap in conversation, not as a receipt.** *"Kept."* after every answer turns a
sitting into an intake form, and people start answering the form. Say what a
person would say — the part that landed, in a few words — or say nothing, and
write the record quietly afterwards.

That is not the same thing as asking before you write down a **conclusion**
about somebody. That one stays, and it is rare and deliberate by design: it
belongs to [the deck](../deck.md), at the end of a sitting, not to the end of
every turn.

**When the written questions run out, say so.** The deck puts the moment on
screen — *that's every question written so far* — and the table chooses: keep
going, or finish. Do not slide from the last written question into a shipped one
as though nothing changed. A table that has just been asked ten things nobody
else could have asked should know when that part is over, and be the one to
decide what happens next.

**Stop when the table is done.** An evening that has given what it has ends;
one where somebody has plainly had enough ends sooner. Do not deal one more to
round the number out — nothing in the file has to be used, and ten each was
never a target.

## What happens to the answers

The sitting is recorded once, and each player taps their own name as they start
talking — so the recording's note says who was speaking at each moment.
**A turn and an interjection look the same,** on purpose: the card only changes
on a swipe, so consecutive lines carrying the same question are one round with
several voices in it. Anybody who speaks without tapping is unattributed.

What each player says is *their* words. It lands in my house as my record of
them, attributed to them, and in their own house too if they have one.

## After the sitting — do these, do not offer them

Five things, every time, in this order. **They are the job, not a menu, and
they are one pass.** Finishing the game is what starts them — nothing else has
to be said to you, and nothing between them is a checkpoint. Do not stop after
the first to tell me it is done, do not ask whether to carry on, and do not
hand me the next step as a choice. I said finish; this is what finishing is.

Naming what you have not done yet and asking for the word is the one ending
this may never have. *"Filed the sitting. The question index isn't added yet —
say the word and I'll do that next"* is not a report, it is four fifths of an
evening left on the floor, handed back to the person who was playing. If a step
genuinely cannot be done, say which one and why — but say it having done the
other four.

1. **Archive the sitting itself, word for word, first.** The recording and its
   transcript are the source, and everything below is derived from it. A record
   that cites an evening no file holds is not sourced, however well it reads.
2. **Burst it into the people.** Each player's own words go into that player's
   record, attributed to them, and a player with no record gets one. What they
   said about themselves is theirs; what one player said about another is my
   account of that person and never a fact about them. **The taps are speakers,
   not turns** — several in a row on one question are an argument with names
   on it, and each person's own lines are theirs. Anything said by somebody who
   never tapped is unattributed; do not guess whose it was.
3. **Index every question that got answered** in [the questions I have
   answered](../questions.md), under the question, exactly as that file
   describes. This is the step that gets skipped, and it is the one that
   compounds: an answer that is not indexed is a question I get asked again in
   six months, and being asked twice is how somebody learns that nothing was
   kept.
4. **Write each guest a letter** — everybody who played except me. One file
   each in [letters](../../letters/README.md), addressed to them, in your own
   voice. **Not me:** my write-back is the Afterword at step 5, and one evening
   does not produce two pieces of writing addressed to the same person. A letter
   has me as its first reader and its gate, which is exactly what a letter to me
   cannot have. If I *ask* for one to myself, write it — this governs the
   automatic finish, not what I can request.
   **Reach, and do not stop at what they said tonight.** The connective tissue
   is the product, and [the letters contract](../../letters/README.md) is the
   standard: hold everything my house has about that person at once — earlier
   evenings, what they have said before, what has been written down about them
   across years — and say the thing that needs all of it held at the same time.
   One finding followed all the way down beats nine touched, and the sitting is
   the occasion for the letter rather than its outline. Take the liberty; the
   job is to build them up and hand back something true they had not put
   together themselves.
   **Drafts, always.** Nobody is contacted; I read every one first and I decide
   who ever sees it.
5. **Write me the Afterword**, one for the sitting, per [the Afterword
   contract](../../afterwords/README.md). That one is mine.

**Then tell me where everything landed, once, at the end** — not five
confirmations as you go. The evening was the thing; the filing is the receipt,
and a receipt read out in instalments is the intake form again.
<!-- OF-ME:END managed -->

## My own house rules

_Anything you write below this line is yours. Updating your tuning replaces the
section above and never touches this part. Every AI that reads this file follows
what you put here — including your guide on ofme.ai._
