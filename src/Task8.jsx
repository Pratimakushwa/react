import React, { useState } from "react";

const ListAdder = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    if (inputValue === "") return;
    setItems([...items, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <input  type="text"  value={inputValue}  onChange={(e) => setInputValue(e.target.value)}/>
       <button onClick={handleAdd}>Add</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListAdder;
