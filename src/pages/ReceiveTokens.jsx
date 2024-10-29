import QRCode from 'qrcode.react';

function ReceiveTokens({ address }) {
  return (
    <div className="receive-tokens">
      <h2>Your Wallet Address</h2>
      <p>{address}</p>
      <QRCode value={address || ''} />
    </div>
  );
}

export default ReceiveTokens;
