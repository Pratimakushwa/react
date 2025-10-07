import React, { useContext, useState } from 'react'
import Mycontext from './Mycontext6'

const CChild6 = () => {
    // const Mydata=useContext(Mycontext)
    const theme=useContext(Mycontext)
    // const {data,myhobby}=useContext(Mycontext)

  //   const num=useContext(Mycontext)

  //    let total = 0;
  // for (let i = 0; i < num.length; i++) {
  //   total = total + num[i];
  // }
  const[dark, setdark]=useState(false)

  return (
    <>
    <button onClick={()=>{setdark(!dark)}}style={{backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",}}>{dark ? "light": "dark"} </button>







    <div style={theme.dark}>
       <h3>child data</h3>
    <p>myname is  and age is </p>

    </div>
    {/* <h3>child data</h3>
    <p>myname is {Mydata.name} and age is {Mydata.age}</p> */}

    {/* <p>myname is {data.name} and age is {data.age}</p> 
    <p>myhobby is {myhobby[1]} and  {myhobby[2]}</p>  */}

    
      {/* <h2>Numbers: {num.join(", ")}</h2>
      <h3>Total: {total}</h3>
     */}

    </>
  )
}

export default CChild6