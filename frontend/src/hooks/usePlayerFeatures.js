import { useState } from 'react';
import { PlayerFeatureAPI } from '../api';

export function usePlayerFeatures(username) {
  const [stats, setStats] = useState(null);
  const [gameState, setGameState] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getStats = async () => {
    setLoading(true);
    setError(null);
    try {
      const s = await PlayerFeatureAPI.getStats(username);
      setStats(s);
      return s;
    } catch (e) {
      setError(e);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const updateStats = async (updates) => {
    setLoading(true);
    setError(null);
    try {
      const s = await PlayerFeatureAPI.updateStats(username, updates);
      setStats(s);
      return s;
    } catch (e) {
      setError(e);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const saveGame = async (state) => {
    setLoading(true);
    setError(null);
    try {
      const saved = await PlayerFeatureAPI.saveGame(username, state);
      setGameState(saved);
      return saved;
    } catch (e) {
      setError(e);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const loadGame = async () => {
    setLoading(true);
    setError(null);
    try {
      const loaded = await PlayerFeatureAPI.loadGame(username);
      setGameState(loaded);
      return loaded;
    } catch (e) {
      setError(e);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  return { stats, gameState, loading, error, getStats, updateStats, saveGame, loadGame };
}
