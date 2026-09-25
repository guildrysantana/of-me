<!-- OF-ME:BEGIN managed — this section is regenerated when you update your tuning. Edit below the END marker instead. -->
# Lists — what I mean to do

Everything else in this house is a record of what happened. This is the one folder
about what hasn't yet.

One file per list. Each is plain markdown with a title at the top and checkboxes
under it, so it reads correctly anywhere markdown is shown and stays editable by
hand, by me, or by my guide.

## The four states

A checkbox with two states can only say started or finished, and most things are
neither. These four are the ones worth telling apart:

- `- [ ]` — not started
- `- [/]` — under way, real work left
- `- [~]` — nearly there; finishing rather than building
- `- [x]` — done

`[ ]` and `[x]` are ordinary markdown checkboxes. `[/]` and `[~]` are ours, and
anything unrecognised is read as not-started rather than treated as an error —
this file is mine to type into, and a typo must never cost me the page.

## Shape of a list

```markdown
---
record_type: task_list
title: Before the trip
---

## Booked
Things that are settled.

- [x] Flights
  - [x] Aisle seat on the way out

## Still to do

- [/] Somewhere to stay the first night
- [ ] Ask Dad about the car
```

`##` headings are sections. A line of prose under a heading is that section's
note. Bullets indented under a task are its details, and carry their own state.

## Why the list exists, and what it adds up to

A list that came out of a real conversation carries a reason, and the reason is
often worth more than the checkboxes. So a list has room for **its own writing,
before and after the tasks**:

```markdown
---
record_type: task_list
record_id: list-9f21ab03
title: Before the trip
---

This started as a question about whether to go at all, and the answer turned
out to be *yes, but shorter*. Everything below only makes sense with that.

## Booked
Things that are settled.

- [x] Flights

## Still to do

- [ ] Ask Dad about the car

What this really buys is ten days with nobody expecting anything of me.
```

**Position is the whole grammar** — no marker to remember, nothing to close:

- **before the first `##` heading or first task** → the list's opening words;
- **after the last task** → its closing words;
- **one line under a heading, before that section's first task** → still that
  section's note, exactly as before.

Both halves are ordinary Markdown and may be several paragraphs. Use `###` and
below inside them if you want a subheading; `##` starts a new task section.
Prose in the MIDDLE — after one section's tasks, before the next heading —
belongs to neither and is not kept, so closing words go at the end.

**This is not a `## Context` section.** A section is a container for tasks: it
gets a fold control and its items are counted in the tally. Prose parked in one
is a paragraph wearing a checklist's furniture, and a paragraph written as a
first task gets ticked.

**`record_type: task_list` is what earns the list its view.** With that line,
opening the file on ofme.ai gives me the real thing — the four states as controls
I can click through, my own text editable where I read it, saving straight back
here. Without it the file is still a perfectly good list and still mine, but it
renders as plain markdown: the `- [ ]` marks sit there as punctuation and
nothing is tickable.

So put the line in. It is one field, it costs nothing, and it is the difference
between a list I can use and a picture of one. Nothing else about the file
changes — the same markdown, readable in any editor, with or without it.

## Importance, urgency and effort

Any task can carry up to three more numbers, 1 to 10 each, in a note at the end
of its own line:

```markdown
- [ ] Call the accountant (importance 8, urgency 3, effort 4)
```

On ofme.ai a list has a second look — **Priority Matrix** — that plots every
task with both importance and urgency as a point on Covey's four quadrants:
urgency left to right, importance bottom to top, 6 and above counting as high.
Those two
decide where a task sits, and nothing else does. **Effort** is how big a job it
is — 1 is very little, 10 is a major undertaking — and it decides only how big
the point is drawn; the number is also written beside the task, so the size is
never the only way to read it. Effort never moves a task, never sorts one and
never hides one. That look is also where the numbers get set, with a slider for
each on every task, or by dragging a point — which moves its importance and
urgency and leaves its effort as it was. The file keeps the note above either
way, so it reads anywhere and the square can always be rebuilt from it.

Every number is optional on its own: a task with importance and urgency and no
effort is on the square at the ordinary size and says so; a task with only an
effort is sized but not placed; a task with none is simply not on the square.
Typed by hand, any order or spelling near this one works —
`(effort 4; urgency 3, importance 8)` — and the next save writes it back in
the one order shown here. A note that says a number twice, or says anything
else, is my own words and is left alone. Only a task carries scores: a detail
indented under one keeps its words whole and is not plotted.

## A list I want kept out of this house

Some lists are work. A list of next steps on a customer account is my employer's
business as much as mine, and **anything committed to this repository is in its
history for good** — so for those, the words do not come here at all.

**If a tool called `keep_out_list` is on your list, that is the whole route.**
Give it a title and the list as markdown and it is done — no key, no shell, no
network of your own. I will ask for this in plain words: *"a confidential work
list for the Northwind account"*, *"keep this list out of my house"*. That is
the request, and the tool is the answer to it.

No such tool but a shell? `POST $OFME_BASE_URL/api/lists/held` with my agent
key and `{"title": "...", "body": "<markdown>"}`. Neither? **Say so** — never
make an ordinary list instead and offer to move it later. There is no moving it:
once the words are committed here they are in the history for good.

The words go to **my own file storage**, never here. This house keeps a marker
saying a list exists, where it lives, and **nothing about what it is about** —
not the title, not the subject, and not in the filename, which is the record's
own minted id. Being in my storage and not in my house IS the hold, exactly as
it is for a recording I mark confidential.

**It is still an ordinary list.** It opens on ofme.ai in the same view, with the
four states and my own text editable where I read it, and saves back to storage.
What it does not have is a share link or a history — a list deliberately kept
out of the repository is not one to hand somebody a link to, and there are no
commits to read a history from.

**If that comes back `no_media_store`**, my words live in GitHub and I have not
connected storage for files. Say so in one line and stop. **Never fall back to
writing it here** — this house is the one place it must not go, and a file
committed by mistake cannot be taken back, only hidden.

**Only when I ask for it.** A list is not confidential because you judged the
subject sensitive; it is confidential because I said so, or because it is
plainly somebody else's business rather than mine. Ask if you are unsure —
putting an ordinary list where I cannot share it is as wrong as the reverse.

## A list is a record, so it has an id

Every list you create gets one, on the same convention as everything else here
— `record_id: list-9f21ab03`, a short kind and eight random hex characters.

The id is the handle: it is what a share link points at and where a picture is
kept. A list written before this existed has none, still works exactly as it
always has, and **is left alone** — an id is what other records cite, so one is
never rewritten and never added behind my back to a file I am already using.

## One object, if the list holds one

A list can carry a drawing on the same terms as every other record here, and
the terms are not a list feature — they are the house's, and they do not change
for this:

```yaml
illustration_object: a roll of packing tape
illustration_surface: resting on a plain surface   # optional, placement only
```

**One real, concrete object that is actually in the telling.** Never a scene,
never a person, never a symbol you thought of, never an arrangement of things
that says what the list MEANS. The style is generated when it is drawn, so
nothing about how it looks belongs in the line.

**And the empty answer is a real answer:**

```yaml
illustration_object: ""
```

That says *I read this and no single object belongs to it*, which is different
from never having considered it — and it is the ordinary outcome. Most lists are
a list. When you have composed one out of a real conversation, decide
explicitly and write one of the two; when you are just adding a task to a list
that exists, this is none of your business and you leave the line as you found
it.

**The bytes never come here.** A picture lives in my own file storage at
`illustrations/<record_id>.png`, never in this repository — anything committed
here is in its history for good.

## For my guide

Keep these current the way you keep the rest of the house current. Mark something
done when I tell you it is done; add what I say I need to do; never invent a task
I did not ask for. A list I did not write is a list I will stop trusting.

**Write the reason down when there is one.** If a list came out of a
conversation, the opening words are where the conversation goes — in my voice
where I gave them, yours where you are summarising, and never so long that the
list is buried under them.

If I tell you how important, urgent or big something is, write it as the note
above — a number I gave you, never one you worked out for me. That goes for
effort most of all: never estimate how much work a task is, and never fill in
an effort on a task that has none. Where I say it in words, ask for the number
or leave the field unset; a guessed score is a judgement about my priorities
that I will read back as my own.
<!-- OF-ME:END managed -->

## My own notes on lists

_Anything you write below this line is yours. Updating your tuning replaces the
section above and never touches this part. Every AI that reads this file follows
what you put here — including your guide on ofme.ai._
