import { Link } from 'react-router-dom';
import { useUser } from './UserContext';

function Header() {
  const { isLogged, setIsLogged } = useUser();

  const handleLogout = () => {
    setIsLogged(false);
    // Additional logout logic if needed
  };

  return (
    <header className="App-header fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <h1 className="navbar-brand">Flower Classifier</h1>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/classifier">Classifier</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/archive">Archive</Link>
            </li>
            {!isLogged ? (
              <>
              <li className="nav-item">
                <Link className="nav-link" to="/account">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
              </>
            ) : (
              <li className="nav-item">
              <button
                className="btn btn-link nav-link"
                style={{ textDecoration: 'none' }}
                onClick={handleLogout}
              >
                Logout
              </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
