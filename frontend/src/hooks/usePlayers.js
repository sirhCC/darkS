import { useState, useEffect } from 'react';
import { PlayerAPI } from '../api';

export function usePlayers() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    PlayerAPI.getAll()
      .then(setPlayers)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  const addPlayer = async (player) => {
    setLoading(true);
    setError(null);
    try {
      const newPlayer = await PlayerAPI.create(player);
      setPlayers((prev) => [...prev, newPlayer]);
      return newPlayer;
    } catch (e) {
      setError(e);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const updatePlayer = async (username, updates) => {
    setLoading(true);
    setError(null);
    try {
      const updated = await PlayerAPI.update(username, updates);
      setPlayers((prev) => prev.map(p => p.username === username ? updated : p));
      return updated;
    } catch (e) {
      setError(e);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  return { players, loading, error, addPlayer, updatePlayer };
}
