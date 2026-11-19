# The Grand Tabletop Compendium

*Twenty-nine classic, esoteric, family, pub and word games, one table.*

Pull up a chair in a candlelit parlour of walnut, green baize and brass. Royal strategy, tumbling dice, pub cards, quiet puzzles, word games, family favourites, a murder to solve and a dungeon to delve. A free game from Kralnu Games.

## [▶ Play it](https://kralnugames.com/grand-compendium/)

**Current version: 1.4.0**

## The games

| Game | Type | Players |
| --- | --- | --- |
| ♞ **Chess** | Castling, en passant and your choice of promotion piece. Legal moves are highlighted | vs AI or 2 players |
| ☖ **Shogi (将棋)** | Japanese chess on a 9×9 board. Captured pieces join your hand and can be dropped back in | vs AI or 2 players |
| ⛃ **Checkers** | Captures are forced and multi-jump chains are played one tap at a time | vs AI or 2 players |
| ◎ **Mancala (Kalah)** | Sow seeds, chain extra turns and capture across the board | vs AI or 2 players |
| 🎲 **Backgammon** | Full dice rules, hitting blots, the bar, bearing off and gammons | vs AI or 2 players |
| 🀄 **Mahjong Solitaire** | The 144-tile turtle. Every deal can be solved, with hint, shuffle, undo and zoom | Solo |
| 🃏 **Klondike** | Draw 1 or Draw 3, Auto-Send, Auto-Finish and undo | Solo |
| 🂡 **FreeCell** | Every card face-up. Four free cells and supermoves | Solo |
| ⚔️ **Scoundrel** | A roguelike dungeon crawl through a 44-card deck. Weapons go dull as you use them | Solo |
| 👑 **Regicide** | Fight 12 royal bosses with suit powers, combos and solo Jesters | Solo |
| 🐍 **Snakes & Ladders** | The classic race to 100, with a bounce-back finish | 2–4, people or AI |
| 🎯 **Ludo** | Break out on a 6, capture rivals and race all four pieces home | 2–4, people or AI |
| 🁫 **Dominoes** | Double-six draw game, first to 50 points | 2–4, people or AI |
| 🕵️ **Murder at Marrowgate Manor** | An original whodunit: suggest, deduce with your notebook, then accuse | 3–6, people or AI |
| ⚫ **Reversi** | Flip lines of discs and fight for the corners | vs AI or 2 players |
| 🔴 **Four in a Row** | Drop discs and connect four before your rival | vs AI or 2 players |
| ⬡ **Nine Men's Morris** | The ancient game of mills: place, slide, then fly | vs AI or 2 players |
| 🎲 **Yacht** | Five dice, three rolls, thirteen boxes to fill | 1–4, people or AI |
| 🤥 **Liar's Dice** | Bid on the dice under everyone's cups, or call "Liar!" | 2–6, people or AI |
| 🪵 **Cribbage** | The pub classic to 121, with full pegging and counting | vs AI or 2 players |
| 🥃 **Gin Rummy** | Melds, deadwood, knocking, Gin and undercuts, first to 100 | vs AI or 2 players |
| 🚢 **Battleships** | Hide your fleet and hunt theirs | vs AI or 2 players |
| 🔢 **Sudoku** | Fresh puzzles with one solution, four levels, notes and a daily | Solo |
| 🃏 **Colour Clash** | A fast shedding card game: Skips, Reverses, +2s, Wilds and a "Last card!" call | 2–6, people or AI |
| 🔤 **Tilecraft** | A crossword tile game with bonus squares and AI opponents that know 110,000+ words | 2–4, people or AI |
| 🔒 **Word Lock** | Crack the five-letter word in six guesses: daily, practice or set one for a friend | Solo / pass & play |
| 🎡 **Word Wheel** | Make words from nine letters, always using the centre one | Solo |
| 🔠 **Word Grid** | Swipe neighbouring letters into words against a three-minute clock | 1–4, people or AI |
| 🕯️ **Torchlight Delve** | An original dungeon crawl: a party of heroes, combat dice, fog of war and the Bone King | 1–4 heroes, solo or pass & play |

Every board game can be played against the AI or as **Pass & Play**: people sharing one phone. The family games take 2 to 6 players in any mix of people and AI, and a pass-the-phone screen keeps hands secret. Tap **Play** on a game to choose.

## Main menu

- **Continue**: jump straight back into your last game. Games save as you play
- **Settings**: music and sound effect volume, AI difficulty (Easy, Normal, Hard), AI speed, move hints and reset save data. Also on the ⚙️ button in every game
- **Trophies**: your wins in every game
- **More**: How to play, What's new, Credits, Review, Support and Get latest version
- **Install** (when your browser can install it)

Each game also has its own link, for example `kralnugames.com/grand-compendium/#chess`.

## Install it as an app

On Android (Chrome), tap **Install** on the main menu. On iPhone or iPad, open it in Safari, tap **Share**, then **Add to Home Screen**. Once installed it runs full screen and works without a signal.

## Notes

- The game is the single `index.html` file, plus `words.txt` (the dictionary, loaded the first time you open a word game and then kept for offline play). `manifest.webmanifest`, `sw.js` and the `icons` folder make it installable and playable offline. No accounts needed.
- Wins, settings and games in progress are saved in your browser on each device.
- Built phone-first, but it plays in a desktop browser too.

## Updates

The game checks for a newer version when it opens and when you come back to it. If there is one, players see an "A new version is ready" notice with an **Update** button, and there's a **Get the latest** button on the main menu at any time.

When pushing an update: change `GAME_VERSION` in `index.html`, put the same value in `version.json`, and bump the cache name in `sw.js` (it includes the version).

## Credits

Ideas, design and testing by Kris. Built with Claude, an AI by Anthropic.

- **Scoundrel** was designed by Zach Gage and Kurt Bieg.
- **Regicide** was designed by Paul Abrahams, Luke Badger and Andy Richdale (Badgers From Mars).
- Chess, Shogi, Checkers, Mancala, Backgammon, Mahjong Solitaire, Klondike, FreeCell, Snakes & Ladders, Ludo, Dominoes, Reversi, Four in a Row, Nine Men's Morris, Yacht, Liar's Dice, Cribbage, Gin Rummy, Battleships and Sudoku are traditional games.
- Murder at Marrowgate Manor and Torchlight Delve are original games made for this collection, inspired by classic deduction and dungeon-crawl board games.
- Tilecraft, Word Lock, Word Wheel, Word Grid and Colour Clash are original takes on much-loved word and card game ideas, not connected to or endorsed by the makers of any other game.
- Word list: SCOWL, copyright 2000–2011 Kevin Atkinson, used under its permissive licence (see `WORDS-LICENSE.txt`), with British spellings added.
- Fonts: Cinzel, Inter and Noto Serif JP (SIL Open Font License). Styles: Tailwind CSS (MIT). Sound effects and music are generated live in the browser.

## Feedback and support

Found a bug or have an idea? Use **Review** in the game, open an issue on this repository, or email hello@kralnugames.com.

If you'd like to support development, you can buy me a coffee on **Ko-fi:** https://ko-fi.com/kralnu90

More games: https://kralnugames.com

## Changelog

### 1.4.0 · A fuller parlour (19 November 2026)
- Nine new games: Reversi, Four in a Row, Nine Men's Morris, Yacht, Liar's Dice, Cribbage, Gin Rummy, Battleships and Sudoku
- Cribbage and Gin Rummy with full scoring, against the AI or pass and play
- Sudoku puzzles made fresh every time with a single solution, plus a daily puzzle and notes
- Category shortcuts on the main menu

### 1.3.0 · Words and wild cards (19 November 2026)
- Tilecraft: a crossword tile game for 2 to 4 players, with AI opponents that know over 110,000 words
- Word Lock: crack the five-letter word in six guesses, with a daily puzzle, practice and a set-a-word-for-a-friend mode
- Word Wheel: find words in nine letters, always using the centre one
- Word Grid: swipe across a 4×4 letter grid against a three-minute clock
- Colour Clash: a fast shedding card game with Skips, Reverses, +2s, Wilds and a "Last card!" call
- British spellings like colour and centre are welcome in every word game

### 1.2.0 · Family game night (19 November 2026)
- Five new games: Snakes & Ladders, Ludo, Dominoes, Murder at Marrowgate Manor and Torchlight Delve
- Murder at Marrowgate Manor: an original whodunit for 3 to 6 players with a detective notebook and AI detectives
- Torchlight Delve: an original dungeon-crawl board game for a party of 1 to 4 heroes
- 2 to 6 players in any mix of people and AI, with a pass-the-phone screen for secret hands

### 1.1.0 · Pass and play, sound and saves (19 November 2026)
- Pass and play for Shogi, Checkers and Backgammon, so every board game can now be played by two people on one phone
- Tap Play on a board game to pick vs AI or Pass & Play, or carry on where you left off
- Games save automatically: close the app and pick it straight back up with Continue
- Sound effects and a soft music-box tune, with separate volume sliders
- A tidier main menu (Settings, Trophies, More) and a splash screen
- Settings is one tap away in every game, and Reset save data clears everything

### 1.0.0 · The parlour opens (19 November 2026)
- Ten games: Chess, Shogi, Checkers, Mancala, Backgammon, Mahjong Solitaire, Klondike, FreeCell, Scoundrel and Regicide
- AI opponents for every board game, plus 2-player pass and play for Chess and Mancala
- Settings for AI difficulty, AI speed and move hints
- A trophy cabinet that counts your wins in every game
- Installs to your home screen and plays offline

---

© 2026 Kralnu Games. All rights reserved.
