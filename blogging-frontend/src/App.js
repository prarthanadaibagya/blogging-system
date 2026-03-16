import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BlogList from "./pages/BlogList";
import ViewBlog from "./pages/ViewBlog";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/post/:id" element={<ViewBlog />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;