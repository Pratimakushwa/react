import React, { useState } from 'react'

const Task2 = () => {
    const[count,setcount]= useState(0)

    const increment =()=>{
        setcount(count+1)
    }
    const decrement =()=>{
        setcount(count-1)
    }
    const reset = ()=>{
        setcount("")
    }

  return (
  <>
  <h2>counter</h2>
  <h3>{count}</h3>
  <button onClick={increment}>increment</button>
  <button onClick={decrement}>decrement</button>
  <button onClick={reset}>reset</button>
 </> 
 )
}

export default Task2