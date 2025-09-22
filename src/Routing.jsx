import React from "react";
import Pic from './assets/react.svg'
import { Routes,Route } from "react-router-dom";
import Rhome from "./Rhome";
import Rabout from "./Rabout"
import Rservice from "./Rservice"
import Rcontact from "./Rcontact"
import Layout from "./Layout";
const App =()=>{
    return(
        <>
        <h1>Routing</h1>


        {/* /* <header>
            <img src={Pic} alt="" />
            <nav>
                <ul>
                    <li><Link to="/">Home </Link> </li>
                    <li><Link to="/about">about </Link> </li>
                    <li><Link to="/service">service </Link> </li>
                    <li><Link to="/contact">contact </Link> </li>
                </ul>
            </nav>
            
        </header> */ }
        {/* <Routes>
            <Route path="/" element={<Rhome/>}/>
            <Route path="/about" element={<Rabout/>}/>
            <Route path="/service" element={<Rservice/>}/>
            <Route path="/contact" element={<Rcontact/>}/>

                


        </Routes> */}


        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Rhome/>}/>
              <Route path="about" element={<Rabout/>}/>
             <Route path="service" element={<Rservice/>}/>
             <Route path="contact" element={<Rcontact/>}/>
             <Route path="*" element={<h1>error</h1>}/>


            </Route>

        </Routes>



        </>
    )

}
export default App