import * as React from "react";
import { Link, Routes, Route } from "react-router-dom";
import AD1 from "./AD1";
import AD2 from "./AD2";
import AD3 from "./AD3";
import PatientSearch from "./PatientSearch";

function AdminDashboard() {
  return (
    <div className="flex gap-2">
      {/* Sidebar */}
      <div className="flex flex-col gap-2 w-60">
        <div className="admin-sidebar-container">
          <div className="admin-sidebar-wrapper">
            <Link to="/dashboard" className="admin-nav-item admin-nav-active" >
               Dashboard
            </Link>

            <Link to="/manage-records" className="admin-nav-item admin-nav-active">
               Manage Records
            </Link>

            <Link to="/patients-search" className="admin-nav-item admin-nav-active">
               Patients Search
            </Link>

            <Link to="/vaccination-programs" className="admin-nav-item admin-nav-active">
               Vaccination Programs
            </Link>
          </div>
        </div>
      </div>

      {/* Right side content */}
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/dashboard" element={<AD2 />} />
          <Route path="/manage-records" element={<AD1 />} />
          <Route path="/patients-search" element={<PatientSearch />} />
          <Route path="/vaccination-programs" element={<AD3 />} />
          <Route path="/" element={<AD2 />} /> {/* Default route */}
        </Routes>
      </div>
    </div>
  );
}

export default AdminDashboard;
