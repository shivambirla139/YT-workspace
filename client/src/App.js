import './App.css';
import PostForm from './Components/PostForm';
import PostList from './Components/PostList';
import {React,useEffect,useState} from 'react';
import axios from 'axios';
function App() {
  const  [posts,setPosts] = useState([]);

  const url = `http://localhost:8080/api/post/`;

  const getPost = async ()=>{
      try { 
          const  allPosts = await axios.get(url);
          setPosts(allPosts.data);
          console.log(allPosts.data);
      }catch (e){
          console.log(e.message);
      }
  }

  useEffect(()=>{
      getPost();
  },[]);

  const addData = (data)=>{
   setPosts([...posts,data]); 
  }
  return (
    <div className="App">
      <div><PostForm addData = {addData}/></div>
      <PostList posts= {posts}/>
    </div>
  );
}

export default App;
