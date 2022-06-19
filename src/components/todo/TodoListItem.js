import React, {useState} from 'react';
const TodoListItem = ({num,title,complete,removeTodo,changeComplete}) => {

    const [checked,setChecked] = useState(complete)

    const changeCheck = (e) =>{
        const target = e.target
        console.log(target.checked)
        setChecked(target.checked)
        changeComplete(num, target.checked)
    }


    return (
        <div className='list-item'>
            <input type="checkbox" checked={checked} onChange={(e)=>changeCheck(e)}/>
            {title}<button onClick={()=>{removeTodo(num)}}>Del</button>
        </div>
    );
};

export default TodoListItem;