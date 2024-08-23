import React, { useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import {useNavigate} from "react-router-dom"


function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {dispatch} = useAuthContext()
  const navigate = useNavigate()

  const handleSubmit = async(e)=>{
    e.preventDefault()
    
    try {
      const response = await fetch("http://localhost:3000/api/user/login",{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({email,password})
      })
      const json = await response.json()

      if(response.ok){
        localStorage.setItem("user",JSON.stringify(json))
        dispatch({type:'LOGIN',payload:json})
        setEmail('');
        setPassword('');
        navigate('/')
        
      }
    } catch (error) {
      console.log("Error: ", error);
    }

  }

  return (
    <>
      <form className='login' onSubmit={handleSubmit}>
        <label>Enter your email:</label>
        <input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <label>Enter your password:</label>
        <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} value={password} />
        <button>Login</button>
      </form>
    </>
  )
}

export default Login;