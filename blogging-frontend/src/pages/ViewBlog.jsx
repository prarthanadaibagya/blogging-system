import React from "react";
import { useParams, Link } from "react-router-dom";

function ViewBlog() {
  const { id } = useParams();
  const blog = { id, title: "Sample Blog Post", content: "This is the full content of the blog post..." };

  return (
    <div className="blog-card">
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <Link to={`/edit/${id}`}>Edit Post</Link>
    </div>
  );
}

export default ViewBlog;