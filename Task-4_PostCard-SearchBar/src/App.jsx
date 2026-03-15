import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "./components/PostCard";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data.slice(0, 20));
        setLoading(false);
      })
      .catch((err) => {
        setError("Something went wrong!");
        setLoading(false);
      });
  }, []);

  //Filter posts based on search.
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <h2 className="message">Loading...</h2>;
  if (error) return <h2 className="message error">{error}</h2>;

  return (
    <div className="app">
      <h1>Post Explorer</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <div className="posts-container">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <PostCard key={post.id} title={post.title} body={post.body} />
          ))
        ) : (
          <p className="message">No posts found.</p>
        )}
      </div>
    </div>
  );
}
export default App;