# The Grand Tabletop Compendium

*Ten classic and esoteric parlour games, one table.*

Pull up a chair in a candlelit parlour of walnut, green baize and brass. Royal strategy, tumbling dice, quiet patience, and a pair of dungeon-crawling card games that don't play by the old rules. A free game from Kralnu Games.

## [▶ Play it](https://kralnugames.com/grand-compendium/)

**Current version: 1.0.0**

## The games

| Game | Type | Players |
| --- | --- | --- |
| ♞ **Chess** | Castling, en passant and your choice of promotion piece. Legal moves are highlighted | vs AI or 2 players |
| ☖ **Shogi (将棋)** | Japanese chess on a 9×9 board. Captured pieces join your hand and can be dropped back in | vs AI |
| ⛃ **Checkers** | Captures are forced and multi-jump chains are played one tap at a time | vs AI |
| ◎ **Mancala (Kalah)** | Sow seeds, chain extra turns and capture across the board | vs AI or 2 players |
| 🎲 **Backgammon** | Full dice rules, hitting blots, the bar, bearing off and gammons | vs AI |
| 🀄 **Mahjong Solitaire** | The 144-tile turtle. Every deal can be solved, with hint, shuffle, undo and zoom | Solo |
| 🃏 **Klondike** | Draw 1 or Draw 3, Auto-Send, Auto-Finish and undo | Solo |
| 🂡 **FreeCell** | Every card face-up. Four free cells and supermoves | Solo |
| ⚔️ **Scoundrel** | A roguelike dungeon crawl through a 44-card deck. Weapons go dull as you use them | Solo |
| 👑 **Regicide** | Fight 12 royal bosses with suit powers, combos and solo Jesters | Solo |

## Main menu

- **How to play** for the parlour basics, plus full rules for every game from its card or from the 📜 button in a game
- **Settings**: AI difficulty (Easy, Normal, Hard), AI speed and move hints
- **Trophies**: your wins in every game
- **What's new**, **Review**, **Get the latest**, **Install**, **Ko-fi** and **Credits**

Each game also has its own link, for example `kralnugames.com/grand-compendium/#chess`.

## Install it as an app

On Android (Chrome), tap **Install** on the main menu. On iPhone or iPad, open it in Safari, tap **Share**, then **Add to Home Screen**. Once installed it runs full screen and works without a signal.

## Notes

- The game is the single `index.html` file. `manifest.webmanifest`, `sw.js` and the `icons` folder make it installable and playable offline. No accounts needed.
- Wins and settings are saved in your browser on each device.
- Built phone-first, but it plays in a desktop browser too.

## Updates

The game checks for a newer version when it opens and when you come back to it. If there is one, players see an "A new version is ready" notice with an **Update** button, and there's a **Get the latest** button on the main menu at any time.

When pushing an update: change `GAME_VERSION` in `index.html` and put the same value in `version.json`.

## Credits

Ideas, design and testing by Kris. Built with Claude, an AI by Anthropic.

- **Scoundrel** was designed by Zach Gage and Kurt Bieg.
- **Regicide** was designed by Paul Abrahams, Luke Badger and Andy Richdale (Badgers From Mars).
- Chess, Shogi, Checkers, Mancala, Backgammon, Mahjong Solitaire, Klondike and FreeCell are traditional games.
- Fonts: Cinzel, Inter and Noto Serif JP (SIL Open Font License). Styles: Tailwind CSS (MIT).

## Feedback and support

Found a bug or have an idea? Use **Review** in the game, open an issue on this repository, or email hello@kralnugames.com.

If you'd like to support development, you can buy me a coffee on **Ko-fi:** https://ko-fi.com/kralnu90

More games: https://kralnugames.com

## Changelog

### 1.0.0 · The parlour opens (19 November 2026)
- Ten games: Chess, Shogi, Checkers, Mancala, Backgammon, Mahjong Solitaire, Klondike, FreeCell, Scoundrel and Regicide
- AI opponents for every board game, plus 2-player pass and play for Chess and Mancala
- Settings for AI difficulty, AI speed and move hints
- A trophy cabinet that counts your wins in every game
- Installs to your home screen and plays offline

---

© 2026 Kralnu Games. All rights reserved.
