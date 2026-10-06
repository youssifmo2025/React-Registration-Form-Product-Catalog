import React from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Top navigation bar with links to Home / Products List and Register.
 */
function Navbar() {
  const location = useLocation();

  return (
    <header className="app-navbar">
      <div className="navbar-content">

        <nav className="navbar-links">
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Products
          </Link>
          <Link
            to="/register"
            className={`nav-link ${location.pathname === '/register' ? 'active' : ''}`}
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
