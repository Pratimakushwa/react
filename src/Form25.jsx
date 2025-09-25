import React, { useState } from "react";
const App =()=>{

  const[name,setname,]=useState("")
  const[email,setemail,]=useState("")
  const[num,setnum,]=useState("")
  const[pass,setpass,]=useState("")


  let handlesubmit =(e)=>{
    e.preventDefault()
    alert("form submited")
  }
   




    return(
      <>
      <h1>form</h1>
      <p>{name}</p>

      <form  onSubmit={handlesubmit}>
          Enter name <input type="text"  value={name}onChange={(e)=>{setname(e.target.value)}}/><br/><br/>
          Enter email <input type="text" value={email}onChange={(e)=>{setemail(e.target.value)}}/><br/><br/>
          Enter num <input type="text" value={num} onChange={(e)=>{setnum(e.target.value)}}/><br/><br/>
          Enter pass <input type="text" value={pass} onChange={(e)=>{setpass(e.target.value)}}/><br/><br/>
         
          <button type="submit">Sign up</button>

      </form>
      
      </>
    )

}
export default App