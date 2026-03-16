import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">
          <Link to="/">MyBlog</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/">Home</Link>
          <Link to="/create">Create Post</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-blue-500 flex flex-col space-y-2 p-4">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/create" onClick={() => setOpen(false)}>Create Post</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;