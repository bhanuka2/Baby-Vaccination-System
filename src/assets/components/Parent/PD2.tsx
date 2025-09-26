import React, { useState } from 'react';
import axios from 'axios';

const PD2: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: 'male',
    DOB: '',
    ageMonths: '',
    weight: '',
    height: '',
    birthPlace: '',
    predicationName: '',
    contact: '',
    Vaccines: [] as string[]
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isVaccineDropdownOpen, setIsVaccineDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const availableVaccines = [
    'BCG',
    'OPV', 
    'Pentavalent',
    'PCV',
    'Rotavirus',
    'MMR',
    'DPT_Booster'
  ];

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
    
    if (!formData.name.trim()) {
      newErrors.name = "Baby's name is required";
    }
    
    if (!formData.DOB.trim()) {
      newErrors.DOB = "Date of birth is required";
    }

    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }

    if (formData.ageMonths && (isNaN(Number(formData.ageMonths)) || Number(formData.ageMonths) < 0 || Number(formData.ageMonths) > 60)) {
      newErrors.ageMonths = "Please enter a valid age in months (0-60)";
    }

    if (formData.weight && (isNaN(Number(formData.weight)) || Number(formData.weight) <= 0)) {
      newErrors.weight = "Please enter a valid weight";
    }

    if (formData.height && (isNaN(Number(formData.height)) || Number(formData.height) <= 0)) {
      newErrors.height = "Please enter a valid height";
    }

    if (formData.contact && (isNaN(Number(formData.contact)) || formData.contact.length < 10)) {
      newErrors.contact = "Please enter a valid contact number";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveDraft = () => {
    console.log('Saving draft:', formData);
    alert('Draft saved successfully!');
  };

  const handleContinue = async () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      // Prepare the payload according to backend DTO
      const payload = {
        name: formData.name.trim(),
        ageMonths: formData.ageMonths ? parseInt(formData.ageMonths) : null,
        Vaccines: formData.Vaccines, // Array of selected vaccines
        DOB: formData.DOB, // Date string in YYYY-MM-DD format
        gender: formData.gender,
        weight: formData.weight ? parseInt(formData.weight) : null,
        height: formData.height ? parseInt(formData.height) : null,
        birthPlace: formData.birthPlace.trim() || null,
        predicationName: formData.predicationName.trim() || null,
        contact: formData.contact ? parseInt(formData.contact) : null
      };

      console.log('Sending payload to backend:', payload);

      const response = await axios.post('http://localhost:8082/baby/add', payload, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        timeout: 10000, // 10 second timeout
      });

      console.log('Baby registration successful:', response.data);
      setSuccessMessage('Baby registered successfully!');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          gender: 'male',
          DOB: '',
          ageMonths: '',
          weight: '',
          height: '',
          birthPlace: '',
          predicationName: '',
          contact: '',
          Vaccines: []
        });
        setSuccessMessage(null);
      }, 3000);

    } catch (error: any) {
      console.error('Baby registration error:', error);
      
      if (error.code === 'ECONNABORTED') {
        setErrorMessage('Request timeout. Please check your connection and try again.');
      } else if (error.response) {
        const message = error.response.data?.message || error.response.data?.error || 'Registration failed. Please try again.';
        setErrorMessage(`Registration failed: ${message}`);
      } else if (error.request) {
        setErrorMessage('Cannot connect to server. Please ensure the backend server is running on http://localhost:8082');
      } else {
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleVaccineToggle = (vaccine: string) => {
    setFormData(prev => ({
      ...prev,
      Vaccines: prev.Vaccines.includes(vaccine)
        ? prev.Vaccines.filter(v => v !== vaccine)
        : [...prev.Vaccines, vaccine]
    }));
  };

  const handleRemoveVaccine = (vaccine: string) => {
    setFormData(prev => ({
      ...prev,
      Vaccines: prev.Vaccines.filter(v => v !== vaccine)
    }));
  };

  return (
    <>
      <div className="form-container">
        <div className="form-wrapper">
          <div className="form-card">
            {/* Header Section */}
            <div className="form-header">
              <h1 className="form-title" style={{textAlign:"center",width:"1200px"}}>
                Register New Baby
              </h1>
              <p className="form-subtitle" style={{textAlign:"center",width:"1200px"}}>
                Add your baby's information to start tracking their health and development
              </p>
            </div>

            <div className="form-content">
              {/* Success/Error Messages */}
              {successMessage && (
                <div className="message-container success-message">
                  <p>{successMessage}</p>
                </div>
              )}
              
              {errorMessage && (
                <div className="message-container error-message">
                  <p>{errorMessage}</p>
                </div>
              )}

              {/* Form Content */}
              <div className="form-fields">
                {/* First Row - Baby Name and Date of Birth */}
                <div className="form-row-main">
                  {/* Baby Name */}
                  <div className="form-group-large">
                    <label htmlFor="name" className="form-label">
                      Baby's Full Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter baby's full name"
                      className={`form-input ${errors.name ? 'form-input-error' : ''}`}
                    />
                    {errors.name && (
                      <p className="error-message">{errors.name}</p>
                    )}
                  </div>

                  {/* Date of Birth */}
                  <div className="form-group">
                    <label htmlFor="DOB" className="form-label">
                      Date of Birth <span className="required">*</span>
                    </label>
                    <input
                      type="date"
                      id="DOB"
                      name="DOB"
                      value={formData.DOB}
                      onChange={handleInputChange}
                      className={`form-input ${errors.DOB ? 'form-input-error' : ''}`}
                    />
                    {errors.DOB && (
                      <p className="error-message">{errors.DOB}</p>
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

                {/* Age Section */}
                <div className="form-group">
                  <label htmlFor="ageMonths" className="form-label">
                    Age (months)
                  </label>
                  <input
                    type="number"
                    id="ageMonths"
                    name="ageMonths"
                    min="0"
                    max="60"
                    value={formData.ageMonths}
                    onChange={handleInputChange}
                    placeholder="e.g., 6"
                    className={`form-input age-input ${errors.ageMonths ? 'form-input-error' : ''}`}
                  />
                  {errors.ageMonths && (
                    <p className="error-message">{errors.ageMonths}</p>
                  )}
                  <p className="input-hint">Enter baby's age in months (0-60)</p>
                </div>

                {/* Second Row - Birth Weight and Height */}
                <div className="form-row">
                  {/* Birth Weight */}
                  <div className="form-group">
                    <label htmlFor="weight" className="form-label">
                      Weight (kg)
                    </label>
                    <input
                      type="number"
                      step="1"
                      id="weight"
                      name="weight"
                      value={formData.weight}
                      onChange={handleInputChange}
                      placeholder="e.g., 7"
                      className={`form-input ${errors.weight ? 'form-input-error' : ''}`}
                    />
                    {errors.weight && (
                      <p className="error-message">{errors.weight}</p>
                    )}
                  </div>

                  {/* Birth Height */}
                  <div className="form-group">
                    <label htmlFor="height" className="form-label">
                      Height (cm)
                    </label>
                    <input
                      type="number"
                      id="height"
                      name="height"
                      value={formData.height}
                      onChange={handleInputChange}
                      placeholder="e.g., 65"
                      className={`form-input ${errors.height ? 'form-input-error' : ''}`}
                    />
                    {errors.height && (
                      <p className="error-message">{errors.height}</p>
                    )}
                  </div>
                </div>

                {/* Birth Place */}
                <div className="form-group">
                  <label htmlFor="birthPlace" className="form-label">
                    Birth Place
                  </label>
                  <input
                    type="text"
                    id="birthPlace"
                    name="birthPlace"
                    value={formData.birthPlace}
                    onChange={handleInputChange}
                    placeholder="Enter birth place"
                    className="form-input"
                  />
                </div>

                {/* Third Row - Pediatrician and Contact */}
                <div className="form-row">
                  {/* Pediatrician Name */}
                  <div className="form-group">
                    <label htmlFor="predicationName" className="form-label">
                      Pediatrician's Name
                    </label>
                    <input
                      type="text"
                      id="predicationName"
                      name="predicationName"
                      value={formData.predicationName}
                      onChange={handleInputChange}
                      placeholder="Dr. name (optional)"
                      className="form-input"
                    />
                  </div>

                  {/* Contact */}
                  <div className="form-group">
                    <label htmlFor="contact" className="form-label">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                      placeholder="Phone number"
                      className={`form-input ${errors.contact ? 'form-input-error' : ''}`}
                    />
                    {errors.contact && (
                      <p className="error-message">{errors.contact}</p>
                    )}
                  </div>
                </div>

                {/* Vaccines Selection Section */}
                <div className="form-group">
                  <label className="form-label">
                    Select Vaccines
                  </label>
                  
                  {/* Vaccine Dropdown */}
                  <div className="vaccine-dropdown-container">
                    <button
                      type="button"
                      className="vaccine-dropdown-trigger"
                      onClick={() => setIsVaccineDropdownOpen(!isVaccineDropdownOpen)}
                    >
                      <span>Add Vaccines</span>
                      <svg 
                        className={`dropdown-arrow ${isVaccineDropdownOpen ? 'open' : ''}`}
                        width="12" 
                        height="8" 
                        viewBox="0 0 12 8"
                      >
                        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>

                    {isVaccineDropdownOpen && (
                      <div className="vaccine-dropdown-menu">
                        {availableVaccines.map((vaccine) => (
                          <div
                            key={vaccine}
                            className={`vaccine-dropdown-item ${
                              formData.Vaccines.includes(vaccine) ? 'selected' : ''
                            }`}
                            onClick={() => handleVaccineToggle(vaccine)}
                          >
                            <div className="vaccine-checkbox">
                              {formData.Vaccines.includes(vaccine) && (
                                <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                                  <path d="M1 4L4.5 7.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                              )}
                            </div>
                            <span>{vaccine}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Selected Vaccines Display */}
                  {formData.Vaccines.length > 0 && (
                    <div className="selected-vaccines-container">
                      <div className="selected-vaccines-label">Selected Vaccines:</div>
                      <div className="selected-vaccines-list">
                        {formData.Vaccines.map((vaccine) => (
                          <div key={vaccine} className="selected-vaccine-tag">
                            <span>{vaccine}</span>
                            <button
                              type="button"
                              className="remove-vaccine-btn"
                              onClick={() => handleRemoveVaccine(vaccine)}
                              aria-label={`Remove ${vaccine}`}
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Required Fields Note */}
                <div className="required-note">
                  <span className="required">*</span> Required fields
                </div>

                {/* Action Buttons */}
                <div className="form-actions">
                  <button
                    type="button"
                    onClick={handleSaveDraft}
                    className="btn-secondary"
                    disabled={isLoading}
                  >
                    Save Draft
                  </button>
                  <button
                    type="button"
                    onClick={handleContinue}
                    className="btn-primary"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Registering...' : 'Register Baby'}
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

        /* Vaccine Dropdown Styles */
        .vaccine-dropdown-container {
          position: relative;
          margin-bottom: 16px;
        }

        .vaccine-dropdown-trigger {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #d1d5db;
          border-radius: 8px;
          background: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          font-size: 14px;
          color: #374151;
          transition: all 0.2s ease;
        }

        .vaccine-dropdown-trigger:hover {
          border-color: #9ca3af;
        }

        .vaccine-dropdown-trigger:focus {
          outline: none;
          border-color: #06b6d4;
          box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);
        }

        .dropdown-arrow {
          transition: transform 0.2s ease;
          color: #6b7280;
        }

        .dropdown-arrow.open {
          transform: rotate(180deg);
        }

        .vaccine-dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          max-height: 200px;
          overflow-y: auto;
          margin-top: 4px;
        }

        .vaccine-dropdown-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 16px;
          cursor: pointer;
          transition: background-color 0.2s;
          border-bottom: 1px solid #f3f4f6;
        }

        .vaccine-dropdown-item:last-child {
          border-bottom: none;
        }

        .vaccine-dropdown-item:hover {
          background-color: #f9fafb;
        }

        .vaccine-dropdown-item.selected {
          background-color: #ecfeff;
          color: #0891b2;
        }

        .vaccine-checkbox {
          width: 18px;
          height: 18px;
          border: 2px solid #d1d5db;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .vaccine-dropdown-item.selected .vaccine-checkbox {
          background-color: #06b6d4;
          border-color: #06b6d4;
        }

        /* Selected Vaccines Display */
        .selected-vaccines-container {
          margin-top: 16px;
          padding: 16px;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
        }

        .selected-vaccines-label {
          font-size: 13px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 8px;
        }

        .selected-vaccines-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .selected-vaccine-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
        }

        .remove-vaccine-btn {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          font-size: 16px;
          line-height: 1;
          padding: 0;
          margin-left: 4px;
          width: 16px;
          height: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: background-color 0.2s;
        }

        .remove-vaccine-btn:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }

        /* Message Containers */
        .message-container {
          width: 100%;
          padding: 12px 16px;
          margin-bottom: 20px;
          border-radius: 8px;
          text-align: center;
          font-size: 14px;
          font-weight: 500;
        }

        .error-message {
          background-color: rgba(239, 68, 68, 0.1);
          border: 1px solid #EF4444;
          color: #DC2626;
        }

        .success-message {
          background-color: rgba(34, 197, 94, 0.1);
          border: 1px solid #22C55E;
          color: #16A34A;
        }

        .message-container p {
          margin: 0;
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

          .vaccine-dropdown-menu {
            max-height: 150px;
          }

          .selected-vaccines-list {
            gap: 6px;
          }

          .selected-vaccine-tag {
            font-size: 11px;
            padding: 4px 8px;
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

        .age-input {
          max-width: 200px;
        }

        .input-hint {
          color: #6b7280;
          font-size: 12px;
          margin-top: 4px;
          margin-bottom: 0;
          font-style: italic;
        }
      `}</style>
    </>
  );
};

export default PD2;