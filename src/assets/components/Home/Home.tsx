import React from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Header showDashboardButtons={false} />
      
      <main className="home-content">
        <div className="hero-section">
          <div className="hero-text">
            <h1>Baby Vaccination System</h1>
            <p>Keep track of your baby's vaccination schedule with our comprehensive system.</p>
          </div>
        </div>
        
        <div className="features-section">
          <div className="feature-card">
            <h3>Vaccination Tracking</h3>
            <p>Monitor vaccination schedules and keep records up to date.</p>
          </div>
          
          <div className="feature-card">
            <h3>Appointment Management</h3>
            <p>Schedule and manage vaccination appointments easily.</p>
          </div>
          
          <div className="feature-card">
            <h3>Reminders</h3>
            <p>Receive timely reminders for upcoming vaccinations.</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;