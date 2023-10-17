import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getpostsThunk } from '../../state/postsThunk';

function Posts() {
  const data = useSelector(state => state.user.data);
  const post = useSelector(state => state.post);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  var isAuthenticated ; 
  if(data && data.data.accessToken){
    isAuthenticated = true;
  }else {
    isAuthenticated = false;
  }
  useEffect(()=>{
    if(isAuthenticated){
      const config = {
        headers: { Authorization: `Bearer ${data.data.accessToken}` }
      };
      dispatch(getpostsThunk(config));
    }else { 
      navigate("/login");
    }
  },[]);
  return (
    <>
      {
        post.error === null && post.posts.length>0 ? 
        post.posts.map((singlepost)=><><div>
              <div> userid : {singlepost.userid }</div>
              <div> Title : {singlepost.title }</div>
              <div> content : {singlepost.content} </div>
              <br></br>

            </div></>):(<>
            "NO POSTS"

        </>)
       
      }
    
    </>
  )
}

export default Posts;