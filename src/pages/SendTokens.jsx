// src/pages/SendTokensPage.jsx
import React, { useState } from 'react';

const SendTokensPage = () => {
  const [receiverAddress, setReceiverAddress] = useState('');
  const [amount, setAmount] = useState('');

  const handleSendTokens = () => {
    // Logic to send tokens goes here
    console.log(`Sending ${amount} tokens to ${receiverAddress}`);
  };

  return (
    <div>
      <header>
        <h1>Send Tokens</h1>
      </header>

      <main>
        <div className="container">
          <h2>Send Tokens</h2>
          <input
            type="text"
            className="input-field"
            placeholder="Receiver Address"
            value={receiverAddress}
            onChange={(e) => setReceiverAddress(e.target.value)}
          />
          <input
            type="number"
            className="input-field"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button onClick={handleSendTokens}>Send</button>
        </div>
      </main>

      <footer>
        <p>© 2024 Wallet App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SendTokensPage;
