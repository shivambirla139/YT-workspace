
import './App.css';
import PostForm from './Components/PostForm';
import PostList from './Components/PostList';

function App() {
  return (
    <div className="App">
      <div><PostForm/></div>
      <PostList/>
    </div>
  );
}

export default App;
