import {React, useState} from 'react';
import axios from 'axios';

function PostForm({addData}){

    const [data,setData] = useState({content:""});

    const handleSubmit = (e)=>{
        e.preventDefault();
        const fun = async ()=>{
            try{
                const response = await axios.post('http://localhost:8080/api/post',data);
                addData(data);
                console.log(response);
            }catch (e){
                console.log(e.message);
            }
        
        }
        fun();


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