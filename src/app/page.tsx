"use client";
import React, { useState } from "react";

export default function Todo(){
    const [todo, setTodo] =useState('')
    const [todos, setTodos] = useState([ 

    {todoText: " Happy Meal Cheese Burger",  completed: false },
    {todoText: " Happy Meal Chicken Burger",  completed: true },

    
   ]);

   
   const onClickHandler = (myElum: any) => {
      console.log("myElum", myElum);

   const newTodos = todos.map(todo=>{
      console.log("todo:", todo);
      if (todo.todoText == myElum.todoText){
         todo.completed = !todo.completed
      }
      return todo;
   });

   console.log(newTodos);
   setTodos(newTodos);
   };
   const addTodo = () => {
    const newTodo = { todoText : todo , completed: false}
    const newTodos = [...todos, newTodo]
    setTodos(newTodos);
    setTodo("");
   };
   
   const cancelTodo = (myTodo: any) => {
    const newTodos = todos.filter(todo=>{
      if (todo.todoText == myTodo.todoText) return false;
    return true;
   })
   console.log("old todos", todos, "new todos", newTodos);
   setTodos(newTodos);
}
    return ( 
     
    <div className=" justify-center text-center h-screen ">
        <div className=" mb-10 mt-16 text-2xl font-bold">Welcome to 5 ⭐ Hotel</div>
        <input className=" mb-10 "
        placeholder="Add Menu" 
        value={todo} 
        onChange={(e) => {
         setTodo(e.target.value);
         }}
         />

        <button 
              className=" shadow-md bg-red-400 rounded-md px-5 py-2 text-lg font-semibold ml-7 hover:bg-pink-600  hover:animate-pulse"onClick={addTodo }>Order</button>
        <ul>
           {todos.map((elm)=>{
            return ( 
            <li 
            style={{
               color:  elm.completed ? "purple" : "green",
               fontStyle: "oblique",
               listStyle: "none",
            }} 
            
            
            
            key={elm.todoText}
            >
               <input type="checkbox"
               checked={elm.completed}
                onChange={() => {
                onClickHandler(elm);
               }} 
                />
               {elm.todoText}
               <button  
              
              className=" shadow-md bg-red-400 rounded-md px-5 py-2 text-lg font-semibold ml-7 hover:bg-pink-600  hover:animate-pulse mb-5 "
                 onClick={() => {
                  cancelTodo(elm);
               }}
                    
            >
                  {"    "}
                    Cancel
                  </button>
               </li>
             );
           })}
         </ul>
        
      </div> 
     
    );    
  }


