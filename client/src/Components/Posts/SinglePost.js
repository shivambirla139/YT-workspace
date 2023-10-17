import React from "react";
import { useSelector } from "react-redux";
import "./singlePostStyles.css";

const Post = (post)=>{
    const user = useSelector(state => state.user);
    var isAuthenticated;
    if( user.data && user.data.accessToken){
    }
    const {title,content} = post;
    const author = post.user;

    return (<>
        <div class="post-container">
                <div class="user-info">
                    <span class="username">{user.username}</span>
                </div>
                <div class="post-header">
                    <h2 class="post-title">{title}</h2>
                </div>
                <div class="post-content">
                    <p>content</p>
                </div>
                <div class="post-actions">
                    <button class="edit-button">Edit</button>
                    <button class="delete-button">Delete</button>
                </div>
            </div>

    </>)
};