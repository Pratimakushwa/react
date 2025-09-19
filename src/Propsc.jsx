import React from "react";
import Image from './assets/image.webp'
import './Props.css'


const Child=(props)=>{
    return(
        <>
        <div className="border-2 shadow-cyan-950 rounded-2xl" >
            <div className=" p-2">
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