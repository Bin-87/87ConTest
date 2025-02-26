// components/NewPostForm.js
import React, { useState } from "react";

const NewPostForm = ({ addPost, user }) => {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      addPost(content);
      setContent("");
    }
  };

  return (
    <div className="new-post-form">
      <div className="new-post-header">
        <img src={user.profileImg} alt="Profile" className="post-profile-img" />
        <form onSubmit={handleSubmit} className="post-input-container">
          <input
            type="text"
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="post-input"
          />
          <button type="submit" className="post-btn">
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPostForm;
