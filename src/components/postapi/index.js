import React, {useState} from 'react';
import PostApiInput from "./PostAPIInput";
import PostAPIList from "./PostAPIList";

const PostAPI = () => {

    const [flag,setFlag] = useState(false)

    const requestRender = () =>{
        setFlag(!flag)
    }

    return (
        <div>
            <PostApiInput requestRender={requestRender}/>
            <PostAPIList flag={flag}/>
        </div>
    );
};

export default PostAPI;