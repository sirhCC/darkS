import { useState } from 'react';
import { CombatAPI } from '../api';

export function useCombat(username) {
  const [combat, setCombat] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const startCombat = async (enemy) => {
    setLoading(true);
    setError(null);
    try {
      const result = await CombatAPI.start(username, enemy);
      setCombat(result);
      return result;
    } catch (e) {
      setError(e);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const playerAttack = async (damage) => {
    setLoading(true);
    setError(null);
    try {
      const result = await CombatAPI.playerAttack(username, damage);
      setCombat(result);
      return result;
    } catch (e) {
      setError(e);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const enemyAttack = async (damage) => {
    setLoading(true);
    setError(null);
    try {
      const result = await CombatAPI.enemyAttack(username, damage);
      setCombat(result);
      return result;
    } catch (e) {
      setError(e);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const endCombat = async () => {
    setLoading(true);
    setError(null);
    try {
      await CombatAPI.end(username);
      setCombat(null);
    } catch (e) {
      setError(e);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  return { combat, loading, error, startCombat, playerAttack, enemyAttack, endCombat };
}
