// import React, { useState } from 'react'

// const Taskmap = () => {

//     const Student=[
//     {id: 1, name: "pratima", age: 23},
//     {id: 2, name: "ram", age: 22},
//     {id: 3, name: "shyam", age: 25},
//     {id: 4, name: "karan", age: 27}
//     ]
//     const[hidden,sethidden]=useState("")
    

//   return (

// <>
// <ul>
//     {Student.map((e)=>(
//         <li key={e.id} onClick={() => sethidden(hidden==e.id ? "": e.id)}>
//              {hidden==e.id ?"hideen":  `${e.name} (${e.age})`}</li>
//     ))}
// </ul>
//     <h2>You selected: {selected}</h2>



// </>  
// )
// }

// export default Taskmap

// import React, { useState } from "react";

// const ListClick = () => {
//   const items = ["Apple", "Mango", "Banana", "Orange"];
//   const [selected, setSelected] = useState("");

//   return (
//     <div>
//       <h1>Fruits</h1>
//       <ul>
//         {items.map((fruit, index) => (
//           <li
//             key={index}
//             onClick={() => setSelected(fruit)}
//             style={{ cursor: "pointer", border: "1px solid gray", margin: "5px", padding: "5px" }}
//           >
//             {fruit}
//           </li>
//         ))}
//       </ul>

//       <h2>You selected: {selected}</h2>
//     </div>
//   );
// };
// export default ListClick







import React, { useState } from 'react'

const Taskmap = () => {
    const Iteam=["mango","banana"]
    const[iteam, setiteam]=useState("")


  return (
    <>
    <ul>
        {Iteam.map((e,index)=>(
            <li key={index} onClick={() =>setiteam(e)}>{e}</li>
        ))}
    </ul>
    <h1>{iteam}</h1>

    
    </>
  )
}

export default Taskmap