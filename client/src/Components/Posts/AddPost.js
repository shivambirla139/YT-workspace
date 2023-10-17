import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams, useSubmit } from "react-router-dom";
import { createPostThunk } from "../../state/postsThunk";


const initialPost = {
    title : '',
    content : '',
}
const AddPost = ()=>{
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state=>state.user);
  const postState = useSelector(state => state.post);
    const [post,setPost] = useState(initialPost);
    const [error , setError] = useState(null);
    var isAuthenticated ;
  useEffect(()=>{
    if(user && user.data.data.accessToken){
      isAuthenticated = true;
    }else {
      isAuthenticated = false;
      navigate("/login");
    }
  },[]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const config = {
      headers: { Authorization: `Bearer ${user.data.data.accessToken}` }
    };
    dispatch(createPostThunk(post,config));

    if(postState.error===null){
      navigate("/allposts");
    }else{
      setError(postState.error.data.message);
    }
  };

  const onValueChange = (e)=>{
    setPost({...post ,[e.target.name ]:e.target.value});
  }

  return (
    <div>
      <h2>Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={post.title}
            name = "title"
            onChange={(e) => onValueChange(e)}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={post.content}
            name = "content"
            onChange={(e) => onValueChange(e)}
            required
          />
        </div>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );

}
export default AddPost;