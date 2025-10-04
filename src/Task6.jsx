import React, { useState } from 'react'

const Task6 = () => {
    let[message,setmessage]=useState(false)
  return (
    <>
    {message && <h1>welcoe to see the message</h1> }
    <button onClick={() =>{setmessage(!message)}}> show me</button>
    </>
  
  )
}

export default Task6