import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useTodosContext } from '../hooks/useTodosContext'

function Navbar() {
  const { user,dispatch } = useAuthContext()
  const {dispatch:todosDispatch} = useTodosContext()

  const handleClick = (e)=>{
    e.preventDefault();
    localStorage.removeItem('user');
    dispatch({type:'LOGOUT',payload:''})
    todosDispatch({type:'SET_TODOS', payload:null})
  }

  return (
    <>
      <div className='navbar'>
        <h1>yourTodo</h1>
        {user ? (
          <div>
            <button className='logout' onClick={handleClick}>Logout</button>
          </div>
        ) : (
          <div className='links'>
            <Link to={"/login"}>Login</Link>
            <Link to={"/signup"}>Signup</Link>
          </div>
         
        )}
        
      </div>
    </>
  )
}

export default Navbar
