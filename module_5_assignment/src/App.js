import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<UsersComp />} />
          <Route exact path="/:id" element={<PostsComp />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

function UsersComp() {
  let [usersdata, setUsersdata] = useState([]);

  async function fetchData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    setUsersdata(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {usersdata.map((user) => (
        <div key={user.id}>
          <Link to={`/${user.id}`}>
            {user.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

function PostsComp(){
  let [posts, setposts] = useState([])
  let params = useParams()

  async function fetchUserPosts() {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
    let data = await response.json();
    setposts(data);
  }

  useEffect(()=>{
    fetchUserPosts();
  }, [])

  return (
    <div>
      {posts.map(post=>{
        if (post.userId == params.id){
          return (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          )
        }
      })}
    </div>
  )
}
