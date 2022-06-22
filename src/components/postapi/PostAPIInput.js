import React, {useState} from 'react';
import {addPostAjax} from "../../api/postAPI";
import usePostLIst from "../../hooks/usePostLIst";
import usePostInput from "../../hooks/usePostInput";


const initState = {
    title:'',
    author:''
}

const PostApiInput = ({requestRender}) => {

    const {post,change,clickAdd} = usePostInput(initState,requestRender);


    return (
        <div>
            <h3>PostAPIInput</h3>
            <div>
                <input type='text' value={post.title} placeholder='제목' onChange={(e)=> change('title',e.target.value)}/>
            </div>
            <div>
                <input type='text' value={post.author} placeholder='작성자' onChange={(e)=> change('author',e.target.value)}/>
            </div>
            <div>
                <button onClick={() => clickAdd()}>ADD</button>
            </div>
        </div>
    );
};

export default PostApiInput;