import React, { useState } from 'react';
import { useCombat } from '../../hooks/useCombat';

export default function CombatScreen({ username }) {
  const [enemy, setEnemy] = useState({ name: 'Goblin', hp: 30 });
  const [damage, setDamage] = useState(5);
  const { combat, loading, error, startCombat, playerAttack, enemyAttack, endCombat } = useCombat(username);

  return (
    <div style={{ padding: 24, background: '#232526', color: '#fff', borderRadius: 16, minWidth: 320 }}>
      <h2 style={{ textAlign: 'center' }}>⚔️ Combat</h2>
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'red' }}>{error.message || error.toString()}</div>}
      {!combat && (
        <div style={{ textAlign: 'center' }}>
          <button onClick={() => startCombat(enemy)}>Start Combat with {enemy.name}</button>
        </div>
      )}
      {combat && (
        <div>
          <div><strong>Enemy:</strong> {combat.enemy.name} (HP: {combat.enemy.hp})</div>
          <div><strong>Turn:</strong> {combat.turn}</div>
          <div style={{ margin: '1rem 0' }}>
            <button onClick={() => playerAttack(damage)} disabled={combat.turn !== 'player'}>Attack ({damage} dmg)</button>
            <button onClick={() => enemyAttack(4)} disabled={combat.turn !== 'enemy'} style={{ marginLeft: 8 }}>Enemy Attacks</button>
            <button onClick={endCombat} style={{ marginLeft: 8 }}>End Combat</button>
          </div>
          <div>
            <strong>Combat Log:</strong>
            <pre style={{ background: '#111', padding: 8, borderRadius: 8, color: '#ffcc33' }}>
              {JSON.stringify(combat.log || [], null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
