import * as React from "react";

function AD2() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">PHM / MOH Dashboard</h1>
        <p className="dashboard-description">
          Manage patient records and respond to health emergencies
        </p>
      </div>

      <div className="stats-grid">
        <div className="stat-card stat-card-blue">
          <div className="stat-card-background stat-card-blue-bg"></div>
          <div className="stat-card-content">
            <div className="stat-label stat-label-blue">Total Registered Babies</div>
            <div className="stat-number">1,247</div>
            <div className="stat-subtitle">+23 this month</div>
          </div>
        </div>

        <div className="stat-card stat-card-red">
          <div className="stat-card-background stat-card-red-bg"></div>
          <div className="stat-card-content">
            <div className="stat-label stat-label-red">Active Alerts</div>
            <div className="stat-number">8</div>
            <div className="stat-subtitle">2 urgent cases</div>
          </div>
        </div>

        <div className="stat-card stat-card-green">
          <div className="stat-card-background stat-card-green-bg"></div>
          <div className="stat-card-content">
            <div className="stat-label stat-label-green">Vaccinations Today</div>
            <div className="stat-number">34</div>
            <div className="stat-subtitle">15 scheduled</div>
          </div>
        </div>

        <div className="stat-card stat-card-orange">
          <div className="stat-card-background stat-card-orange-bg"></div>
          <div className="stat-card-content">
            <div className="stat-label stat-label-orange">Pending Reviews</div>
            <div className="stat-number">12</div>
            <div className="stat-subtitle">requires attention</div>
          </div>
        </div>
      </div>

      <div className="section-title emergency-section-title">🚨 Emergency Alerts</div>

      <div className="alert-container">
        <div className="alert-card alert-high-priority">
          <div className="alert-background alert-background-red"></div>
          <div className="alert-indicator alert-indicator-red"></div>
          <div className="alert-content">
            <div className="alert-priority alert-priority-high">HIGH PRIORITY</div>
            <div className="alert-description">
              Baby Ashan Silva (6 months) - High fever reported, requires immediate attention
            </div>
            <div className="alert-details">
              Location: Dehiwala | Contact: +94 77 123 4567 | Reported: 2 hours ago
            </div>
          </div>
          <button className="alert-button alert-button-red">
            <span className="alert-button-text">RESPOND</span>
          </button>
        </div>
      </div>

      <div className="alert-container">
        <div className="alert-card alert-medium-priority">
          <div className="alert-background alert-background-orange"></div>
          <div className="alert-indicator alert-indicator-orange"></div>
          <div className="alert-content">
            <div className="alert-priority alert-priority-medium">MEDIUM PRIORITY</div>
            <div className="alert-description">
              Multiple vaccination reminders overdue in Moratuwa area
            </div>
            <div className="alert-details">
              Affected families: 5 | Vaccines due: MMR, Hepatitis B | Overdue: 1-2 weeks
            </div>
          </div>
          <button className="alert-button alert-button-orange">
            <span className="alert-button-text">SCHEDULE</span>
          </button>
        </div>
      </div>

      <div className="section-title records-section-title">📋 Recent Patient Records</div>

      <div className="records-table-container">
        <div className="table-background"></div>
        <div className="table-header">
          <div className="table-header-row">
            <div className="table-cell header-cell">Baby Name</div>
            <div className="table-cell header-cell">Age</div>
            <div className="table-cell header-cell">Last Visit</div>
            <div className="table-cell header-cell">Status</div>
            <div className="table-cell header-cell">Actions</div>
          </div>
        </div>
        <div className="table-body">
          <div className="table-row">
            <div className="table-cell">Kavindi Fernando</div>
            <div className="table-cell">8 months</div>
            <div className="table-cell">Aug 10, 2024</div>
            <div className="table-cell">
              <span className="status-badge status-healthy">Healthy</span>
            </div>
            <div className="table-cell">
              <button className="action-button">View</button>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell">Sahan Wickrama</div>
            <div className="table-cell">12 months</div>
            <div className="table-cell">Aug 12, 2024</div>
            <div className="table-cell">
              <span className="status-badge status-review">Review</span>
            </div>
            <div className="table-cell">
              <button className="action-button">View</button>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell">Nimasha Perera</div>
            <div className="table-cell">4 months</div>
            <div className="table-cell">Aug 14, 2024</div>
            <div className="table-cell">
              <span className="status-badge status-healthy">Healthy</span>
            </div>
            <div className="table-cell">
              <button className="action-button">View</button>
            </div>
          </div>
        </div>
      </div>

      <style >{`
        .dashboard-container {
          width: 100%;
          padding: 20px;
          font-family: Inter, sans-serif;
          background-color: #fff;
          box-sizing: border-box;
        }

        .dashboard-header {
          margin-bottom: 32px;
        }

        .dashboard-title {
          color: #333;
          font-size: 24px;
          font-weight: 700;
          margin: 0 0 8px 0;
        }

        .dashboard-description {
          color: #666;
          font-size: 14px;
          font-weight: 400;
          margin: 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 40px;
        }

        .stat-card {
          position: relative;
          height: 120px;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .stat-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        .stat-card-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 8px;
        }

        .stat-card-blue-bg {
          background: #E8F4FD;
          border: 1px solid #4A90E2;
        }

        .stat-card-red-bg {
          background: #FFF0F0;
          border: 1px solid #FF6B6B;
        }

        .stat-card-green-bg {
          background: #F0F8F0;
          border: 1px solid #28A745;
        }

        .stat-card-orange-bg {
          background: #FFF8E1;
          border: 1px solid #FFB84D;
        }

        .stat-card-content {
          position: relative;
          z-index: 1;
          padding: 16px 20px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .stat-label {
          font-weight: 700;
          font-size: 14px;
          margin-bottom: 8px;
        }

        .stat-label-blue {
          color: #4A90E2;
        }

        .stat-label-red {
          color: #FF6B6B;
        }

        .stat-label-green {
          color: #28A745;
        }

        .stat-label-orange {
          color: #FFB84D;
        }

        .stat-number {
          color: #333;
          font-weight: 700;
          font-size: 32px;
          margin-bottom: 5px;
        }

        .stat-subtitle {
          color: #666;
          font-size: 12px;
        }

        .section-title {
          color: #333;
          font-weight: 700;
          font-size: 18px;
          margin-bottom: 24px;
        }

        .emergency-section-title {
          margin-bottom: 24px;
        }

        .records-section-title {
          margin-top: 32px;
          margin-bottom: 24px;
        }

        .alert-container {
          margin-bottom: 20px;
        }

        .alert-card {
          position: relative;
          width: 100%;
          border-radius: 8px;
          padding: 16px 20px 16px 50px;
          min-height: 80px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
        }

        .alert-high-priority {
          min-height: 90px;
        }

        .alert-medium-priority {
          min-height: 90px;
        }

        .alert-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 8px;
          z-index: -1;
        }

        .alert-background-red {
          background: #FFF5F5;
          border: 1px solid #FF6B6B;
        }

        .alert-background-orange {
          background: #FFF8E1;
          border: 1px solid #FFB84D;
        }

        .alert-indicator {
          position: absolute;
          top: 50%;
          left: 20px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          transform: translateY(-50%);
        }

        .alert-indicator-red {
          background: #FF6B6B;
        }

        .alert-indicator-orange {
          background: #FFB84D;
        }

        .alert-content {
          flex: 1;
          padding-right: 100px;
        }

        .alert-priority {
          font-weight: 700;
          font-size: 12px;
          margin-bottom: 4px;
        }

        .alert-priority-high {
          color: #FF6B6B;
        }

        .alert-priority-medium {
          color: #FFB84D;
        }

        .alert-description {
          color: #333;
          font-size: 14px;
          margin-bottom: 4px;
        }

        .alert-details {
          color: #666;
          font-size: 12px;
        }

        .alert-button {
          position: absolute;
          top: 50%;
          right: 20px;
          width: 80px;
          height: 32px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateY(-50%);
          transition: opacity 0.2s;
        }

        .alert-button:hover {
          opacity: 0.9;
        }

        .alert-button-red {
          background: #FF6B6B;
        }

        .alert-button-orange {
          background: #FFB84D;
        }

        .alert-button-text {
          color: #FFF;
          font-weight: 500;
          font-size: 12px;
        }

        .records-table-container {
          position: relative;
          width: 100%;
          background: white;
          border: 1px solid #E5E5E5;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        .table-header {
          background: #F8F9FA;
          padding: 12px 20px;
        }

        .table-header-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr 1fr 1fr;
          gap: 20px;
          align-items: center;
        }

        .header-cell {
          color: #333;
          font-weight: 700;
          font-size: 12px;
        }

        .table-body {
          padding: 0 20px 20px;
        }

        .table-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr 1fr 1fr;
          gap: 20px;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid #f0f0f0;
        }

        .table-row:last-child {
          border-bottom: none;
        }

        .table-cell {
          color: #333;
          font-size: 13px;
        }

        .status-badge {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 12px;
          color: #FFF;
          font-size: 11px;
          text-align: center;
        }

        .status-healthy {
          background: #28A745;
        }

        .status-review {
          background: #FFB84D;
        }

        .action-button {
          background: #4A90E2;
          color: #FFF;
          border: none;
          border-radius: 4px;
          padding: 4px 15px;
          font-size: 11px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .action-button:hover {
          background-color: #3a7bc8;
        }

        @media (max-width: 1200px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .dashboard-container {
            padding: 15px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .stat-card {
            height: 100px;
          }

          .dashboard-title {
            font-size: 20px;
          }

          .alert-content {
            padding-right: 90px;
          }

          .table-header-row,
          .table-row {
            grid-template-columns: 2fr 1fr 1.5fr 1fr 0.8fr;
            gap: 10px;
          }

          .header-cell,
          .table-cell {
            font-size: 11px;
          }
        }

        @media (max-width: 480px) {
          .dashboard-container {
            padding: 10px;
          }

          .dashboard-title {
            font-size: 18px;
          }

          .section-title {
            font-size: 16px;
          }

          .alert-button {
            width: 70px;
            font-size: 10px;
          }

          .table-header-row,
          .table-row {
            grid-template-columns: 1.5fr 0.8fr 1fr 0.8fr 0.8fr;
            gap: 8px;
          }

          .alert-card {
            padding: 12px 12px 12px 40px;
          }

          .alert-indicator {
            left: 15px;
          }

          .alert-button {
            right: 15px;
          }
        }
      `}</style>
    </div>
  );
}

export default AD2;
