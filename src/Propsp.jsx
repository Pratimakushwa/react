import React from "react";
import Child from "./Propsc";
import './Props.css'

import Image from './assets/image.webp'

const Parent=()=>{
    return(
        <>
        <div className="flex justify-evenly pt-4 ">
             <Child
        image={Image}
        name="jeans"
        brand="zara"
        price= "234567"
        />
        <Child
        image={Image}
        name="jeans"
        brand="zara"
        price= "234567"
        />
        <Child
        image = {Image}
        name="jeans"
        brand="zara"
        price= "234567"
        />

        </div>
      
     </>
       
    )
}
export default Parent