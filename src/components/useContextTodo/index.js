import React, {createContext, useEffect, useState} from 'react';
import UseContextInput from "./UseContextInput";
import UseContextTodoList from "./UseContextTodoList";
import {addTodoAjax, getTodoListAjax, removeTodoAjax} from "../../api/todoAPI";

export const ContextTodo = createContext()

const initState = {
    start:0,
    end:0,
    prev:false,
    next:false,
    dtoList:[]
}

const UseContextTodo = () => {

    const [result, setResult] = useState(initState)

    const getTodoList = (pageNum) =>{

        getTodoListAjax(pageNum).then(res =>{
            setResult(res)
        })
    }

    const movePage = (pageNum) =>{
        getTodoList(pageNum)
    }

    const addTodo = (todo) =>{
        addTodoAjax(todo).then(()=>{
            movePage(1)
        })
    }

    const removeTodo = (tno) =>{
        removeTodoAjax(tno).then(()=>{
            getTodoList(result.page)
        })
    }


    useEffect(()=>{
        movePage(1)
    },[])


    return (
        <ContextTodo.Provider value={{result,movePage,addTodo,removeTodo}}>
        <div>
            <UseContextInput></UseContextInput>
            <UseContextTodoList></UseContextTodoList>
        </div>
        </ContextTodo.Provider>
    );
};

export default UseContextTodo;