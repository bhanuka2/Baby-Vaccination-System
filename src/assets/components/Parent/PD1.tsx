import React from 'react';
import './PD1.css';

const PD1: React.FC = () => {
  return (
    <div className="pd1-container"  style={{marginTop: '-900px' , marginLeft: '200px', width: '100%', maxWidth: '1090px', padding: '20px', fontFamily: 'Inter, sans-serif'}}>
      <div className="pd1-content" style={{ width: '1090px'}}>
        <div className="pd1-background">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/dab0f0ef456b0c0466b933d7dc191368ef7452f1?placeholderIfAbsent=true"
            alt="Dashboard background"
            className="background-image"
          />
        </div>
        
        <div className="dashboard-header" >
          <h1 className="dashboard-title">Parent Dashboard</h1>
          <p className="dashboard-subtitle">Manage your baby's health and development</p>
        </div>

        <section className="quick-actions-section" >
        
          <div className="actions-grid" >
            <div className="action-card" >
              <div className="card-background" >
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/121b68e69ceb986f1423d5b702c628a6f666cf2e?placeholderIfAbsent=true"
                  alt="Register background"
                  className="card-bg-image"
                />
              </div>
              <div className="card-content" >
                <h3 className="card-title">Register New Baby</h3>
                <p className="card-description">Add a new baby to your account</p>
                <p className="card-description">and start tracking their health</p>
                <button className="action-button">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/34124b1994b145e3a61659db737f51dd8cb1cf3b?placeholderIfAbsent=true"
                    alt="Button background"
                    className="button-bg"
                  />
                  <span className="button-text">Register</span>
                </button>
              </div>
            </div>

            <div className="action-card">
              <div className="card-background">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/036244ec604c61e44fe65a2961f5b7c63dfb1c88?placeholderIfAbsent=true"
                  alt="Report background"
                  className="card-bg-image"
                />
              </div>
              <div className="card-content">
                <h3 className="card-title">Report Symptoms</h3>
                <p className="card-description">Quickly report any symptoms</p>
                <p className="card-description">or health concerns</p>
                <button className="action-button">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/0620087a48f080bca780eb96b6dd1f13c8965ed3?placeholderIfAbsent=true"
                    alt="Button background"
                    className="button-bg"
                  />
                  <span className="button-text">Report</span>
                </button>
              </div>
            </div>

            <div className="action-card alerts-card">
              <div className="card-background">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/7349d5cba33bfd4d414c63fc3e22073861332e38?placeholderIfAbsent=true"
                  alt="Alerts background"
                  className="card-bg-image"
                />
              </div>
              <div className="card-content">
                <div className="alerts-header">
                  <h3 className="card-title">Active Alerts</h3>
                  <div className="alert-badge">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/fa4008f31248cd4c379b14a61decb30a405fdcbe?placeholderIfAbsent=true"
                      alt="Badge background"
                      className="badge-bg"
                    />
                    <span className="badge-text">3</span>
                  </div>
                </div>
                <p className="card-description">View important notifications</p>
                <p className="card-description">and reminders</p>
                <button className="action-button">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/0620087a48f080bca780eb96b6dd1f13c8965ed3?placeholderIfAbsent=true"
                    alt="Button background"
                    className="button-bg"
                  
                  />
                  <span className="button-text">Notice</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="babies-section">
          <h2 className="section-title">My Babies</h2>
          <div className="babies-grid">
            <div className="baby-card">
              <div className="baby-card-background">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/bf923e4bc908b88a064e0af2d24c3ddd8d8c4a9a?placeholderIfAbsent=true"
                  alt="Baby card background"
                  className="baby-card-bg"
                />
              </div>
              <div className="baby-card-content">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/5ec009decf618bd4182a79a774540123ff6657ac?placeholderIfAbsent=true"
                  alt="Baby avatar"
                  className="baby-avatar"
                />
                <div className="baby-info-wrapper">
                  <div className="baby-details">
                    <h3 className="baby-name">Emma Johnson</h3>
                    <p className="baby-info">Born: March 15, 2024</p>
                    <p className="baby-info">Age: 5 months</p>
                    <p className="baby-info">Weight: 7.2 kg | Height: 65 cm</p>
                  </div>
                  <div className="baby-actions">
                    <button className="baby-button">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/1182809974ebc2c513164807aee3ef1dcc8b1fae?placeholderIfAbsent=true"
                        alt="Button background"
                        className="baby-button-bg"
                      />
                      <span className="baby-button-text">View Details</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="baby-card">
              <div className="baby-card-background">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/8afa8ea29c241844402eec27191749b9ed65e011?placeholderIfAbsent=true"
                  alt="Baby card background"
                  className="baby-card-bg"
                />
              </div>
              <div className="baby-card-content">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/7b26130113a03eb1685fe511a4838c67c47596b5?placeholderIfAbsent=true"
                  alt="Baby avatar"
                  className="baby-avatar"
                />
                <div className="baby-info-wrapper">
                  <div className="baby-details">
                    <h3 className="baby-name">Liam Johnson</h3>
                    <p className="baby-info">Born: June 20, 2023</p>
                    <p className="baby-info">Age: 14 months</p>
                    <p className="baby-info">Weight: 10.5 kg | Height: 78 cm</p>
                  </div>
                  <div className="baby-actions">
                    <button className="baby-button">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/7dbc6b23ee143cbbca136aeabc7f242b83fbcbfe?placeholderIfAbsent=true"
                        alt="Button background"
                        className="baby-button-bg"
                      />
                      <span className="baby-button-text">View Details</span>
                    </button>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="recent-activity-section">
          <h2 className="section-title">Recent Activity</h2>
          <div className="activity-container">
            <div className="activity-background">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/86f29d3cbd42333331eb1ade524d725f6b9b5cb2?placeholderIfAbsent=true"
                alt="Activity background"
                className="activity-bg-image"
              />
            </div>
            <div className="activity-content">
              <div className="activity-item">• Emma's vaccination reminder - MMR due in 2 days</div>
              <div className="activity-item">• Growth measurement updated for Liam - Height: 78cm</div>
              <div className="activity-item">• Symptom report submitted for Emma - Mild fever (resolved)</div>
              <div className="activity-item">• New health tip received - "Introducing solid foods at 6 months"</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PD1;
