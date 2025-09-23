import React from "react";
import { Link, Outlet } from "react-router-dom";
const Child=(props)=>{
    return(
        <>
        <nav>
            <ul>
                <li> <Link to="/">{props.home}</Link></li>
                <li> <Link to="/">{props.about}</Link></li>
                <li> <Link to="/">{props.service}</Link></li>
                <li> <Link to="/">{props.contact}</Link></li>
             
            </ul>


        </nav>
        <Outlet/>
        <h1>footer</h1>


        </>
    )
}
export default Child