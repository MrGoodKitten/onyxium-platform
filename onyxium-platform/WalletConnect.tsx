import React, { useState } from 'react';

export const WalletConnect = () => {
  const [account, setAccount] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        setIsConnected(true);
      } catch (error) {
        console.error('Wallet connection failed:', error);
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  return (
    <div style={{ padding: '20px', background: '#1a1a2e', borderRadius: '15px', color: '#fff' }}>
      <h2>👛 Crypto Wallet</h2>
      {!isConnected ? (
        <button onClick={connectWallet} style={{ padding: '15px 30px', fontSize: '18px', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: '#fff', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px' }}>
          🦊 Connect MetaMask
        </button>
      ) : (
        <div style={{ marginTop: '20px' }}>
          <p>Connected: {account.slice(0, 6)}...{account.slice(-4)}</p>
          <button onClick={() => { setAccount(''); setIsConnected(false); }} style={{ padding: '10px 20px', background: '#ff4444', color: '#fff', border: 'none', borderRadius: '10px', cursor: 'pointer' }}>
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
};
