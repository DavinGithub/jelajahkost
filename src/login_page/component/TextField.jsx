// TextField.jsx
import React, { useState } from 'react';

const TextField = ({ label, type = 'text', placeholder, value, onChange, showToggleIcon = false }) => {
  const [inputType, setInputType] = useState(type);

  const toggleVisibility = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="relative">
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {showToggleIcon && (
          <button
            type="button"
            onClick={toggleVisibility}
            className="absolute inset-y-0 right-4 flex items-center text-gray-500 hover:text-gray-700"
          >
            {inputType === 'password' ? '🙈' : '🙉'}
          </button>
        )}
      </div>
    </div>
  );
};

export default TextField;
