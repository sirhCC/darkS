import { useEffect } from 'react';
import { useGame } from '../context/GameContext';

export function useAudioVisualEffects() {
  const { state } = useGame();

  // Music and SFX volume
  useEffect(() => {
    // Example: Set global music volume (if using an audio library, connect here)
    if (window.__gameMusic) {
      window.__gameMusic.volume = state.musicOn ? state.musicVolume / 100 : 0;
    }
    // Example: Set global SFX volume
    if (window.__gameSFX) {
      window.__gameSFX.volume = state.soundOn ? state.sfxVolume / 100 : 0;
    }
  }, [state.musicOn, state.musicVolume, state.soundOn, state.sfxVolume]);

  // Brightness and theme
  useEffect(() => {
    document.body.style.filter = `brightness(${state.brightness / 100 + 0.5})`;
    document.body.style.background = state.darkTheme
      ? 'radial-gradient(circle at 60% 40%, #232526 60%, #1a1a1d 100%)'
      : 'radial-gradient(circle at 60% 40%, #f5f5dc 60%, #ffe4b5 100%)';
  }, [state.brightness, state.darkTheme]);
}
