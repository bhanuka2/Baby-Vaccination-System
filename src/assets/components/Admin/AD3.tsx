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
    <div className="vaccination-programs-container" style={{marginTop: '-700px' , marginLeft: '250px'}}>
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
          width: 942px;
          height: 522px;
          background-color: #F0F9FF;
          position: relative;
          padding: 53px;
          box-sizing: border-box;
          font-family: Inter, sans-serif;
        }

        .vaccination-programs-main {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .vaccination-programs-title {
          color: #111827;
          font: 700 18px Inter;
          margin: 0 0 47px 0;
        }

        .month-selection-section {
          width: 371px;
          margin-bottom: 18px;
          position: relative;
        }

        .month-selection-label {
          display: block;
          color: #374151;
          font: 400 12px Inter;
          margin-bottom: 5px;
        }

        .month-dropdown-container {
          position: relative;
        }

        .month-dropdown-button {
          width: 371px;
          height: 27px;
          background: white;
          border: 2px solid #06B6D4;
          border-radius: 13px;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          font-family: Inter, sans-serif;
        }

        .month-dropdown-text {
          color: #06B6D4;
          font: 400 12px Inter;
        }

        .month-dropdown-arrow {
          color: #06B6D4;
          font-size: 8px;
          transform: rotate(90deg);
        }

        .month-dropdown-options {
          position: absolute;
          top: 27px;
          left: 0;
          width: 371px;
          background: white;
          border: 1px solid #E5E7EB;
          border-radius: 13px;
          z-index: 10;
        }

        .month-dropdown-option {
          padding: 8px 20px;
          color: #374151;
          font: 400 11px Inter;
          cursor: pointer;
          border-bottom: 1px solid #E5E7EB;
        }

        .month-dropdown-option:last-child {
          border-bottom: none;
        }

        .month-dropdown-option:hover {
          background-color: #F9FAFB;
        }

        .vaccine-category-section {
          margin-bottom: 18px;
        }

        .vaccine-category-label {
          display: block;
          color: #374151;
          font: 400 12px Inter;
          margin-bottom: 16px;
        }

        .vaccine-buttons-grid {
          display: grid;
          grid-template-columns: repeat(4, 159px);
          grid-template-rows: repeat(2, 31px);
          gap: 13px 13px;
          width: 676px;
        }

        .vaccine-button {
          width: 159px;
          height: 31px;
          border-radius: 15px;
          border: none;
          cursor: pointer;
          color: #374151;
          font: 400 11px Inter;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .vaccine-button-selected {
          background: #FEE2E2;
          border: 2px solid #EF4444;
          color: #EF4444;
        }

        .vaccine-button-unselected {
          background: white;
          border: 1px solid #D1D5DB;
          color: #6B7280;
        }

        .vaccine-button-unselected:hover {
          background: #F9FAFB;
        }

        .baby-counts-section {
          display: grid;
          grid-template-columns: repeat(3, 199px);
          gap: 33px;
          margin-bottom: 42px;
        }

        .baby-count-field {
          display: flex;
          flex-direction: column;
        }

        .baby-count-label {
          color: #374151;
          font: 400 12px Inter;
          margin-bottom: 5px;
        }

        .baby-count-input {
          width: 199px;
          height: 25px;
          background: white;
          border: 1px solid #D1D5DB;
          border-radius: 12px;
          padding: 0 13px;
          color: #000;
          font: 400 16px Inter;
          box-sizing: border-box;
        }

        .baby-count-input:focus {
          outline: none;
          border-color: #06B6D4;
        }

        .additional-vaccines-section {
          margin-bottom: 20px;
        }

        .additional-vaccines-label {
          display: block;
          color: #374151;
          font: 400 12px Inter;
          margin-bottom: 17px;
        }

        .additional-vaccines-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .vaccine-checkbox-row {
          display: flex;
          gap: 30px;
        }

        .vaccine-checkbox-item {
          display: flex;
          align-items: center;
          cursor: pointer;
          position: relative;
        }

        .vaccine-checkbox {
          position: absolute;
          opacity: 0;
          width: 0;
          height: 0;
        }

        .vaccine-checkbox-custom {
          width: 20px;
          height: 12px;
          background: white;
          border: 1px solid #D1D5DB;
          border-radius: 3px;
          margin-right: 13px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .vaccine-checkbox:checked + .vaccine-checkbox-custom {
          background: #06B6D4;
          border-color: #06B6D4;
        }

        .vaccine-checkbox:checked + .vaccine-checkbox-custom::after {
          content: '✓';
          color: white;
          font-size: 8px;
          font-weight: bold;
        }

        .vaccine-checkbox-label {
          color: #374151;
          font: 400 11px Inter;
        }

        .vaccine-checkbox:checked ~ .vaccine-checkbox-label {
          color: #374151;
        }

        @media (max-width: 991px) {
          .vaccination-programs-container {
            width: 100%;
            max-width: 942px;
            height: auto;
            min-height: 522px;
            padding: 20px;
          }

          .vaccination-programs-title {
            font-size: 16px;
          }

          .month-selection-section {
            width: 100%;
            max-width: 371px;
          }

          .month-dropdown-button {
            width: 100%;
          }

          .month-dropdown-options {
            width: 100%;
          }

          .vaccine-buttons-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            width: 100%;
            gap: 10px;
          }

          .baby-counts-section {
            grid-template-columns: 1fr;
            gap: 20px;
            width: 100%;
          }

          .baby-count-input {
            width: 100%;
          }

          .vaccine-checkbox-row {
            flex-direction: column;
            gap: 10px;
          }
        }

        @media (max-width: 640px) {
          .vaccination-programs-container {
            padding: 16px;
          }

          .vaccination-programs-title {
            font-size: 14px;
          }

          .vaccine-buttons-grid {
            grid-template-columns: 1fr;
          }

          .vaccine-button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default AD3;
