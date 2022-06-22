import {useEffect, useState} from "react";
import {getPostList} from "../api/postAPI";


const usePostLIst = (flag) =>{

    const [posts, setPosts] = useState([])

    useEffect(() =>{

        getPostList().then(res => setPosts(res));

    },[flag])


    return {posts}
}

export default usePostLIst