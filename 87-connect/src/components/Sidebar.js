import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ user, trendingTopics }) => {
  return (
    <div className="sidebar">
      <div className="profile-card">
        <img
          src={user.profileImg}
          alt="Profile"
          className="profile-img-large"
        />
        <h2>{user.name}</h2>
        <p className="username">{user.username}</p>

        <div className="profile-stats">
          <div className="stat">
            <h3>Posts</h3>
            <p>{user.posts}</p>
          </div>
          <div className="stat">
            <h3>Following</h3>
            <p>{user.following}</p>
          </div>
          <div className="stat">
            <h3>Followers</h3>
            <p>{user.followers}</p>
          </div>
        </div>
      </div>

      <div className="trending-card">
        <h2>Trending Topics</h2>
        <ul className="trending-list">
          {trendingTopics.map((topic, index) => (
            <li key={index} className="trending-item">
              <Link
                to={`/topic/${topic.topic.substring(1)}`}
                className="topic-link"
              >
                {topic.topic}
              </Link>
              <span className="post-count">{topic.posts} posts</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
