import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './CContext6.jsx'
import { BrowserRouter } from 'react-router-dom'
import Mycontext from './Mycontext6.jsx'
 let mydata={
    name: "sid",
    age:"22",
    city: "bhopal"
 }

createRoot(document.getElementById('root')).render(
    <Mycontext.Provider value={mydata}>
     <BrowserRouter>
       <App />
    </BrowserRouter>
  

    </Mycontext.Provider>
    
  
)
