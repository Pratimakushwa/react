
import React from 'react'

const Map = () => {
    //  let fruit = ["mango", "banana"]
  let students = [
    {id: 1, name: "pratima", age: 23},
    {id: 2, name: "ram", age: 22},
    {id: 3, name: "shyam", age: 25},
    {id: 4, name: "karan", age: 27}
  ]

  return (

//       <h1>mapping item</h1>
//       <ul>
    //     {fruit.map((e, index) => (
    //       <li key={index}>{e}</li>
    //     ))}
    //   </ul>

//   )
// }
    <>
      <h1>mapping item</h1>
      <ul>
        {students.map((e) => (
          <li key={e.id}> Name: {e.name}is {e.age} years old  </li>
        ))}
      </ul>
    </>
  )
}

export default Map
