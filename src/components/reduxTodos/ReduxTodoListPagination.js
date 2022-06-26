import React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {getTodoListThunk} from "../../reducers/todoSlice";

const ListUL = styled.ul`
  list-style: none;
  display: flex;
`

const ListLI = styled.li`
  padding: 10px;
`

const ReduxTodoListPagination = () => {

    const dispatch = useDispatch()

    const {start,end,prev,next} = useSelector(state => state.todo)

    const pageArr = Array.from({length:(end-start)+1},(v, i) => i+start);


    const movePage = (pageNum) =>{
        dispatch(getTodoListThunk(pageNum))
    }

    return (
        <div>
            <ListUL>
                {prev? <ListLI onClick={()=>movePage(start-1)}>Prev</ListLI> : <></>}
                {pageArr.map(page => <ListLI key={page} onClick={()=>movePage(page)}>{page}</ListLI>)}
                {next? <ListLI onClick={()=>movePage(end+1)}>Next</ListLI> : <></>}
            </ListUL>
        </div>
    );
};

export default ReduxTodoListPagination;