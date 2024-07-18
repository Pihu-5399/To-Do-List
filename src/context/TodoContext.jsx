import React, { createContext, useContext } from 'react'

const todocontext = createContext()

export function Todocontext(props) {
    // const todo = ["New ToDo","Javascript","React.Js", "NODE.JS"]
    const todo = localStorage.getItem("todoList")? 
    JSON.parse(localStorage.getItem("todoList")) : []
    return (
        <todocontext.Provider value={todo}> {props.children}
        </todocontext.Provider>
    )
}
export const useTodo = () =>{
    return useContext(todocontext)
}