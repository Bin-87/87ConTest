// components/Post.js
import React from "react";
import { FaHeart, FaComment, FaShare, FaEllipsisH } from "react-icons/fa";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post-header">
        <div className="post-user-info">
          <img
            src={post.profileImg}
            alt={post.user}
            className="post-profile-img"
          />
          <div>
            <h3 className="post-user-name">{post.user}</h3>
            <p className="post-meta">
              {post.username} · {post.time}
            </p>
          </div>
        </div>
        <button className="post-more-btn">
          <FaEllipsisH />
        </button>
      </div>

      <div className="post-content">
        <p>{post.content}</p>
        {post.postImg && (
          <img src={post.postImg} alt="Post content" className="post-image" />
        )}
      </div>

      <div className="post-actions">
        <button className="post-action">
          <FaHeart /> <span>{post.likes}</span>
        </button>
        <button className="post-action">
          <FaComment /> <span>{post.comments}</span>
        </button>
        <button className="post-action">
          <FaShare /> <span>{post.shares}</span>
        </button>
      </div>
    </div>
  );
};

export default Post;
