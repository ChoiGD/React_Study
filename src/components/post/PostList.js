import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";

const PostList = ({flag}) => {

    const [posts,setPosts] = useState([])

    const [change,setChange] = useState(false)


    /*
        비동기 처리에서 거의 필수적, useEffect를 사용하지 않으면 무한루프에 빠진다
        디펜던시에 빈배열을 줄 경우 처음 랜더링 시에만 진행이 되지만 변화되는 값을 배열에 넣어주면 렌더가 된다
        변화되는 값을 체크해서 렌더
    */
    useEffect(()=>{

        ajaxList().then(data =>{
            setPosts(data)
        })

    },[flag,change])


    const removeBtn = useCallback((id) =>{
        removeList(id).then(() =>{
            setChange(!change)
        })
    })

    const list = posts.map(({id,title,author})=> <li key={id}>{id}----{title}----{author}
        <button onClick={() =>removeBtn(id)}>Dell</button></li>);


    return (
        <ul>
            {list}
        </ul>
    );
};

//비동기 통신으로 가져오기
const ajaxList = async () =>{
    const res = await axios.get("http://localhost/posts/");
    return res.data
}

//비동기 통신으로 삭제
const removeList = async (id) =>{
    const res = await axios.delete(`http://localhost/posts/${id}`);
    return res.data
}


export default PostList;