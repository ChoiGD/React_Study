import React, {useEffect, useState} from 'react';
import axios from "axios";

const getMoive = async ()=>{

    console.log("get Movie....")

    const res = await axios.get("https://swapi.dev/api/films/2/");

    console.log(res)

    return res.data


}


const AjaxTest = () => {

    const [content, setContent] = useState('')

    useEffect(()=>{

        getMoive().then(info =>{
            const text = info.opening_crawl
            console.log(text)
            setContent(text)
        })


    },[])

    return (
        <div>
            <button onClick={() =>console.log("AAA")}>CLICK</button>
            <pre>
                {content}
            </pre>
        </div>
    );
};




export default AjaxTest;