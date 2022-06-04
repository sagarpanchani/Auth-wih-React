import React from "react";
import { useState } from "react";
import {auth} from  "../config"
import { getAuth,  signInWithEmailAndPassword } from "firebase/auth";
const Login=()=>{
    const [email,setemail]=  useState("")
    const [pass,setpass]=  useState("")
const  submit=()=>{
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("login succesfully")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)

      });
    
}

    return(
      <div className="_maain_div">

<div  className="_signup">
    <input placeholder="First  name"     />
    <input   placeholder="Last  name" />
    <input placeholder="Email"  value={email}  onChange={(e)=>setemail(e.target.value)} />
    <input  type="password" placeholder="pass"  value={pass}  onChange={(b)=>setpass(b.target.value)} />
    

  <div className="_center">
    <button  onClick={()=>submit()}>Login</button>
  </div>
</div>

      </div>
    )
}

export default Login;