import React from "react";
import { useState } from "react";
import  "./signup.css"
import { signInWithPopup,FacebookAuthProvider } from "firebase/auth";
import {auth} from  "../config"
import { getAuth,  createUserWithEmailAndPassword } from "firebase/auth";
const Signup=()=>{
    const [email,setemail]=  useState("")
    const [pass,setpass]=  useState("")
const  submit=()=>{
  createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("Signup succesfully")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)

      });
    
}
let facbook=()=>{
let provider = new FacebookAuthProvider();
signInWithPopup(auth,provider)
.then((suceses) => {
  // // Signed in 
  // const credential = FacebookAuthProvider.credentialFromResult(suceses);
  // const accessToken = credential.accessToken;
  console.log("Signup succesfully  with facebook")
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
    
<div className="container">
  <div className="vertical-center">
    <button  onClick={()=>submit()}>signup</button>
    <button  onClick={()=>facbook()}>signup with  facebook</button>
  </div>
</div>
</div>

      </div>
    )
}

export default Signup;