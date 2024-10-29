import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/send">Send</Link>
      <Link to="/receive">Receive</Link>
      <Link to="/history">History</Link>
      <Link to="/settings">Settings</Link>
    </nav>
  );
}

export default Navbar;
