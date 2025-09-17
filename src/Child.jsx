import React from "react";
// const Child=(props)=>{
// const Child=({title,brand,price,})=>{
const Child=(props)=>{//use object
    return(
        <>
       
        <h2>{title}</h2>//use destructing
        <h3>{brand}</h3>//use
        {/* <h4>{props.price}</h4>  */}//normal 
        <h4>{price}</h4> 
        <h4>{props.clothes.Title}</h4> //use objeect

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Quae laborum aut voluptate labore, magni deserunt illum consequatur,
             dolore nihil cumque architecto
              voluptatibus perferendis eaque quidem iste fuga quia ratione? Sit.</p>

        </>
    )
    
}
export default Child