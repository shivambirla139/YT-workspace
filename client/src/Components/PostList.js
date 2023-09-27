import {React, useEffect,useState} from 'react';
import axios from 'axios';


function PostList({posts}){

    return (
        <>
            <ul>
                {
                    posts.map(post=>{
                        return <li>{post.content}</li>;
                    })
                }
            </ul>
        </>
    )
    
}


export default PostList;