import React, {useContext} from 'react';
import {ContextTodo} from "./index";
import UseContextPagination from "./UseContextPagination";

const UseContextTodoList = () => {

    const {result,removeTodo} = useContext(ContextTodo)

    const {dtoList} = result


    return (
        <div>
            <h3>TodoList</h3>
            <ul>
                {dtoList.map(({tno,title,dueDate,writer}) =>
                    <li key={tno}>{title} --{dueDate}
                        <button onClick={()=>removeTodo(tno)}>Del</button>
                    </li> )}
            </ul>
            <UseContextPagination></UseContextPagination>
        </div>
    );
};

export default UseContextTodoList;