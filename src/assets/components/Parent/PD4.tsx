import React, { useState } from 'react';

interface FormData {
  babyName: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  birthWeight: string;
  birthHeight: string;
  hospitalName: string;
  pediatricianName: string;
  emergencyContact: string;
}

interface FormErrors {
  babyName?: string;
  dateOfBirth?: string;
  gender?: string;
  birthWeight?: string;
  birthHeight?: string;
  emergencyContact?: string;
}

const PD4: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    babyName: '',
    dateOfBirth: '',
    gender: 'male',
    birthWeight: '',
    birthHeight: '',
    hospitalName: '',
    pediatricianName: '',
    emergencyContact: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'babyName':
        if (!value.trim()) return "Baby's full name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        if (!/^[a-zA-Z\s'-]+$/.test(value)) return "Name can only contain letters, spaces, hyphens, and apostrophes";
        return undefined;

      case 'dateOfBirth':
        if (!value.trim()) return "Date of birth is required";
        const datePattern = /^(\d{2})\/(\d{2})\/(\d{4})$/;
        if (!datePattern.test(value)) return "Please use DD/MM/YYYY format";
        
        const [, day, month, year] = value.match(datePattern) || [];
        const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
        const today = new Date();
        
        if (date > today) return "Birth date cannot be in the future";
        if (date < new Date(today.getFullYear() - 5, today.getMonth(), today.getDate())) {
          return "Please check the birth date";
        }
        return undefined;

      case 'birthWeight':
        if (value && (isNaN(Number(value)) || Number(value) <= 0 || Number(value) > 10)) {
          return "Please enter a valid weight (0.1 - 10 kg)";
        }
        return undefined;

      case 'birthHeight':
        if (value && (isNaN(Number(value)) || Number(value) <= 0 || Number(value) > 100)) {
          return "Please enter a valid height (1 - 100 cm)";
        }
        return undefined;

      case 'emergencyContact':
        if (value && !/^\+?[\d\s\-\(\)]{10,}$/.test(value)) {
          return "Please enter a valid phone number";
        }
        return undefined;

      default:
        return undefined;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleGenderChange = (gender: 'male' | 'female' | 'other') => {
    setFormData(prev => ({ ...prev, gender }));
  };

  const handleSaveDraft = () => {
    console.log('Saving draft:', formData);
    // Implement save draft logic
  };

  const handleContinue = () => {
    // Validate all required fields
    const newErrors: FormErrors = {};
    
    ['babyName', 'dateOfBirth'].forEach(field => {
      const error = validateField(field, formData[field as keyof FormData] as string);
      if (error) newErrors[field as keyof FormErrors] = error;
    });

    // Validate optional fields that have values
    ['birthWeight', 'birthHeight', 'emergencyContact'].forEach(field => {
      const value = formData[field as keyof FormData] as string;
      if (value) {
        const error = validateField(field, value);
        if (error) newErrors[field as keyof FormErrors] = error;
      }
    });

    setErrors(newErrors);
    setTouched({
      babyName: true,
      dateOfBirth: true,
      birthWeight: true,
      birthHeight: true,
      emergencyContact: true
    });

    if (Object.keys(newErrors).length === 0) {
      console.log('Form is valid, continuing:', formData);
      // Implement continue logic
    }
  };

  const formatDateInput = (value: string): string => {
    // Remove non-digits
    const digits = value.replace(/\D/g, '');
    
    // Add slashes automatically
    if (digits.length <= 2) return digits;
    if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
    return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4, 8)}`;
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatDateInput(e.target.value);
    setFormData(prev => ({ ...prev, dateOfBirth: formatted }));
    
    if (errors.dateOfBirth) {
      setErrors(prev => ({ ...prev, dateOfBirth: undefined }));
    }
  };

  return (
    <div className="register-baby-container" style={{marginTop: '-880px' , marginLeft: '180px',width:'1090px'}} >
      <div className="register-baby-content">
        <div className="content-wrapper">
          {/* Header */}
          <div className="header-section">
            <h1 className="main-title">Register New Baby</h1>
            <p className="subtitle">
              Add your baby's information to start tracking their health and development
            </p>
          </div>

          {/* Step Indicator
          <div className="step-indicator-section">
            <h2 className="step-title">Step 1 of 3: Basic Information</h2>
            <div className="progress-container">
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
            </div>
          </div> */}

          {/* Form Fields */}
          <div className="form-fields-container">
            {/* Baby Name and Date of Birth Row */}
            <div className="form-row">
              <div className="field-group baby-name-group">
                <label htmlFor="babyName" className="field-label">
                  Baby's Full Name *
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    id="babyName"
                    name="babyName"
                    value={formData.babyName}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    placeholder="Enter baby's full name"
                    className={`form-input ${errors.babyName && touched.babyName ? 'error' : ''}`}
                  />
                  {errors.babyName && touched.babyName && (
                    <span className="error-message">{errors.babyName}</span>
                  )}
                </div>
              </div>

              <div className="field-group date-group">
                <label htmlFor="dateOfBirth" className="field-label">
                  Date of Birth *
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleDateChange}
                    onBlur={handleInputBlur}
                    placeholder="DD/MM/YYYY"
                    maxLength={10}
                    className={`form-input ${errors.dateOfBirth && touched.dateOfBirth ? 'error' : ''}`}
                  />
                  {errors.dateOfBirth && touched.dateOfBirth && (
                    <span className="error-message">{errors.dateOfBirth}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Gender Selection */}
            <div className="field-group">
              <label className="field-label">Gender *</label>
              <div className="gender-options">
                <div
                  onClick={() => handleGenderChange('male')}
                  className={`gender-option ${formData.gender === 'male' ? 'selected' : ''}`}
                >
                  <div className="radio-button">
                    <div className="radio-inner"></div>
                  </div>
                  <span className="gender-label">Male</span>
                </div>

                <div
                  onClick={() => handleGenderChange('female')}
                  className={`gender-option ${formData.gender === 'female' ? 'selected' : ''}`}
                >
                  <div className="radio-button">
                    <div className="radio-inner"></div>
                  </div>
                  <span className="gender-label">Female</span>
                </div>

                <div
                  onClick={() => handleGenderChange('other')}
                  className={`gender-option ${formData.gender === 'other' ? 'selected' : ''}`}
                >
                  <div className="radio-button">
                    <div className="radio-inner"></div>
                  </div>
                  <span className="gender-label">Other</span>
                </div>
              </div>
            </div>

            {/* Birth Weight and Height Row */}
            <div className="form-row">
              <div className="field-group">
                <label htmlFor="birthWeight" className="field-label">
                  Birth Weight (kg)
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    id="birthWeight"
                    name="birthWeight"
                    value={formData.birthWeight}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    placeholder="e.g., 3.2"
                    className={`form-input ${errors.birthWeight && touched.birthWeight ? 'error' : ''}`}
                  />
                  {errors.birthWeight && touched.birthWeight && (
                    <span className="error-message">{errors.birthWeight}</span>
                  )}
                </div>
              </div>

              <div className="field-group">
                <label htmlFor="birthHeight" className="field-label">
                  Birth Height (cm)
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    id="birthHeight"
                    name="birthHeight"
                    value={formData.birthHeight}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    placeholder="e.g., 50"
                    className={`form-input ${errors.birthHeight && touched.birthHeight ? 'error' : ''}`}
                  />
                  {errors.birthHeight && touched.birthHeight && (
                    <span className="error-message">{errors.birthHeight}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Hospital Name */}
            <div className="field-group">
              <label htmlFor="hospitalName" className="field-label">
                Hospital/Birth Place
              </label>
              <input
                type="text"
                id="hospitalName"
                name="hospitalName"
                value={formData.hospitalName}
                onChange={handleInputChange}
                placeholder="Enter hospital or birth place name"
                className="form-input full-width"
              />
            </div>

            {/* Pediatrician and Emergency Contact Row */}
            <div className="form-row">
              <div className="field-group pediatrician-group">
                <label htmlFor="pediatricianName" className="field-label">
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

              <div className="field-group">
                <label htmlFor="emergencyContact" className="field-label">
                  Emergency Contact
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    id="emergencyContact"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    placeholder="Phone number"
                    className={`form-input ${errors.emergencyContact && touched.emergencyContact ? 'error' : ''}`}
                  />
                  {errors.emergencyContact && touched.emergencyContact && (
                    <span className="error-message">{errors.emergencyContact}</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="form-actions">
            <button
              type="button"
              onClick={handleSaveDraft}
              className="save-draft-button"
            >
              Save Draft
            </button>
            <button
              type="button"
              onClick={handleContinue}
              className="continue-button"
            >
              Continue
            </button>
          </div>
        </div>
      </div>

      <style >{`
        .register-baby-container {
          width: 946px;
          height: 656px;
          max-width: 100%;
          background-color: #F0F9FF;
          margin: 0 auto;
          position: relative;
        }

        .register-baby-content {
          width: 1000px;
          height: 814px;
          position: absolute;
          left: 25px;
          top: 21px;
          background-color: white;
          border-radius: 12px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .content-wrapper {
          padding: 27px;
          height: 100%;
          overflow-y: auto;
        }

        .header-section {
          margin-bottom: 18px;
        }

        .main-title {
          color: #111827;
          font: 700 18px Inter, -apple-system, Roboto, Helvetica, sans-serif;
          margin: 0 0 8px 0;
        }

        .subtitle {
          color: #6B7280;
          font: 400 12px Inter, -apple-system, Roboto, Helvetica, sans-serif;
          margin: 0;
        }

        .step-indicator-section {
          margin-bottom: 25px;
        }

        .step-title {
          color: #111827;
          font: 700 14px Inter, -apple-system, Roboto, Helvetica, sans-serif;
          margin: 0 0 8px 0;
        }

        .progress-container {
          width: 734px;
          height: 4px;
          background-color: #E5E7EB;
          border-radius: 2px;
          overflow: hidden;
        }

        .progress-bar {
          width: 100%;
          height: 100%;
          background-color: #E5E7EB;
          position: relative;
        }

        .progress-fill {
          width: 242px;
          height: 100%;
          background-color: #06B6D4;
          border-radius: 2px;
        }

        .form-fields-container {
          margin-top:40px;
          margin-bottom: 20px;
        }

        .form-row {
          display: flex;
          gap: 86px;
          margin-bottom: 33px;
        }

        .field-group {
          display: flex;
          flex-direction: column;
          margin-bottom: 23px;
        }

        .baby-name-group {
          flex: 0 0 374px;
        }

        .date-group {
          flex: 0 0 240px;
        }

        .pediatrician-group {
          flex: 0 0 374px;
        }

        .field-label {
          color: #374151;
          font: 400 12px Inter, -apple-system, Roboto, Helvetica, sans-serif;
          margin-bottom: 6px;
        }

        .input-wrapper {
          position: relative;
        }

        .form-input {
          width: 100%;
          height: 34px;
          padding: 8px 13px;
          border: 1px solid #D1D5DB;
          border-radius: 8px;
          background-color: white;
          color: #374151;
          font: 400 11px Inter, -apple-system, Roboto, Helvetica, sans-serif;
          outline: none;
          transition: border-color 0.2s;
        }

        .form-input::placeholder {
          color: #9CA3AF;
        }

        .form-input:focus {
          border-color: #06B6D4;
          box-shadow: 0 0 0 1px #06B6D4;
        }

        .form-input.error {
          border-color: #EF4444;
        }

        .form-input.full-width {
          width: 640px;
        }

        .error-message {
          color: #EF4444;
          font: 400 10px Inter, -apple-system, Roboto, Helvetica, sans-serif;
          margin-top: 4px;
          display: block;
        }

        .gender-options {
          display: flex;
          gap: 13px;
          margin-top: 6px;
        }

        .gender-option {
        margin-top:5px;
        margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 7px 16px;
          border: 1px solid #D1D5DB;
          border-radius: 8px;
          background-color: white;
          cursor: pointer;
          transition: all 0.2s;
          min-width: 157px;
        }

        .gender-option.selected {
          border-color: #06B6D4;
          border-width: 2px;
          background-color: #F0F9FF;
        }

        .radio-button {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 2px solid #D1D5DB;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.2s;
        }

        .gender-option.selected .radio-button {
          border-color: #06B6D4;
        }

        .radio-inner {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: transparent;
          transition: background-color 0.2s;
        }

        .gender-option.selected .radio-inner {
          background-color: #06B6D4;
        }

        .gender-label {
          color: #6B7280;
          font: 400 11px Inter, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .gender-option.selected .gender-label {
          color: #06B6D4;
        }

        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 27px;
          margin-top: 20px;
        }

        .save-draft-button {
          width: 133px;
          height: 38px;
          border: 1px solid #D1D5DB;
          border-radius: 8px;
          background-color: white;
          color: #374151;
          font: 400 12px Inter, -apple-system, Roboto, Helvetica, sans-serif;
          cursor: pointer;
          transition: all 0.2s;
        }

        .save-draft-button:hover {
          background-color: #F9FAFB;
          border-color: #9CA3AF;
        }

        .continue-button {
          width: 133px;
          height: 38px;
          border: none;
          border-radius: 8px;
          background-color: #06B6D4;
          color: white;
          font: 400 12px Inter, -apple-system, Roboto, Helvetica, sans-serif;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .continue-button:hover {
          background-color: #0891B2;
        }

        @media (max-width: 991px) {
          .register-baby-container {
            width: 100%;
            height: auto;
            min-height: 656px;
          }

          .register-baby-content {
            width: calc(100% - 50px);
            height: auto;
            min-height: 614px;
            left: 25px;
            right: 25px;
          }

          .form-row {
            flex-direction: column;
            gap: 16px;
          }

          .baby-name-group,
          .date-group,
          .pediatrician-group {
            flex: none;
          }

          .form-input.full-width {
            width: 100%;
          }

          .gender-options {
            flex-wrap: wrap;
          }

          .form-actions {
            flex-direction: column;
            gap: 10px;
          }

          .save-draft-button,
          .continue-button {
            width: 100%;
          }
        }

        @media (max-width: 640px) {
          .register-baby-content {
            left: 15px;
            width: calc(100% - 30px);
          }

          .content-wrapper {
            padding: 20px;
          }

          .main-title {
            font-size: 16px;
          }

          .subtitle {
            font-size: 11px;
          }

          .progress-container {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default PD4;
