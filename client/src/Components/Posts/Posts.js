import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Posts() {
  const data = useSelector(state =>state.user.data);
  const navigate = useNavigate();
  return (
    <>
      <div>Posts</div>
      {data && data.data.accessToken ?
       (<>
        {data.data.accessToken}

        </>) : (<>

        </>)
      }
      
    </>
  )
}

export default Posts;