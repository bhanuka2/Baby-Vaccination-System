import React from 'react';

const PD3: React.FC = () => {

  const quickNotifications = [
    { id: 1, text: "Next Appointment in 11 days", color: 'orange', icon: '📅' },
    { id: 2, text: "2 Unread Health Tips", color: 'blue', icon: '💡' },
    { id: 3, text: "Vaccine Record Updated", color: 'green', icon: '💉' },
  ];

  const emergencyAlerts = [
    { id: 1, message: "Mandatory for all Babies: Clinic Attendance Date - 2025-10-12", type: 'critical' },
    { id: 2, message: "Reminder: Usual Clinic Date - 2025-12-12", type: 'info' },
    { id: 3, message: "Action Required: Update weight and height Date - 2025-10-12", type: 'warning' },
  ];

  const getCardStyle = (color: 'orange' | 'blue' | 'green') => {
    switch (color) {
      case 'orange':
        return { background: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 99%)', borderColor: '#ff6b6b' };
      case 'blue':
        return { background: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)', borderColor: '#66a6ff' };
      case 'green':
        return { background: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)', borderColor: '#38c172' };
      default:
        return {};
    }
  };

  const getAlertTypeStyle = (type: 'critical' | 'info' | 'warning') => {
    switch (type) {
      case 'critical':
        return { 
          background: 'linear-gradient(90deg, #fef2f2, #fecaca)', 
          borderLeft: '5px solid #ef4444', 
          color: '#dc2626' 
        };
      case 'info':
        return { 
          background: 'linear-gradient(90deg, #eff6ff, #dbeafe)', 
          borderLeft: '5px solid #3b82f6', 
          color: '#2563eb' 
        };
      case 'warning':
        return { 
          background: 'linear-gradient(90deg, #fffdf2, #fef9c3)', 
          borderLeft: '5px solid #f59e0b', 
          color: '#b45309' 
        };
      default:
        return {};
    }
  };

  return (
    <div className="alerts-notifications-container">
      <div className="alerts-content">
        {/* Background image is kept simple or replaced with a CSS background */}
        <div className="alerts-background-overlay"></div>
        
        <div className="alerts-header">
          <h1 className="alerts-title">Alerts & Notifications</h1>
          <p className="alerts-subtitle">Remember to check this daily for important updates.</p>
        </div>

        {/* Quick Notification Cards (Centered) */}
        <div className="notification-cards-container">
          {quickNotifications.map(notification => (
            <div 
              key={notification.id} 
              className="notification-card"
              style={getCardStyle(notification.color as 'orange' | 'blue' | 'green')}
            >
              <div className="notification-icon">{notification.icon}</div>
              <p className="notification-text">{notification.text}</p>
            </div>
          ))}
        </div>

        {/* Emergency Alerts Section (Centered) */}
        <div className="emergency-alerts-section">
          <h2 className="emergency-title">
            <span className="emergency-title-icon">🚨</span> Important Reminders
          </h2>
          
          <div className="emergency-list">
            {emergencyAlerts.map(alert => (
              <div 
                key={alert.id} 
                className="emergency-alert"
                style={getAlertTypeStyle(alert.type as 'critical' | 'info' | 'warning')}
              >
                <p className="alert-message">{alert.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .alerts-notifications-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto; /* CENTERED */
          padding: 20px;
          box-sizing: border-box;
          font-family: 'Inter', -apple-system, Roboto, Helvetica, sans-serif;
          min-height: 80vh;
        }

        .alerts-content {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center; /* CENTERED */
          padding: 20px;
          box-sizing: border-box;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        .alerts-background-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #e0f7fa 0%, #fffde7 100%); /* Light, pleasant background */
          opacity: 0.3;
          border-radius: 15px;
          z-index: -1;
        }

        .alerts-header {
          text-align: center;
          margin-bottom: 40px;
          padding: 20px;
          width: 100%;
        }

        .alerts-title {
          color: #2d3748;
          font-size: 28px;
          font-weight: 800;
          margin: 0;
        }

        .alerts-subtitle {
          color: #718096;
          font-size: 16px;
          font-weight: 400;
          margin: 8px 0 0 0;
        }

        /* Quick Notification Cards */
        .notification-cards-container {
          display: flex;
          justify-content: center; /* CENTERED */
          margin-top: 30px;
          margin-bottom: 50px;
          width: 100%;
          max-width: 900px; /* Constrain max width for better centering */
          gap: 25px;
          flex-wrap: wrap;
        }

        .notification-card {
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-width: 200px;
          max-width: 280px;
          flex-grow: 1;
          height: 120px;
          padding: 20px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.5);
          cursor: pointer;
        }

        .notification-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .notification-icon {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }

        .notification-text {
          font-size: 15px;
          font-weight: 600;
          color: #2d3748;
          text-align: center;
          margin: 0;
        }
        
        /* Emergency Alerts Section */
        .emergency-alerts-section {
          width: 100%;
          max-width: 800px; /* Constrain max width for list appearance */
          margin: 0 auto 40px; /* CENTERED */
        }

        .emergency-title {
          font-size: 22px;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 25px;
          text-align: center; /* CENTERED */
          padding-bottom: 10px;
          border-bottom: 2px solid #edf2f7;
        }

        .emergency-title-icon {
          margin-right: 10px;
        }

        .emergency-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .emergency-alert {
          border-radius: 8px;
          width: 100%;
          padding: 15px 25px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          transition: transform 0.2s;
        }

        .emergency-alert:hover {
          transform: scale(1.01);
        }

        .alert-message {
          font-size: 16px;
          font-weight: 600;
          margin: 0;
          line-height: 1.4;
        }

        /* Media Queries for Responsiveness */
        @media (max-width: 768px) {
          .alerts-title {
            font-size: 24px;
          }

          .notification-cards-container {
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }

          .notification-card {
            max-width: 80%;
            height: 100px;
          }

          .emergency-alerts-section {
            max-width: 100%;
          }
          
          .emergency-title {
            text-align: center;
            font-size: 20px;
          }

          .alert-message {
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .alerts-notifications-container {
            padding: 10px;
          }

          .alerts-content {
            padding: 15px;
          }

          .alerts-title {
            font-size: 20px;
          }

          .notification-card {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default PD3;