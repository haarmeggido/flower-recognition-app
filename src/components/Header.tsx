import { Link } from 'react-router-dom';
import { useUser } from './UserContext';
import { useState } from 'react';

function Header() {
  const { isLogged, logout } = useUser();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <header className="App-header fixed-top px-3 border-bottom border-dark">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <img src="./src/assets/utils/webpage_icon_transparent.png" alt="Logo" className="navbar-brand" style={{ width: '40px', height: '40px' }} />
          <h1 className="navbar-brand">Flower Recognition App</h1>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/classifier">Classifier</Link>
            </li>

            {!isLogged ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/achievements">Achievements</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/account">Account</Link>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-link nav-link"
                    style={{ textDecoration: 'none' }}
                    onClick={logout}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
