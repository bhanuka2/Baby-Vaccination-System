import * as React from "react";

function AD1() {
  return (
    <div className="ad1-container">
      <div className="ad1-main-wrapper">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/29df5f152227603580ea098dc2250850a04796cf?placeholderIfAbsent=true"
          alt="Dashboard background"
          className="ad1-background-image"
        />
        
        <div className="ad1-stats-section">
          <div className="ad1-stats-grid">
            <div className="ad1-stat-card">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/6aa3a65483690a92ca05a607b61e30d3d74cb8d7?placeholderIfAbsent=true"
                alt="Stat card background"
                className="ad1-stat-background"
              />
              <div className="ad1-stat-number">2,847</div>
              <div className="ad1-stat-subtitle">+156 this month</div>
            </div>
            
            <div className="ad1-stat-card">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/0af760cb06de1cf65ccd5e6088dfa188c145c39f?placeholderIfAbsent=true"
                alt="Active divisions background"
                className="ad1-stat-background"
              />
              <div className="ad1-stat-title ad1-stat-active">Active Divisions</div>
              <div className="ad1-stat-subtitle ad1-stat-description">across Sri Lanka</div>
            </div>
            
            <div className="ad1-stat-card">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/700efa81e23ee611fccc2514fcae86693d233cb2?placeholderIfAbsent=true"
                alt="Nationwide stat background"
                className="ad1-stat-background"
              />
              <div className="ad1-stat-number">18,562</div>
              <div className="ad1-stat-subtitle">nationwide</div>
            </div>
            
            <div className="ad1-stat-card">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/71bb36c2156311193277980cd7af0b4c7d94db33?placeholderIfAbsent=true"
                alt="Monthly reports background"
                className="ad1-stat-background"
              />
              <div className="ad1-stat-title ad1-stat-reports">Monthly Reports</div>
              <div className="ad1-stat-subtitle ad1-stat-description">generated</div>
            </div>
          </div>
        </div>

        <div className="ad1-section-title">📈 National Analytics</div>
        
        <div className="ad1-analytics-section">
          <div className="ad1-analytics-grid">
            <div className="ad1-chart-container">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/891f9b82f0d5e136492391cc46a2001e10ac36f7?placeholderIfAbsent=true"
                alt="Chart background"
                className="ad1-chart-background"
              />
              <div className="ad1-chart-title">Baby Registrations - Last 6 Months</div>
              <div className="ad1-chart-bars">
                <div className="ad1-bar ad1-bar-1"></div>
                <div className="ad1-bar ad1-bar-2"></div>
                <div className="ad1-bar ad1-bar-3"></div>
                <div className="ad1-bar ad1-bar-4"></div>
                <div className="ad1-bar ad1-bar-5"></div>
                <div className="ad1-bar ad1-bar-6"></div>
              </div>
              <div className="ad1-chart-labels">
                <div className="ad1-label">Mar</div>
                <div className="ad1-label">Apr</div>
                <div className="ad1-label">May</div>
                <div className="ad1-label">Jun</div>
                <div className="ad1-label">Jul</div>
                <div className="ad1-label">Aug</div>
              </div>
            </div>
            
            <div className="ad1-table-container">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/bafa8c4ab171a368066e37ba78313bd107d9ce6f?placeholderIfAbsent=true"
                alt="Table background"
                className="ad1-table-background"
              />
              <div className="ad1-table-title">Top Performing Divisions</div>
              <div className="ad1-table-header">
                <div className="ad1-header-cell">Division</div>
                <div className="ad1-header-group">
                  <div className="ad1-header-cell">Registrations</div>
                  <div className="ad1-header-cell">Coverage</div>
                </div>
              </div>
              <div className="ad1-table-body">
                <div className="ad1-table-row">
                  <div className="ad1-division-name">Colombo Municipal</div>
                  <div className="ad1-table-stats">
                    <div className="ad1-registration-count">2,847</div>
                    <div className="ad1-coverage-percentage ad1-coverage-high">97.8%</div>
                  </div>
                </div>
                <div className="ad1-table-row">
                  <div className="ad1-division-name">Gampaha</div>
                  <div className="ad1-table-stats">
                    <div className="ad1-registration-count">1,963</div>
                    <div className="ad1-coverage-percentage ad1-coverage-high">95.2%</div>
                  </div>
                </div>
                <div className="ad1-table-row">
                  <div className="ad1-division-name">Kandy</div>
                  <div className="ad1-table-stats">
                    <div className="ad1-registration-count">1,542</div>
                    <div className="ad1-coverage-percentage ad1-coverage-high">93.7%</div>
                  </div>
                </div>
                <div className="ad1-table-row">
                  <div className="ad1-division-name">Kalutara</div>
                  <div className="ad1-table-stats">
                    <div className="ad1-registration-count">1,208</div>
                    <div className="ad1-coverage-percentage ad1-coverage-medium">89.4%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ad1-section-title">🔧 Recent System Activities</div>
        
        <div className="ad1-activities-container">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/c65d6572c10adfc41ce1411c77999613d27e96f4?placeholderIfAbsent=true"
            alt="Activities background"
            className="ad1-activities-background"
          />
          <div className="ad1-activity-item">
            • New user account created - Dr. Nimal Perera (PHM Negombo) - 2 hours ago
          </div>
          <div className="ad1-activity-item">
            • Division performance report generated for Galle district - 4 hours ago
          </div>
          <div className="ad1-activity-item">
            • System backup completed successfully - 6 hours ago
          </div>
          <div className="ad1-activity-item">
            • Security audit log reviewed and cleared - 1 day ago
          </div>
        </div>

        <div className="ad1-footer">
          © 2025 Baby Care System - Ministry of Health
        </div>
      </div>
    </div>
  );
}

export default AD1;
