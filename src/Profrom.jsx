// import React, { useState } from "react";
// const App =()=>{


  
//  const[formData,setformData]=useState({
//     name:"",
//     email:"",
//     num :"",
//     pass:"",
//  })


//  let changeinp=(e)=>{
//     setformData({
//         ...formData,
//         [e.target.name]: e.target.value,

//     })
   


//   let handlesubmit =(e)=>{
//     e.preventDefault()
//     // alert("form submited")

//     if ( formData.name ===""){
//          alert("please enter your name")
//     return

//     }
//     if (formData.num ===""){
//          alert("please enter your number")
//     return

//     }
    
//     if (formData.email === "") {
//       alert("Please enter your email");
//       return;
//     } 
  
//     if ( formData.pass === "") {
//       alert("Please enter your pass");
//       return;
//     }
    
//     alert("Form Submitted Successfully ");      
//   }
   
//     return(
//       <>
     

//       <form  onSubmit={handlesubmit}>

//           Enter name <input type="text" name="name"  value={formData.name}onChange={changeinp}/><br/><br/>
//           Enter email <input type="text" name="email" value={formData.email}onChange={changeinp}/><br/><br/>
//           Enter num <input type="text"  name="num" value={formData.num} onChange={changeinp}/><br/><br/>
//           Enter pass <input type="text" name="pass" value={formData.pass} onChange={changeinp}/><br/><br/>
         
//           <button type="submit">Sign up</button>

//       </form>
      
//       </>
//     )

// }
// }

// export default App


import React, { useState } from "react";

const App = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    num: "",
    pass: "",
  });

  // Input change handler
  let changeinp = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form submit handler (bahar likha)
  let handlesubmit = (e) => {
    e.preventDefault();

    if (formData.name === "") {
      alert("Please enter your name");
      return;
    }

    if (formData.num === "") {
      alert("Please enter your number");
      return;
    }

    if (formData.email === "") {
      alert("Please enter your email");
      return;
    }

    if (formData.pass === "") {
      alert("Please enter your password");
      return;
    }

    alert("Form Submitted Successfully");
  };

  return (
    <>
      <form onSubmit={handlesubmit}>
        Enter name{" "}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={changeinp}
        />
        <br />
        <br />
        Enter email{" "}
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={changeinp}
        />
        <br />
        <br />
        Enter num{" "}
        <input
          type="text"
          name="num"
          value={formData.num}
          onChange={changeinp}
        />
        <br />
        <br />
        Enter pass{" "}
        <input
          type="password"
          name="pass"
          value={formData.pass}
          onChange={changeinp}
        />
        <br />
        <br />
        <button type="submit">Sign up</button>
      </form>
    </>
  );
};

export default App;
