import React from 'react'
import {Todoitem} from "../myComponents/Todoitem";

export const Todos = (props) => {
  
  return (
     <div className="container">
      <h3 className='text-center my-3' >Todos List</h3>

      {/* here error displayed was tudo undef.. */}
      {/* <Todoitem Todo={props.todos[0]}/> */}
     {/* <Todoitem todo={props.todos[2]}/> */}
    {props.todos.length===0? "no todos to display":
    props.tudos.map((todo)=>{
      return <Todoitem todo ={todo} key={tudo.sno} onDelete={props.onDelete} />
    })}

  </div>
  )
};

