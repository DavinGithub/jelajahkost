import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const TextField = ({ 
  label, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  showToggleIcon = false 
}) => {
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
        {showToggleIcon && type === 'password' && (
          <button
            type="button"
            onClick={toggleVisibility}
            className="absolute inset-y-0 right-4 flex items-center text-gray-500 hover:text-gray-700"
            aria-label={inputType === 'password' ? 'Tampilkan kata sandi' : 'Sembunyikan kata sandi'}
          >
            {inputType === 'password' ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default TextField;