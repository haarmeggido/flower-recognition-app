import { Link } from 'react-router-dom';

function Header() {
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
            <li className="nav-item">
              <Link className="nav-link" to="/account">Account</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
