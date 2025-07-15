import React, { useState, useEffect } from 'react';

const menuBg = {
  minHeight: '100vh',
  background: 'radial-gradient(circle at 60% 40%, #232526 60%, #1a1a1d 100%)',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Segoe UI, Emoji, sans-serif',
  transition: 'background 1s',
};

const buttonStyle = {
  background: 'linear-gradient(90deg, #ffb347 0%, #ffcc33 100%)',
  color: '#232526',
  border: 'none',
  borderRadius: '12px',
  padding: '1rem 2.5rem',
  margin: '1rem',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  boxShadow: '0 4px 24px 0 #0008',
  cursor: 'pointer',
  transition: 'transform 0.2s, box-shadow 0.2s',
};

const buttonHover = {
  transform: 'scale(1.08)',
  boxShadow: '0 8px 32px 0 #000b',
};

const loadingIcons = ['⚔️', '🧙‍♂️', '🗝️', '🧟', '🐉', '🧝‍♀️', '🧙‍♀️', '🧛‍♂️'];

function LoadingScreen({ onFinish }) {
  const [iconIdx, setIconIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIconIdx((i) => (i + 1) % loadingIcons.length);
    }, 300);
    const timeout = setTimeout(onFinish, 2200);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onFinish]);
  return (
    <div style={{ ...menuBg, justifyContent: 'center' }}>
      <div style={{ fontSize: '5rem', marginBottom: '1.5rem', animation: 'spin 1.5s linear infinite' }}>
        {loadingIcons[iconIdx]}
      </div>
      <div style={{ fontSize: '2rem', letterSpacing: '0.1em' }}>Loading...</div>
    </div>
  );
}

function MainMenu({ onNavigate }) {
  const [hovered, setHovered] = useState(null);
  return (
    <div style={menuBg}>
      <h1 style={{ fontSize: '3.5rem', marginBottom: '0.5rem', textShadow: '0 2px 12px #000a' }}>
        🗝️ Dungeon Crawler
      </h1>
      <p style={{ fontSize: '1.3rem', marginBottom: '2.5rem', color: '#ffcc33', textShadow: '0 1px 8px #000a' }}>
        Embark on your next adventure!
      </p>
      <div>
        <button
          style={hovered === 'play' ? { ...buttonStyle, ...buttonHover } : buttonStyle}
          onMouseEnter={() => setHovered('play')}
          onMouseLeave={() => setHovered(null)}
          onClick={() => onNavigate('play')}
        >
          ▶️ Play
        </button>
        <button
          style={hovered === 'settings' ? { ...buttonStyle, ...buttonHover } : buttonStyle}
          onMouseEnter={() => setHovered('settings')}
          onMouseLeave={() => setHovered(null)}
          onClick={() => onNavigate('settings')}
        >
          ⚙️ Settings
        </button>
        <button
          style={hovered === 'quit' ? { ...buttonStyle, ...buttonHover } : buttonStyle}
          onMouseEnter={() => setHovered('quit')}
          onMouseLeave={() => setHovered(null)}
          onClick={() => onNavigate('quit')}
        >
          🚪 Quit
        </button>
      </div>
    </div>
  );
}

function SettingsMenu({ onBack }) {
  return (
    <div style={menuBg}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>⚙️ Settings</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        (Settings UI coming soon!)
      </p>
      <button style={buttonStyle} onClick={onBack}>⬅️ Back</button>
    </div>
  );
}

function QuitScreen() {
  return (
    <div style={menuBg}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>🚪 Thanks for playing!</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        See you in the dungeon again soon.
      </p>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState('main');

  useEffect(() => {
    if (!loading) setMenu('main');
  }, [loading]);

  if (loading) return <LoadingScreen onFinish={() => setLoading(false)} />;
  if (menu === 'main') return <MainMenu onNavigate={setMenu} />;
  if (menu === 'settings') return <SettingsMenu onBack={() => setMenu('main')} />;
  if (menu === 'quit') return <QuitScreen />;
  return null;
}

export default App;
