import axios from 'axios'
import React, { FC, FormEvent, useState } from 'react'




const Login:FC=()=> {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const handleSubmit=()=>{
        return(
            axios.post('http://localhost:4000/loginCred',{"email":email,"Password":password})
        )
    }
  return (
    <>
        <label>Email</label>
        <input type="email" onChange={(e)=>{
            console.log(e.target)
            setEmail(e.target.value);
        }} />
        <label>Password</label>
        <input type='password' onChange={(e)=>{
            setPassword(e.target.value);
        }}/>
        <button type='submit' onClick={handleSubmit}>Login</button>
    </>
    
  )
}

export default Login