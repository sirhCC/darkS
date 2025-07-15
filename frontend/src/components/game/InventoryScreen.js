import React from 'react';
import { useInventory } from '../../hooks/useInventory';

export default function InventoryScreen({ username }) {
  const { inventory, loading, error, addItem, removeItem } = useInventory(username);

  return (
    <div style={{ padding: 24, background: '#232526', color: '#fff', borderRadius: 16, minWidth: 320 }}>
      <h2 style={{ textAlign: 'center' }}>🎒 Inventory</h2>
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'red' }}>{error.message || error.toString()}</div>}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {inventory.map((item) => (
          <li key={item.id} style={{ margin: '0.5rem 0', display: 'flex', alignItems: 'center' }}>
            <span style={{ flex: 1 }}>{item.name} {item.emoji || ''}</span>
            <button onClick={() => removeItem(item.id)} style={{ marginLeft: 8 }}>🗑️</button>
          </li>
        ))}
      </ul>
      {/* Example add item button for demo purposes */}
      <button
        onClick={() => addItem({ id: Date.now().toString(), name: 'Potion', emoji: '🧪' })}
        style={{ marginTop: 16 }}
      >
        ➕ Add Potion
      </button>
    </div>
  );
}
