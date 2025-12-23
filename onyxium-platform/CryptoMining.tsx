import React, { useState, useEffect } from 'react';

export const CryptoMining = () => {
  const [stats, setStats] = useState({ hashPower: 0, onyxEarned: 0, miningRate: 0.001, isActive: false });
  
  useEffect(() => {
    let interval;
    if (stats.isActive) {
      interval = setInterval(() => {
        setStats(prev => ({ ...prev, onyxEarned: prev.onyxEarned + prev.miningRate, hashPower: prev.hashPower + Math.random() * 10 }));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [stats.isActive]);

  return (
    <div style={{ padding: '20px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '15px', color: 'white' }}>
      <h2>⛏️ ONYX Mining Dashboard</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '10px' }}>
          <h3>💎 ONYX Earned</h3>
          <p style={{ fontSize: '32px' }}>{stats.onyxEarned.toFixed(4)}</p>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '10px' }}>
          <h3>⚡ Hash Power</h3>
          <p style={{ fontSize: '32px' }}>{stats.hashPower.toFixed(2)} H/s</p>
        </div>
      </div>
      <button onClick={() => setStats(prev => ({ ...prev, isActive: !prev.isActive }))} style={{ marginTop: '20px', padding: '15px 30px', fontSize: '18px', background: '#00ff88', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' }}>
        {stats.isActive ? '⏸️ Stop Mining' : '🚀 Start Mining'}
      </button>
      <p style={{ marginTop: '20px', fontSize: '14px', opacity: 0.8 }}>💡 Mining rate increases as you play games!</p>
    </div>
  );
};
