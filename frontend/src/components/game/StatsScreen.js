import React, { useEffect } from 'react';
import { usePlayerFeatures } from '../../hooks/usePlayerFeatures';

export default function StatsScreen({ username }) {
  const { stats, loading, error, getStats, updateStats } = usePlayerFeatures(username);

  useEffect(() => {
    getStats();
    // eslint-disable-next-line
  }, [username]);

  const handleHeal = () => {
    updateStats({ hp: (stats?.hp || 0) + 10 });
  };

  return (
    <div style={{ padding: 24, background: '#232526', color: '#fff', borderRadius: 16, minWidth: 320 }}>
      <h2 style={{ textAlign: 'center' }}>📊 Player Stats</h2>
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'red' }}>{error.message || error.toString()}</div>}
      <pre style={{ background: '#111', padding: 8, borderRadius: 8, color: '#ffcc33' }}>
        {JSON.stringify(stats || {}, null, 2)}
      </pre>
      <button onClick={handleHeal} style={{ marginTop: 16 }}>❤️ Heal +10 HP</button>
    </div>
  );
}
