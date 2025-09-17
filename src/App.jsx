import React from "react";
import Header from "./Header";
import Navbar from "./navbar";
import "./Navbar.css";
import Footer from "./Footer";
import image from "./assets/image.webp"


import "./Footer.css";

function App(){
// javascriptm 
    let myname="pratima"
    return(
        <>
        <Navbar></Navbar>
        {/*Header/> */}
        <Header></Header>
        <img src="{image}" alt="" />
         <h1>hello world</h1>
         <p>my name is {myname}</p>
         <Footer></Footer>
        </>
    )
}
export default App



// funtion return jsx
// react fragment <>
// return ek hi element return krta
//  use crly braces when we js in html
// 
 