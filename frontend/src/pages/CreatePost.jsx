import React, { useState } from "react";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, content });
    setTitle(""); setContent("");
    alert("Post created!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{ marginBottom: "1rem" }}>Create Post</h2>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
      <textarea placeholder="Content" value={content} onChange={e => setContent(e.target.value)} rows="6" required />
      <button type="submit">Create</button>
    </form>
  );
}

export default CreatePost;