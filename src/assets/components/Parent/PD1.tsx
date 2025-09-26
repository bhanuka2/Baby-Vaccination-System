import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface Baby {
  id: number;
  name: string;
  DOB: string;
  ageMonths: number;
  gender: string;
  weight?: number;
  height?: number;
  birthPlace?: string;
  predicationName?: string;
  contact?: string;
  Vaccines?: string[];
}

const ParentDashboard = () => {
  const navigate = useNavigate();
  const [activeAlerts] = useState(3);
  const [babies, setBabies] = useState<Baby[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Function to display age from ageMonths field
  const displayAge = (ageMonths: number): string => {
    if (!ageMonths || isNaN(ageMonths) || ageMonths < 0) {
      return 'Unknown age';
    }
    
    if (ageMonths < 12) {
      return `${ageMonths} months`;
    } else {
      const years = Math.floor(ageMonths / 12);
      const remainingMonths = ageMonths % 12;
      if (remainingMonths > 0) {
        return `${years} years ${remainingMonths} months`;
      }
      return `${years} years`;
    }
  };

  // Function to format date for display
  const formatDate = (dateString: string | Date): string => {
    if (!dateString) return 'Unknown date';
    
    let date: Date;
    
    // Handle different date formats
    if (typeof dateString === 'string') {
      // Try parsing ISO date format first (YYYY-MM-DD)
      if (dateString.includes('-')) {
        date = new Date(dateString);
      } else {
        // If it's a timestamp or other format
        date = new Date(dateString);
      }
    } else {
      date = new Date(dateString);
    }
    
    // Check if the date is valid
    if (isNaN(date.getTime())) {
      return 'Invalid date';
    }
    
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Function to get avatar based on gender and age
  const getAvatar = (gender: string, ageMonths: number): string => {
    // Handle invalid age
    if (!ageMonths || isNaN(ageMonths) || ageMonths < 0) {
      return "👶"; // Default baby emoji
    }
    
    if (ageMonths < 12) {
      return "👶"; // Baby for less than 1 year
    } else if (ageMonths < 36) {
      // Toddler (1-3 years)
      return gender && gender.toLowerCase() === 'female' ? "👧" : "👦";
    } else {
      // Child (3+ years)
      return gender && gender.toLowerCase() === 'female' ? "👧" : "👦";
    }
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

      console.log('Raw API response:', response.data);
      
      // Process the response data to ensure proper formatting
      const processedBabies = response.data.map((baby: any) => ({
        ...baby,
        // Handle both ageMonths and age_months from backend
        ageMonths: baby.ageMonths || baby.age_months || 0,
        // Ensure DOB is properly formatted - handle different possible field names
        DOB: baby.DOB || baby.dob || baby.dateOfBirth || baby.date_of_birth,
        // Ensure gender is a string
        gender: baby.gender || 'unknown',
        // Ensure other fields are properly typed
        weight: baby.weight ? parseInt(baby.weight) : null,
        height: baby.height ? parseInt(baby.height) : null,
        contact: baby.contact ? baby.contact.toString() : null,
        // Handle vaccine data
        Vaccines: baby.Vaccines || baby.vaccines || []
      }));

      console.log('Processed babies data:', processedBabies);
      setBabies(processedBabies);

    } catch (error: any) {
      console.error('Error fetching babies:', error);
      
      if (error.code === 'ECONNABORTED') {
        setErrorMessage('Request timeout. Please check your connection and try again.');
      } else if (error.response) {
        const message = error.response.data?.message || error.response.data?.error || 'Failed to fetch babies.';
        setErrorMessage(`Error: ${message}`);
      } else if (error.request) {
        setErrorMessage('Cannot connect to server. Please ensure the backend server is running on http://localhost:8082');
      } else {
        setErrorMessage('An unexpected error occurred while fetching babies.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch babies on component mount
  useEffect(() => {
    fetchBabies();
  }, []);

  const recentActivities = [
    "Emma's vaccination reminder - MMR due in 2 days",
    "Growth measurement updated for Liam - Height: 78cm",
    "Symptom report submitted for Emma - Mild fever (resolved)",
    "New health tip received - \"Introducing solid foods at 6 months\""
  ];

  const handleNavigation = (path: string) => {
    if (path === '/parent/vaccination-records') {
      navigate('/parent/register-baby');
    } else {
      navigate(path);
    }
  };

  return (
    <div className="pd1-container">
      <div className="pd1-content">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Parent Dashboard</h1>
          <p className="dashboard-subtitle">Manage your baby's health and development</p>
        </div>

        <section className="quick-actions-section">
          <div className="actions-grid">
            {/* Register New Baby Card */}
            <div className="action-card register-card">
              <div className="card-background register-bg"></div>
              <div className="card-content">
                <h3 className="card-title">Register New Baby</h3>
                <p className="card-description">Add a new baby to your account</p>
                <p className="card-description">and start tracking their health</p>
                <button
                  type="button"
                  className="action-button register-btn"
                  onClick={() => handleNavigation('/parent/register-baby')}
                >
                  <span className="button-text">Register</span>
                </button>
              </div>
            </div>

            {/* Report Symptoms Card */}
            <div className="action-card symptoms-card">
              <div className="card-background symptoms-bg"></div>
              <div className="card-content">
                <h3 className="card-title">Report Symptoms</h3>
                <p className="card-description">Quickly report any symptoms</p>
                <p className="card-description">or health concerns</p>
                <button
                  type="button"
                  className="action-button symptoms-btn"
                  onClick={() => handleNavigation('/parent/report-symptoms')}
                >
                  <span className="button-text">Report</span>
                </button>
              </div>
            </div>

            {/* Active Alerts Card */}
            <div className="action-card alerts-card">
              <div className="card-background alerts-bg"></div>
              <div className="card-content">
                <div className="alerts-header">
                  <h3 className="card-title">Active Alerts</h3>
                  <div className="alert-badge">
                    <span className="badge-text">{activeAlerts}</span>
                  </div>
                </div>
                <p className="card-description">View important notifications</p>
                <p className="card-description">and reminders</p>
                <button
                  type="button"
                  className="action-button alerts-btn"
                  onClick={() => handleNavigation('/parent/reminders')}
                >
                  <span className="button-text">Notice</span>
                </button>
              </div>
            </div>
          </div>
        </section>

          <h2 className="section-title">My Babies</h2>

        <section className="babies-section"  style={{marginLeft: '80px'}}>
          
          {/* Loading State */}
          {isLoading && (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p className="loading-text">Loading babies...</p>
            </div>
          )}

          {/* Error State */}
          {errorMessage && (
            <div className="error-container">
              <p className="error-text">{errorMessage}</p>
              <button 
                className="retry-button"
                onClick={fetchBabies}
              >
                Retry
              </button>
            </div>
          )}

          {/* Babies Grid */}
          {!isLoading && !errorMessage && (
            <div className="babies-grid">
              {babies.length === 0 ? (
                <div className="no-babies-container">
                  <div className="no-babies-icon">👶</div>
                  <h3 className="no-babies-title">No babies registered yet</h3>
                  <p className="no-babies-subtitle">Start by registering your first baby to track their health and development</p>
                  <button
                    className="register-first-baby-btn"
                    onClick={() => handleNavigation('/parent/register-baby')}
                  >
                    Register Your First Baby
                  </button>
                </div>
              ) : (
                babies.map((baby) => (
                  <div key={baby.id} className="baby-card">
                    <div className="baby-card-background"></div>
                    <div className="baby-card-content">
                      <div className="baby-avatar">
                        {getAvatar(baby.gender, baby.ageMonths || 0)}
                      </div>
                      <div className="baby-info-wrapper">
                        <div className="baby-details">
                          <h3 className="baby-name">{baby.name || 'Unknown Name'}</h3>
                          <p className="baby-info">Age: {displayAge(baby.ageMonths)}</p>
                          <p className="baby-info">
                            {baby.weight && !isNaN(baby.weight) && `Weight: ${baby.weight} kg`}
                            {baby.weight && !isNaN(baby.weight) && baby.height && !isNaN(baby.height) && ' | '}
                            {baby.height && !isNaN(baby.height) && `Height: ${baby.height} cm`}
                            {(!baby.weight || isNaN(baby.weight)) && (!baby.height || isNaN(baby.height)) && 'No measurements recorded'}
                          </p>
                          {baby.Vaccines && Array.isArray(baby.Vaccines) && baby.Vaccines.length > 0 && (
                            <p className="baby-info">Vaccines: {baby.Vaccines.length} completed</p>
                          )}
                          {baby.birthPlace && (
                            <p className="baby-info">Birth Place: {baby.birthPlace}</p>
                          )}
                        </div>
                        <div className="baby-actions">
                          <button 
                            className="baby-button" 
                            onClick={() => handleNavigation(`/parent/baby/${baby.id}`)}
                          >
                            <span className="baby-button-text">View Details</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </section>

        <section className="recent-activity-section">
          <h2 className="section-title">Recent Activity</h2>
          <div className="activity-container">
            <div className="activity-background"></div>
            <div className="activity-content">
              {recentActivities.map((activity, index) => (
                <div key={index} className="activity-item">• {activity}</div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .pd1-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto; /* Ensures the whole container is centered */
          padding: 20px;
          box-sizing: border-box;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          min-height: calc(100vh - 160px);
        }

        .pd1-content {
          width: 100%;
          position: relative;
        }

        .dashboard-header {
          text-align: center;
          margin-bottom: 40px;
          padding: 30px 0;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
        }

        .dashboard-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2d3748;
          margin: 0 0 10px 0;
          background: linear-gradient(45deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .dashboard-subtitle {
          font-size: 1.1rem;
          color: #718096;
          margin: 0;
          font-weight: 400;
        }

        .quick-actions-section {
          margin-bottom: 40px;
        }

        .actions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          margin-bottom: 30px;
        }

        .action-card {
          position: relative;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          overflow: hidden;
          /* Center content within card if needed, but the current flow works well */
          display: flex;
          flex-direction: column;
          align-items: flex-start; /* Keeps text left-aligned */
        }

        .action-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .card-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.1;
          z-index: 0;
        }

        .register-bg {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        }

        .symptoms-bg {
          background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
        }

        .alerts-bg {
          background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
        }

        .card-content {
          position: relative;
          z-index: 1;
        }

        .card-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: #2d3748;
          margin: 0 0 15px 0;
        }

        .card-description {
          font-size: 0.95rem;
          color: #718096;
          margin: 5px 0;
          line-height: 1.4;
        }

        .alerts-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .alert-badge {
          background: linear-gradient(45deg, #ff6b6b, #ee5a52);
          color: white;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.9rem;
          box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
        }

        .action-button {
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
          border: none;
          border-radius: 12px;
          padding: 12px 25px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 20px;
          position: relative;
          overflow: hidden;
        }

        .action-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
        }

        .action-button:active {
          transform: translateY(0);
        }

        .button-text {
          position: relative;
          z-index: 1;
        }

        .babies-section,
        .recent-activity-section {
          margin-bottom: 40px;
        }

        .section-title {
          font-size: 1.8rem;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 25px;
          text-align: center;
        }

        .babies-grid {
          display: grid;
          /* Use grid to handle responsiveness */
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
          gap: 25px;
          max-width: 1200px;
          margin: 0 auto; /* This centers the grid horizontally */
        }
        
        /* Ensure the single container states are centered too */
        .loading-container,
        .error-container,
        .no-babies-container {
          max-width: 600px; /* Constrain max width for better appearance */
          margin: 0 auto; /* Center these containers */
          text-align: center; /* Center the text within */
        }


        .baby-card {
          position: relative;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 25px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          min-height: 220px;
          display: flex;
          flex-direction: column;
        }

        .baby-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
        }

        .baby-card-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
          opacity: 0.1;
          border-radius: 20px;
        }

        .baby-card-content {
          display: flex;
          gap: 20px;
          position: relative;
          z-index: 1;
        }

        .baby-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(45deg, #667eea, #764ba2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          flex-shrink: 0;
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        .baby-info-wrapper {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .baby-details {
          flex: 1;
          text-align: left; /* Keep details left-aligned */
        }

        .baby-name {
          font-size: 1.3rem;
          font-weight: 600;
          color: #2d3748;
          margin: 0 0 10px 0;
        }

        .baby-info {
          font-size: 0.9rem;
          color: #718096;
          margin: 3px 0;
          line-height: 1.4;
        }

        .baby-actions {
          margin-top: 15px;
          text-align: left; /* Keep button left-aligned for better card layout */
        }

        .baby-button {
          background: linear-gradient(45deg, #4facfe, #00f2fe);
          color: white;
          border: none;
          border-radius: 10px;
          padding: 10px 20px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .baby-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(79, 172, 254, 0.4);
        }

        .activity-container {
          position: relative;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          max-width: 800px; /* Better control on activity width */
          margin: 0 auto; /* Center the activity container */
        }

        .activity-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #d299c2 0%, #fef9d7 100%);
          opacity: 0.1;
          border-radius: 20px;
        }

        .activity-content {
          position: relative;
          z-index: 1;
          text-align: left; /* Keep activity list left-aligned */
        }

        .activity-item {
          font-size: 1rem;
          color: #4a5568;
          margin-bottom: 12px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(226, 232, 240, 0.5);
          line-height: 1.5;
        }

        .activity-item:last-child {
          border-bottom: none;
          margin-bottom: 0;
        }

        /* Loading States */
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #e2e8f0;
          border-top: 4px solid #667eea;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 20px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .loading-text {
          color: #64748b;
          font-size: 16px;
          font-weight: 500;
          margin: 0;
        }

        /* Error States */
        .error-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
          background: rgba(254, 242, 242, 0.95);
          border: 1px solid #fecaca;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        .error-text {
          color: #dc2626;
          font-size: 16px;
          font-weight: 500;
          margin: 0 0 20px 0;
          text-align: center;
          line-height: 1.5;
        }

        .retry-button {
          background: linear-gradient(45deg, #dc2626, #b91c1c);
          color: white;
          border: none;
          border-radius: 12px;
          padding: 12px 24px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .retry-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(220, 38, 38, 0.4);
        }

        /* No Babies State */
        .no-babies-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 20px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          text-align: center;
          /* Inherits margin: 0 auto from general styling */
        }

        .no-babies-icon {
          font-size: 4rem;
          margin-bottom: 20px;
          opacity: 0.7;
        }

        .no-babies-title {
          color: #2d3748;
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0 0 15px 0;
        }

        .no-babies-subtitle {
          color: #718096;
          font-size: 1rem;
          margin: 0 0 30px 0;
          line-height: 1.5;
          max-width: 400px;
        }

        .register-first-baby-btn {
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
          border: none;
          border-radius: 12px;
          padding: 15px 30px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .register-first-baby-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
        }

        @media (max-width: 1200px) {
          .babies-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .pd1-container {
            padding: 15px;
          }

          .dashboard-title {
            font-size: 2rem;
          }

          .actions-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .babies-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .baby-card-content {
            /* Keep it centered for mobile or use initial left alignment */
            flex-direction: row; /* Better on small screen than stacked if possible */
            text-align: left;
            align-items: center;
            gap: 15px;
          }
          
          .baby-info-wrapper {
            /* Ensure wrapper takes full space */
            width: calc(100% - 95px); /* Avatar width + gap */
          }

          .baby-avatar {
            align-self: flex-start; /* Align top-left */
          }
          
          /* Re-adjust for stacked mobile layout if preferred */
          /*
          .baby-card-content {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }
          .baby-avatar {
            align-self: center;
          }
          .baby-details, .baby-actions {
            text-align: center; 
          }
          .baby-actions {
            margin-top: 10px;
          }
          */
        }

        @media (max-width: 480px) {
          .action-card,
          .baby-card,
          .activity-container {
            padding: 20px;
          }

          .dashboard-header {
            padding: 20px;
          }

          .dashboard-title {
            font-size: 1.6rem;
          }

          .section-title {
            font-size: 1.4rem;
          }
          
          /* Ensure text is readable on very small screens */
          .baby-info {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ParentDashboard;