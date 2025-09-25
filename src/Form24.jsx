import React, { useState } from "react";
const App =()=>{

  const[Form,setform,]=useState("")
    let change=(e)=>{
      console.log(e)
        console.log(e.target.value);
      setform(e.target.value)


    }




    return(
      <>
      <h2>Form</h2>
      Enter name <input type="text" onChange={change}/>
      <p>{Form}</p>
      </>
    )

}
export default App