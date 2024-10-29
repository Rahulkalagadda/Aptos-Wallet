// src/pages/TransactionHistoryPage.jsx
import React from 'react';

const TransactionHistoryPage = () => {
  const transactions = [
    { id: 1, date: '2024-10-01', amount: '50 Tokens', to: 'Address 1' },
    { id: 2, date: '2024-10-05', amount: '100 Tokens', to: 'Address 2' },
    { id: 3, date: '2024-10-10', amount: '30 Tokens', to: 'Address 3' },
  ];

  return (
    <div>
      <header>
        <h1>Transaction History</h1>
      </header>

      <main>
        <div className="container">
          <h2>Your Transactions</h2>
          {transactions.map((transaction) => (
            <div className="transaction-card" key={transaction.id}>
              <p>Date: {transaction.date}</p>
              <p>Amount: {transaction.amount}</p>
              <p>To: {transaction.to}</p>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <p>© 2024 Wallet App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TransactionHistoryPage;
