import React from "react";
import Child from "./Practicec";
import {Route, Routes } from "react-router-dom";

const Parent=()=>{
    return(
        <>
        <Child
        home="Home"
        contact="Contact"
        service="service"
        about="About"
        
        />


        <Routes>
            <Route path="/" element={< Pratices/>}>
            <Route path="home" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="service" element={<Service/>}/>

                
                </Route>
        </Routes>


        </>
    )
}
export default Parent