import React from "react";
import Child from "./child";

const  App=()=>{
    // let Title="cloth"
    // let Brand="zara"
    // let Price="999"//use variable

    //use object

    let clothes={
        Title: title,
        Brand : brand,
        Price : price
    }




    return(
        <>
        <h1>props</h1>
        {/* <Child title={Title}brand={Brand} price="999"/>//use variable */}//use variable
        <Child clothes={clothes}/>//use object
        

        {/* <Child title="cloth" brand="zara" price="999"/>
        <Child title="cloth" brand="h&m" price="9986"/> */}
        </>
    )
}
export default App