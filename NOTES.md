# Grand Tabletop Compendium: handover notes

Kralnu Games ten-in-one parlour collection. Live at https://kralnugames.com/grand-compendium/ (GitHub Pages from `main`, root).

## Current state: v1.5.0 (19 Nov 2026)
- Thirty-one games. 1.5.0 added Go (Monte Carlo AI on 9×9, heuristic on 13/19; area scoring, 7.5 komi; dead stones suggested by playouts) and Spring Mikado (Kris's Goki spring-tray disc game: drag-to-lift with distance-based strain, tension from neighbours and the spring bar; point values pink 5 / grey 10 / yellow 15 are a guess, check Kris's box rules). 1.4.0 added Reversi, Four in a Row, Nine Men's Morris, Yacht, Liar's Dice, Cribbage, Gin Rummy, Battleships, Sudoku (categories now include Pub Card Classics and Solitaire & Puzzles; main menu has category shortcut chips). Earlier (1.3.0 added Colour Clash, Tilecraft, Word Lock, Word Wheel, Word Grid). Fifteen before that: Chess, Shogi, Checkers, Mancala, Backgammon (vs AI or Pass & Play); Mahjong Solitaire, Klondike, FreeCell, Scoundrel, Regicide (solo); Snakes & Ladders, Ludo, Dominoes, Murder at Marrowgate Manor, Torchlight Delve (family, 1-6 players)
- Family games use `Seats.choose()` for player setup (person/AI per seat) and `curtain()` for pass-the-phone privacy; games with a `setup()` get it from the Play button
- Marrowgate Manor is an original Cluedo-style game (Cluedo is a Hasbro trademark, so no Cluedo names/characters). Torchlight Delve is an original HeroQuest-style crawl
- Kralnu Standard: splash, main menu (Continue, Settings, Trophies, More, Install), More panel (How to play, What's new, Credits, Review, Support, Get latest), version in the corner, ⚙️ in-game settings
- Settings: music and SFX volume, AI difficulty, AI speed, move hints, reset save data
- Auto-save every 4 s and on hide/close (`gtc_save_<game>` in localStorage); Continue resumes
- Sound and music are synthesised with Web Audio (no audio files)
- Reviews go to the shared Kralnu Google Form, version field "Grand Tabletop Compendium x.y.z"

## Word games
- `words.txt` (113k words) is built from SCOWL/hunspell en_US: affixes expanded, abbreviations, roman numerals and slurs removed, proper two-letter list, British spellings added. Licence in `WORDS-LICENSE.txt` (credit is in the Credits screen too)
- `Dict.load()` fetches it on first use; the service worker keeps a copy for offline play
- Word Lock answers are a hand-picked list of 812 everyday five-letter words (in the page as `WORD_ANSWERS`); guesses accept any dictionary word
- Tilecraft AI: per-row cross-checks, word slots and a letter bitmask filter (~0.2 s per move on desktop). Easy picks weaker moves; Hard always plays its best
- Original names on purpose: Scrabble, Wordle, Boggle and UNO are other companies' trademarks

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
- Cribbage and Gin resume a saved game at the start of a fresh deal (scores kept), not mid-hand
- Polish wanted (Kris's list): animations (sliding pieces, dealing), search/favourites/recently played, online rooms for turn-based games
- Regicide is solo only (the real game is co-op for up to 4)
- Chess and shogi don't detect draws by repetition
- Torchlight Delve: one dungeon floor per run; could add more floors, more monsters and hero levelling
- No proper music tracks yet: the music-box tune is generated
