import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ 
  searchQuery, 
  setSearchQuery, 
  country, 
  setCountry, 
  theme, 
  toggleTheme 
}) => {
  const location = useLocation();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-custom">
      <div className="container-fluid px-md-4">
        {/* Brand Slogan */}
        <div className="d-flex flex-column" style={{ marginRight: '1.5rem' }}>
          <Link className="navbar-brand brand-title p-0 m-0" to="/">
            World<span style={{ color: 'var(--accent-primary)' }}>Wrap</span>
          </Link>
          <span className="brand-slogan">
            Unwrapping the Truth
          </span>
        </div>

        {/* Collapsible toggle for smaller layouts */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          style={{ border: 'none', background: 'var(--input-bg)' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navigation Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link nav-link-custom ${location.pathname === '/' || location.pathname === '/general' ? 'active' : ''}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link nav-link-custom ${location.pathname === '/business' ? 'active' : ''}`} to="/business">Business</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link nav-link-custom ${location.pathname === '/entertainment' ? 'active' : ''}`} to="/entertainment">Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link nav-link-custom ${location.pathname === '/health' ? 'active' : ''}`} to="/health">Health</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link nav-link-custom ${location.pathname === '/science' ? 'active' : ''}`} to="/science">Science</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link nav-link-custom ${location.pathname === '/sports' ? 'active' : ''}`} to="/sports">Sports</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link nav-link-custom ${location.pathname === '/technology' ? 'active' : ''}`} to="/technology">Technology</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link nav-link-custom ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link nav-link-custom nav-link-bookmarks ${location.pathname === '/bookmarks' ? 'active' : ''}`} to="/bookmarks">★ Bookmarks</Link>
            </li>
          </ul>

          {/* Interactive controls */}
          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
            {/* Search Input Box */}
            <div className="search-container">
              <span className="search-icon">🔍</span>
              <input 
                type="text" 
                placeholder="Search headlines..." 
                value={searchQuery}
                onChange={handleSearchChange}
                className="search-input"
                aria-label="Search headlines"
              />
            </div>

            {/* Country Selector Dropdown */}
            <select 
              value={country} 
              onChange={handleCountryChange} 
              className="country-selector"
              aria-label="Select Country"
            >
              <option value="us">🇺🇸 USA</option>
              <option value="in">🇮🇳 India</option>
              <option value="gb">🇬🇧 UK</option>
              <option value="au">🇦🇺 Australia</option>
              <option value="ca">🇨🇦 Canada</option>
              <option value="fr">🇫🇷 France</option>
              <option value="de">🇩🇪 Germany</option>
              <option value="jp">🇯🇵 Japan</option>
            </select>

            {/* Theme Toggle Moon/Sun Action Button */}
            <button 
              onClick={toggleTheme} 
              className="theme-toggle-btn"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Theme`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
