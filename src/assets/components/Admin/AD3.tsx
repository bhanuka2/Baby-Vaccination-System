import * as React from "react";

function AD3() {
  const [selectedMonth, setSelectedMonth] = React.useState("August");
  const [selectedVaccine, setSelectedVaccine] = React.useState("BCG");
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [allBabies, setAllBabies] = React.useState("100");
  const [dueBabies, setDueBabies] = React.useState("");
  const [completeBabies, setCompleteBabies] = React.useState("56");
  const [additionalVaccines, setAdditionalVaccines] = React.useState({
    irritability: true,
    appetite: false,
    lethargy: true,
    vomiting: false,
    diarrhea: false,
    rash: false
  });

  const months = ["First Week", "Last Week"];
  const vaccines = ["BCG", "OPV", "Pentavalent", "PCV", "Rotavirus", "MMR/MR", "DPT Booster"];

  const handleVaccineSelect = (vaccine: string) => {
    setSelectedVaccine(vaccine);
  };

  const handleCheckboxChange = (vaccine: string) => {
    setAdditionalVaccines(prev => ({
      ...prev,
      [vaccine]: !prev[vaccine as keyof typeof prev]
    }));
  };

  return (
   <div className="vaccination-programs-container">
      <div className="vaccination-programs-main">
        <h1 className="vaccination-programs-title">Vaccination Programs</h1>
        
        <div className="month-selection-section">
          <label className="month-selection-label">Select Month</label>
          <div className="month-dropdown-container">
            <button 
              className="month-dropdown-button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="month-dropdown-text">{selectedMonth}</span>
              <span className="month-dropdown-arrow">▶</span>
            </button>
            {isDropdownOpen && (
              <div className="month-dropdown-options">
                {months.map((month) => (
                  <div 
                    key={month}
                    className="month-dropdown-option"
                    onClick={() => {
                      setSelectedMonth(month);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {month}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="vaccine-category-section">
          <label className="vaccine-category-label">Vaccine Category *</label>
          <div className="vaccine-buttons-grid">
            {vaccines.map((vaccine) => (
              <button
                key={vaccine}
                className={`vaccine-button ${selectedVaccine === vaccine ? 'vaccine-button-selected' : 'vaccine-button-unselected'}`}
                onClick={() => handleVaccineSelect(vaccine)}
              >
                {vaccine}
              </button>
            ))}
          </div>
        </div>

        <div className="baby-counts-section">
          <div className="baby-count-field">
            <label className="baby-count-label">All Babies</label>
            <input
              type="text"
              className="baby-count-input"
              value={allBabies}
              onChange={(e) => setAllBabies(e.target.value)}
            />
          </div>
          <div className="baby-count-field">
            <label className="baby-count-label">Due Vaccination Babies</label>
            <input
              type="text"
              className="baby-count-input"
              value={dueBabies}
              onChange={(e) => setDueBabies(e.target.value)}
            />
          </div>
          <div className="baby-count-field">
            <label className="baby-count-label">Complete Babies</label>
            <input
              type="text"
              className="baby-count-input"
              value={completeBabies}
              onChange={(e) => setCompleteBabies(e.target.value)}
            />
          </div>
        </div>

        <div className="additional-vaccines-section">
          <label className="additional-vaccines-label">Additional Vaccines (Check all that apply)</label>
          <div className="additional-vaccines-grid">
            <div className="vaccine-checkbox-row">
              <label className="vaccine-checkbox-item">
                <input
                  type="checkbox"
                  className="vaccine-checkbox"
                  checked={additionalVaccines.irritability}
                  onChange={() => handleCheckboxChange('irritability')}
                />
                <span className="vaccine-checkbox-custom"></span>
                <span className="vaccine-checkbox-label">Irritability/Fussiness</span>
              </label>
              <label className="vaccine-checkbox-item">
                <input
                  type="checkbox"
                  className="vaccine-checkbox"
                  checked={additionalVaccines.appetite}
                  onChange={() => handleCheckboxChange('appetite')}
                />
                <span className="vaccine-checkbox-custom"></span>
                <span className="vaccine-checkbox-label">Loss of appetite</span>
              </label>
              <label className="vaccine-checkbox-item">
                <input
                  type="checkbox"
                  className="vaccine-checkbox"
                  checked={additionalVaccines.lethargy}
                  onChange={() => handleCheckboxChange('lethargy')}
                />
                <span className="vaccine-checkbox-custom"></span>
                <span className="vaccine-checkbox-label">Lethargy</span>
              </label>
            </div>
            <div className="vaccine-checkbox-row">
              <label className="vaccine-checkbox-item">
                <input
                  type="checkbox"
                  className="vaccine-checkbox"
                  checked={additionalVaccines.vomiting}
                  onChange={() => handleCheckboxChange('vomiting')}
                />
                <span className="vaccine-checkbox-custom"></span>
                <span className="vaccine-checkbox-label">Vomiting</span>
              </label>
              <label className="vaccine-checkbox-item">
                <input
                  type="checkbox"
                  className="vaccine-checkbox"
                  checked={additionalVaccines.diarrhea}
                  onChange={() => handleCheckboxChange('diarrhea')}
                />
                <span className="vaccine-checkbox-custom"></span>
                <span className="vaccine-checkbox-label">Diarrhea</span>
              </label>
              <label className="vaccine-checkbox-item">
                <input
                  type="checkbox"
                  className="vaccine-checkbox"
                  checked={additionalVaccines.rash}
                  onChange={() => handleCheckboxChange('rash')}
                />
                <span className="vaccine-checkbox-custom"></span>
                <span className="vaccine-checkbox-label">Rash</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <style >{`
        .vaccination-programs-container {
          width: 100%;
          background-color: #FFFFFF;
          position: relative;
          padding: 24px;
          box-sizing: border-box;
          font-family: Inter, sans-serif;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          max-width: 1200px;
          margin: 0 auto;
        }

        .vaccination-programs-main {
          width: 100%;
          position: relative;
        }

        .vaccination-programs-title {
          color: #1F2937;
          font-weight: 700;
          font-size: 28px;
          margin: 0 0 32px 0;
          text-align: left;
        }

        .month-selection-section {
          width: 100%;
          max-width: 320px;
          margin-bottom: 28px;
          position: relative;
        }

        .month-selection-label {
          display: block;
          color: #374151;
          font-weight: 600;
          font-size: 15px;
          margin-bottom: 10px;
        }

        .month-dropdown-container {
          position: relative;
        }

        .month-dropdown-button {
          width: 100%;
          height: 48px;
          background: white;
          border: 2px solid #4A90E2;
          border-radius: 10px;
          padding: 0 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          font-family: Inter, sans-serif;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(0,0,0,0.04);
        }

        .month-dropdown-button:hover {
          background-color: #F0F8FF;
          border-color: #357ABD;
          box-shadow: 0 4px 8px rgba(74, 144, 226, 0.15);
        }

        .month-dropdown-text {
          color: #4A90E2;
          font-weight: 600;
          font-size: 15px;
        }

        .month-dropdown-arrow {
          color: #4A90E2;
          font-size: 12px;
          transform: rotate(90deg);
          transition: transform 0.2s ease;
        }

        .month-dropdown-options {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: white;
          border: 1px solid #E5E7EB;
          border-radius: 10px;
          z-index: 20;
          margin-top: 6px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
          overflow: hidden;
        }

        .month-dropdown-option {
          padding: 12px 18px;
          color: #374151;
          font-size: 15px;
          cursor: pointer;
          transition: background-color 0.2s;
          font-weight: 500;
        }

        .month-dropdown-option:not(:last-child) {
          border-bottom: 1px solid #F3F4F6;
        }

        .month-dropdown-option:hover {
          background-color: #F8FAFC;
          color: #1F2937;
        }

        .vaccine-category-section {
          margin-bottom: 32px;
        }

        .vaccine-category-label {
          display: block;
          color: #374151;
          font-weight: 600;
          font-size: 16px;
          margin-bottom: 18px;
        }

        .vaccine-buttons-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 16px;
          width: 100%;
        }

        .vaccine-button {
          height: 48px;
          border-radius: 10px;
          border: 2px solid #E5E7EB;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          background: white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.04);
        }

        .vaccine-button-selected {
          background: linear-gradient(135deg, #FEF2F2, #FEE2E2);
          border: 2px solid #EF4444;
          color: #DC2626;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.2);
          transform: translateY(-2px);
        }

        .vaccine-button-unselected {
          background: white;
          border: 2px solid #E5E7EB;
          color: #6B7280;
        }

        .vaccine-button-unselected:hover {
          background: #F9FAFB;
          border-color: #9CA3AF;
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.08);
        }

        .baby-counts-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-bottom: 36px;
        }

        .baby-count-field {
          display: flex;
          flex-direction: column;
          background: #F8FAFC;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #E2E8F0;
          box-shadow: 0 2px 4px rgba(0,0,0,0.04);
          transition: all 0.2s ease;
        }

        .baby-count-field:hover {
          box-shadow: 0 4px 8px rgba(0,0,0,0.08);
          transform: translateY(-1px);
        }

        .baby-count-label {
          color: #475569;
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .baby-count-input {
          width: 100%;
          height: 44px;
          background: white;
          border: 2px solid #CBD5E1;
          border-radius: 8px;
          padding: 0 14px;
          color: #1F2937;
          font-size: 16px;
          font-weight: 600;
          box-sizing: border-box;
          transition: all 0.2s ease;
        }

        .baby-count-input:focus {
          outline: none;
          border-color: #4A90E2;
          box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
          background: #FEFEFE;
        }

        .additional-vaccines-section {
          margin-bottom: 30px;
          padding: 24px;
          background: linear-gradient(135deg, #F8FAFC, #F1F5F9);
          border-radius: 12px;
          border: 1px solid #E2E8F0;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }

        .additional-vaccines-label {
          display: block;
          color: #334155;
          font-weight: 600;
          font-size: 16px;
          margin-bottom: 20px;
        }

        .additional-vaccines-grid {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .vaccine-checkbox-row {
          display: flex;
          flex-wrap: wrap;
          gap: 28px;
        }

        .vaccine-checkbox-item {
          display: flex;
          align-items: center;
          cursor: pointer;
          position: relative;
          padding: 8px 12px;
          border-radius: 8px;
          transition: all 0.2s ease;
          min-width: 180px;
        }

        .vaccine-checkbox-item:hover {
          background: rgba(255,255,255,0.6);
        }

        .vaccine-checkbox {
          position: absolute;
          opacity: 0;
          width: 0;
          height: 0;
        }

        .vaccine-checkbox-custom {
          width: 20px;
          height: 20px;
          background: white;
          border: 2px solid #CBD5E1;
          border-radius: 5px;
          margin-right: 12px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .vaccine-checkbox:checked + .vaccine-checkbox-custom {
          background: linear-gradient(135deg, #06B6D4, #0891B2);
          border-color: #0891B2;
          box-shadow: 0 2px 8px rgba(6, 182, 212, 0.3);
        }

        .vaccine-checkbox:checked + .vaccine-checkbox-custom::after {
          content: '✓';
          color: white;
          font-size: 14px;
          font-weight: bold;
        }

        .vaccine-checkbox-label {
          color: #334155;
          font-size: 15px;
          font-weight: 500;
        }

        @media (max-width: 991px) {
          .vaccination-programs-container {
            padding: 20px;
            margin: 0 16px;
          }

          .vaccination-programs-title {
            font-size: 24px;
            margin-bottom: 28px;
          }

          .vaccine-buttons-grid {
            grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
            gap: 12px;
          }

          .baby-counts-section {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }

        @media (max-width: 640px) {
          .vaccination-programs-container {
            padding: 16px;
            margin: 0 8px;
          }

          .vaccination-programs-title {
            font-size: 20px;
            margin-bottom: 24px;
          }

          .vaccine-checkbox-row {
            flex-direction: column;
            gap: 12px;
          }

          .vaccine-checkbox-item {
            min-width: auto;
            width: 100%;
          }
          
          .month-selection-section,
          .vaccine-category-section,
          .baby-counts-section,
          .additional-vaccines-section {
            margin-bottom: 20px;
          }

          .vaccine-buttons-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }
      `}</style>
    </div>
  );
}

export default AD3;
