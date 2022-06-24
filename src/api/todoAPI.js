import axios from "axios";

export const getTodoListAjax = async (page =1) =>{

    const res = await axios.get(`http://localhost:8080/guest/todo/list`,{params:{page:page}})

    return res.data
}


export const addTodoAjax = async (todo) =>{

    const res = await axios.post(`http://localhost:8080/guest/todo/`,todo)

    return res.data
}

export const removeTodoAjax = async (tno) =>{

    const res = await axios.delete(`http://localhost:8080/guest/todo/${tno}`)

    return res.data
}