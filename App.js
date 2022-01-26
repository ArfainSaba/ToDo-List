// import logo from './logo.svg';
import './App.css';
import Header from "./myComponents/Header";
import {Todos} from "./myComponents/Todos";
import {Footer} from "./myComponents/Footer";
import { useState } from 'react';


function App() {
      const onDelete=(todo)=>{
        console.log("im on delete",todo);
        //deleting this way in react does not work
        // let index = todos.indexOf(todo);
        // todos.splice(index,1);
        setTodos(todos.filter((tudo)=>{
          return e!==tudo;
        }))
      }
  const [todos,setTodos]=useState([
    {
      sno:1,
      title: "go to the market",
      desc:"you need to go to the market to get this job done"
    },
    {
      sno:2,
      title: "2go to the market",
      desc:"2you need to go to the market to get this job done"
    },
    {
      sno:3,
      title: "3go to the market",
      desc:"3you need to go to the market to get this job done"
    },
  ]);

  return (
    <>
    <Header title="my todos List" searchBar={false}/> 
    <Todos todos={todos} onDelete={onDelete} /> 
    <Footer/>
     </>
  );
  }
export default App;
