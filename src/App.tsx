import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="reddit-app">
      {/* Top Navigation */}
      <nav className="navbar">
        <div className="nav-left">
          <div className="logo">
            <span className="logo-icon">🔴</span>
            <span className="logo-text">reddit</span>
          </div>
        </div>
        
        <div className="nav-center">
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Find anything" />
          </div>
        </div>

        <div className="nav-right">
          <button className="icon-btn">💬</button>
          <button className="icon-btn">🔔</button>
          <button className="create-btn">➕ Create</button>
          <div className="user-profile">
            <div className="avatar"></div>
          </div>
        </div>
      </nav>

      {/* Main Layout */}
      <div className="main-layout">
        {/* Left Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-section">
            <ul>
              <li className="active">🏠 Home</li>
              <li>↗️ Popular</li>
              <li>📰 News</li>
              <li>🧭 Explore</li>
              <li>➕ Start a community</li>
            </ul>
          </div>
          
          <hr />

          <div className="sidebar-section">
            <h3>GAMES ON REDDIT</h3>
            <ul>
              <li>🗡️ Sword & Supper <span className="badge">NEW</span></li>
              <li>🗺️ Path of Baa: Flockla...</li>
              <li>🧩 Color Puzzle</li>
              <li>🀄 Mahjong Arena</li>
              <li>👀 Discover More</li>
            </ul>
          </div>
          
          <hr />

          <div className="sidebar-section">
            <h3>RESOURCES</h3>
            <ul>
              <li>ℹ️ About Reddit</li>
              <li>📢 Advertise</li>
              <li>Help</li>
              <li>Blog</li>
            </ul>
          </div>
        </aside>

        {/* Central Feed */}
        <main className="feed-container">
          <div className="feed-header">
            <button className="sort-btn">Best ⌄</button>
            <button className="view-btn">⏸️</button>
          </div>

          {/* Post 1: League of Legends Spoiler */}
          <article className="post">
            <div className="post-header">
              <div className="subreddit-icon lol-icon"></div>
              <span className="subreddit-name">r/leagueoflegends</span>
              <span className="post-time">• 3 days ago</span>
              <button className="join-btn">Join</button>
              <button className="more-btn">•••</button>
            </div>
            <div className="post-tags">
              <span className="tag spoiler">❗ SPOILER</span>
            </div>
            <h2 className="post-title">[T1 vs KRX] Peyz extends his Pentakill record to #14</h2>
            <div className="post-media video-placeholder">
              <button className="view-spoiler-btn">View spoiler</button>
            </div>
            <div className="post-actions">
              <div className="vote-group">
                <button>⬆️</button>
                <span>895</span>
                <button>⬇️</button>
              </div>
              <button className="action-btn">💬 89</button>
              <button className="action-btn">🎁</button>
              <button className="action-btn">↗️ Share</button>
            </div>
          </article>

          {/* Post 2: Promoted DAW */}
          <article className="post">
            <div className="post-header">
              <span className="subreddit-name">u/GreysoundAI</span>
              <span className="post-time">• Promoted</span>
              <button className="more-btn">•••</button>
            </div>
            <h2 className="post-title">I built a DAW + an AI CoProducer. Would love your feedback! It's free, all features unlocked, full rights.</h2>
            <div className="post-media image-placeholder">
              {/* Simulating the DAW image from the screenshot */}
              <div className="daw-mockup"></div>
            </div>
            <div className="promoted-footer">
              <span>greysound.ai</span>
              <button className="learn-more-btn">Learn More</button>
            </div>
            <div className="post-actions">
              <div className="vote-group">
                <button>⬆️</button>
                <span>386</span>
                <button>⬇️</button>
              </div>
              <button className="action-btn">💬 0</button>
              <button className="action-btn">↗️ Share</button>
            </div>
          </article>

          {/* Post 3: Writing Feedback */}
          <article className="post">
             <div className="post-header">
              <span className="subreddit-name">r/writingfeedback</span>
              <span className="post-time">• 3 days ago • Suggested for you</span>
              <button className="join-btn">Join</button>
            </div>
            <h2 className="post-title">Would You Keep Reading - Fantasy</h2>
          </article>

        </main>
      </div>
    </div>
  );
};

export default App;