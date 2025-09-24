import React, { useState } from 'react';
import './PatientSearch.css';

interface VaccineButtonProps {
  name: string;
  isSelected: boolean;
  isGiven?: boolean;
  onClick: () => void;
}

const VaccineButton: React.FC<VaccineButtonProps> = ({ name, isSelected, isGiven = false, onClick }) => {
  return (
    <div 
      className={`vaccine-button ${isSelected ? 'selected' : ''} ${isGiven ? 'given' : ''}`}
      onClick={onClick}
    >
      <span className="vaccine-text">{name}</span>
    </div>
  );
};

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CustomCheckbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <div className="flex items-start gap-5">
      <div 
        className={`checkbox-container ${checked ? 'checked' : ''}`}
        onClick={() => onChange(!checked)}
      >
        {checked && (
          <svg 
            width="16" 
            height="11" 
            viewBox="0 0 16 11" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="checkbox-check"
          >
            <path d="M0.792114 6.35426L6.88779 10.018L15.0154 1.46924" stroke="white" strokeWidth="1.5"/>
          </svg>
        )}
      </div>
      <label className={`checkbox-label ${checked ? 'checked' : ''}`}>
        {label}
      </label>
    </div>
  );
};

const PatientSearch: React.FC = () => {
  const [patientName, setPatientName] = useState('');
  const [babyOneVaccines, setBabyOneVaccines] = useState({
    BCG: false,
    OPV: false,
    Pentavalent: false,
    PCV: false,
    Rotavirus: false,
    'MMR/MR': false,
    'DPT Booster': false
  });
  const [babyTwoVaccines, setBabyTwoVaccines] = useState({
    BCG: false,
    OPV: false,
    Pentavalent: false,
    PCV: false,
    Rotavirus: false,
    'MMR/MR': false,
    'DPT Booster': false
  });
  const [sideEffects, setSideEffects] = useState({
    'Irritability/Fussiness': true,
    'Loss of appetite': false,
    'Lethargy': true,
    'Vomiting': false,
    'Diarrhea': false,
    'Rash': false
  });

  // Set initial selected vaccines (based on design)
  React.useEffect(() => {
    setBabyOneVaccines(prev => ({
      ...prev,
      BCG: true,
      OPV: true,
      Pentavalent: true
    }));
    setBabyTwoVaccines(prev => ({
      ...prev,
      BCG: true,
      OPV: true,
      Pentavalent: true
    }));
  }, []);

  const handleBabyOneVaccineClick = (vaccine: string) => {
    setBabyOneVaccines(prev => ({
      ...prev,
      [vaccine]: !prev[vaccine as keyof typeof prev]
    }));
  };

  const handleBabyTwoVaccineClick = (vaccine: string) => {
    setBabyTwoVaccines(prev => ({
      ...prev,
      [vaccine]: !prev[vaccine as keyof typeof prev]
    }));
  };

  const handleSideEffectChange = (effect: string, checked: boolean) => {
    setSideEffects(prev => ({
      ...prev,
      [effect]: checked
    }));
  };

  const vaccines = ['BCG', 'OPV', 'Pentavalent', 'PCV', 'Rotavirus', 'MMR/MR', 'DPT Booster'];
  const sideEffectsList = ['Irritability/Fussiness', 'Loss of appetite', 'Lethargy', 'Vomiting', 'Diarrhea', 'Rash'];

  return (
    <div className="patient-search-container" >
      <h1 className="patient-search-title" >
        Patient Search
      </h1>
      
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Kusal Mendis"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          className="search-input"
      
        />
         
        
      </div>

      <div className="section-title">
        Baby one *
      </div>

      <div className="vaccine-grid">
        {vaccines.map((vaccine) => (
          <VaccineButton
            key={`baby1-${vaccine}`}
            name={vaccine}
            isSelected={babyOneVaccines[vaccine as keyof typeof babyOneVaccines]}
            isGiven={vaccine === 'BCG' || vaccine === 'OPV' || vaccine === 'Pentavalent'}
            onClick={() => handleBabyOneVaccineClick(vaccine)}
          />
        ))}
      </div>

      <div className="section-title">
        Baby two *
      </div>
      
      <div className="vaccine-grid">
        {vaccines.map((vaccine) => (
          <VaccineButton
            key={`baby2-${vaccine}`}
            name={vaccine}
            isSelected={babyTwoVaccines[vaccine as keyof typeof babyTwoVaccines]}
            isGiven={vaccine === 'BCG' || vaccine === 'OPV' || vaccine === 'Pentavalent'}
            onClick={() => handleBabyTwoVaccineClick(vaccine)}
          />
        ))}
      </div>

      <div className="section-title">
        Side effects (Check all that apply)
      </div>
      
      <div className="side-effects-grid">
        {sideEffectsList.map((effect) => (
          <CustomCheckbox
            key={effect}
            label={effect}
            checked={sideEffects[effect as keyof typeof sideEffects]}
            onChange={(checked) => handleSideEffectChange(effect, checked)}
          />
        ))}
      </div>
    </div>
  );
};

export default PatientSearch;
