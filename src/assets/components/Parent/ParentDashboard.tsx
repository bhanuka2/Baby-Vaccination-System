import React from 'react';
import { Link, useLocation, Outlet, Navigate } from 'react-router-dom';
import './ParentDashboard.css';

const ParentDashboard: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname.endsWith(path);
  const isExactParentPath = location.pathname === "/parent";

  return (
    <div className="flex flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="parent-sidebar" style={{
        width: "220px",
        backgroundColor: "#f0f7fa", 
        borderRight: "1px solid #e0e0e0",
        padding: "20px 0",
        position: "fixed",
        height: "100%",
        boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
        zIndex: 10
      }}>
        <div className="parent-sidebar-wrapper" style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          padding: "0 15px"
        }}>
          <Link
            to="dashboard"
            className={`parent-nav-item${isActive("dashboard") || isExactParentPath ? " parent-nav-active" : ""}`}
            style={{
              padding: "12px 15px",
              borderRadius: "8px",
              textDecoration: "none",
              color: isActive("dashboard") || isExactParentPath ? "#06B6D4" : "#333",
              backgroundColor: isActive("dashboard") || isExactParentPath ? "#E0F7FA" : "transparent",
              fontWeight: isActive("dashboard") || isExactParentPath ? 700 : 400,
              display: "flex",
              alignItems: "center",
              gap: "10px",
              transition: "all 0.2s ease"
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            Dashboard
          </Link>
          
          <Link
            to="vaccination-records"
            className={`parent-nav-item${isActive("vaccination-records") ? " parent-nav-active" : ""}`}
            style={{
              padding: "12px 15px",
              borderRadius: "8px",
              textDecoration: "none",
              color: isActive("vaccination-records") ? "#06B6D4" : "#333",
              backgroundColor: isActive("vaccination-records") ? "#E0F7FA" : "transparent",
              fontWeight: isActive("vaccination-records") ? 700 : 400,
              display: "flex",
              alignItems: "center",
              gap: "10px",
              transition: "all 0.2s ease"
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            Medical Records
          </Link>
          
          <Link
            to="reminders"
            className={`parent-nav-item${isActive("reminders") ? " parent-nav-active" : ""}`}
            style={{
              padding: "12px 15px",
              borderRadius: "8px",
              textDecoration: "none",
              color: isActive("reminders") ? "#06B6D4" : "#333",
              backgroundColor: isActive("reminders") ? "#E0F7FA" : "transparent",
              fontWeight: isActive("reminders") ? 700 : 400,
              display: "flex",
              alignItems: "center",
              gap: "10px",
              transition: "all 0.2s ease"
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            Alerts & Reminders
          </Link>
          
          <Link
            to="report-symptoms"
            className={`parent-nav-item${isActive("report-symptoms") ? " parent-nav-active" : ""}`}
            style={{
              padding: "12px 15px",
              borderRadius: "8px",
              textDecoration: "none",
              color: isActive("report-symptoms") ? "#06B6D4" : "#333",
              backgroundColor: isActive("report-symptoms") ? "#E0F7FA" : "transparent",
              fontWeight: isActive("report-symptoms") ? 700 : 400,
              display: "flex",
              alignItems: "center",
              gap: "10px",
              transition: "all 0.2s ease"
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            Report Symptoms
          </Link>
          
          <Link
            to="profile"
            className={`parent-nav-item${isActive("profile") ? " parent-nav-active" : ""}`}
            style={{
              padding: "12px 15px",
              borderRadius: "8px",
              textDecoration: "none",
              color: isActive("profile") ? "#06B6D4" : "#333",
              backgroundColor: isActive("profile") ? "#E0F7FA" : "transparent",
              fontWeight: isActive("profile") ? 700 : 400,
              display: "flex",
              alignItems: "center",
              gap: "10px",
              transition: "all 0.2s ease"
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            Profile
          </Link>
        </div>
      </div>

      {/* Content area */}
      <div className="parent-content" style={{
        marginLeft: "220px",
        width: "calc(100% - 220px)",
        padding: "15px"
      }}>
        {/* Redirect /parent to /parent/dashboard */}
        {isExactParentPath && <Navigate to="/parent/dashboard" replace />}
        <Outlet />
      </div>
    </div>
  );
};

export default ParentDashboard;
