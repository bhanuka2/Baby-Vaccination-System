import * as React from "react";
import { Link, Routes, Route, useLocation, Navigate } from "react-router-dom";
import AD1 from "./AD1";
import AD2 from "./AD2";
import AD3 from "./AD3";
import PatientSearch from "./PatientSearch";

function AdminDashboard() {
  // Get current location to highlight active tab
  const location = useLocation();
  const isActive = (path: string) => location.pathname.endsWith(path);

  return (
    <div className="flex gap-2">
      {/* Sidebar */}
      <div className="flex flex-col gap-2 w-60">
        <div className="admin-sidebar-container">
          <div className="admin-sidebar-wrapper">
            <Link
              to="dashboard"
              className={`admin-nav-item${isActive("dashboard") || location.pathname === "/admin" ? " admin-nav-active" : ""}`}
            >
              Dashboard
            </Link>
            <Link
              to="manage-records"
              className={`admin-nav-item${isActive("manage-records") ? " admin-nav-active" : ""}`}
            >
              Manage Records
            </Link>
            <Link
              to="patients-search"
              className={`admin-nav-item${isActive("patients-search") ? " admin-nav-active" : ""}`}
            >
              Patients Search
            </Link>
            <Link
              to="vaccination-programs"
              className={`admin-nav-item${isActive("vaccination-programs") ? " admin-nav-active" : ""}`}
            >
              Vaccination Programs
            </Link>
          </div>
        </div>
      </div>

      {/* Right side content */}
      <div className="flex-1 p-4">
        <Routes>
          {/* Redirect /admin to /admin/dashboard so AD2 is shown by default */}
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AD2 />} />
          <Route path="manage-records" element={<AD1 />} />
          <Route path="patients-search" element={<PatientSearch />} />
          <Route path="vaccination-programs" element={<AD3 />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminDashboard;
