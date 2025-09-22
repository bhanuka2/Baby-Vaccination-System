import React from 'react';
import './ParentDashboard.css';
import { Link, Route, Routes } from 'react-router-dom';
import { AD1, AD2 } from '../Admin/DashBoard';
import PD1 from './PD1';
import PD3 from './PD3';
import PD2 from './PD4';
import PD4 from './PD4';
import PD5 from './PD5';

const ParentDashboard: React.FC = () => {
  return (
    <div className="parent-dashboard-container">
      <div className="dashboard-sidebar">
        <Link to="/dashboard" className="admin-nav-item admin-nav-active">
          Dashboard
        </Link>

        <Link to="/register-baby" className="admin-nav-item admin-nav-active">
          Register Baby
        </Link>

        <Link to="/alerts-notifications" className="admin-nav-item admin-nav-active">
          Alerts & Notifications
        </Link>

        <Link to="/report-symptoms" className="admin-nav-item admin-nav-active">
          Report Symptoms
        </Link>

        <Link to="/medical-records" className="admin-nav-item admin-nav-active">
          Medical Records
        </Link>
        
        <Link to="/vaccination-schedule" className="admin-nav-item admin-nav-active">
          Vaccination Schedule
        </Link>
      
      </div>
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/dashboard" element={<PD4 />} />
          <Route path="/register-baby" element={<PD4 />} />
          <Route path="/alerts-notifications" element={<PD3 />} />
          <Route path="/vaccination-schedule" element={<PD2 />} />
          <Route path="/report-symptoms" element={<PD5 />} />
          <Route path="/medical-records" element={<PD3 />} /> 
          <Route path="/" element={<AD2 />} /> {/* Default route */}
        </Routes>
      </div>
    </div>
    
  );
};

export default ParentDashboard;
