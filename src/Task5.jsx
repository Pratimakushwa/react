// import React, { useState } from "react";

// const Rendering = () => {
//   const [dark, setDark] = useState(false);

//   return (
//     <div style={{backgroundColor: dark ? "black" : "white",color: dark ? "white" : "black",
       
//       }}
//     >
//       <h2>{dark ? "Dark Mode" : "Light Mode"}</h2>

//       <button onClick={() => setDark(!dark)} >{dark ? "Light" : "Dark"} </button>
//       <button onClick={() => setDark(!dark)} >click me </button>
//     </div>
//   );
// };

// export default Rendering;

import React, { useState } from 'react'

const Task5 = () => {
  const[dark, setDark]=useState(false)
  return (
    <>
     <div style={{ background :dark ? "green" : "white", color: dark ? "white" :"black",}}>

    <button onClick={()=> setDark(!dark)}> {dark ? "light": "dark"}</button>
    </div>
    </>
  )
}

export default Task5


