import {useState} from "react";
import {addPostAjax} from "../api/postAPI";


const usePostInput = (initState,callback) =>{

    const [post, setPost] = useState(initState)

    const change = (attr, value) =>{
        post[attr] = value

        setPost({...post})

    }

    const clickAdd = () =>{
        addPostAjax(post).then(()=>{
            console.log("Add Post...")
            if(callback){
                callback()
            }
        })

    }

    return {post, change, clickAdd}

}
export default usePostInput