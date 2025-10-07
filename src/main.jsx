import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './CChild6.jsx'
import { BrowserRouter } from 'react-router-dom'
import Mycontext from './Mycontext6.jsx'
import { build } from 'vite'
//  let mydata={
//     name: "sid",
//     age:"22",
//     city: "bhopal"
//  }
let theme={
   
      dark:{
      "background-color":"black",
      "color":"white"
   },
   light:{
      "background-color":"white",
      "color":"black"
   }
}

let data={
   name:"pratima",
   age:23
}

// let myhobby=["reading book", "singing song"]

// let num=[1,2,3]








createRoot(document.getElementById('root')).render(
   //  <Mycontext.Provider value={{data,myhobby}}>
   //  <Mycontext.Provider value={num}>
    <Mycontext.Provider value={theme}>
     <BrowserRouter>
       <App />
    </BrowserRouter>
  

    </Mycontext.Provider>
    
  
)
