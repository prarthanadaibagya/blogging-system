import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav>
      <div style={{ fontWeight: "bold", fontSize: "1.3rem" }}>MyBlog</div>
      <div>
        <Link to="/" style={{ textDecoration: location.pathname === "/" ? "underline" : "none" }}>Home</Link>
        <Link to="/create" style={{ textDecoration: location.pathname === "/create" ? "underline" : "none" }}>Create Post</Link>
      </div>
    </nav>
  );
}

export default Navbar;