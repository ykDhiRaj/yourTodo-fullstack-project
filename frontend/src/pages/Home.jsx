import React, { useEffect, useState } from 'react'
import TodoForm from '../components/TodoForm';
import { useTodosContext } from '../hooks/useTodosContext';
import { useAuthContext } from '../hooks/useAuthContext';
import {format} from "timeago.js"


function Home() {

  const {todos,dispatch} = useTodosContext();
  const {user} = useAuthContext()

  useEffect(()=>{
    const fetchTodos = async ()=>{
        const response = await fetch("http://localhost:3000/api/todos",{
          headers:{
             "Authorization": `Bearer ${user.token}`
          }
        })

        const json = await response.json();

        if(response.ok){
          dispatch({type:'SET_TODOS', payload:json})
        }
       
    }
    if(user){

      fetchTodos();
    }
    
    
},[dispatch,user]);

const deleteTodo = async (id,event)=>{

  event.preventDefault();

  const response = await fetch("http://localhost:3000/api/todos/"+id,{
    method:'DELETE',
    headers:{
      "Authorization": `Bearer ${user.token}`
    }
  })

  const json = await response.json();
  console.log("Deleted Todo: ", json)

  if(response.ok){
    dispatch({type:'DELETE_TODO', payload:json})
  }
  
}

  return (
    <>
      <div>
        <TodoForm/>
        <div >
          {user? <> {todos && todos.map((todo)=>(
            <div className='todos' key={todo._id}>
              <h1>
              {todo.content}
              </h1>

              <p className='time'>{format(todo.createdAt)}</p>
            <button onClick={(event) => deleteTodo(todo._id, event)}>Delete</button>
            </div>
            
          ))}</>:<></>}
        </div>
      </div>
       
    </>
  )
}

export default Home