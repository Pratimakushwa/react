import React, { useContext } from 'react'
import Mycontext from './Mycontext6'

const CChild6 = () => {
    const Mydata=useContext(Mycontext)
  return (
    <>
    <h3>child data</h3>
    <p>myname is {Mydata.name} and age is {Mydata.age}</p>

    </>
  )
}

export default CChild6