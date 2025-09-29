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

    // const [count, setcount]=useState(0)
    // let sayhi=()=>{
        

    //     setcount(count+1)


    // }     
    // let sayhii=()=>{
    //     if (count<=0){
    //         return
    //     }
    //     setcount(count-1)


    // }     


   const[mayname,setname] = useState("pratima")
   let sayhi=()=>{
     setname("khushi")

   }


    return(
        <>
         {/* <h1>{count}</h1>
         <button onClick={sayhi}> click me</button> 
         <button onClick={sayhii}> decriment</button>  */}
        

         {/* <button onClick={Sayhi}> click me</button> */}

          {/* <button onClick={()=> alert("hello world")}> click me</button> */}

         {/* <button onClick={(sayhi("pratima"))}> click name</button>  */}
         {/* <button onClick={sayhi}>glick</button> */}

         {/* <button onClick={()=>alert("hello world")}>click</button> */}

         <button onClick={sayhi}> click</button>
         <h1>{mayname}</h1>

        </>

    )
}
export default App