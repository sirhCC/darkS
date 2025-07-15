import { useState, useEffect } from 'react';
import { ItemAPI } from '../api';

export function useItems() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    ItemAPI.getAll()
      .then(setItems)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  const addItem = async (item) => {
    setLoading(true);
    setError(null);
    try {
      const newItem = await ItemAPI.create(item);
      setItems((prev) => [...prev, newItem]);
      return newItem;
    } catch (e) {
      setError(e);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const updateItem = async (id, updates) => {
    setLoading(true);
    setError(null);
    try {
      const updated = await ItemAPI.update(id, updates);
      setItems((prev) => prev.map(i => i.id === id ? updated : i));
      return updated;
    } catch (e) {
      setError(e);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  return { items, loading, error, addItem, updateItem };
}
