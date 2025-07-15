import React from 'react';
import { useGame } from '../context/GameContext';

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

function SettingsMenu({ onBack }) {
  const { state, setSetting } = useGame();
  return (
    <div style={menuBg}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>⚙️ Settings</h2>
      <div style={{ fontSize: '1.2rem', marginBottom: '2rem', minWidth: 320 }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ marginRight: '1rem' }}>
            <span role="img" aria-label="music">🎵</span> Music:
          </label>
          <input type="checkbox" checked={state.musicOn} onChange={e => setSetting('musicOn', e.target.checked)} />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ marginRight: '1rem' }}>
            <span role="img" aria-label="sound">🔊</span> Sound FX:
          </label>
          <input type="checkbox" checked={state.soundOn} onChange={e => setSetting('soundOn', e.target.checked)} />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ marginRight: '1rem' }}>
            <span role="img" aria-label="theme">🌗</span> Dark Theme:
          </label>
          <input type="checkbox" checked={state.darkTheme} onChange={e => setSetting('darkTheme', e.target.checked)} />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ marginRight: '1rem' }}>
            <span role="img" aria-label="music-volume">🔉</span> Music Volume:
          </label>
          <input type="range" min="0" max="100" value={state.musicVolume} onChange={e => setSetting('musicVolume', Number(e.target.value))} style={{ width: 180 }} />
          <span style={{ marginLeft: 10 }}>{state.musicVolume}</span>
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ marginRight: '1rem' }}>
            <span role="img" aria-label="sfx-volume">📢</span> SFX Volume:
          </label>
          <input type="range" min="0" max="100" value={state.sfxVolume} onChange={e => setSetting('sfxVolume', Number(e.target.value))} style={{ width: 180 }} />
          <span style={{ marginLeft: 10 }}>{state.sfxVolume}</span>
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ marginRight: '1rem' }}>
            <span role="img" aria-label="brightness">💡</span> Brightness:
          </label>
          <input type="range" min="0" max="100" value={state.brightness} onChange={e => setSetting('brightness', Number(e.target.value))} style={{ width: 180 }} />
          <span style={{ marginLeft: 10 }}>{state.brightness}</span>
        </div>
      </div>
      <button style={buttonStyle} onClick={onBack}>⬅️ Back</button>
    </div>
  );
}

export default SettingsMenu;
