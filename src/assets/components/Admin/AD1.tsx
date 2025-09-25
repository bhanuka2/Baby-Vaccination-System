import * as React from "react";

function AD1() {
  return (
    <div className="manage-records-container">
      <div className="manage-records-main">
        <h1 className="manage-records-title">Manage Records</h1>
        
        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-card stat-card-blue">
              <div className="stat-content">
                <div className="stat-label">Total Records</div>
                <div className="stat-number">2,847</div>
                <div className="stat-subtitle">+156 this month</div>
              </div>
            </div>
            
            <div className="stat-card stat-card-green">
              <div className="stat-content">
                <div className="stat-label">Active Divisions</div>
                <div className="stat-number">25</div>
                <div className="stat-subtitle">across Sri Lanka</div>
              </div>
            </div>
            
            <div className="stat-card stat-card-purple">
              <div className="stat-content">
                <div className="stat-label">Total Babies</div>
                <div className="stat-number">18,562</div>
                <div className="stat-subtitle">nationwide</div>
              </div>
            </div>
            
            <div className="stat-card stat-card-orange">
              <div className="stat-content">
                <div className="stat-label">Monthly Reports</div>
                <div className="stat-number">127</div>
                <div className="stat-subtitle">generated</div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-title">📈 National Analytics</div>
        
        <div className="analytics-section">
          <div className="analytics-grid">
            <div className="chart-container">
              <div className="chart-header">
                <h3 className="chart-title">Baby Registrations - Last 6 Months</h3>
              </div>
              <div className="chart-content">
                <div className="chart-bars">
                  <div className="chart-bar" style={{ height: '60%' }}>
                    <div className="bar-value">2,100</div>
                  </div>
                  <div className="chart-bar" style={{ height: '75%' }}>
                    <div className="bar-value">2,400</div>
                  </div>
                  <div className="chart-bar" style={{ height: '45%' }}>
                    <div className="bar-value">1,800</div>
                  </div>
                  <div className="chart-bar" style={{ height: '85%' }}>
                    <div className="bar-value">2,700</div>
                  </div>
                  <div className="chart-bar" style={{ height: '90%' }}>
                    <div className="bar-value">2,900</div>
                  </div>
                  <div className="chart-bar" style={{ height: '95%' }}>
                    <div className="bar-value">3,100</div>
                  </div>
                </div>
                <div className="chart-labels">
                  <div className="chart-label">Mar</div>
                  <div className="chart-label">Apr</div>
                  <div className="chart-label">May</div>
                  <div className="chart-label">Jun</div>
                  <div className="chart-label">Jul</div>
                  <div className="chart-label">Aug</div>
                </div>
              </div>
            </div>
            
            <div className="performance-table-container">
              <div className="table-header">
                <h3 className="table-title">Top Performing Divisions</h3>
              </div>
              <div className="table-content">
                <div className="table-header-row">
                  <div className="table-cell header-cell">Division</div>
                  <div className="table-cell header-cell">Registrations</div>
                  <div className="table-cell header-cell">Coverage</div>
                </div>
                <div className="table-body">
                  <div className="table-row">
                    <div className="table-cell">Colombo Municipal</div>
                    <div className="table-cell">2,847</div>
                    <div className="table-cell">
                      <span className="coverage-badge coverage-high">97.8%</span>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="table-cell">Gampaha</div>
                    <div className="table-cell">1,963</div>
                    <div className="table-cell">
                      <span className="coverage-badge coverage-high">95.2%</span>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="table-cell">Kandy</div>
                    <div className="table-cell">1,542</div>
                    <div className="table-cell">
                      <span className="coverage-badge coverage-high">93.7%</span>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="table-cell">Kalutara</div>
                    <div className="table-cell">1,208</div>
                    <div className="table-cell">
                      <span className="coverage-badge coverage-medium">89.4%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-title">🔧 Recent System Activities</div>
        
        <div className="activities-container">
          <div className="activities-list">
            <div className="activity-item">
              <div className="activity-icon">👤</div>
              <div className="activity-content">
                <div className="activity-title">New user account created</div>
                <div className="activity-details">Dr. Nimal Perera (PHM Negombo) - 2 hours ago</div>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon">📊</div>
              <div className="activity-content">
                <div className="activity-title">Division performance report generated</div>
                <div className="activity-details">Galle district - 4 hours ago</div>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon">💾</div>
              <div className="activity-content">
                <div className="activity-title">System backup completed</div>
                <div className="activity-details">Successfully completed - 6 hours ago</div>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon">🔒</div>
              <div className="activity-content">
                <div className="activity-title">Security audit log reviewed</div>
                <div className="activity-details">Reviewed and cleared - 1 day ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .manage-records-container {
          width: 100%;
          background-color: #FFFFFF;
          padding: 24px;
          box-sizing: border-box;
          font-family: Inter, sans-serif;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          max-width: 1200px;
          margin: 0 auto;
        }

        .manage-records-main {
          width: 100%;
          position: relative;
        }

        .manage-records-title {
          color: #1F2937;
          font-weight: 700;
          font-size: 28px;
          margin: 0 0 32px 0;
          text-align: left;
        }

        .stats-section {
          margin-bottom: 36px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-bottom: 32px;
        }

        .stat-card {
          position: relative;
          height: 120px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0,0,0,0.06);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.12);
        }

        .stat-card-blue {
          background: linear-gradient(135deg, #E8F4FD, #D1E9FC);
          border: 1px solid #4A90E2;
        }

        .stat-card-green {
          background: linear-gradient(135deg, #F0F8F0, #E8F5E8);
          border: 1px solid #28A745;
        }

        .stat-card-purple {
          background: linear-gradient(135deg, #F3E8FF, #E9D5FF);
          border: 1px solid #8B5CF6;
        }

        .stat-card-orange {
          background: linear-gradient(135deg, #FFF8E1, #FFF3CD);
          border: 1px solid #FFB84D;
        }

        .stat-content {
          padding: 20px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .stat-label {
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 8px;
          color: #475569;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .stat-number {
          font-weight: 700;
          font-size: 32px;
          margin-bottom: 6px;
          color: #1F2937;
        }

        .stat-subtitle {
          font-size: 12px;
          color: #6B7280;
          font-weight: 500;
        }

        .section-title {
          color: #334155;
          font-weight: 700;
          font-size: 20px;
          margin-bottom: 24px;
          padding-bottom: 8px;
          border-bottom: 2px solid #E2E8F0;
        }

        .analytics-section {
          margin-bottom: 36px;
        }

        .analytics-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 32px;
        }

        .chart-container, .performance-table-container {
          background: #F8FAFC;
          border-radius: 12px;
          padding: 24px;
          border: 1px solid #E2E8F0;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }

        .chart-header, .table-header {
          margin-bottom: 20px;
        }

        .chart-title, .table-title {
          color: #334155;
          font-weight: 600;
          font-size: 16px;
          margin: 0;
        }

        .chart-content {
          height: 250px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .chart-bars {
          display: flex;
          align-items: end;
          justify-content: space-between;
          height: 200px;
          gap: 8px;
        }

        .chart-bar {
          flex: 1;
          background: linear-gradient(135deg, #4A90E2, #357ABD);
          border-radius: 4px 4px 0 0;
          position: relative;
          transition: all 0.3s ease;
          display: flex;
          align-items: end;
          justify-content: center;
          padding-bottom: 8px;
        }

        .chart-bar:hover {
          background: linear-gradient(135deg, #357ABD, #2968A3);
        }

        .bar-value {
          color: white;
          font-size: 11px;
          font-weight: 600;
          text-align: center;
        }

        .chart-labels {
          display: flex;
          justify-content: space-between;
          margin-top: 12px;
        }

        .chart-label {
          font-size: 12px;
          color: #6B7280;
          text-align: center;
          font-weight: 500;
        }

        .table-content {
          background: white;
          border-radius: 8px;
          overflow: hidden;
        }

        .table-header-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 16px;
          align-items: center;
          padding: 12px 16px;
          background: #F1F5F9;
        }

        .header-cell {
          color: #334155;
          font-weight: 700;
          font-size: 13px;
        }

        .table-body {
          background: white;
        }

        .table-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 16px;
          align-items: center;
          padding: 12px 16px;
          border-bottom: 1px solid #F1F5F9;
          transition: background-color 0.2s;
        }

        .table-row:hover {
          background-color: #F8FAFC;
        }

        .table-row:last-child {
          border-bottom: none;
        }

        .table-cell {
          color: #374151;
          font-size: 14px;
          font-weight: 500;
        }

        .coverage-badge {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
          text-align: center;
        }

        .coverage-high {
          background: #D1FAE5;
          color: #047857;
        }

        .coverage-medium {
          background: #FEF3C7;
          color: #92400E;
        }

        .activities-container {
          background: linear-gradient(135deg, #F8FAFC, #F1F5F9);
          border-radius: 12px;
          padding: 24px;
          border: 1px solid #E2E8F0;
        }

        .activities-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .activity-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          background: white;
          border-radius: 8px;
          border: 1px solid #E5E7EB;
          transition: all 0.2s ease;
        }

        .activity-item:hover {
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          transform: translateY(-1px);
        }

        .activity-icon {
          font-size: 20px;
          width: 40px;
          height: 40px;
          background: #E8F4FD;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .activity-content {
          flex: 1;
        }

        .activity-title {
          color: #374151;
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 4px;
        }

        .activity-details {
          color: #6B7280;
          font-size: 12px;
        }

        @media (max-width: 991px) {
          .manage-records-container {
            padding: 20px;
            margin: 0 16px;
          }

          .analytics-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .stats-grid {
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 16px;
          }
        }

        @media (max-width: 640px) {
          .manage-records-container {
            padding: 16px;
            margin: 0 8px;
          }

          .manage-records-title {
            font-size: 20px;
            margin-bottom: 24px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .stat-card {
            height: 100px;
          }

          .table-header-row, .table-row {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .chart-content {
            height: 200px;
          }

          .chart-bars {
            height: 150px;
          }
        }
      `}</style>
    </div>
  );
}

export default AD1;
