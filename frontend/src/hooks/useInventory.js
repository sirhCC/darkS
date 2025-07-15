import { useState, useEffect } from 'react';
import { InventoryAPI } from '../api';

export function useInventory(username) {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;
    setLoading(true);
    InventoryAPI.get(username)
      .then(setInventory)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [username]);

  const addItem = async (item) => {
    setLoading(true);
    setError(null);
    try {
      const updated = await InventoryAPI.add(username, item);
      setInventory(updated);
      return updated;
    } catch (e) {
      setError(e);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const removeItem = async (itemId) => {
    setLoading(true);
    setError(null);
    try {
      const updated = await InventoryAPI.remove(username, itemId);
      setInventory(updated);
      return updated;
    } catch (e) {
      setError(e);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  return { inventory, loading, error, addItem, removeItem };
}
