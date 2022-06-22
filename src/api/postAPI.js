import axios from "axios";

export const getPostList = async ()=>{

   const res = await axios.get('http://localhost/posts/');

   return res.data

}

export const addPostAjax = async (post) =>{

   const res = await axios.post('http://localhost/posts/', post);

   return res.data
}