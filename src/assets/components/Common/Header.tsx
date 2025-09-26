import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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

      <style jsx>{`
        .header-container {
          width: 100%;
          height: 80px;
          background-color: #61c3e0;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          position: sticky;
          top: 0;
          z-index: 100;
          box-sizing: border-box;
        }

        .header-logo-section {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .header-logo {
          width: 85px;
          height: 80px;
          cursor: pointer;
          transition: opacity 0.2s ease;
          object-fit: contain;
        }

        .header-logo:hover {
          opacity: 0.8;
        }

        .header-nav {
          display: flex;
          align-items: center;
          gap: 32px;
          flex: 1;
          justify-content: center;
          margin: 0 40px;
        }

        .nav-button {
          background: none;
          border: none;
          color: #1a1a1a;
          font-size: 16px;
          font-weight: 500;
          font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .nav-button:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: #000000;
          transform: translateY(-1px);
        }

        .nav-button:active {
          transform: translateY(0);
        }

        .header-profile-section {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .profile-dropdown-container {
          position: relative;
        }

        .profile-icon-button {
          background: #4a90e2;
          color: white;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid rgba(255, 255, 255, 0.2);
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .profile-icon-button:hover {
          background-color: #357abd;
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }

        .profile-icon-button:active {
          transform: translateY(0);
        }

        .profile-dropdown {
          position: absolute;
          right: 0;
          top: 50px;
          background-color: white;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
          border-radius: 12px;
          width: 200px;
          z-index: 1000;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.1);
          animation: dropdownFadeIn 0.2s ease;
        }

        @keyframes dropdownFadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dropdown-item {
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: background-color 0.2s ease;
          color: #374151;
          font-size: 14px;
          font-weight: 500;
        }

        .dropdown-item:hover {
          background-color: #f3f4f6;
        }

        .dropdown-item svg {
          color: #6b7280;
        }

        .logout-item {
          color: #e53935 !important;
        }

        .logout-item:hover {
          background-color: #fef2f2 !important;
        }

        .logout-item svg {
          color: #e53935 !important;
        }

        .dropdown-divider {
          height: 1px;
          background-color: #e5e7eb;
          margin: 4px 0;
        }

        /* Mobile Responsive */
        @media (max-width: 991px) {
          .header-container {
            padding: 0 16px;
          }

          .header-nav {
            gap: 24px;
            margin: 0 20px;
          }

          .nav-button {
            font-size: 15px;
            padding: 6px 12px;
          }

          .header-logo {
            width: 70px;
            height: 66px;
          }
        }

        @media (max-width: 768px) {
          .header-container {
            padding: 0 12px;
          }

          .header-nav {
            display: none;
          }

          .header-logo {
            width: 60px;
            height: 56px;
          }

          .profile-icon-button {
            width: 40px;
            height: 40px;
          }

          .profile-dropdown {
            width: 180px;
            top: 46px;
          }
        }

        @media (max-width: 640px) {
          .header-container {
            height: 70px;
            padding: 0 10px;
          }

          .header-logo {
            width: 50px;
            height: 46px;
          }

          .profile-icon-button {
            width: 36px;
            height: 36px;
          }

          .profile-dropdown {
            width: 160px;
            top: 42px;
          }

          .dropdown-item {
            padding: 10px 12px;
            font-size: 13px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;