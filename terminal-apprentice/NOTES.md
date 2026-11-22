# Terminal Apprentice: handover notes

Kralnu Games tutorial game that teaches beginners Claude Code. Started 22 Nov 2026.

## Where it lives
- Built in `terminal-apprentice/` inside the grand-compendium repo, because that session could only reach that repo. The Kralnu Standard says one repo per game, so move this folder into its own repo (e.g. `kralnu90/terminal-apprentice`) and turn on GitHub Pages. Every path is relative, so it works from any folder.
- Not linked from the hub yet. Add a hub card and news post once it has its own home.

## Current state: v1.0.0
- Single `index.html` with no build step and no external files (no CDN, fonts or audio files).
- `LESSONS` array holds all content. Step types: `say` (read + Next), `pick` (multiple choice, options shuffled), `keys` (keycap multiple choice), `type` (typed command matched against `accept` regexes, with `hint`). `term` lines play when a step starts, `after` lines once it's solved, and `clear:true` wipes the terminal. Line kinds: sh, you, cl, tool, act, add, del, dim, ok, warn, box, ask, mode, out.
- Stars: 0 mistakes = 3, 1-2 = 2, else 1. A wrong pick, a wrong typed answer or the first Hint on a step each count as one mistake. Best score is kept. Lessons unlock in order. The certificate unlocks when all 8 are done.
- Save: localStorage `ta_save_v1` = {stars, cur:{l,s,mistakes}, name, certDate, settings}. Saves every 5 s, on hide and on pagehide, and after every step. Continue resumes mid-lesson and rebuilds the terminal instantly.
- Settings: music, SFX, terminal text speed (Relaxed/Normal/Instant), animations on/reduced, reset with a confirm pop-up.
- Kralnu Standard: splash, menu (Play/Continue, Settings, More, Install), More (How to Play, What's New, Credits, Review, Support, Get Latest Version), version in the corner, pause menu (Resume, Settings, How to Play, Main Menu), update banner from `version.json`, iOS Add to Home Screen tip.
- Reviews go to the shared Kralnu Google Form, with the version field "Terminal Apprentice x.y.z".
- Audio is synthesised with Web Audio: a soft four-chord arpeggio plus tap, key, good, bad and win sounds.
- Credits say this is unofficial and not affiliated with Anthropic, and that commands can change, so check the official docs.

## Content accuracy
Lessons cover stable Claude Code basics: `claude`, `claude -c`, `/exit`, `/help`, `/clear`, `/compact`, `/init`, CLAUDE.md, `@` mentions, `!` bash mode, Shift+Tab mode cycling (normal / auto-accept edits / plan), Esc to interrupt, Esc Esc to go back, and permission prompts. Install steps are left out on purpose because they change often. Recheck against the official docs when updating.

## Ideas for later
- Lessons on hooks, MCP and connectors, subagents, `/resume`, `/model`, and using it from the desktop/web/IDE
- A free-play sandbox terminal that answers common commands
- A daily quiz question

## Release checklist
Bump `VERSION` in index.html and `version.json`, add a `CHANGELOG` entry, bump `CACHE` in sw.js, update the hub, update this file.
