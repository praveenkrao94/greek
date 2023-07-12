import React, { useState } from 'react';
import logo from '../assets/logo.png'

const Company = () => {
  const [showDetails, setShowDetails] = useState(false);


  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-300">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-center">
          <img src={logo} alt="Company Logo" className="w-20" />
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-bold">Company: Geeksynergy Technologies Pvt Ltd</h2>
          <p>Address: Sanjayanagar, Bengaluru-56</p>
          <p>Phone: XXXXXXXXX09</p>
          <p>Email: XXXXXX@gmail.com</p>
        </div>
      </div>
    </div>

  );
};

export default Company;
