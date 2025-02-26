// components/Feed.js
import React, { useState } from "react";
import Post from "./Post";
import NewPostForm from "./NewPostForm";

const Feed = ({ posts, addPost, user }) => {
  return (
    <div className="feed">
      <NewPostForm addPost={addPost} user={user} />
      <div className="posts-container">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
