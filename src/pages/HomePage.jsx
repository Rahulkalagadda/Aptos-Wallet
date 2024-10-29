// // import { useWallet } from '@aptos-labs/wallet-adapter-react';

// // function Home() {
// //   const { connect, account, disconnect } = useWallet();

// //   return (
// //     <div className="home">
// //       {!account ? (
// //         <button onClick={connect}>Connect Wallet</button>
// //       ) : (
// //         <div>
// //           <p>Wallet Address: {account.address}</p>
// //           <button onClick={disconnect}>Disconnect</button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default Home;
// // src/pages/HomePage.jsx
// // import React from 'react';
// // import Button from '../components/Button';

// // const HomePage = () => {
// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen">
// //       <h1 className="text-3xl font-bold">Welcome to the Wallet App</h1>
// //       <Button className="mt-4">Connect Wallet</Button>
// //     </div>
// //   );
// // };

// // export default HomePage;
// // src/pages/HomePage.jsx
// import React from 'react';
// import Button from '../components/Button';

// const HomePage = () => {
//   const handleConnectWallet = () => {
//     // Logic to connect the wallet goes here
//     console.log('Connect wallet logic here');
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
//       {/* Header Section */}
//       <header className="w-full p-4 bg-blue-600 text-white">
//         <h1 className="text-2xl font-bold text-center">Wallet App</h1>
//       </header>

//       {/* Main Content Section */}
//       <main className="flex flex-col items-center justify-center flex-1 mt-10">
//         <h2 className="text-3xl font-semibold mb-4">Welcome to Your Wallet</h2>
//         <p className="text-gray-700 text-center mb-6">
//           Manage your tokens easily and securely. Connect your wallet to get started.
//         </p>

//         {/* Connect Wallet Button */}
//         <Button onClick={handleConnectWallet} className="mt-4">
//           Connect Wallet
//         </Button>

//         {/* Additional Info */}
//         <div className="mt-8 p-6 bg-white rounded-lg shadow-md text-center">
//           <h3 className="text-xl font-medium mb-2">Features</h3>
//           <ul className="list-disc list-inside">
//             <li>Send and receive tokens</li>
//             <li>View transaction history</li>
//             <li>Manage your settings</li>
//           </ul>
//         </div>
//       </main>

//       {/* Footer Section */}
//       <footer className="w-full p-4 bg-blue-600 text-white">
//         <p className="text-center text-sm">© 2024 Wallet App. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;

// src/pages/HomePage.jsx
import React from 'react';

const HomePage = () => {
  const handleConnectWallet = () => {
    // Logic to connect the wallet goes here
    console.log('Connect wallet logic here');
  };

  return (
    <div>
      {/* Header Section */}
      <header>
        <h1>Wallet App</h1>
      </header>

      {/* Main Content Section */}
      <main>
        <div className="container">
          <h2>Welcome to Your Wallet</h2>
          <p>Manage your tokens easily and securely. Connect your wallet to get started.</p>
          <button onClick={handleConnectWallet}>Connect Wallet</button>

          {/* Features Section */}
          <div className="features">
            <h3>Features</h3>
            <ul>
              <li>🪙 Send and receive tokens</li>
              <li>📜 View transaction history</li>
              <li>⚙️ Manage your settings</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer>
        <p>© 2024 Wallet App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
