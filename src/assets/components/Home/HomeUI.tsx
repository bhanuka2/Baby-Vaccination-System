import React from 'react';
import './HomeUI.css';

const HomeUI: React.FC = () => {
  return (
    <div className="home-ui-container">
      <div className="main-hero-section">
        <div className="hero-content">
          <div className="hero-title">
            Protecting Your Baby's Future
          </div>
          <div className="hero-description">
            Complete baby care system with vaccination tracking, health
            monitoring, and expert guidance to ensure your little one stays
            healthy and happy
          </div>
          <div className="hero-buttons">
            <div className="primary-action-button">
              <div className="button-text">
                Start Tracking
              </div>
            </div>
            <div className="secondary-action-button">
              <div className="button-text">
                Learn More
              </div>
            </div>
          </div>
        </div>
        <div className="hero-image-container">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/90c62f99c2835220f64364dd584529ec3dabf99f?width=1114"
            alt="Baby care illustration"
            className="hero-main-image"
          />
        </div>
      </div>
      
      <div className="vaccination-section">
        <div className="vaccination-background">
          <svg width="1440" height="57" viewBox="0 0 1440 57" fill="none" xmlns="http://www.w3.org/2000/svg" className="vaccination-bg-svg">
            <path d="M0 0H1440V57H0V0Z" fill="#8897F8" fillOpacity="0.13"></path>
          </svg>
        </div>
        <div className="vaccination-title">
          Why Vaccination Matters
        </div>
      </div>
      
      <div className="trust-section">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/6980655e395480b2b09ce9c0f21d315821ec401d?width=1316"
          alt="Baby care"
          className="trust-image"
        />
        <div className="trust-message">
          <div className="trust-text">
            Join thousands of parents who trust BabyGuard for their child's
            health journey
          </div>
        </div>
      </div>
      
      <div className="call-to-action-section">
        <div className="cta-background"></div>
        <div className="cta-title">
          Start
          <div className="cta-highlight">
            Protecting
          </div>
          Your Baby Today
        </div>
        <div className="cta-button">
          <div className="cta-button-text">
            Get Started
          </div>
        </div>
      </div>
      
      <div className="benefits-grid">
        <div className="benefit-card top-left">
          <div className="benefit-content">
            <div className="benefit-title">
              Disease Prevention
            </div>
            <br />
            <div className="benefit-description">
              Vaccines protect your baby from 14+ serious diseases including
              measles, polio, and whooping cough. They build immunity before
              exposure to dangerous infections.
            </div>
          </div>
        </div>
        <div className="benefit-card top-center">
          <div className="benefit-content">
            <div className="benefit-title">
              Community Protection
            </div>
            <br />
            <div className="benefit-description">
              When most children are vaccinated, it creates "herd immunity" that
              protects those who cannot be vaccinated due to medical conditions.
            </div>
          </div>
        </div>
        <div className="benefit-card top-right">
          <div className="benefit-content">
            <div className="benefit-title">
              Proven Safety
            </div>
            <br />
            <div className="benefit-description">
              Vaccines undergo rigorous testing and continuous monitoring.
              Serious side effects are extremely rare, while the diseases they
              prevent can be deadly.
            </div>
          </div>
        </div>
        <div className="benefit-card bottom-left">
          <div className="benefit-content">
            <div className="benefit-title">
              Cost Effective
            </div>
            <br />
            <div className="benefit-description">
              Prevention costs far less than treatment. save families thousands
              in medical bills and protect against long-term complications
            </div>
          </div>
        </div>
        <div className="benefit-card bottom-center">
          <div className="benefit-content">
            <div className="benefit-title">
              Community Protection
            </div>
            <br />
            <div className="benefit-description">
              When most children are vaccinated, it creates "herd immunity" that
              protects those who cannot be vaccinated due to medical conditions.
            </div>
          </div>
        </div>
        <div className="benefit-card bottom-right">
          <div className="benefit-content">
            <div className="benefit-title">
              Community Protection
            </div>
            <br />
            <div className="benefit-description">
              When most children are vaccinated, it creates "herd immunity" that
              protects those who cannot be vaccinated due to medical conditions.
            </div>
          </div>
        </div>
      </div>
      
      <div className="partners-section">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/04a96d0fa46cfb4179e975018a07c19aae536023?width=332"
          alt="Partner logo"
          className="partner-logo"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/29ebaeccad1a0a3e406208e8ebe0eae1338e95f0?width=416"
          alt="Partner logo"
          className="partner-logo"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/c594989a5f3df322d36d5ac7beb26385d93523b6?width=366"
          alt="Partner logo"
          className="partner-logo"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/58018f7edbeb22908847f9580d1d22c54def84b2?width=450"
          alt="Partner logo"
          className="partner-logo"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/7cb3be9df61406db3ead8391fe02120ac9a0159e?width=426"
          alt="Partner logo"
          className="partner-logo"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/55a49dfc06ea52e08f5eede70e98956a137bab89?width=450"
          alt="Partner logo"
          className="partner-logo"
        />
      </div>
    </div>
  );
};

export default HomeUI;
