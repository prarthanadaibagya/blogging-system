
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BlogList from "./pages/BlogList";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import ViewBlog from "./pages/ViewBlog";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/view/:id" element={<ViewBlog />} />
          </Routes>
        </div>
      </div>
    </Router>

import "./App.css";

function App() {
  const posts = [
    { id: 1, title: "My First Blog", preview: "This is my first post." },
    { id: 2, title: "Learning React", preview: "React makes UI development easy." },
    { id: 3, title: "Django Backend", preview: "Connecting React with Django API." }
  ];

  return (
    <div className="container">
      <h1>My Blog</h1>

      <div className="grid">
        {posts.map(post => (
          <div key={post.id} className="card">
            <h2>{post.title}</h2>
            <p>{post.preview}</p>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </div>
main
  );
}

export default App;