# darkS RPG Dungeon Crawler

A modular, modern RPG dungeon crawler game with a beautiful frontend and scalable backend.

## Structure

- `frontend/` – React app for the game UI (emojis, icons, animations)
- `backend/` – Node.js/Express server for game logic and local persistent storage
- `shared/` – Shared code (types, utilities)
- `assets/` – Art, icons, emoji sets, and other visuals

## Getting Started

1. Run `npm install` in the root folder.
2. Use `npm run start` to launch both frontend and backend.

## Backend API Features

- **Players:** Create, update, and manage player profiles
- **Inventory:** Add, remove, and list items in player inventory
- **Items:** CRUD for game items
- **Dungeons:** CRUD for dungeons and dungeon state
- **Combat:** Start battles, attack, enemy attack, and end combat
- **Dungeon Progression:** Move player, reveal rooms, track dungeon state
- **Player Stats/Leveling:** Get and update player stats, experience, and level
- **Save/Load:** Save and load full game state per player
- **Error Handling:** Centralized error handler for all endpoints
- **Local Storage:** All data is saved in `backend/data/db.json` using lowdb

## Example API Endpoints

- `/api/player` – Player CRUD
- `/api/inventory/:username` – Get/add/remove inventory items
- `/api/item` – Item CRUD
- `/api/dungeon` – Dungeon CRUD
- `/api/combat/:username/start` – Start combat
- `/api/combat/:username/player-attack` – Player attacks
- `/api/combat/:username/enemy-attack` – Enemy attacks
- `/api/combat/:username/end` – End combat
- `/api/dungeon-progress/:username/move` – Move player in dungeon
- `/api/dungeon-progress/:username/state` – Get dungeon state
- `/api/player-feature/:username/stats` – Get/update player stats
- `/api/player-feature/:username/save` – Save game state
- `/api/player-feature/:username/load` – Load game state

---

Let’s build an awesome game!
