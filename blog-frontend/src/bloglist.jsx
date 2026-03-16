import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Replace with your API endpoint
    fetch("http://localhost:8000/api/blogs/")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Blogs</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-gray-600 mt-2">{blog.content.slice(0, 100)}...</p>
            <div className="mt-4 flex justify-between">
              <Link to={`/view/${blog.id}`} className="text-blue-600 hover:underline">View</Link>
              <Link to={`/edit/${blog.id}`} className="text-green-600 hover:underline">Edit</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;