import { useState } from 'react';
import { 
  Menu, Search, Mic, Video, Bell, Home, 
  MonitorPlay, Compass, Clock, PlaySquare, ThumbsUp 
} from 'lucide-react';
import './App.css';

const categories = [
  "All", "Gaming", "Music", "Live", "Valorant", "Next.js", 
  "Cybersecurity", "Podcasts", "Mixes", "Recent"
];

const mockVideos = [
  {
    id: 1,
    title: "Building a Fullstack Next.js E-Commerce Platform from Scratch",
    channel: "Dev Mastery",
    views: "142K views",
    timestamp: "2 days ago",
    duration: "4:20:15",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=338&fit=crop",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
  },
  {
    id: 2,
    title: "VCT Masters Grand Final Highlights | Sentinels vs Fnatic",
    channel: "Valorant Esports",
    views: "890K views",
    timestamp: "5 hours ago",
    duration: "18:24",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=338&fit=crop",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop"
  },
  {
    id: 3,
    title: "Advanced Nmap Scanning Techniques for Penetration Testers",
    channel: "CyberSec Labs",
    views: "45K views",
    timestamp: "1 week ago",
    duration: "22:10",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=338&fit=crop",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  },
  {
    id: 4,
    title: "Local LLMs: Running Qwen 3.5 Locally Complete Guide",
    channel: "AI Engineer",
    views: "210K views",
    timestamp: "3 weeks ago",
    duration: "15:45",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=338&fit=crop",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop"
  },
  {
    id: 5,
    title: "Streetwear Brand Startup Guide 2026",
    channel: "Fashion Forward",
    views: "1.2M views",
    timestamp: "1 month ago",
    duration: "32:10",
    thumbnail: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=338&fit=crop",
    avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&h=100&fit=crop"
  },
  {
    id: 6,
    title: "Lofi Hip Hop Radio - Beats to Relax/Study to",
    channel: "Lofi Girl",
    views: "45K watching",
    timestamp: "LIVE",
    duration: "LIVE",
    thumbnail: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=600&h=338&fit=crop",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  }
];

function App() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <button className="icon-btn"><Menu size={24} /></button>
          <div className="logo">
            <MonitorPlay size={28} className="logo-icon" fill="#ff0000" color="#ff0000" />
            <span>YouTube</span>
          </div>
        </div>

        <div className="nav-center">
          <div className="search-box">
            <input type="text" placeholder="Search" className="search-input" />
            <button className="search-btn">
              <Search size={20} />
            </button>
          </div>
          <button className="mic-btn">
            <Mic size={20} />
          </button>
        </div>

        <div className="nav-right">
          <button className="icon-btn"><Video size={24} /></button>
          <button className="icon-btn"><Bell size={24} /></button>
          <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop" alt="User Avatar" className="avatar" />
        </div>
      </nav>

      {/* Main Layout */}
      <div className="main-layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-item active">
            <Home size={20} /> <span>Home</span>
          </div>
          <div className="sidebar-item">
            <Compass size={20} /> <span>Explore</span>
          </div>
          <div className="sidebar-item">
            <MonitorPlay size={20} /> <span>Subscriptions</span>
          </div>
          <div className="divider"></div>
          <div className="sidebar-item">
            <PlaySquare size={20} /> <span>Library</span>
          </div>
          <div className="sidebar-item">
            <Clock size={20} /> <span>History</span>
          </div>
          <div className="sidebar-item">
            <Video size={20} /> <span>Your Videos</span>
          </div>
          <div className="sidebar-item">
            <Clock size={20} /> <span>Watch Later</span>
          </div>
          <div className="sidebar-item">
            <ThumbsUp size={20} /> <span>Liked Videos</span>
          </div>
        </aside>

        {/* Main Content */}
        <main className="content">
          {/* Categories */}
          <div className="categories">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-chip ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <div className="video-grid">
            {mockVideos.map((video) => (
              <div key={video.id} className="video-card">
                <div className="thumbnail-container">
                  <img src={video.thumbnail} alt={video.title} className="thumbnail" />
                  <span className="duration">{video.duration}</span>
                </div>
                <div className="video-info">
                  <img src={video.avatar} alt={video.channel} className="channel-avatar" />
                  <div className="video-details">
                    <h3 className="video-title">{video.title}</h3>
                    <p className="channel-name">{video.channel}</p>
                    <p className="video-stats">{video.views} • {video.timestamp}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;