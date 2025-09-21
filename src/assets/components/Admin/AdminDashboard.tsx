import * as React from "react";

function AdminDashboard() {
  return (
    <div className="admin-sidebar-container">
      <div className="admin-sidebar-wrapper">
        <div className="admin-nav-item admin-nav-active">
          📊 Dashboard
        </div>
        <div className="admin-nav-item">
          📋 Manage Records
        </div>
        <div className="admin-nav-item">
          🚨 Emergency Alerts
        </div>
        <div className="admin-nav-item">
          🔍 Patient Search
        </div>
        <div className="admin-nav-item">
          💉 Vaccination Programs
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
