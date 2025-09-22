import React from 'react';

const PD3: React.FC = () => {
  return (
    <div className="alerts-notifications-container" style={{marginTop: '-860px' , marginLeft: '250px',width:'1290px'}}>
      <div className="alerts-content">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/b448a6754f35e39a6232b7acedf421a49fff034d?placeholderIfAbsent=true"
          alt="Background"
          className="alerts-background"
        />
        
        <div className="alerts-header">
          <h1 className="alerts-title">Alerts & Notifications</h1>
          <p className="alerts-subtitle">Remember to check this daily</p>
        </div>

        <div className="notification-cards-container">
          <div className="notification-card notification-card-1">
            <span className="notification-text">11 days left</span>
          </div>
          <div className="notification-card notification-card-2"></div>
          <div className="notification-card notification-card-3"></div>
        </div>

        <div className="emergency-alerts-section">
          <h2 className="emergency-title">🚨 Emergency Alerts</h2>
          
          <div className="emergency-alert emergency-alert-1">
            <p className="alert-message">
              Mandatory for all Babies Attendance for Clinic Date - 2025-10-12
            </p>
          </div>

          <div className="emergency-alert emergency-alert-2">
            <p className="alert-message">
              Usual Clinic Date - 2025-12-12
            </p>
          </div>

          <div className="emergency-alert emergency-alert-3">
            <p className="alert-message">
              Update weight and height Date - 2025-10-12
            </p>
          </div>
        </div>
      </div>

      <style >{`
        .alerts-notifications-container {
          max-width: 894px;
          color: rgba(126, 90, 90, 1);
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-weight: 700;
          font-size: 18px;
          border-radius: 0;
        }

        .alerts-content {
          position: relative;
          min-height: 614px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 23px 67px 52px;
        }

        .alerts-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          z-index: -1;
        }

        .alerts-header {
          position: relative;
          width: 100%;
          align-self: flex-start;
        }

        .alerts-title {
          color: rgba(17, 24, 39, 1);
          font-size: 18px;
          font-weight: 700;
          margin: 0;
        }

        .alerts-subtitle {
          color: rgba(105, 104, 104, 1);
          font-size: 14px;
          font-weight: 400;
          margin: 10px 0 0 0;
        }

        .notification-cards-container {
          position: relative;
          display: flex;
          margin-top: 73px;
          width: 100%;
          max-width: 691px;
          align-items: stretch;
          gap: 20px;
          font-size: 14px;
          color: rgba(71, 71, 71, 1);
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .notification-card {
          border-radius: 8px;
          display: flex;
          width: 189px;
          flex-shrink: 0;
          height: 79px;
          align-items: center;
          justify-content: center;
        }

        .notification-card-1 {
          background-color: rgba(248, 116, 0, 0.41);
          padding: 10px 56px 52px;
        }

        .notification-card-2 {
          background-color: rgba(248, 116, 0, 0.46);
        }

        .notification-card-3 {
          background-color: rgba(248, 116, 0, 0.5);
        }

        .notification-text {
          font-size: 14px;
          color: rgba(71, 71, 71, 1);
          font-weight: 400;
        }

        .emergency-alerts-section {
          position: relative;
          width: 100%;
          margin-top: 58px;
        }

        .emergency-title {
          color: rgba(42, 48, 61, 1);
          font-size: 18px;
          font-weight: 700;
          margin: 0 0 37px 13px;
        }

        .emergency-alert {
          position: relative;
          border-radius: 10px;
          margin-bottom: 25px;
          width: 100%;
          max-width: 704px;
          padding: 19px 32px;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          justify-content: center;
        }

        .emergency-alert-1 {
          background-color: rgba(93, 217, 97, 0.65);
          padding: 26px 33px 12px;
        }

        .emergency-alert-2 {
          background-color: rgba(93, 217, 97, 0.63);
        }

        .emergency-alert-3 {
          background-color: rgba(93, 217, 97, 0.54);
          padding: 19px 29px;
        }

        .alert-message {
          font-size: 18px;
          font-weight: 700;
          color: rgba(126, 90, 90, 1);
          margin: 0;
        }

        @media (max-width: 991px) {
          .alerts-content {
            max-width: 100%;
            padding: 0 20px;
          }

          .notification-cards-container {
            max-width: 100%;
            margin-top: 40px;
          }

          .emergency-title {
            margin: 40px 0 0 10px;
          }

          .emergency-alert {
            max-width: 100%;
            padding: 0 20px;
          }
        }

        @media (max-width: 768px) {
          .alerts-content {
            padding: 20px 15px;
          }

          .notification-cards-container {
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }

          .notification-card {
            width: 100%;
            max-width: 300px;
          }

          .emergency-title {
            margin-left: 0;
            text-align: center;
          }

          .alert-message {
            font-size: 16px;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .alerts-title {
            font-size: 16px;
          }

          .alerts-subtitle {
            font-size: 12px;
          }

          .notification-cards-container {
            margin-top: 30px;
          }

          .notification-card {
            height: 60px;
            
          }

          .notification-text {
            font-size: 12px;
          }

          .emergency-title {
            font-size: 16px;
            margin-top: 30px;
          }

          .alert-message {
            font-size: 14px;
          }

          .emergency-alert {
            padding: 15px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default PD3;
