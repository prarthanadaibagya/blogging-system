import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EditPost() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetched = { title: "Existing Post", content: "Existing content..." };
    setTitle(fetched.title);
    setContent(fetched.content);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ id, title, content });
    alert("Post updated!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{ marginBottom: "1rem" }}>Edit Post</h2>
      <input value={title} onChange={e => setTitle(e.target.value)} required />
      <textarea value={content} onChange={e => setContent(e.target.value)} rows="6" required />
      <button type="submit">Update</button>
    </form>
  );
}

export default EditPost;