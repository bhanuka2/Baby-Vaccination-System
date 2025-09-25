import React, { useState } from 'react';

const PD2: React.FC = () => {
  const [formData, setFormData] = useState({
    babyName: '',
    gender: 'male',
    dateOfBirth: '',
    birthWeight: '',
    birthHeight: '',
    hospitalName: '',
    pediatricianName: '',
    emergencyContact: ''
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleGenderChange = (gender: string) => {
    setFormData(prev => ({
      ...prev,
      gender
    }));
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.babyName.trim()) {
      newErrors.babyName = "Baby's name is required";
    }
    
    if (!formData.dateOfBirth.trim()) {
      newErrors.dateOfBirth = "Date of birth is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveDraft = () => {
    console.log('Saving draft:', formData);
  };

  const handleContinue = () => {
    if (validateForm()) {
      console.log('Continuing with:', formData);
    }
  };

  return (
    <>
      <div className="form-container" >
        <div className="form-wrapper">
          <div className="form-card">
            {/* Header Section */}
            <div className="form-header" >
              <h1 className="form-title" style={{textAlign:"center",width:"1200px"}} >
                Register New Baby
              </h1>
              <p className="form-subtitle" style={{textAlign:"center",width:"1200px"}}>
                Add your baby's information to start tracking their health and development
              </p>
            </div>

            <div className="form-content">
              {/* Step Indicator */}
              <div className="step-indicator">
                <h2 className="step-title">
                  Step 1 of 3: Basic Information
                </h2>
                {/* Progress Bar */}
                <div className="progress-container">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '33.33%'}}></div>
                  </div>
                  <div className="progress-labels">
                    <span className="progress-label active">Basic Info</span>
                    <span className="progress-label">Medical Info</span>
                    <span className="progress-label">Review</span>
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <div className="form-fields">
                {/* First Row - Baby Name and Date of Birth */}
                <div className="form-row-main">
                  {/* Baby Name */}
                  <div className="form-group-large">
                    <label htmlFor="babyName" className="form-label">
                      Baby's Full Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="babyName"
                      name="babyName"
                      value={formData.babyName}
                      onChange={handleInputChange}
                      placeholder="Enter baby's full name"
                      className={`form-input ${errors.babyName ? 'form-input-error' : ''}`}
                    />
                    {errors.babyName && (
                      <p className="error-message">{errors.babyName}</p>
                    )}
                  </div>

                  {/* Date of Birth */}
                  <div className="form-group">
                    <label htmlFor="dateOfBirth" className="form-label">
                      Date of Birth <span className="required">*</span>
                    </label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className={`form-input ${errors.dateOfBirth ? 'form-input-error' : ''}`}
                    />
                    {errors.dateOfBirth && (
                      <p className="error-message">{errors.dateOfBirth}</p>
                    )}
                  </div>
                </div>

                {/* Gender Section */}
                <div className="form-group">
                  <label className="form-label">
                    Gender <span className="required">*</span>
                  </label>
                  <div className="gender-options">
                    {/* Male Option */}
                    <div 
                      onClick={() => handleGenderChange('male')}
                      className={`gender-option ${formData.gender === 'male' ? 'selected' : ''}`}
                    >
                      <div className={`radio-button ${formData.gender === 'male' ? 'checked' : ''}`}>
                        {formData.gender === 'male' && (
                          <div className="radio-dot"></div>
                        )}
                      </div>
                      <span className="gender-label">Male</span>
                    </div>

                    {/* Female Option */}
                    <div 
                      onClick={() => handleGenderChange('female')}
                      className={`gender-option ${formData.gender === 'female' ? 'selected' : ''}`}
                    >
                      <div className={`radio-button ${formData.gender === 'female' ? 'checked' : ''}`}>
                        {formData.gender === 'female' && (
                          <div className="radio-dot"></div>
                        )}
                      </div>
                      <span className="gender-label">Female</span>
                    </div>

                    {/* Other Option */}
                    <div 
                      onClick={() => handleGenderChange('other')}
                      className={`gender-option ${formData.gender === 'other' ? 'selected' : ''}`}
                    >
                      <div className={`radio-button ${formData.gender === 'other' ? 'checked' : ''}`}>
                        {formData.gender === 'other' && (
                          <div className="radio-dot"></div>
                        )}
                      </div>
                      <span className="gender-label">Other</span>
                    </div>
                  </div>
                </div>

                {/* Second Row - Birth Weight and Height */}
                <div className="form-row">
                  {/* Birth Weight */}
                  <div className="form-group">
                    <label htmlFor="birthWeight" className="form-label">
                      Birth Weight (kg)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      id="birthWeight"
                      name="birthWeight"
                      value={formData.birthWeight}
                      onChange={handleInputChange}
                      placeholder="e.g., 3.2"
                      className="form-input"
                    />
                  </div>

                  {/* Birth Height */}
                  <div className="form-group">
                    <label htmlFor="birthHeight" className="form-label">
                      Birth Height (cm)
                    </label>
                    <input
                      type="number"
                      id="birthHeight"
                      name="birthHeight"
                      value={formData.birthHeight}
                      onChange={handleInputChange}
                      placeholder="e.g., 50"
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Hospital/Birth Place */}
                <div className="form-group">
                  <label htmlFor="hospitalName" className="form-label">
                    Hospital/Birth Place
                  </label>
                  <input
                    type="text"
                    id="hospitalName"
                    name="hospitalName"
                    value={formData.hospitalName}
                    onChange={handleInputChange}
                    placeholder="Enter hospital or birth place name"
                    className="form-input"
                  />
                </div>

                {/* Third Row - Pediatrician and Emergency Contact */}
                <div className="form-row">
                  {/* Pediatrician Name */}
                  <div className="form-group">
                    <label htmlFor="pediatricianName" className="form-label">
                      Pediatrician's Name
                    </label>
                    <input
                      type="text"
                      id="pediatricianName"
                      name="pediatricianName"
                      value={formData.pediatricianName}
                      onChange={handleInputChange}
                      placeholder="Dr. name (optional)"
                      className="form-input"
                    />
                  </div>

                  {/* Emergency Contact */}
                  <div className="form-group">
                    <label htmlFor="emergencyContact" className="form-label">
                      Emergency Contact
                    </label>
                    <input
                      type="tel"
                      id="emergencyContact"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleInputChange}
                      placeholder="Phone number"
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Required Fields Note */}
                <div className="required-note">
                  <span className="required">*</span> Required fields
                </div>

                {/* Action Buttons */}
                <div className="form-actions">
                  <button
                    onClick={handleSaveDraft}
                    className="btn-secondary"
                  >
                    Save Draft
                  </button>
                  <button
                    onClick={handleContinue}
                    className="btn-primary"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .form-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #e0f2fe 0%, #e1f5fe 100%);
          padding: 20px;
          
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .form-wrapper {
          margin: 0 auto;
        }

        .form-card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          overflow: hidden;
          width:1250px
        }

        .form-header {
          background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
          padding: 32px;
          text-align: left;
        }

        .form-title {
          color: white;
          font-size: 28px;
          font-weight: bold;
          margin: 0 0 8px 0;
          line-height: 1.2;
        }

        .form-subtitle {
          color: rgba(255, 255, 255, 0.9);
          font-size: 14px;
          margin: 0;
          line-height: 1.4;
        }

        .form-content {
          padding: 32px;
        }

        .step-indicator {
          margin-bottom: 32px;
        }

        .step-title {
          color: #1f2937;
          font-size: 18px;
          font-weight: 600;
          margin: 0 0 16px 0;
        }

        .progress-container {
          margin-bottom: 8px;
        }

        .progress-bar {
          width: 100%;
          background-color: #e5e7eb;
          border-radius: 9999px;
          height: 8px;
          margin-bottom: 8px;
        }

        .progress-fill {
          background: linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%);
          height: 100%;
          border-radius: 9999px;
          transition: width 0.3s ease;
        }

        .progress-labels {
          display: flex;
          justify-content: space-between;
        }

        .progress-label {
          font-size: 12px;
          color: #6b7280;
        }

        .progress-label.active {
          color: #06b6d4;
          font-weight: 600;
        }

        .form-fields {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .form-row-main {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 24px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group-large {
          display: flex;
          flex-direction: column;
        }

        .form-label {
          color: #374151;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 8px;
          display: block;
        }

        .required {
          color: #ef4444;
        }

        .form-input {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #d1d5db;
          border-radius: 8px;
          font-size: 14px;
          transition: all 0.2s ease;
          background: white;
        }

        .form-input:hover {
          border-color: #9ca3af;
        }

        .form-input:focus {
          outline: none;
          border-color: #06b6d4;
          box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);
        }

        .form-input-error {
          border-color: #ef4444;
          background-color: #fef2f2;
        }

        .error-message {
          color: #ef4444;
          font-size: 12px;
          margin-top: 4px;
          margin-bottom: 0;
        }

        .gender-options {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .gender-option {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 20px;
          border: 2px solid #d1d5db;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          background: white;
        }

        .gender-option:hover {
          border-color: #9ca3af;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .gender-option.selected {
          border-color: #06b6d4;
          background-color: #ecfeff;
          color: #0891b2;
          box-shadow: 0 2px 8px rgba(6, 182, 212, 0.2);
        }

        .radio-button {
          width: 20px;
          height: 20px;
          border: 2px solid #d1d5db;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .radio-button.checked {
          border-color: #06b6d4;
        }

        .radio-dot {
          width: 12px;
          height: 12px;
          background-color: #06b6d4;
          border-radius: 50%;
        }

        .gender-label {
          font-size: 14px;
          font-weight: 500;
        }

        .required-note {
          font-size: 14px;
          color: #6b7280;
          font-style: italic;
        }

        .form-actions {
          display: flex;
          gap: 16px;
          justify-content: flex-end;
          padding-top: 24px;
          border-top: 1px solid #e5e7eb;
        }

        .btn-secondary {
          padding: 12px 32px;
          border: 2px solid #d1d5db;
          border-radius: 8px;
          background: white;
          color: #374151;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-secondary:hover {
          background-color: #f9fafb;
          border-color: #9ca3af;
        }

        .btn-primary {
          padding: 12px 32px;
          background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, #0891b2 0%, #2563eb 100%);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          transform: translateY(-1px);
        }

        .btn-primary:focus,
        .btn-secondary:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.2);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .form-container {
            padding: 16px;
          }

          .form-header {
            padding: 24px;
          }

          .form-title {
            font-size: 24px;
          }

          .form-content {
            padding: 24px;
          }

          .form-row,
          .form-row-main {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .gender-options {
            flex-direction: column;
            gap: 12px;
          }

          .form-actions {
            flex-direction: column-reverse;
            gap: 12px;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            padding: 14px 24px;
          }
        }

        @media (max-width: 480px) {
          .form-header {
            padding: 20px;
          }

          .form-content {
            padding: 20px;
          }

          .form-title {
            font-size: 20px;
          }

          .form-subtitle {
            font-size: 13px;
          }
        }
      `}</style>
    </>
  );
};

export default PD2;