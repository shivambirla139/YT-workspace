import {React, useState} from 'react';
import axios from 'axios';

function PostForm(){

    const [data,setData] = useState({content:""});

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:/8080/api/post',data)
        .then(result=>{console.log(result)})
        .catch(result=>{console.log(result)});
        alert("r");


    }
    return (
        <>
            
            <form onSubmit={handleSubmit}>
                <input type = "text" onChange={(e)=>{setData({content:e.target.value})}}/> 
                <input type="submit"/>
            </form>
        </>
    )
}


export default PostForm;