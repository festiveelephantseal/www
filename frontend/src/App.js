import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Blog from "./components/BlogPost/Blog";
import Home from "./components/Home/Home";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/posts").then((res) => {
      setPosts(res.data);
    });
  }, []);

  let ids = [];
  posts.forEach((p) => ids.push(p.data.id));

  console.log(posts);

  return (
    <>
      <Routes>
        {posts.map((post) => {
          const postId = `/${post.data.id}`;
          return (
            <Route
              key={postId}
              path={postId}
              element={<Blog post={post} />} // Use 'element' to render JSX element
            />
          );
        })}
        <Route path="/" element={<Home posts={posts} />} />
      </Routes>
    </>
  );
}

export default App;
