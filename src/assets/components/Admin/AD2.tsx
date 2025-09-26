import * as React from "react";
import axios from 'axios';

interface Baby {
  id: number;
  name: string;
  ageMonths: number;
  Vaccines: any; // Based on your DTO structure
  DOB: string;
  gender: string;
  weight?: number;
  height?: number;
  birthPlace?: string;
  predicationName?: string;
  contact?: number;
}

function AD2() {
  const [babies, setBabies] = React.useState<Baby[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  // Function to calculate age display from ageMonths
  const displayAge = (ageMonths: number): string => {
    if (!ageMonths || isNaN(ageMonths) || ageMonths < 0) {
      return 'Unknown';
    }
    
    if (ageMonths < 12) {
      return `${ageMonths}m`;
    } else {
      const years = Math.floor(ageMonths / 12);
      const remainingMonths = ageMonths % 12;
      if (remainingMonths > 0) {
        return `${years}y ${remainingMonths}m`;
      }
      return `${years}y`;
    }
  };

  // Function to format date for display
  const formatDate = (dateString: string): string => {
    if (!dateString) return 'Unknown';
    
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return 'Invalid date';
      
      return date.toLocaleDateString('en-US', { 
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    } catch (error) {
      return 'Invalid date';
    }
  };

  // Function to determine health status based on age and vaccination
  const getHealthStatus = (baby: Baby): { status: string; className: string } => {
    // Simple logic - you can enhance this based on your requirements
    if (baby.ageMonths > 0 && baby.ageMonths < 24) {
      return { status: 'Healthy', className: 'status-healthy' };
    } else if (baby.ageMonths >= 24) {
      return { status: 'Review', className: 'status-review' };
    }
    return { status: 'Unknown', className: 'status-unknown' };
  };

  // Fetch babies from API
  const fetchBabies = async () => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await axios.get('http://localhost:8082/baby/getAll', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        timeout: 10000, // 10 second timeout
      });

      console.log('Babies fetched successfully for admin dashboard:', response.data);
      
      // Process the response data
      const processedBabies = response.data.map((baby: any) => ({
        ...baby,
        // Ensure ageMonths is a number
        ageMonths: baby.ageMonths || baby.age_months || 0,
        // Ensure other fields are properly formatted
        DOB: baby.DOB || baby.dob || baby.dateOfBirth,
        gender: baby.gender || 'unknown',
        weight: baby.weight ? parseInt(baby.weight) : null,
        height: baby.height ? parseInt(baby.height) : null,
        contact: baby.contact ? baby.contact : null
      }));

      setBabies(processedBabies);

    } catch (error: any) {
      console.error('Error fetching babies for admin dashboard:', error);
      
      if (error.code === 'ECONNABORTED') {
        setErrorMessage('Request timeout. Please check your connection.');
      } else if (error.response) {
        const message = error.response.data?.message || error.response.data?.error || 'Failed to fetch patient records.';
        setErrorMessage(`Error: ${message}`);
      } else if (error.request) {
        setErrorMessage('Cannot connect to server. Please ensure the backend server is running.');
      } else {
        setErrorMessage('An unexpected error occurred while fetching patient records.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch babies on component mount
  React.useEffect(() => {
    fetchBabies();
  }, []);

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
            <div className="table-cell header-cell">Birth Date</div>
            <div className="table-cell header-cell">Status</div>
            <div className="table-cell header-cell">Actions</div>
          </div>
        </div>
        <div className="table-body">
          {isLoading ? (
            <div className="loading-row">
              <div className="loading-spinner-small"></div>
              <span>Loading patient records...</span>
            </div>
          ) : errorMessage ? (
            <div className="error-row">
              <div className="error-content">
                <span className="error-text">{errorMessage}</span>
                <button className="retry-button-small" onClick={fetchBabies}>
                  Retry
                </button>
              </div>
            </div>
          ) : babies.length === 0 ? (
            <div className="no-data-row">
              <span>No patient records found</span>
            </div>
          ) : (
            babies.slice(0, 5).map((baby) => { // Show only first 5 records
              const healthStatus = getHealthStatus(baby);
              return (
                <div key={baby.id} className="table-row">
                  <div className="table-cell">
                    <div className="patient-info">
                      <div className="patient-name">{baby.name || 'Unknown Name'}</div>
                      <div className="patient-gender">{baby.gender}</div>
                    </div>
                  </div>
                  <div className="table-cell">{displayAge(baby.ageMonths)}</div>
                  <div className="table-cell">{formatDate(baby.DOB)}</div>
                  <div className="table-cell">
                    <span className={`status-badge ${healthStatus.className}`}>
                      {healthStatus.status}
                    </span>
                  </div>
                  <div className="table-cell">
                    <button 
                      className="action-button"
                      onClick={() => console.log('View baby details:', baby.id)}
                    >
                      View
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
        
        {/* Show total count if there are more records */}
        {babies.length > 5 && (
          <div className="table-footer">
            <div className="records-summary">
              Showing 5 of {babies.length} total records
              <button className="view-all-button" onClick={() => console.log('View all records')}>
                View All Records
              </button>
            </div>
          </div>
        )}
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

        .patient-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .patient-name {
          font-weight: 600;
          color: #333;
        }

        .patient-gender {
          font-size: 11px;
          color: #666;
          text-transform: capitalize;
        }

        .status-unknown {
          background: #6B7280;
        }

        .loading-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 40px 20px;
          color: #666;
          font-size: 14px;
        }

        .loading-spinner-small {
          width: 20px;
          height: 20px;
          border: 2px solid #e5e7eb;
          border-top: 2px solid #4A90E2;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .error-row {
          padding: 30px 20px;
        }

        .error-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .error-text {
          color: #DC2626;
          font-size: 14px;
          text-align: center;
        }

        .retry-button-small {
          background: #DC2626;
          color: white;
          border: none;
          border-radius: 6px;
          padding: 6px 16px;
          font-size: 12px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .retry-button-small:hover {
          background: #B91C1C;
        }

        .no-data-row {
          display: flex;
          justify-content: center;
          padding: 40px 20px;
          color: #666;
          font-size: 14px;
          font-style: italic;
        }

        .table-footer {
          padding: 16px 20px;
          border-top: 1px solid #f0f0f0;
          background: #F8F9FA;
        }

        .records-summary {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
          color: #666;
        }

        .view-all-button {
          background: #4A90E2;
          color: white;
          border: none;
          border-radius: 6px;
          padding: 6px 16px;
          font-size: 12px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .view-all-button:hover {
          background: #3a7bc8;
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
