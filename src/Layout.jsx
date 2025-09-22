import React from "react";
import {Link ,Outlet} from "react-router-dom";
import Pic from './assets/react.svg'


const Layout=()=>{
    return(
        <>
        <header className="flex">
            <img src={Pic} alt="" />
            <nav>
                <ul>
                    <li><Link to="/">Home </Link> </li>
                    <li><Link to="/about">about </Link> </li>
                    <li><Link to="/service">service </Link> </li>
                    <li><Link to="/contact">contact </Link> </li>
                </ul>
            </nav>
            
        </header>

        <Outlet />
        <h1>
            footer
        </h1>
        </>
    )
}
export default Layout