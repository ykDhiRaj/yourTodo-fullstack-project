import React, { useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [fullname, setFullname] = useState('')
  const {dispatch} = useAuthContext()
  const navigate = useNavigate()
 


  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/user/signup",{
        method:"POST",
        headers:{
          'Content-Type':'application/json',
          
        },
        body:JSON.stringify({fullname,email,password})
      })
      const json = await response.json();
      
      if(response.ok){
        localStorage.setItem("user",JSON.stringify(json));
        dispatch({type:'LOGIN', payload:json})
        setEmail('')
        setPassword('')
        setFullname('')
        navigate('/')
      }
    } catch (error) {
      console.log("Error: ", error)
    }
  }

  return (
    <>
     <form className='signup' onSubmit={handleSubmit} >
        <h1>Enter your fullname:</h1>
        <input type="text" placeholder='fullname' onChange={(e)=>setFullname(e.target.value)} value={fullname}/>
        <h1>Enter your email:</h1>
        <input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <h1>Enter your password</h1>
        <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} value={password} />
        <button>Signup</button>
      </form>
    </>
  )
}

export default Signup