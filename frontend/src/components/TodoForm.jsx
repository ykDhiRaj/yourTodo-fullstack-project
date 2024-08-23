import React, { useState } from 'react'
import { useTodosContext } from '../hooks/useTodosContext';
import { useAuthContext } from '../hooks/useAuthContext';

function TodoForm() {
  
  const {dispatch} = useTodosContext()
  const {user} = useAuthContext();
    const [content, setContent] = useState('')

    const handleSubmit = async (e)=>{

        e.preventDefault();
      if(!user){
        return "You must be logged in"
      }
        const todo = {content};

        const response = await fetch("http://localhost:3000/api/todos",{
          method:"POST",
          body:JSON.stringify(todo),
          headers:{
              "Content-Type":"application/json",
              "Authorization":`Bearer ${user.token}`
          }
        })

        const json = await response.json();
        console.log(json)
        
        if(response.ok){
          setContent('')
          console.log('Dispatched CREATE_TODO:', json);
          dispatch({type:'CREATE_TODO', payload:json});
        }

    }

  return (
    <>
        <form onSubmit={handleSubmit} className='todoform' >
            <input
             type="text" 
             placeholder={"What's in your mind?"}
             onChange={(e)=>setContent(e.target.value)} 
             value={content}
            />
            <button className='todoformbtn'>Submit</button>
        </form>
    </>
  )
}

export default TodoForm