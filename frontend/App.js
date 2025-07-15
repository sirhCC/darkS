import React from 'react';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #232526 0%, #414345 100%)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Segoe UI, Emoji, sans-serif',
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>🗝️ Dungeon Crawler</h1>
      <p style={{ fontSize: '1.5rem' }}>Welcome to your next adventure! ⚔️🧙‍♂️🐉</p>
      {/* Future: Add game UI here */}
    </div>
  );
}

export default App;
