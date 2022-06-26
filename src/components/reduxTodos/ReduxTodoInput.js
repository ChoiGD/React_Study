import React from 'react';
import {useDispatch} from "react-redux";
import {addTodoThunk} from "../../reducers/todoSlice";

const ReduxTodoInput = () => {

    const dispatch = useDispatch()

    const clickAdd = () => {

        const todo = {title:'test', dueDate:"2022-06-24", writer:'ChoiGD07'}

        dispatch(addTodoThunk(todo))

    }

    return (
        <div>
            <button onClick={()=>clickAdd()}>ADD</button>
        </div>
    );
};

export default ReduxTodoInput;