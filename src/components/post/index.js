import React, {useState} from 'react';
import PostInput from "./PostInput";
import PostList from "./PostList";

const Post = () => {

    const [flag, setFlag] = useState(false)

    const requestRender = () =>{
        setFlag(!flag)
    }

    return (
        <div>
            <PostInput requestRender={requestRender}></PostInput>
            <PostList flag={flag}></PostList>
        </div>
    );
};

export default Post;