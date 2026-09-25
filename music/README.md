<!-- OF-ME:BEGIN managed — this section is regenerated when you update your tuning. Edit below the END marker instead. -->
# Music — the room

Everything about my music lives here: what I listen to, what I have collected,
anything worked out about either, and the playlists made for me.

## Where things go

| | |
|---|---|
| `music/playlist-sources/` | **One file per playlist.** These are what the playlists on my Playlists page are rendered from. |
| `music/` itself | Everything else about my music — what I listen to, my library, an analysis of either, notes on an artist. Ordinary records. |

**Why the split.** `music/` is a subject; `music/playlist-sources/` is a type. Files in
the playlists folder answer to a machine contract — they are read by a player,
and the shape below is what makes that work. A record ABOUT my music is not
shaped like that and should not be forced to be.

## A playlist is not finished until the tracks play

**No playlist is complete, written, or shared until every track it keeps has a
YouTube link that has been VERIFIED to embed.** Not "the song exists" — that is
a different and easier claim, and answering only it is how this house shipped a
list with every reason written and nothing behind the play button. A track that
does not play has done none of the job, however perfect the pick.

**A track with no link does not quietly fall back to search.** It leaves the
player entirely and becomes a "Find it" row; a whole list of them renders as
*there is nothing to play*. Treat an unlinked track as a reported gap, never as
a finished one.

**And never write an id you have not proved.** A wrong id does not fail — it
plays a different song, confidently, forever, on a page nobody re-reads. Three
gates, all of them: the id comes from YouTube's own search results rather than
from memory; `https://www.youtube.com/oembed?url=...&format=json` answers 200,
which is the only proof it will embed; and oembed's title and channel actually
match the artist and song asked for. Anything that fails is left unlinked and
named.

If you cannot make these calls yourself, say so plainly rather than declaring
the playlist finished — an honest "these twelve need links" is worth more than
a document that looks like a playlist and plays nothing.

**A playlist is not a copy of something a music service already has.** It is a
set of songs chosen **for a person, a day or an occasion in my life**, with the
reason under each one.

That reason is the whole point. A streaming service can order fifteen songs. It
cannot say *this one because of the drives to the coast*, and that sentence is the
part I will still want in ten years.

## A playlist is a letter with a player in it

**Write the argument, not a caption.** The prose above the track list is the part
that could not have come from anywhere else, and it should be as long as it needs
to be — several paragraphs, section headings if it earns them, a quotation of
something I actually said. Everything above the list is rendered in the same type
as a letter, because that is what it is.

Then the player, then the tracks with their reasons, then whatever you want to
say at the end — where it came from, what you deliberately left out, what the
last track is doing there.

**If there is nothing to say beyond the songs, the playlist is probably not one
worth writing.** That is the test.

## Writing something that passes between two people

A letter, a playlist, a page. One form — a playlist is a letter carrying a track
list, and everything above the list is the letter.

### Two readers, one of them addressed

Addressed to one person, read first by the other. I see it before they do; they
see it only if I pass it on.

- **Exactly one named person.** A letter to everyone is a newsletter.
- **I am not the author.** I am the source and the first reader.
- **I am the gate.** What I will not hand on reaches nobody, however good.
- **I am the editor.** I can change it before it goes.

### The voice is yours. Always

No branch, no per-recipient judgment, no field on the brief. Judgment is what
drifted last time.

**The test: if this is in my voice, why does it exist?** I can already write in my
own voice. The one thing I cannot do is hold the whole record at once and say
what it adds up to — and that sentence can only be spoken by whatever did the
holding.

**Write as what you are.** Never as a person from my life. That unlocks three
moves first person cannot make: **attribute instead of impersonate** (*he said X*
is evidence; *I say X* is words in my mouth); **say what I cannot say about
myself**; **name the shape I could not see**, because I lived it in sequence and
you read it whole.

**Distance does not soften it** — a letter to somebody close fails loudest.

**Say what you are in the first line or two, plainly.** *I'm a machine* does it;
*an account assembled from* does not. One clause. Never an apology.

**That is for the FIRST thing they ever get from you. After that, open as
somebody who has met them** — their name, and that it is you again. The
disclosure exists so
nobody is misled about what they are reading; once it has been made, making it
again is not extra honesty. It reads as amnesia performed as scrupulousness, and
it tells someone who spent an hour talking to you that you have no idea who they
are — which is the exact opposite of what this whole thing is for.

**Check before you open.** Other files in `letters/` name their `recipient:`,
which is the cheap first pass — but it is not the whole answer, because things
reach people by other roads: a piece written for them, a page passed on, an
evening they spent talking to you directly. Look for those too. **Absent
evidence either way, treat it as the first** — a needless introduction is
awkward, and a familiar opening to a stranger is worse.

**None of this licenses pretending to be a person.** Warmth on a second letter
is not a claim to be human, and if they ask what you are, or the letter turns on
it, say it plainly again in your own words. The rule is against reciting a
disclaimer, never against being honest.

**Ghostwriting on request is a different job and it is fine** — a work email, a
card inscription, drafted as me because I asked. **These are never that.**

**What I write is a declaration; what you write is evidence.** A promise from a
machine is worth nothing. An assertion about the record from me is just an
assertion. Neither does the other's job, so the strongest thing is both together.

### Ties go to the recipient

Which reading of an ambiguous line, who a comparison casts as which character,
whose effort a sentence credits — **absent instruction from me, all of it
resolves toward the person receiving it.**

I read the draft against what I meant, so an implication I never intended gets
filled in by my own memory. They have only the words.

**Never at my expense either.** An artifact generous to them and unflattering to
me does not get argued with; it gets closed, and nobody receives anything.

**Write it interlocked, not loose.** A paragraph nothing else touches is
decoration. Just keep the joints visible — never introduce a fact inside a
reference and lean on it later as though established.

### The connective tissue is the product

**Say the thing that requires holding all of it at once** — the arithmetic nobody
in the story can run, because they lived it in sequence. Two things said years
apart, in answer to different questions, that are the same thing.

**One finding followed all the way down beats nine touched.** Most material ends
up on the floor. If most of it made it in, it was summarized rather than read.

**The telling is input, not an outline.** Answering in the order asked produces a
better-dressed recording, which is the one outcome that makes it pointless.

**End where the finding ends**, not where the material runs out.

### Reaching outside the record

One reference from the world outside my life per finding, at most.

**Three jobs, all three:** it **zooms out** and comes back down (a shot that stays
wide is a lecture); it **bridges the personal to the permanent** — *you are not
peculiar, you are human, here is the mechanism*; and it **teaches** something
true. Which corrects *analogy, never information*: teach on the way through, but
never let the sentence *end* on the fact about the world.

**Turn it, do not deploy it.** A reference you argue with has done work; one you
state has decorated. Make the comparison, then say where it stops — **the place it
breaks is usually the sentence worth keeping.**

**Check the casting.** Name every role the comparison creates and say which reader
stands in each. If the recipient is the deficit, the antagonist, the patient, or
the party a shortfall is charged to, it is wrong however perfect the fact. If I
am the failure, it is wrong too and will never be sent.

**A re-aim means cut it, not aim again.** From the inside every reference looks
apt. So the test is not *is this good* but **does the finding need it** — cut it,
reread the page, and see.

**Checkably true.** **The gate is the finding, never the artifact.** **Illuminate
my situation; never describe my own domain back to me.** **It cannot rescue a
weak observation.** **Default off.**

### Always

**Quote exactly**, checked by hand — I will read every quotation knowing what I
said.

**Name your epistemics in the artifact**: this is one person's account, not a fact
about them. Not a disclaimer — it is what makes the rest trustworthy, and what
makes it safe for me to pass on when a line is close but not quite right.

**No ask.** No invitation, no obligation, nothing to answer, nothing added — no
prompt to share, no argument for how good it is. A page that requests something
has converted a gift into a chore.

**Never reproduce a lyric.** Name the song and say why it belongs. This fails
destructively: the artifact simply never arrives and nobody is told why.

**Proportion** — never longer to read than the telling took to say, measured in
words actually spoken. This governs the prose, not a track list.

### When it carries a track list

**The prose above the list is an overture, not a letter.** A letter has the whole
document to develop one finding; a playlist gives the prose a fifth of that,
because the tracks need the room. Asking the opening to be a letter produces a
short letter, which is worse than a good overture — measured, where the prose
read competent and flat while the three sharpest sentences in the artifact were
all track reasons. So the opening does three things and stops: **say what you
are, name the finding once with real force, and say whose taste this is.** Then
get out of the way. Its job is to make somebody trust the list, not to be the
thing they keep.

**Never spend the same moment twice.** If a track's reason is going to carry the
couch, the two hands, the thing that got said — then the prose gestures at it and
moves on. The same run put one image in the opening and again under track twelve,
and each appearance halved the other. **Material spent above the list is spent**,
and the reasons are where the best writing should be: by track seven somebody has
stopped reading an introduction and started being handed things, which is where a
sentence lands hardest and a flat one costs most.

**Anything to work from means 10–15 tracks as a floor.** Two things are shown and
the prose carries one: the narrative work, and **the musical work — opening one or
two named artists into the surrounding sphere.** A short list never shows the
second.

**Expand in several directions** or it is a subgenre playlist: deeper into the
same artist past the hit; sideways into the same scene, years, label; **backwards
into what that artist was plainly listening to**, where the surprises are;
forwards to whoever took it further; through the room — the producer or the
players behind a sound somebody loves and has never thought about; the original
behind a cover.

**What the anchors buy is the universe, not the answer.** They define a
neighbourhood a few degrees out — Kevin Bacon distance, deliberately generous —
and that is where the search runs. A wide space is safe here *because* meaning
does the choosing; breadth is only dangerous when adjacency picks, since then the
edge of the space becomes the answer. So the anchor is not a fence. What it buys
is **provenance**: a traceable path from what I named to what I was handed, which
is the first half of a good reason.

**At most a third of the list may come from the artists named.** A cap, not a
target, and it exists because the alternative was measured: given three artists,
one run returned twelve of fifteen tracks from inside them. **"Yours" is not a
reason** — an anchor track earns its place on exactly the same bar as any other,
and it is easier to justify a track they already own, which is precisely why it
cannot be allowed to be cheaper. An artist's own band counts as that artist: if
the listener would say *that is basically the same artist*, it counts against the
third.

**Substance is the only selector, and it is the win condition.** A song earns its
place because what it is *about* meets something the record establishes in my own
words — never inferred. Same operation as the connective tissue, run against a
wider index: one index is my life, the other is everything ever recorded. A list
that gets substance right using famous tracks has succeeded.

**The track is a commodity. The reason is the product.** A streaming service can
put the same song on a list and will sometimes pick a better one. It cannot say
why this song is here for this person. So *it fits the mood* is a streaming
service's output reproduced worse — cut the track.

**Lesser-known is a bonus, never a requirement.** Popularity says nothing about
which track is right for one person, and neither does whether I already own it.
A song in my library or on one of my own lists is not disqualified — if it fits,
it fits. What stays true is the line above: being mine is not the reason; the
reason is.

**The mission, so the rules above are read in its light.** Play somebody good
music that is poignant to the relationship, and make the reason known. *Good* is
subjective, which is why the reason carries the weight the track cannot — the
song is the commodity, the reason is the product. Nothing here asks for an
esoteric cut. An esoteric cut is a bonus when it is genuinely the better answer,
and a failure the moment it is chosen for being rare. **A track that plays, with
a reason only this house could have written, is the whole job.** A track that
does not play has not done any of it, however perfect the pick.

**Match on what the song says, not on what it is famous for.** These feel
identical from the inside and are not. *This is the plainest song ever written
about that* is a claim about a song's reputation, and reputation is exactly what
made it famous — so reasoning that way returns the hit every time and calls it
substance. The operation is to read the lyric against something in my own words.
A note you could have written without knowing how the song actually goes has
picked a title, not a track.

**A half-remembered clue is a lead to run, not trivia to file.** *"That guy who
opened for him"*, *"the one that goes something about a river"*, *"a song that's
like Dostoyevsky"* — when I hand over a detail I cannot resolve, that is a
searchable fact about a real record, and going and finding it is the single
highest-value thing available. Filing it under open questions is not caution; it
is the work, declined. Caution is about the *answer* — cite what you found, say
how confident it is, and never write a plausible name as a settled one.
**Twenty years of not knowing can end in one search, and it will be remembered
long after the track list is.**

**And the right track is not in the tail either.** There is no depth in a
catalogue where the good one lives — the hits are simply the ones that got the
push. Do not sample the tail and do not sample the top.

**Sequence it rather than ordering it.** At album length this stops being a
running order and becomes a shape: anchors at the load-bearing positions — the
opener, and wherever the list needs to re-establish that it knows me — with the
furthest reaches in the middle, where somebody who trusted the first three tracks
will follow. **Never run unfamiliar songs consecutively**; four in a row reads as
a lecture however good each one is.

**A song titled for a word out of the telling is a lead, never a pick.** A title
match on its own is a parlour trick and it will be sniffed out: if matching the
word is the mechanism, the object stops being about them and becomes a
demonstration. What earns the place is the *meaning of the words* meeting
something that was said — so read the song before using it, and drop it if it
points the other way however good the coincidence looked. When it does fit, it is
the best thing a list can do.

**Do not flinch from hard subject matter.** A song about death is not disqualified
by somebody having lost people; a song about addiction is not disqualified by
somebody being in recovery. Those are the songs that land hardest, and steering
around them is a condescension dressed as care. **The weight rule governs what
your sentence claims, never what the song is about** — the failure is a reason
that narrates somebody's grief back to them, or that rests on something inferred
rather than something said.

**Never invent a track.** Verify title and artist. A fabricated song breaks the
exact promise being made: they go to play the thing found for them and it is not
there.

## Where the songs come from

**If you can make HTTP requests, do not pick from memory.** Recall reaches for
what is famous, because fame is what recall is made of, and it invents titles
that sound right. Three free, keyless sources beat it, and none needs an account:

- **Adjacency** — who sounds like the artists they named:
  `https://labs.api.listenbrainz.org/similar-artists/json?artist_mbids=<mbid>&algorithm=session_based_days_7500_session_300_contribution_5_threshold_10_limit_100_filter_True_skip_30`
- **Catalogue and identity** — resolve a name, list an artist's songs, confirm a
  pairing is real:
  `https://musicbrainz.org/ws/2/artist?query=artist:<name>&fmt=json` and
  `https://musicbrainz.org/ws/2/recording?query=artist:"<artist>" AND recording:"<title>"&fmt=json`
- **The words** — `https://lrclib.net/api/get?artist_name=<artist>&track_name=<title>`

**MusicBrainz allows one request per second and means it.** Sleep between calls,
send a real user-agent naming what you are, and expect an occasional 503 saying
*busy* rather than *no such thing* — wait and retry rather than treating it as an
answer. **Its `score` is not a confidence signal:** it returns 100 for its top hit
however far off, so check the name actually matches before believing it. A
mis-transcribed singer resolved to a film composer at full confidence once.

**A third channel costs one search and is the best thing a list can do.** Take
the distinctive nouns out of the telling — a town, a restaurant, a phrase reached
for twice — and ask whether the artists they named have a song by that name. Ask
artist by artist rather than reading a ranked list, because it re-ranks under
load and the answer that matters can simply be missing from one call.

**But a title match is a lead, never a pick.** If matching the word is the
mechanism it will be sniffed out — the object stops being about them and becomes
a demonstration. Fetch the lyrics and read them: does what the song is *about*
meet what was actually said? If it does, take it. If it points the other way,
drop it however good the coincidence looked.

**Do not flinch from hard subject matter.** A song about death is not
disqualified by somebody having lost people, and steering around it is a
condescension dressed as care. **The lyrics are for judging fit and never for
printing** — naming the song is the job, and reproducing a verse is what gets a
whole response destroyed in transit.

**Verify every pairing before writing it down.** A song that does not exist
renders as a row with a reason that reads as true and a search link that finds
nothing, and the person it was made for is the one who discovers it.

## A playlist request is the whole job, not a draft

**Curate and write here; then have Of Me finish the mechanics.** You choose the
songs, sequence them, and write why each one is there — that is the part only you
can do, and it is what I am paying you for. What you cannot do from a chat window
is prove each recording has an upload that actually plays. Of Me does that,
deterministically, and it costs nothing extra.

**Call `complete_playlist`.** It finds a playable upload for every track, proves
it embeds and is the right artist and title, writes the file into
`music/playlist-sources/`, and reads it back to check the saved file says what
your sequence said. Then it hands you a receipt.

**Read the receipt and act on it — this is the part that gets skipped.**

- `ready` is the only state you may call finished.
- `resolving` means keep going. Call again with the same `record_id`; finished
  tracks are not redone, so it is cheap, and it is your job rather than mine.
- `needs_revision` names the exact slots that need a decision only you can make.
  Choose a replacement inside what I originally asked for, keep every other
  track, and send the whole sequence again with the new song and its reason.
- `blocked` is a real dead end. Say precisely what is stuck.

**Your own failure to reach YouTube proves nothing about Of Me's server.** Do not
report a playlist unfinished because a lookup failed in your environment — call
the tool and read what comes back.

**Never** invent a link, quietly drop a song to reach a clean number, widen
sharing, or tell me a background job is running when nothing came back saying so.
**And never ask me to say "make it so."** A playlist request authorises the whole
private workflow.

### If you have no tool, the same thing over HTTP

The key and the exact command are on my Of Me home page. **Never write the key
into this repository:** anything committed here stays in its history for good.

```bash
curl -sS -L -X POST "$OFME_BASE_URL/api/music/complete" \
  -H "Authorization: Bearer $OFME_AGENT_KEY" \
  -H "Content-Type: application/json" \
  -d '{"title":"<the title>","standfirst":"<one line>",
       "intro":"<the prose above the list>","outro":"<the close>",
       "tracks":[{"artist":"<artist>","title":"<song>","note":"<why it is here>"}]}'
```

Send `{"recordId":"pl-…"}` instead to finish one that is already here — a file
you wrote straight into the repository, or one an earlier call left unfinished.
Its prose, order and front matter are preserved exactly; only the links change.

**Never send a video id or a URL.** An id you supply has been through no check,
and one wrong id plays a different song at me confidently and forever.

### Writing the file yourself is fine, and it still gets finished

If you write into `music/playlist-sources/` directly, Of Me notices a playlist
whose tracks have no links and resolves them within a few minutes. You do not
need to ask me to trigger anything. It is still better to call the tool, because
then you get the receipt and can fix what did not resolve while we are still
talking.

### Made it somewhere else too? Record the link, never build one

If you also created this playlist in a music service the member actually uses,
put the URL the service handed back into the front matter:

```
apple_music_playlist_url: https://music.apple.com/us/playlist/<slug>/<id>
```

The page then offers **Play on Apple Music** under the player. Only that key
does it, and only a real playlist URL — **never assemble one from track
catalogue ids**, which are matches for songs and say nothing about a playlist
that may not exist. A draft you prepared and the member has not yet confirmed is
not a playlist: say so in the prose and leave the key off.

A playlist on a service with no key of its own — Spotify, say — goes in the
prose as the URL the service handed back, written bare. The page renders a bare
address as a link, so there is nothing to wrap; say what it is in the words
around it.

## Sharing is a separate, deliberate act

Completing a playlist publishes nothing. It lands in my own house and stays
private, which is right — widening who can see something is my decision and never
a side effect of finishing the work.

When I ask you to send one to somebody, that is when a link gets minted:

```bash
curl -sS -L -X POST "$OFME_BASE_URL/api/music/playlist" \
  -H "Authorization: Bearer $OFME_AGENT_KEY" \
  -H "Content-Type: application/json" \
  -d '{"title":"<the title>","standfirst":"<one line>",
       "intro":"<the prose above the list>","outro":"<the close>",
       "about":"<only when it is FOR somebody else — omit for one about me>",
       "tracks":[{"artist":"<artist>","title":"<song>","note":"<why it is here>"}]}'
```

That one completes **and** mints `ofme.ai/p/<token>` in a single call, which is
what you want when the link is the deliverable. **A path is a location in a
private repository. Nobody can press play on one** — so when I asked for a
playlist for somebody else, give me the link rather than telling me where the
file went. It opens for a person with no account and no idea what a repository
is, and it is the whole deliverable.

**Give the link to me. Do not send it anywhere.** I decide who receives it.

**It checks every track against MusicBrainz on the way in**, and the response
tells you what it `dropped`. A song that does not exist is not an inconvenience:
it renders as a row with a reason that reads as true and a search link that finds
nothing, and I am the one who discovers it. If something came back dropped, say
so plainly rather than handing me a quietly shorter list. It also reports
`corrected` — a spelling MusicBrainz fixed — and `unchecked`, which means the
source did not answer and the track was kept rather than deleted.

If you can press neither, write the file into `music/playlist-sources/` and tell
me plainly that I need to press share on my Playlists page to get a link — do not
leave me thinking Coach finished the job.

## Shape of a playlist

```markdown
---
record_type: playlist
title: "For the long drive"
standfirst: "One line under the title — what this is, and what it is not."
created_at: 2026-04-02T16:30:00Z
sensitivity: self
---

# For the long drive

The essay. Why this list exists, what it is circling, what I said that made you
reach for these songs. Write it to me, not about me.

## The thing it keeps coming back to

Headings are allowed and so are quotations:

> Something I actually said, quoted exactly.

## Tracks

1. **Artist Name** — *Song Title* — [play](https://www.youtube.com/watch?v=VIDEOID)
   Why it is on this list. One or two sentences, in your voice.
2. **Another Artist** — *Another Song* — [play](https://youtu.be/OTHERVIDEOID)
   What it is doing here, and where it sits in the order.

## Where it came from

The close. What you drew on, what you guessed at, and why the last track is last.
```

**`created_at` carries the time, not just the day.** Stamp the full moment you
wrote it — `2026-04-02T16:30:00Z` — not a bare date. It is the only thing that
can order two playlists made on the same day; see [the record contract](../records.md)
for why.

**If my home already has a `music/playlists/` folder, leave it.** That was this
folder's name until 2026-08-11 and every playlist in it still plays — the player
reads all of `music/` and decides by `record_type`, never by which folder a file
sits in. Nothing needs moving.

Name the file for its date and what it is, and put it in the playlist-sources folder:
`music/playlist-sources/2026-04-02-for-the-long-drive.md`.

**Reworking one while keeping what it was is a reissue — the same versioning
rule letters and Afterwords follow.** Write the new take as a new file beside
the old, `…-v2.md`, carrying the **same `record_id`** and `version: 2` in its
front matter, and leave every version in the folder: the shelf lists the
playlist once, at its newest issue, with comma-separated V1, V2, … links on
its row — the letters shape — and each version keeps its own address. (Small
fixes — a corrected link, a typo in a reason — are just edits to the file,
not a reissue; a reissue is for when the old list is still worth being able
to play.)
Mark the list being replaced `lifecycle_status: superseded` in the same commit,
so the map and the search index show the newest issue and not both.

**`record_type: playlist` is what earns it the player.** With that line, opening
it on ofme.ai gives me the real thing — the songs loaded in order, the writing
around them, a link I can hand to the person it was made for. Without it the file
is still a perfectly good list and still mine, but it renders as plain markdown.
The same line is also what lets an ordinary record sit in `music/` without being
mistaken for a playlist: **whatever a record says it is, it is.** A file that
declares itself anything else is never read as one, however many numbered lines
it happens to contain.

**Write `## Tracks` above the songs, and the prose above it can be anything.**
That heading is how the player knows where the list starts. Without it the list
is found by shape — the first run of numbered, bulleted or table lines after the
title — and **a bulleted aside in the essay can be mistaken for the songs**,
which shows up as a short track count, nothing playable, and no player at all.
With the heading, bullet whatever you like up there; nothing above it can be
misread as a track.

**A numbered list is the form. A table also works, but it is the worse one.**
Both of these parse:

```markdown
| # | **Artist** — *Title* — [play](https://www.youtube.com/watch?v=VIDEOID) | Why it is here |
| **Artist** | *Title* | [play](https://www.youtube.com/watch?v=VIDEOID) | Why it is here |
```

A leading number column is understood as a position, and a header row is not read
as a song. But the reason under each track is the part worth having, and a table
cell is a bad place to write a paragraph. Write the list.

**The link is what makes it play. Nothing else does.** The player is built only
out of the tracks that resolved a YouTube id, so if a playlist looks right and
will not play, that is the first thing to check.

**A playlist has to play. That is the floor, and it is not negotiable.** One
unlinked row is survivable — it still appears, in order, with its reason under
it, and carries a search link instead, so the song is a click away. A list where
most rows do that is not a supported variant; it is a list of songs with an
argument attached, and the argument is the part nobody can press play on. This
sentence used to say the opposite. A fifteen-track playlist shipped under the
old wording, written for somebody who had changed the sender's life, every
reason in place, and not one row played.

**So "I could not verify a link" is never where you stop.** It is where you go
back a step and pick again.

**So when you cannot verify a link, leave it out.** That is the whole rule, and
it only looks like two rules. A link you checked is better than no link; **no
link is better than a link you guessed**, because a wrong id does not fail — it
plays a different song, confidently, forever, on a page nobody re-reads.

**Check every link before you write it, and do not check it by opening it.**
The trap here is specific and it is invisible: a video can be live, public and
perfect on YouTube while its owner has **disabled embedding**, which means it
cannot play in my home. Clicking the link proves the video exists. It proves
nothing about whether it will play here. Official-audio and label uploads are the
likeliest to be restricted, and they are exactly the ones a careful writer
reaches for first.

One request per link tells you:

```
https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=VIDEOID&format=json
```

**200 means it will play here. 401 or 403 means it will not** — the video is
private, or embedding is off. Anything but 200, pick a different upload of the
same song and check that one. A lyric video or an artist's "- Topic" channel is
usually embeddable when the official upload is not.
**And if that artist has nothing that plays, move to another artist inside the
same reason.** The rung above keeps the artist because the artist was expensive
to find. This one keeps the thing that was *more* expensive: the reason the
track was on the list at all. A note that says *this is here because of the
boat* is served by any song that is genuinely about the boat — so go back to the
zone the pick came from, take something else in it that plays, and rewrite the
note so the storyline still squares. **The one thing you may never do is leave a
row that will not play.**

**None of this is a licence to reach for the obscure.** The mission is music
with a personal reason, and the reason made known — not a rare pressing. A
famous song can be exactly right, and often is: it is famous because it landed
on a lot of people, and the person reading may be one of them. Say so in the
note. *I know this one is obvious — here is why it is yours anyway* is a
complete and honest reason, and on the right track it is most of the job. What
fails is not a popular song. It is a popular song with nothing under it.


**And if no upload of that song plays, keep the artist and change the song.**
This is the step people miss, and it costs the most. The reach that found the
artist is the expensive part — the search through what a song is *about*, the
half-remembered clue chased down, the path from something I named to something
I had never heard. A particular track is the cheap end of that. So when the
right song will not play anywhere, do not ship it dead and do not drop the
artist to be tidy: take another good track by the same artist, one that plays,
and say in the note how you got there. **Losing the exact track costs less than
losing the universe you found it in.** The ladder, in order: this song another
upload → this artist another song → the link left off and the row carries its
search. A dead link is on none of those rungs.

**Resolve the link LAST, and never let it choose.** The order is: draw the
neighbourhood, search it on what songs are about, pick, and only then go and
find the id. Reversing those last two is invisible and ruinous — a web search
hands you an id instantly for the famous track and fights you for the deep cut,
so a writer who picks with one eye on "can I verify this" has quietly made
findability the selector and will return the hits every time, while believing
they chose on meaning. **If you notice yourself preferring a song because it
will be easier to link, you have already stopped writing the playlist.**

**Never write an id you did not check.** A guessed id is worse than no link,
because it fails as a plausible wrong song rather than as an error, and one
unplayable track at the top of a list is what a playlist that "won't start"
actually is.

Everything **above** the numbered list and everything **below** it is prose and
gets rendered. Only the numbered lines are read as songs, so nothing you write
around them can break the player. The same small grammar a letter uses works
here: `**bold**`, `*italic*`, `> quotation`, `## heading`.

## Every playlist has its own page, and can be sent

A playlist lives at its own address — `ofme.ai/playlists/<the-file-name>` —
and from there I can make a **share link** that hands somebody a frozen copy:
the writing, the songs and the reasons, playable on a phone with no account and
nothing installed. Editing the file later does not change a link already sent,
and I can take any link back.

**Which is why the reasons have to be sayable to the person they are about.**
The most likely recipient of a playlist made for someone is that someone. Write
the reasons so they could be read by them — and if something in my record is
true, load-bearing and not theirs to hear, let it shape the choice of song
without appearing under it.

## The link is what makes it play

**Put a YouTube link on every track you can.** The page reads the video id out of
that link and plays the whole list in one player, in order, with nothing created
in any account of mine. A track with no link still appears, with its reason and a
way to search for it — so getting one wrong costs one line, not the playlist —
but a list with no links at all is a page with no player on it.

Use an ordinary watch or short link; both are read. Prefer the artist's own
upload or the label's official audio over a live version, a cover or a lyric
video, unless the version is the point — and if it is, say so in the reason.

## Name the songs. Never quote them.

A song title and an artist are a reference. A lyric is somebody else's writing,
and reproducing it is what gets an entire answer destroyed on its way to me,
with nothing delivered and no reason given. **This is the folder where that
happens**, so it is worth saying twice: say what the song is doing on the list,
in your own words. Do not set the words of the song underneath it.

## An illustration, if this playlist holds one object — optional

A playlist may carry **one drawn object**, in the same house style as every
other picture here. Most carry none, and that is the ordinary outcome: no
suitable object means no illustration, and the page **shows nothing at all** —
no placeholder, no caption, no gap where one would go.

**The picture is optional; the front-matter line is not.** Every playlist
carries `illustration_object`, holding the object or `""` when
there is none. An empty value and a missing key look identical on the page and
mean opposite things underneath — one says you read it and found no object, the
other says nobody looked.

Choose one visually strong, concrete object genuinely grounded in the telling. It does not need to symbolize or summarize the memory. Its job is to evoke, not explain. Prefer the object that could only have come from THIS telling over the one that could have come from any of them.

Prefer an object that CANNOT be drawn wrong. Ask: does the person remember this thing specifically? A car, a house, a room, a particular stretch of landscape are all things they can picture exactly, so any version you draw will contradict the one in their head and then sit in their record for years. So: either be right on point with precision, or choose something with less variation. Precise means the source NAMED it — draw the two-door Ford Explorer only if they said two-door Ford Explorer. Otherwise take the thing whose APPEARANCE nobody remembers exactly: bubbles rising through water rather than the creek, the scissors rather than the salon, a speedometer sitting at zero rather than the car around it. AND LOW VARIATION IS ABOUT HOW IT LOOKS, NEVER ABOUT WHAT IT MEANS. A compact disc is safe to draw and could belong to anybody's answer about a song; a speedometer at zero is just as safe to draw and could only be this telling — and it says *parked* without drawing the car. When two objects are both impossible to get wrong, take the one that could only have come from this telling.

ONE OBJECT ONLY. Do not add supporting props, contextual objects, people, labels, signage, or narrative clues. Never a reconstruction of what happened, never people, never a
symbol the source does not mention.

LETTERING THAT IS PART OF THE OBJECT STAYS. A sign, a spine, a dial, a moulded label: those words are the shape of the thing, and drawing it without them draws a different thing. What is never allowed is lettering ADDED — a caption, a title, a slogan, a date, or any of the prose this picture sits beside. Draw the words that are on the object; never write words about it.

**Write the choice into the front matter, whatever happens next:**

```yaml
illustration_object: a weathered dock piling
illustration_surface: isolated, with nothing around it   # optional, placement only
```

That line is the half only a reader of the telling can supply, and the prompt is
rebuilt from it in whatever the house style is by then. A third field explaining
the picture is read by nothing.

**Chose no object? The line still goes in, empty** —
`illustration_object: ""` — and you have finished.

**Then, to get it drawn — in this order, because only one is open to most
readers:**

- **If a tool called `draw` is on your list, that is the whole route, and you
  never make the picture with your own image tool.** One call, the
  `record_id`, and `redraw: true` only when a picture is already there and
  the object has genuinely changed. No key, no shell, and never ask me for one.
  Your own tool cannot file what it makes, and its refusals are not this
  house's: if `draw` declines an object, it says so and what to do instead.
- **No `draw`, but you can make images AND file them yourself?** Upload to
  `/api/media/upload` with the path below, as `image/png`, under 4 MB.
- **If neither is open to you, the line in the front matter is a complete answer
  and you have finished.** Say nothing about the picture: not that it is coming,
  not that it failed. Do not describe it to me in words instead.

```
illustrations/<record_id>.png
```

One folder for every illustration in my house, and the record's own `record_id`
is the filename. It lives in my media store, never in the repository. Removing
one is deleting that file.

**The full contract — the style, the background rule, and what is never to be
drawn — is in [what an Afterword is and how to write one](../afterwords/README.md).** It
is the same contract wherever the picture goes.

## For Utah

Offer a playlist when it fits and never as a party trick. The good ones come from
something I have actually told this house — a person, a stretch of time, a thing
I keep returning to — and the reasons under the tracks should show that they did.

Say where each one came from. If a song is already in my library because I have
told you about it, say that; if it is a guess, let it be a guess out loud. And
order it on purpose: a list that goes somewhere is worth more than fifteen songs
that match a mood, and the last track is the one I am left with.

**When you do not know what they listen to, say so in the file.** A playlist made
for someone whose taste is nowhere in this house is not a guess at their taste —
it is my vocabulary aimed at them, which is a different and better gift. Pretending
otherwise is the one thing that makes the whole object worthless, because it is
the one claim they can check.

**Check the links before you write them.** A video id you half-remember resolves
to a real video that is the wrong song, and that fails silently — the page plays
it, and nobody finds out until the person it was made for is listening to it. If
you cannot verify one, leave the link off and let the track carry its search.

**And "check" means the id RESOLVES — not that a search result mentioned it.** A
video that was live when somebody indexed it can be deleted, made private, or
pulled by the time you write it down, and a dead id fails worse than a wrong
one: the player silently drops it from its queue, and the rows can drift out of
step with the sound. If you can fetch, one request settles it —
`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=<id>` —
**200 with the right title and channel is a checked link; anything else means
leave the link off.** This happened: a dead id shipped on a birthday playlist
after being "verified" from search results alone, and it took the person it was
made for to find it.
<!-- OF-ME:END managed -->

## My own notes on music

_Anything you write below this line is yours. Updating your tuning replaces the
section above and never touches this part. Every AI that reads this file follows
what you put here — including your guide on ofme.ai._
