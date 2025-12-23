import React, { useState } from 'react';

export const TokenRewards = () => {
  const [rewards, setRewards] = useState([
    { id: 1, name: 'Daily Login', amount: 10, description: 'Login daily to earn ONYX', claimed: false },
    { id: 2, name: 'Play 5 Games', amount: 50, description: 'Play any 5 games', claimed: false },
    { id: 3, name: 'Win Streak', amount: 100, description: 'Win 3 games in a row', claimed: false },
    { id: 4, name: 'Referral Bonus', amount: 250, description: 'Invite a friend', claimed: false }
  ]);
  const [totalOnyx, setTotalOnyx] = useState(0);

  const claimReward = (id) => {
    setRewards(prev => prev.map(reward => reward.id === id ? { ...reward, claimed: true } : reward));
    const reward = rewards.find(r => r.id === id);
    if (reward) setTotalOnyx(prev => prev + reward.amount);
  };

  return (
    <div style={{ padding: '20px', background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)', borderRadius: '15px' }}>
      <h2 style={{ color: '#333' }}>🎁 Token Rewards</h2>
      <div style={{ background: 'rgba(0,0,0,0.1)', padding: '15px', borderRadius: '10px', marginBottom: '20px' }}>
        <h3 style={{ color: '#333' }}>💰 Total ONYX: {totalOnyx}</h3>
      </div>
      {rewards.map(reward => (
        <div key={reward.id} style={{ background: 'white', padding: '15px', borderRadius: '10px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: reward.claimed ? 0.5 : 1 }}>
          <div>
            <h4 style={{ margin: 0, color: '#333' }}>{reward.name}</h4>
            <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>{reward.description}</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '18px', fontWeight: 'bold', color: '#ff6b6b' }}>+{reward.amount} ONYX</p>
          </div>
          <button onClick={() => claimReward(reward.id)} disabled={reward.claimed} style={{ padding: '10px 20px', background: reward.claimed ? '#ccc' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', border: 'none', borderRadius: '8px', cursor: reward.claimed ? 'not-allowed' : 'pointer', fontWeight: 'bold' }}>
            {reward.claimed ? '✓ Claimed' : '🎁 Claim'}
          </button>
        </div>
      ))}
    </div>
  );
};
