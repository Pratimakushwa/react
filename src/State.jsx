import React, { useState } from "react";
const App =()=>{
    // let  sayhi=(mayname)=>{
    //     alert("hello"+mayname)
    // }
    // let  Sayhi=()=>{
    //     alert("hello world")
    // }

    // let count=0
    // let sayhi=()=>{


    //     count++
    // }

    const [count, setcount]=useState(0)
    let sayhi=()=>{
        setcount(count+1)


    }
     



    return(
        <>
        <h1>{count}</h1>
         <button onClick={sayhi}> click me</button>

         {/* <button onClick={Sayhi}> click me</button> */}

         {/* <button onClick={()=> alert("hello world")}> click me</button>
         <button onClick={(sayhi("pratima"))}> click name</button> */}

        </>
    )
}
export default App