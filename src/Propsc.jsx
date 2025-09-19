import React from "react";
import Image from './assets/image.webp'
import './Props.css'


const Child=(props)=>{
    return(
        <>
        <body className="bg-blue-950">
            
        </body>
        <div className="border-2 shadow-2xl rounded-2xl hover:bg-amber-950 transform
         hover: translate-y-10 transition duration-300     hover:rotate-6" >
            <div className=" p-2" >
                <img src={ props.image} alt="" className="rounded-3xl " />
            </div>

            <div className="text-center">
                <h2>{props.name}</h2>
                <p>{props.price}</p>
                <p>{props.brand}</p>

            </div>
        </div>
        </>
    )
}
export default Child