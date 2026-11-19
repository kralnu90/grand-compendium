# Grand Tabletop Compendium: handover notes

Kralnu Games ten-in-one parlour collection. Live at https://kralnugames.com/grand-compendium/ (GitHub Pages from `main`, root).

## Current state: v1.2.0 (19 Nov 2026)
- Fifteen games: Chess, Shogi, Checkers, Mancala, Backgammon (vs AI or Pass & Play); Mahjong Solitaire, Klondike, FreeCell, Scoundrel, Regicide (solo); Snakes & Ladders, Ludo, Dominoes, Murder at Marrowgate Manor, Torchlight Delve (family, 1-6 players)
- Family games use `Seats.choose()` for player setup (person/AI per seat) and `curtain()` for pass-the-phone privacy; games with a `setup()` get it from the Play button
- Marrowgate Manor is an original Cluedo-style game (Cluedo is a Hasbro trademark, so no Cluedo names/characters). Torchlight Delve is an original HeroQuest-style crawl
- Kralnu Standard: splash, main menu (Continue, Settings, Trophies, More, Install), More panel (How to play, What's new, Credits, Review, Support, Get latest), version in the corner, ⚙️ in-game settings
- Settings: music and SFX volume, AI difficulty, AI speed, move hints, reset save data
- Auto-save every 4 s and on hide/close (`gtc_save_<game>` in localStorage); Continue resumes
- Sound and music are synthesised with Web Audio (no audio files)
- Reviews go to the shared Kralnu Google Form, version field "Grand Tabletop Compendium x.y.z"

## How the code is laid out
- Single `index.html`. Tailwind is compiled and inlined (no CDN), so it works offline
- Each game is a module (`Chess`, `Shogi`, …) registered in `Games` with `mount(el, {mode, resume})`, `snapshot()`, `destroy()`
- `App` handles the hub, mode chooser (`App.play`), saving and end-of-game dialogs. `Menu` holds settings, credits, review and the More panel. `Sfx` is the audio
- `sw.js` cache name includes the version; `version.json` drives the update notice

## Release checklist
1. Bump `GAME_VERSION` in index.html, `version.json` and the `sw.js` cache name together
2. Add the change to `CHANGES` (What's new) and the README changelog
3. Post a news update on the hub (kralnu90.github.io `news.json`) and refresh the Play-page card

## Ideas / not done yet
- Regicide is solo only (the real game is co-op for up to 4)
- Chess and shogi don't detect draws by repetition
- Torchlight Delve: one dungeon floor per run; could add more floors, more monsters and hero levelling
- No proper music tracks yet: the music-box tune is generated
