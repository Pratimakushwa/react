import React, { useState } from "react";
const App =()=>{

  const[name,setname] = useState("")
  const[email,setemail] = useState("")
  const[num,setnum] = useState("")
  const[pass,setpass] = useState("")
  // const[myerror]


  let handlesubmit =(e)=>{
    e.preventDefault()
    // alert("form submited")

    if (name ===""){
         alert("please enter your name")
    return

    }
    if (num ===""){
         alert("please enter your number")
    return

    }
    
    if (email.trim() === "") {
      alert("Please enter your email");
      return;
    } 
    else if (
      !(email.endsWith("@gmail.com") || email.endsWith("@yahoo.com"))) {
      alert("Please enter a valid email (@gmail.com or @yahoo.com)");
      return;
    }
    if (pass.trim() === "") {
      alert("Please enter your pass");
      return;
    }
     else if (!/[ !,~,^,\-,+,*,@]/.test(pass)) {
      alert("Password must include at least one special character");
      return;
    }
    alert("Form Submitted Successfully ");      
  }
   
    return(
      <>
      <h1>form</h1>
      <p>{name}</p>

      <form  onSubmit={handlesubmit}>
      <p></p>
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

