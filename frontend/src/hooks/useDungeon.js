import { useState } from 'react';
import { DungeonAPI } from '../api';

export function useDungeon(username) {
  const [dungeonState, setDungeonState] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const move = async (direction) => {
    setLoading(true);
    setError(null);
    try {
      const state = await DungeonAPI.move(username, direction);
      setDungeonState(state);
      return state;
    } catch (e) {
      setError(e);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const reveal = async (roomInfo) => {
    setLoading(true);
    setError(null);
    try {
      const state = await DungeonAPI.reveal(username, roomInfo);
      setDungeonState(state);
      return state;
    } catch (e) {
      setError(e);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const getState = async () => {
    setLoading(true);
    setError(null);
    try {
      const state = await DungeonAPI.getState(username);
      setDungeonState(state);
      return state;
    } catch (e) {
      setError(e);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  return { dungeonState, loading, error, move, reveal, getState };
}
