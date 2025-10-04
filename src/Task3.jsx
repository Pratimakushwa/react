import React, { useState } from 'react';

const ColorBox = () => {
  const [bgColor, setBgColor] = useState('white');

  return (
    // Root div takes full screen height
    <div
      className="min-h-screen flex flex-col items-center justify-center transition-colors"
      style={{ backgroundColor: bgColor }}
    >
      <h1 className="text-2xl font-bold mb-6">Change Page Color</h1>
      <div>
        <button
          onClick={() => setBgColor('red')}
          className="bg-red-500 text-white"
        >
          Red
        </button>
        <button
          onClick={() => setBgColor('green')}
          className="bg-green-500 text-white  "
        >
          Green
        </button>
        <button
          onClick={() => setBgColor('white')}
          className="bg-gray-500 text-white "
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ColorBox;
