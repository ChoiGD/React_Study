import React, {useEffect, useState} from 'react';
import {getPostList} from "../../api/postAPI";
import usePostLIst from "../../hooks/usePostLIst";

const PostApiList = ({flag}) => {

    const {posts} = usePostLIst(flag);


    return (
        <div>
            {posts.map(post => <li key={post.id}>{post.id}---{post.title}---{post.author}</li>)}
        </div>
    );
};

export default PostApiList;