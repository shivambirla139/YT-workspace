import React,{useState} from "react";


const initialPost = {
    title : '',
    content : '',
}
const AddPost = ()=>{
    const [post,setPost] = useState(initialPost);

  const handleSubmit = (e) => {
    e.preventDefault();
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