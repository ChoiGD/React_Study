import React, {useContext} from 'react';
import {ContextTodo} from "./index";

const UseContextInput = () => {

    const {addTodo}=useContext(ContextTodo)

    const clickAdd = () =>{
        const todo = {title:'HI', dueDate:"2022-06-24", writer:"ChoiGD"}

        addTodo(todo)
    }


    return (
        <div>
            <h2>Input</h2>
            <button onClick={()=>clickAdd()}>ADD</button>
        </div>
    );
};

export default UseContextInput;