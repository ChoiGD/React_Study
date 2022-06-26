import React, {useEffect} from 'react';
import ReduxTodoList from "./ReduxTodoList";
import {useDispatch} from "react-redux";
import {getTodoListThunk} from "../../reducers/todoSlice";
import ReduxTodoInput from "./ReduxTodoInput";

const ReduxTodos = () => {

    const dispatch = useDispatch()

    useEffect(()=>{

        dispatch(getTodoListThunk(1))

    },[])

    return (
        <div>
            <h1>ReduxTodos</h1>
            <ReduxTodoInput></ReduxTodoInput>
            <ReduxTodoList></ReduxTodoList>
        </div>
    );
};

export default ReduxTodos;