// components/Suggestions.js
import React from "react";

const Suggestions = ({ suggestions }) => {
  return (
    <div className="suggestions">
      <div className="suggestions-card">
        <h2>Suggested for you</h2>
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li key={index} className="suggestion-item">
              <div className="suggestion-info">
                <img
                  src={suggestion.profileImg}
                  alt={suggestion.name}
                  className="suggestion-img"
                />
                <div>
                  <h3 className="suggestion-name">{suggestion.name}</h3>
                  <p className="suggestion-username">{suggestion.username}</p>
                </div>
              </div>
              <button className="follow-btn">Follow</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Suggestions;
