import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SendTokens from './pages/SendTokens';
import ReceiveTokens from './pages/ReceiveTokens';
import TransactionHistory from './pages/TransactionHistory';
import Settings from './pages/Settings';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/send" element={<SendTokens />} />
        <Route path="/receive" element={<ReceiveTokens />} />
        <Route path="/history" element={<TransactionHistory />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
