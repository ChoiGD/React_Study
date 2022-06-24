import React, {useContext} from 'react';
import {ContextTodo} from "./index";
import styled from "styled-components";

const ListUL = styled.ul`
  list-style: none;
  display: flex;
`

const ListLI = styled.li`
  padding: 10px;
`

const UseContextPagination = () => {

    const {result, movePage}= useContext(ContextTodo)

    const {start,end,prev,next} = result

    const pageArr = Array.from({length:(end-start)+1},(v, i) => i+start);

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

export default UseContextPagination;