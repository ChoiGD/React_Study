import React from 'react';
import axios from "axios";

const PostInput = ({requestRender}) => {

    const clickAdd = () =>{
        const obj = {title:'Test....', author:'tester'}
        postAjax(obj).then(()=>{requestRender()})
    }


    return (
        <div>
            <button onClick={()=>clickAdd()}>ADD POST</button>
        </div>
    );
};

const postAjax = async (postObj) =>{
    const res = await axios.post(`http://localhost/posts/`,postObj)
    return res.data
}



export default PostInput;