import React from 'react';
import TodoListItem from "./TodoListItem";
const TodoList = ({todos, removeTodo,cri,changeComplete}) => {

    //체크박스 + 조회
    const todoFilter = todos.filter(todo => {
        if(cri === 'A'){
            return true
        }else if(cri === 'C'){
            return todo.complete === true
        }else{
            return todo.complete === false
        }
    })

    return (
        <div className='list-wrapper'>
            {todoFilter.map(todo => <TodoListItem key={todo.num}
                                             changeComplete={changeComplete}
                                             removeTodo={removeTodo} {...todo}/>)}
        </div>
    );
};

export default TodoList;