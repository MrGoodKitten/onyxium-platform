import React from 'react';

export const NFTMarketplace = () => {
  const nfts = [
    { id: 1, name: 'Diamond Pickaxe', price: 50, image: '⛏️', rarity: 'Rare', boost: '+50% mining speed' },
    { id: 2, name: 'ONYX Skin', price: 100, image: '💎', rarity: 'Epic', boost: '+2x rewards' },
    { id: 3, name: 'Power Boost', price: 25, image: '⚡', rarity: 'Common', boost: '+25% hash power' },
    { id: 4, name: 'Golden Trophy', price: 500, image: '🏆', rarity: 'Legendary', boost: '+5x all earnings' }
  ];

  return (
    <div style={{ padding: '20px', background: '#16213e', borderRadius: '15px', color: '#fff' }}>
      <h2>🛒 NFT Marketplace</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {nfts.map(nft => (
          <div key={nft.id} style={{ background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)', borderRadius: '15px', padding: '20px' }}>
            <div style={{ fontSize: '80px', textAlign: 'center' }}>{nft.image}</div>
            <h3 style={{ textAlign: 'center' }}>{nft.name}</h3>
            <p style={{ textAlign: 'center', fontSize: '14px' }}>{nft.boost}</p>
            <button style={{ width: '100%', padding: '12px', background: '#00ff88', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>
              Buy for {nft.price} ONYX
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
