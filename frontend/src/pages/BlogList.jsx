import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const dummyBlogs = [
  { id: 1, title: "First Blog Post", excerpt: "This is a modern React blog example..." },
  { id: 2, title: "Another Post", excerpt: "Learn React trends with simple styling..." },
];

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(dummyBlogs);
  }, []);

  return (
    <div>
      <h1 style={{ marginBottom: "1.5rem" }}>All Blogs</h1>
      {blogs.map(blog => (
        <div key={blog.id} className="blog-card">
          <h2>{blog.title}</h2>
          <p>{blog.excerpt}</p>
          <Link to={`/post/${blog.id}`}>Read More →</Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;