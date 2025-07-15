import React, { createContext, useContext, useState } from 'react';

// Initial global state
const initialState = {
  musicOn: true,
  soundOn: true,
  darkTheme: true,
  musicVolume: 80,
  sfxVolume: 70,
  brightness: 50,
  // Add more game/global state here as needed
};

const GameContext = createContext();

export function GameProvider({ children }) {
  const [state, setState] = useState(initialState);

  const setSetting = (key, value) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <GameContext.Provider value={{ state, setSetting }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}
