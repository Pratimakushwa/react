import React ,{ useState} from "react"
const Name=()=>{


     const[myname,setmyname ]=useState("pratima")
         let changename=()=>{
            setmyname("khushi")
         }
    
    return(
        <>
          <h1>{myname}</h1>
         <button onClick={changename}>change</button> 
        </>
    )

}
export default Name