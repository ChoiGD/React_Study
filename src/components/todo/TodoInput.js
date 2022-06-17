import React, {useState} from 'react';



const TodoInput = ({addTodo}) => {

    const [text,setText] = useState('')

    const sendTodo = (text) =>{
        if(text === ''){
            alert("메세지를 입력해주세요")
            return
        }
        addTodo(text)
        setText('')
    }

    return (
        <div>
            <h3>TodoInput</h3>
            <div>
                <input type='text' value={text} onChange={(e)=>{setText(e.target.value)}}/>
                <button onClick={()=>{sendTodo(text)}}>ADD</button>
            </div>
            <hr/>
        </div>
    );
};

export default TodoInput;