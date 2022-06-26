import React from 'react';
import {useSelector} from "react-redux";
import ReduxTodoListPagination from "./ReduxTodoListPagination";

const ReduxTodoList = () => {

    const {dtoList} = useSelector(state => state.todo)


    return (
        <div>
            <ul>
                {dtoList.map(({tno,title,dueDate,writer})=><li key={tno}>{tno} --- {title}</li> )}
            </ul>
            <ReduxTodoListPagination></ReduxTodoListPagination>
        </div>
    );
};

export default ReduxTodoList;