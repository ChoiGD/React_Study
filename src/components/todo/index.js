import React, {useState} from 'react';
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import uuid from "react-uuid";
import TodoCri from "./TodoCri";
import "./TodoListTemp.css";


//초기화
const initState = [
    {num: uuid(), title:'testTitle...1', complete:true},
    {num: uuid(), title:'testTitle...2', complete:false},
    {num: uuid(), title:'testTitle...3', complete:true},
    {num: uuid(), title:'testTitle...4', complete:false},
    {num: uuid(), title:'testTitle...5', complete:true},
]

const Todo = () => {

    //useState [값, 함수]
    const [todos,setTodos] = useState(initState)
    const [cri,setCri] = useState('A')


    //리스트 제거
    const removeTodo = (num) =>{
        const result = todos.filter(todo => todo.num !== num)
        setTodos(result)
    }

    //리스트 추가
    const addTodo = (text) =>{
        const add = {num:uuid(), title:text, complete:false}
        setTodos([...todos,add])
    }

    //컬럼 값
    const changeCri = (cri) =>{
        setCri(cri)
    }

    //체크박스 변경
    const changeComplete = (num, complete) =>{
        const target = todos.filter(todo => todo.num === num)[0]
        target.complete = complete

        setTodos([...todos])
    }


    return (
        <div className='wrapper'>
            <div className='card frame'>
                <TodoInput addTodo={addTodo}/>
                <TodoList todos={todos} removeTodo={removeTodo} cri={cri} changeComplete={changeComplete}/>
                <TodoCri changeCri={changeCri}/>
            </div>
        </div>
    );
};

export default Todo;