import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {addTodoAjax, getTodoListAjax} from "../api/todoAPI";

export const getTodoListThunk = createAsyncThunk("todo/list", getTodoListAjax)

export const addTodoThunk = createAsyncThunk("todo/add", async (todo)=>{

   const res = await addTodoAjax(todo);

   return getTodoListAjax(1)

})

const todoSlice = createSlice(
    {
    name:'TodoSlice',
    initialState:{
        page:0,
        size:0,
        start:0,
        edn:0,
        prev:false,
        next:false,
        dtoList:[]
    },
    extraReducers:{
        [getTodoListThunk.fulfilled]: (state,action)=>{

            return {...action.payload}
        },[addTodoThunk.fulfilled]: (state,action)=>{

            return {...action.payload}
        }
    }
})

export default todoSlice.reducer