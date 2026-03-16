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
  );
}

export default App;