import React from 'react'

const Task4 = () => {
    const number=[1,2,3,4,5]

  return (
    <>
    
    <ul>
        {number.map((e,index)=>(
            <li key={index}>{e*2}</li>
        ))}
    </ul>


    </>
   
  )
}

export default Task4