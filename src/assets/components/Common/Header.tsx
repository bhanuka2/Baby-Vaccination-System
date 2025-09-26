import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  showDashboardButtons?: boolean;
}

const Header: React.FC<HeaderProps> = () => {
  const navigate = useNavigate();
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleHome = () => {
    navigate('/home');
  };

  const handleContactUs = () => {
    navigate('/contact');
  };

  const handleAbout = () => {
    navigate('/about');
  };

  const handleServices = () => {
    navigate('/services');
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleProfile = () => {
    navigate('/profile');
    setIsProfileDropdownOpen(false);
  };

  const handleSettings = () => {
    navigate('/settings');
    setIsProfileDropdownOpen(false);
  };

  const handleLogout = () => {
    console.log('Logging out...');
    // Clear any stored authentication data
    localStorage.removeItem('userToken');
    localStorage.removeItem('userType');
    navigate('/signin');
    setIsProfileDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header-container">
      {/* Logo Section */}
      <div className="header-logo-section">
        <img
          className="header-logo"
          src="https://api.builder.io/api/v1/image/assets/TEMP/131b92fa2f7aaddceda632a21b86a6a5fc310f93?width=180"
          alt="ABC Logo"
          loading="eager"
          onClick={handleHome}
        />
      </div>

      {/* Navigation Menu */}
      <nav className="header-nav">
        <button className="nav-button" type="button" onClick={handleHome}>
          Home
        </button>
        <button className="nav-button" type="button" onClick={handleServices}>
          Services
        </button>
        <button className="nav-button" type="button" onClick={handleAbout}>
          About
        </button>
        <button className="nav-button" type="button" onClick={handleContactUs}>
          Contact Us
        </button>
      </nav>

      {/* Profile Section */}
      <div className="header-profile-section">
        <div className="profile-dropdown-container" ref={dropdownRef}>
          <button
            className="profile-icon-button"
            type="button"
            aria-label="Profile menu"
            onClick={toggleProfileDropdown}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
          </button>

          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <div className="dropdown-item" onClick={handleProfile}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
                  <path d="M20 21a8 8 0 1 0-16 0" stroke="currentColor" strokeWidth="2" />
                </svg>
                <span>Profile</span>
              </div>
              <div className="dropdown-item" onClick={handleSettings}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                </svg>
                <span>Settings</span>
              </div>
              <div className="dropdown-divider"></div>
              <div className="dropdown-item logout-item" onClick={handleLogout}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" stroke="currentColor" strokeWidth="2" />
                  <polyline points="16,17 21,12 16,7" stroke="currentColor" strokeWidth="2" />
                  <line x1="21" y1="12" x2="9" y2="12" stroke="currentColor" strokeWidth="2" />
                </svg>
                <span>Logout</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;