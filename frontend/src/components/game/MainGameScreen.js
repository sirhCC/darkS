import React, { useState } from 'react';
import './MainGameScreen.css';
import DungeonScreen from './DungeonScreen';
import InventoryScreen from './InventoryScreen';
import StatsScreen from './StatsScreen';
import CombatScreen from './CombatScreen';
import { useDungeon } from '../../hooks/useDungeon';
import { useInventory } from '../../hooks/useInventory';
import { usePlayers } from '../../hooks/usePlayers';
import { useCombat } from '../../hooks/useCombat';
import { usePlayerFeatures } from '../../hooks/usePlayerFeatures';

// MainGameScreen brings together all game UI components and manages the main game loop
export default function MainGameScreen({ username, onBackToMenu }) {
  // Hooks for all game features
  const dungeon = useDungeon(username);
  const inventory = useInventory(username);
  const player = usePlayers(username);
  const combat = useCombat(username);
  const features = usePlayerFeatures(username);

  // UI state: which tab/screen is active
  const [activeTab, setActiveTab] = useState('dungeon');

  // Loading and error feedback (example: dungeon)
  if (dungeon.loading) return <div className="game-loading">Loading dungeon...</div>;
  if (dungeon.error) return <div className="game-error">Error: {dungeon.error.message || dungeon.error.toString()}</div>;

  return (
    <div className="main-game-screen">
      <nav className="game-nav">
        <button onClick={() => setActiveTab('dungeon')}>Dungeon</button>
        <button onClick={() => setActiveTab('inventory')}>Inventory</button>
        <button onClick={() => setActiveTab('stats')}>Stats</button>
        <button onClick={() => setActiveTab('combat')}>Combat</button>
        <button onClick={onBackToMenu} style={{ float: 'right' }}>Main Menu</button>
      </nav>
      <div className="game-content">
        {activeTab === 'dungeon' && <DungeonScreen dungeon={dungeon} />}
        {activeTab === 'inventory' && <InventoryScreen inventory={inventory} />}
        {activeTab === 'stats' && <StatsScreen player={player} features={features} />}
        {activeTab === 'combat' && <CombatScreen combat={combat} player={player} />}
      </div>
    </div>
  );
}
