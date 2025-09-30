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
          className="bg-red-500 text-white px-6 py-2 rounded mr-4 hover:bg-red-600 transition"
        >
          Red
        </button>
        <button
          onClick={() => setBgColor('green')}
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
        >
          Green
        </button>
        <button
          onClick={() => setBgColor('white')}
          className="bg-gray-500 text-white px-6 py-2 rounded ml-4 hover:bg-gray-600 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ColorBox;
