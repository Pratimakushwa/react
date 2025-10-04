import React, { useState } from 'react';

const App = () => {
  const [text, setText] = useState('');
  const [showText, setShowText] = useState('');

  const handleClick = () => {
    setShowText(text);
    setText('');
  };

  return (
    <>
      <h3>Heading</h3>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      
      <button onClick={handleClick}>click</button>

      <h2>{showText}</h2>
      </>
  );
};

export default App;
