import React, { useState } from 'react'
import './Home.css'
import {API_BASE_URL} from '../Config'

const Signinup = () => {

  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    name:"",
    password:"",
    email:""
  })

  const changeHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  const login = async()=>{
    console.log("Login Function Executed", formData);
    let responceData ;
    await fetch(`${API_BASE_URL}/signin`,{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responceData=data)

    if(responceData.success){
      localStorage.setItem('auth-token', responceData.token);
      window.location.replace("/");
    }else{
      alert(responceData.error)
    }
  }

  const signup = async()=>{
    console.log("Signup Function Executed", formData);
    let responceData ;
    await fetch(`${API_BASE_URL}/signup`,{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responceData=data)

    if(responceData.success){
      localStorage.setItem('auth-token', responceData.token);
      window.location.replace("/");
    }else{
      alert(responceData.error)
    }
  }

  return (
    <div className="re-contaner">
      <h1>{state}</h1>
      <form className="re-form">
        {state === "Sign Up" ? <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input name='name' value={formData.name} onChange={changeHandler} type="text" className="form-control" id="exampleInputFullName1" required />

        </div> : <></>}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input name='email' value={formData.email} onChange={changeHandler} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input name='password' value={formData.password} onChange={changeHandler} type="password" className="form-control" id="exampleInputPassword1" required />
          <div id="passwordHelp" className="form-text">Password must be in 8 Character.</div>
        </div>
        <button type="button" className='btn btn-primary' style={{ backgroundColor: "red", border: "0" }} onClick={()=>{state==="Login"?login():signup()}}>Submit</button>

        {state === "Sign Up" ? <h6 className=' mt-3 mr-2'>Already have an account? <span style={{ color: "#E30B5C", cursor:"pointer" }} onClick={() => { setState("Login") }}>Sign in</span></h6> : <h6 className=' mt-3 mr-2'>Create an Account <span style={{ color: "#E30B5C", cursor:"pointer" }} onClick={() => { setState("Sign Up") }}>Sign Up</span></h6>}
      </form>
    </div>
  )
}

export default Signinup