import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Blog_App/Home";
import Blogs from "./Blog_App/Blogs";
import BlogDetails from "./Blog_App/BlogDetails";
import Error from "./Blog_App/Error";

function App() {
  return (
    <div>
      <h1>My Blog App</h1>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/blogs">Blogs</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;