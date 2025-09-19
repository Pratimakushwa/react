import React from "react";
import './Tailwind.css'
import Pic from './assets/react.svg'

// const App=()=>{
//     return(
//         <>
//         <div className="flex justify-center items-center border-2 ">
//             <h1>hello</h1>
//             <h2>okk</h2>
//             <h1>cybrom </h1>
//         </div>



//         <h1 className="text-red-500 bg-orange-300  text-2xl" >Tailwind</h1>
//         </>
//     )
// }
// export default App


const App=()=>{
    return(
        <>

        <header className="flex justify-around p-2 border bg-amber-400" >
            <img src="{Pic}" alt="" />
            <nav >
                <ul className=" block sm:flex  gap-3  w-f ">
                    <li  className="hover:bg-amber-50">Home</li>
                    <li className="hover:bg-amber-50">About</li>
                    <li className=" hover:bg-amber-50">Servise</li>
                    <li className=" hover:bg-amber-50">Contact</li>
                    <li className="hover:bg-amber-50">Registation</li>

                </ul>
            </nav>
             <button className="rounded-4xl bg-amber-600 p-2">Download</button>
        </header>

      



        </>
    )
}
export default App