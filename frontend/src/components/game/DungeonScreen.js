import React, { useEffect } from 'react';
import { useDungeon } from '../../hooks/useDungeon';

export default function DungeonScreen({ username }) {
  const { dungeonState, loading, error, move, getState } = useDungeon(username);

  useEffect(() => {
    getState();
    // eslint-disable-next-line
  }, [username]);

  const handleMove = (dir) => move(dir);

  return (
    <div style={{ padding: 24, background: '#232526', color: '#fff', borderRadius: 16, minWidth: 320 }}>
      <h2 style={{ textAlign: 'center' }}>🗝️ Dungeon</h2>
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'red' }}>{error.message || error.toString()}</div>}
      <div style={{ margin: '1rem 0', textAlign: 'center' }}>
        <button onClick={() => handleMove('up')}>⬆️</button>
        <div>
          <button onClick={() => handleMove('left')}>⬅️</button>
          <span style={{ margin: '0 1rem' }}>
            {dungeonState?.position ? `(${dungeonState.position.x}, ${dungeonState.position.y})` : '(?, ?)'}
          </span>
          <button onClick={() => handleMove('right')}>➡️</button>
        </div>
        <button onClick={() => handleMove('down')}>⬇️</button>
      </div>
      <div>
        <strong>Visited Rooms:</strong>
        <pre style={{ background: '#111', padding: 8, borderRadius: 8, color: '#ffcc33' }}>
          {JSON.stringify(dungeonState?.visited || [], null, 2)}
        </pre>
      </div>
    </div>
  );
}
