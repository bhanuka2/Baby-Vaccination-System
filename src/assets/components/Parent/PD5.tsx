import React, { useState } from 'react';
import './PD5.css';

interface SymptomFormData {
  selectedBaby: string;
  symptomCategory: string;
  temperatureReading: string;
  method: string;
  whenStarted: string;
  additionalSymptoms: string[];
  additionalNotes: string;
}

interface FormErrors {
  selectedBaby?: string;
  symptomCategory?: string;
  temperatureReading?: string;
  method?: string;
  whenStarted?: string;
}

const PD5: React.FC = () => {
  const [formData, setFormData] = useState<SymptomFormData>({
    selectedBaby: '',
    symptomCategory: '',
    temperatureReading: '',
    method: '',
    whenStarted: '',
    additionalSymptoms: [],
    additionalNotes: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showFeverFields, setShowFeverFields] = useState(false);

  const babies = [
    { id: '1', name: 'Emma Johnson', age: '5 months' },
    { id: '2', name: 'Liam Johnson', age: '14 months' }
  ];

  const symptomCategories = [
    { id: 'fever', name: '🌡️ Fever', color: 'fever' },
    { id: 'respiratory', name: '🤧 Respiratory', color: 'default' },
    { id: 'feeding', name: '🍼 Feeding', color: 'default' },
    { id: 'sleep', name: '💤 Sleep', color: 'default' },
    { id: 'behavioral', name: '🎯 Behavioral', color: 'default' },
    { id: 'skin', name: '🩹 Skin Issues', color: 'default' },
    { id: 'other', name: '🤱 Other', color: 'default' }
  ];

  const additionalSymptomsOptions = [
    'Irritability/Fussiness',
    'Loss of appetite',
    'Lethargy',
    'Vomiting',
    'Diarrhea',
    'Rash'
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.selectedBaby) {
      newErrors.selectedBaby = 'Please select a baby';
    }

    if (!formData.symptomCategory) {
      newErrors.symptomCategory = 'Please select a symptom category';
    }

    if (formData.symptomCategory === 'fever') {
      if (!formData.temperatureReading) {
        newErrors.temperatureReading = 'Temperature reading is required for fever';
      } else {
        const temp = parseFloat(formData.temperatureReading);
        if (isNaN(temp) || temp < 30 || temp > 45) {
          newErrors.temperatureReading = 'Please enter a valid temperature (30-45°C)';
        }
      }

      if (!formData.method) {
        newErrors.method = 'Please specify the temperature measurement method';
      }

      if (!formData.whenStarted) {
        newErrors.whenStarted = 'Please specify when the fever started';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof SymptomFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear specific error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleBabySelect = (babyId: string, babyName: string, babyAge: string) => {
    handleInputChange('selectedBaby', `${babyName} (${babyAge})`);
    setIsDropdownOpen(false);
  };

  const handleCategorySelect = (categoryId: string) => {
    handleInputChange('symptomCategory', categoryId);
    setShowFeverFields(categoryId === 'fever');
  };

  const handleSymptomToggle = (symptom: string) => {
    const newSymptoms = formData.additionalSymptoms.includes(symptom)
      ? formData.additionalSymptoms.filter(s => s !== symptom)
      : [...formData.additionalSymptoms, symptom];
    
    setFormData(prev => ({ ...prev, additionalSymptoms: newSymptoms }));
  };

  const handleSubmit = (action: 'report' | 'call') => {
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', { action, data: formData });
      alert(`${action === 'report' ? 'Report submitted' : 'Calling doctor'} successfully!`);
    }
  };

  return (
    <div className="symptom-report-container parent-page">
      <div className="symptom-report-content">
        <div className="report-header">
          <h1 className="report-title">Report Symptoms</h1>
          <p className="report-subtitle">
            Quickly report any concerning symptoms or changes in your baby's condition
          </p>
        </div>

        <form className="symptom-form">
          {/* Baby Selection */}
          <div className="form-section">
            <label className="form-label">
              Select Baby *
              {errors.selectedBaby && <span className="error-text">{errors.selectedBaby}</span>}
            </label>
            
            <div className="dropdown-container">
              <div 
                className={`dropdown-trigger ${errors.selectedBaby ? 'error' : ''}`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className={`dropdown-value ${formData.selectedBaby ? 'selected' : ''}`}>
                  {formData.selectedBaby || 'Select a baby'}
                </span>
                <span className="dropdown-arrow">▼</span>
              </div>
              
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  {babies.map(baby => (
                    <div
                      key={baby.id}
                      className="dropdown-item"
                      onClick={() => handleBabySelect(baby.id, baby.name, baby.age)}
                    >
                      {baby.name} ({baby.age})
                    </div>
                  ))}
                  <div className="dropdown-divider"></div>
                  <div className="dropdown-item add-baby">+ Add New Baby</div>
                </div>
              )}
            </div>
          </div>

          {/* Symptom Category */}
          <div className="form-section">
            <label className="form-label">
              Symptom Category *
              {errors.symptomCategory && <span className="error-text">{errors.symptomCategory}</span>}
            </label>
            
            <div className="symptom-categories-grid">
              {symptomCategories.map(category => (
                <button
                  key={category.id}
                  type="button"
                  className={`category-button ${category.color} ${
                    formData.symptomCategory === category.id ? 'selected' : ''
                  }`}
                  onClick={() => handleCategorySelect(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Fever Fields */}
          {showFeverFields && (
            <div className="form-section fever-section">
              <div className="fever-fields-grid">
                <div className="fever-field">
                  <label className="form-label">
                    Temperature Reading
                    {errors.temperatureReading && <span className="error-text">{errors.temperatureReading}</span>}
                  </label>
                  <div className="temperature-input-container">
                    <input
                      type="number"
                      step="0.1"
                      className={`form-input temperature-input ${errors.temperatureReading ? 'error' : ''}`}
                      value={formData.temperatureReading}
                      onChange={(e) => handleInputChange('temperatureReading', e.target.value)}
                      placeholder="38.5"
                    />
                    <span className="temperature-unit">°C</span>
                  </div>
                </div>

                <div className="fever-field">
                  <label className="form-label">
                    Method
                    {errors.method && <span className="error-text">{errors.method}</span>}
                  </label>
                  <input
                    type="text"
                    className={`form-input ${errors.method ? 'error' : ''}`}
                    value={formData.method}
                    onChange={(e) => handleInputChange('method', e.target.value)}
                    placeholder="Forehead thermometer"
                  />
                </div>

                <div className="fever-field">
                  <label className="form-label">
                    When Started
                    {errors.whenStarted && <span className="error-text">{errors.whenStarted}</span>}
                  </label>
                  <input
                    type="text"
                    className={`form-input ${errors.whenStarted ? 'error' : ''}`}
                    value={formData.whenStarted}
                    onChange={(e) => handleInputChange('whenStarted', e.target.value)}
                    placeholder="2 hours ago"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Additional Symptoms */}
          <div className="form-section">
            <label className="form-label">Additional Symptoms (Check all that apply)</label>
            
            <div className="additional-symptoms-grid">
              {additionalSymptomsOptions.map(symptom => (
                <div key={symptom} className="symptom-checkbox-container">
                  <div
                    className={`custom-checkbox ${
                      formData.additionalSymptoms.includes(symptom) ? 'checked' : ''
                    }`}
                    onClick={() => handleSymptomToggle(symptom)}
                  >
                    {formData.additionalSymptoms.includes(symptom) && (
                      <span className="checkmark">✓</span>
                    )}
                  </div>
                  <label className="checkbox-label" onClick={() => handleSymptomToggle(symptom)}>
                    {symptom}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Notes */}
          <div className="form-section">
            <label className="form-label">Additional Notes</label>
            <textarea
              className="form-textarea"
              value={formData.additionalNotes}
              onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
              placeholder="Baby has been more clingy than usual and refusing bottle feeds."
              rows={3}
            />
          </div>

          {/* Action Buttons */}
          <div className="action-buttons-container">
            <button
              type="button"
              className="action-button call-doctor"
              onClick={() => handleSubmit('call')}
            >
              Call Doctor
            </button>
            <button
              type="button"
              className="action-button report-now"
              onClick={() => handleSubmit('report')}
            >
              Report Now
            </button>
          </div>
        </form>
      </div>

      <style>{`
        .parent-page {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding: 16px;
          box-sizing: border-box;
          font-family: Inter, sans-serif;
        }
      `}</style>
    </div>
  );
};

export default PD5;
