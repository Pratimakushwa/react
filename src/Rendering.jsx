import React, { useState } from 'react'

const Rendering = () => {


    let[login,setlogin]=useState(false)
    let[dark,setdark]=useState(false)
    // let login =true

// ans=<h1>welcome</h1> ? : <h1>please login</h1>
   let ans 
   if (login){
    ans=<h1>welcome</h1>
   }
else{
    ans=<h1>please login</h1>
}

  return (
   
<>
{ans}

<button onClick={() =>{setlogin(!login)}}>click me </button>
<button onClick={() =>{setlogin(!login)}}>{login ? "logout": "login"} </button>

<button onClick={()=>{setdark(!dark)}}>{dark ? "light": "dark"} </button>

</>
  )
}

export default Rendering