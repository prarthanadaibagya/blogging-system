import React from "react";
import "./Blog.css";

function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "My First Blog",
      preview: "This is a short preview of the blog content."
    },
    {
      id: 2,
      title: "Learning Django",
      preview: "Django is a powerful Python web framework."
    },
    {
      id: 3,
      title: "React for Frontend",
      preview: "React makes UI development easier and reusable."
    }
  ];

  return (
    <div className="container">

      <header className="navbar">
        <h2>My Blog</h2>
        <button className="create-btn">Create Post</button>
      </header>

      <div className="blog-grid">
        {posts.map(post => (
          <div key={post.id} className="blog-card">
            <h3>{post.title}</h3>
            <p>{post.preview}</p>

            <div className="buttons">
              <button>Read</button>
              <button>Edit</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default BlogPage;