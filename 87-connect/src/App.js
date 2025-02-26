// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Suggestions from "./components/Suggestions";
import "./App.css";

function App() {
  // Using placeholder image URLs
  const placeholderProfile = "https://via.placeholder.com/40x40";
  const placeholderPost = "https://via.placeholder.com/500x300";

  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "John Doe",
      username: "@johndoe",
      time: "Just now",
      content: "hello",
      likes: 0,
      comments: 0,
      shares: 0,
      profileImg: placeholderProfile,
    },
    {
      id: 2,
      user: "Jane Smith",
      username: "@janesmith",
      time: "2h",
      content: "Just launched my new website! Check it out 🚀 #WebDev #Coding",
      likes: 245,
      comments: 23,
      shares: 12,
      profileImg: placeholderProfile,
      postImg: placeholderPost,
    },
    {
      id: 3,
      user: "Jane Smith",
      username: "@janesmith",
      time: "2h",
      content: "Just launched my new website! Check it out 🚀 #WebDev #Coding",
      likes: 245,
      comments: 23,
      shares: 12,
      profileImg: placeholderProfile,
      postImg: placeholderPost,
    },
  ]);

  const [user, setUser] = useState({
    name: "John Doe",
    username: "@johndoe",
    posts: 234,
    following: 526,
    followers: "1.2k",
    profileImg: placeholderProfile,
  });

  const [trendingTopics, setTrendingTopics] = useState([
    { topic: "#WebDevelopment", posts: "12.3k" },
    { topic: "#Coding", posts: "8.5k" },
    { topic: "#TechNews", posts: "6.2k" },
  ]);

  const [suggestions, setSuggestions] = useState([
    {
      name: "Tech Community",
      username: "@techcommunity",
      profileImg: placeholderProfile,
    },
    {
      name: "Design Tips",
      username: "@designtips",
      profileImg: placeholderProfile,
    },
  ]);

  const addPost = (content) => {
    const newPost = {
      id: posts.length + 1,
      user: user.name,
      username: user.username,
      time: "Just now",
      content,
      likes: 0,
      comments: 0,
      shares: 0,
      profileImg: user.profileImg,
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <Router>
      <div className="app">
        <Navbar user={user} />
        <div className="container">
          <Sidebar user={user} trendingTopics={trendingTopics} />
          <Routes>
            <Route
              path="/"
              element={<Feed posts={posts} addPost={addPost} user={user} />}
            />
          </Routes>
          <Suggestions suggestions={suggestions} />
        </div>
      </div>
    </Router>
  );
}

export default App;
