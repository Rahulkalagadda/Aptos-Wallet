// src/pages/SettingsPage.jsx
import React from 'react';

const SettingsPage = () => {
  const handleToggleTheme = () => {
    // Logic to toggle theme goes here
    console.log('Toggle theme logic here');
  };

  return (
    <div>
      <header>
        <h1>Settings</h1>
      </header>

      <main>
        <div className="container">
          <h2>Settings</h2>
          <button onClick={handleToggleTheme}>Toggle Dark/Light Mode</button>
          {/* You can add more settings options here */}
        </div>
      </main>

      <footer>
        <p>© 2024 Wallet App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SettingsPage;
