import React, { useState } from 'react';

export default function PlayerSelectScreen({ onStart, onBack, menuBg, buttonStyle }) {
  const [input, setInput] = useState('');
  return (
    <div style={menuBg}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Choose Your Adventurer</h2>
      <input
        style={{ fontSize: '1.2rem', padding: '0.5rem', borderRadius: 8, border: 'none', marginBottom: 16 }}
        placeholder="Enter username..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button
        style={buttonStyle}
        onClick={() => onStart(input)}
        disabled={!input.trim()}
      >
        Start Game
      </button>
      <button style={{ ...buttonStyle, marginTop: 8 }} onClick={onBack}>
        Back
      </button>
    </div>
  );
}
