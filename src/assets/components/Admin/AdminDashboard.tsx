import * as React from "react";
import { Link, useLocation, Outlet, Navigate } from "react-router-dom";

function AdminDashboard() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname.endsWith(path);
  
  // Determine if we're on the exact /admin path to show dashboard by default
  const isExactAdminPath = location.pathname === "/admin";

  return (
    <div className="flex flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="admin-sidebar" style={{
        width: "220px",
        backgroundColor: "#f8f9fa", 
        borderRight: "1px solid #e0e0e0",
        padding: "20px 0",
        position: "fixed",
        height: "100%",
        boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
        zIndex: 10
      }}>
        <div className="admin-sidebar-wrapper" style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          padding: "0 15px"
        }}>
          <Link
            to="dashboard"
            className={`admin-nav-item${isActive("dashboard") || isExactAdminPath ? " admin-nav-active" : ""}`}
            style={{
              padding: "12px 15px",
              borderRadius: "8px",
              textDecoration: "none",
              color: isActive("dashboard") || isExactAdminPath ? "#4A90E2" : "#333",
              backgroundColor: isActive("dashboard") || isExactAdminPath ? "#E8F4FD" : "transparent",
              fontWeight: isActive("dashboard") || isExactAdminPath ? 700 : 400,
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
            to="manage-records"
            className={`admin-nav-item${isActive("manage-records") ? " admin-nav-active" : ""}`}
            style={{
              padding: "12px 15px",
              borderRadius: "8px",
              textDecoration: "none",
              color: isActive("manage-records") ? "#4A90E2" : "#333",
              backgroundColor: isActive("manage-records") ? "#E8F4FD" : "transparent",
              fontWeight: isActive("manage-records") ? 700 : 400,
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
            Manage Records
          </Link>
          <Link
            to="patients-search"
            className={`admin-nav-item${isActive("patients-search") ? " admin-nav-active" : ""}`}
            style={{
              padding: "12px 15px",
              borderRadius: "8px",
              textDecoration: "none",
              color: isActive("patients-search") ? "#4A90E2" : "#333",
              backgroundColor: isActive("patients-search") ? "#E8F4FD" : "transparent",
              fontWeight: isActive("patients-search") ? 700 : 400,
              display: "flex",
              alignItems: "center",
              gap: "10px",
              transition: "all 0.2s ease"
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            Patients Search
          </Link>
          <Link
            to="vaccination-programs"
            className={`admin-nav-item${isActive("vaccination-programs") ? " admin-nav-active" : ""}`}
            style={{
              padding: "12px 15px",
              borderRadius: "8px",
              textDecoration: "none",
              color: isActive("vaccination-programs") ? "#4A90E2" : "#333",
              backgroundColor: isActive("vaccination-programs") ? "#E8F4FD" : "transparent",
              fontWeight: isActive("vaccination-programs") ? 700 : 400,
              display: "flex",
              alignItems: "center",
              gap: "10px",
              transition: "all 0.2s ease"
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 4v16"></path>
              <path d="M12 4v16"></path>
              <path d="M5 4v16"></path>
              <path d="M19 14H5"></path>
              <path d="M19 4H5"></path>
            </svg>
            Vaccination Programs
          </Link>
        </div>
      </div>

      {/* Right side content */}
      <div className="admin-content" style={{
        marginLeft: "220px",
        width: "calc(100% - 220px)",
        padding: "15px"
      }}>
        {/* Redirect /admin to /admin/dashboard */}
        {isExactAdminPath && <Navigate to="/admin/dashboard" replace />}
        <Outlet />
      </div>
    </div>
  );
}

export default AdminDashboard;
