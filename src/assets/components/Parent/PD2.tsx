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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGenderChange = (gender: string) => {
    setFormData(prev => ({
      ...prev,
      gender
    }));
  };

  const handleSaveDraft = () => {
    console.log('Saving draft:', formData);
  };

  const handleContinue = () => {
    console.log('Continuing with:', formData);
  };

  return (
    <div className="parent-page">
      <div className="max-w-4xl mx-auto" >
        <div className="bg-blue-50 w-full flex flex-col items-stretch justify-center px-6 py-5 lg:px-8">
          <div className="relative min-h-96 bg-white rounded-lg shadow-sm p-8 lg:p-12">
            {/* Header Section */}
            <div className="mb-6">
              <h1 className="text-gray-900 text-lg font-bold font-inter mb-2">
                Register New Baby
              </h1>
              <p className="text-gray-500 text-xs font-inter">
                Add your baby's information to start tracking their health and development
              </p>
            </div>

            {/* Step Indicator */}
            <div className="mb-8">
              <h2 className="text-gray-900 text-sm font-bold font-inter mb-3">
                Step 1 of 3: Basic Information
              </h2>
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div className="bg-cyan-500 h-1 rounded-full w-1/3"></div>
              </div>
            </div>

            {/* Form Content */}
            <div className="space-y-6">
              {/* First Row - Baby Name and Date of Birth */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Baby Name */}
                <div className="lg:col-span-2">
                  <label htmlFor="babyName" className="block text-gray-700 text-xs font-inter mb-3">
                    Baby's Full Name *
                  </label>
                  <input
                    type="text"
                    id="babyName"
                    name="babyName"
                    value={formData.babyName}
                    onChange={handleInputChange}
                    placeholder="Enter baby's full name"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg text-xs text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white"
                  />

                  {/* Gender Section */}
                  <div className="mt-4">
                    <label className="block text-gray-700 text-xs font-inter mb-3">
                      Gender *
                    </label>
                    <div className="flex items-center gap-3">
                      {/* Male Option */}
                      <div 
                        onClick={() => handleGenderChange('male')}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg border cursor-pointer transition-colors ${
                          formData.gender === 'male' 
                            ? 'border-cyan-500 bg-cyan-50 text-cyan-600' 
                            : 'border-gray-200 bg-white text-gray-500'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          formData.gender === 'male' ? 'border-cyan-500' : 'border-gray-300'
                        }`}>
                          {formData.gender === 'male' && (
                            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                          )}
                        </div>
                        <span className="text-xs font-inter">Male</span>
                      </div>

                      {/* Female Option */}
                      <div 
                        onClick={() => handleGenderChange('female')}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg border cursor-pointer transition-colors ${
                          formData.gender === 'female' 
                            ? 'border-cyan-500 bg-cyan-50 text-cyan-600' 
                            : 'border-gray-200 bg-white text-gray-500'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          formData.gender === 'female' ? 'border-cyan-500' : 'border-gray-300'
                        }`}>
                          {formData.gender === 'female' && (
                            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                          )}
                        </div>
                        <span className="text-xs font-inter">Female</span>
                      </div>

                      {/* Other Option */}
                      <div 
                        onClick={() => handleGenderChange('other')}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg border cursor-pointer transition-colors ${
                          formData.gender === 'other' 
                            ? 'border-cyan-500 bg-cyan-50 text-cyan-600' 
                            : 'border-gray-200 bg-white text-gray-500'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          formData.gender === 'other' ? 'border-cyan-500' : 'border-gray-300'
                        }`}>
                          {formData.gender === 'other' && (
                            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                          )}
                        </div>
                        <span className="text-xs font-inter">Other</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Date of Birth */}
                <div>
                  <label htmlFor="dateOfBirth" className="block text-gray-700 text-xs font-inter mb-3">
                    Date of Birth *
                  </label>
                  <input
                    type="text"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    placeholder="DD/MM/YYYY"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg text-xs text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white"
                  />
                </div>
              </div>

              {/* Second Row - Birth Weight and Height */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Birth Weight */}
                <div>
                  <label htmlFor="birthWeight" className="block text-gray-700 text-xs font-inter mb-3">
                    Birth Weight (kg)
                  </label>
                  <input
                    type="text"
                    id="birthWeight"
                    name="birthWeight"
                    value={formData.birthWeight}
                    onChange={handleInputChange}
                    placeholder="e.g., 3.2"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg text-xs text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white"
                  />
                </div>

                {/* Birth Height */}
                <div>
                  <label htmlFor="birthHeight" className="block text-gray-700 text-xs font-inter mb-3">
                    Birth Height (cm)
                  </label>
                  <input
                    type="text"
                    id="birthHeight"
                    name="birthHeight"
                    value={formData.birthHeight}
                    onChange={handleInputChange}
                    placeholder="e.g., 50"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg text-xs text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white"
                  />
                </div>
              </div>

              {/* Hospital/Birth Place */}
              <div>
                <label htmlFor="hospitalName" className="block text-gray-700 text-xs font-inter mb-3">
                  Hospital/Birth Place
                </label>
                <input
                  type="text"
                  id="hospitalName"
                  name="hospitalName"
                  value={formData.hospitalName}
                  onChange={handleInputChange}
                  placeholder="Enter hospital or birth place name"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg text-xs text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white"
                />
              </div>

              {/* Third Row - Pediatrician and Emergency Contact */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Pediatrician Name */}
                <div className="lg:col-span-2">
                  <label htmlFor="pediatricianName" className="block text-gray-700 text-xs font-inter mb-3">
                    Pediatrician's Name
                  </label>
                  <input
                    type="text"
                    id="pediatricianName"
                    name="pediatricianName"
                    value={formData.pediatricianName}
                    onChange={handleInputChange}
                    placeholder="Dr. name (optional)"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg text-xs text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white"
                  />
                </div>

                {/* Emergency Contact */}
                <div>
                  <label htmlFor="emergencyContact" className="block text-gray-700 text-xs font-inter mb-3">
                    Emergency Contact
                  </label>
                  <input
                    type="text"
                    id="emergencyContact"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleInputChange}
                    placeholder="Phone number"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg text-xs text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-6 pt-4">
                <button
                  onClick={handleSaveDraft}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 text-xs font-inter hover:bg-gray-50 transition-colors"
                >
                  Save Draft
                </button>
                <button
                  onClick={handleContinue}
                  className="px-6 py-3 bg-cyan-500 text-white rounded-lg text-xs font-inter hover:bg-cyan-600 transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
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

export default PD2;
