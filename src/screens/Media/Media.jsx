import { useNavigate } from "react-router-dom";
import "./Media.css";

function Media() {
  const navigate = useNavigate();

  return (
    <div className="media-screen">

      {/* Header */}
      <header className="media-header">
        <div>
          <h1>Media</h1>
          <p>Entertainment & audio</p>
        </div>

        <div className="media-status">
          <span>10:30 AM</span>
          <span>28°C</span>
          <span>Wi-Fi</span>
          <span>🔋 82%</span>
        </div>
      </header>


      {/* Main Content */}
      <main className="media-content">

        {/* Now Playing */}
        <section className="now-playing">

          <div className="album-art">
            🎵
          </div>

          <div className="track-details">
            <span className="playing-label">NOW PLAYING</span>

            <h2>Midnight Drive</h2>

            <p>Road Trip Playlist</p>

            <div className="progress-area">
              <div className="progress-bar">
                <div className="progress"></div>
              </div>

              <div className="time-info">
                <span>2:14</span>
                <span>4:02</span>
              </div>
            </div>

            <div className="player-controls">
              <button>🔀</button>
              <button>⏮</button>
              <button className="play-button">▶</button>
              <button>⏭</button>
              <button>🔁</button>
            </div>
          </div>

        </section>


        {/* Media Sources */}
        <section className="media-section">

          <div className="section-heading">
            <div>
              <h2>Media Sources</h2>
              <p>Choose how you want to listen</p>
            </div>
          </div>

          <div className="source-grid">

            <button className="source-card active-source">
              <span>🎵</span>
              <strong>Music</strong>
              <small>Currently playing</small>
            </button>

            <button className="source-card">
              <span>📻</span>
              <strong>Radio</strong>
              <small>FM / AM</small>
            </button>

            <button className="source-card">
              <span>🔵</span>
              <strong>Bluetooth</strong>
              <small>Connected device</small>
            </button>

            <button className="source-card">
              <span>🎧</span>
              <strong>USB Audio</strong>
              <small>USB device</small>
            </button>

          </div>

        </section>


        {/* Volume */}
        <section className="volume-section">

          <div className="volume-label">
            <span>🔊</span>
            <strong>Volume</strong>
            <span>65%</span>
          </div>

          <div className="volume-bar">
            <div className="volume-level"></div>
          </div>

        </section>


        {/* Recently Played */}
        <section className="recent-section">

          <div className="section-heading">
            <div>
              <h2>Recently Played</h2>
              <p>Your recent media</p>
            </div>
          </div>

          <div className="recent-list">

            <div className="recent-item">
              <span>🎵</span>
              <div>
                <strong>Midnight Drive</strong>
                <small>Road Trip Playlist</small>
              </div>
              <span>4:02</span>
            </div>

            <div className="recent-item">
              <span>🎵</span>
              <div>
                <strong>Ocean Eyes</strong>
                <small>Favorites</small>
              </div>
              <span>3:45</span>
            </div>

            <div className="recent-item">
              <span>📻</span>
              <div>
                <strong>Radio City</strong>
                <small>FM 91.1</small>
              </div>
              <span>Live</span>
            </div>

          </div>

        </section>

      </main>


      {/* Footer */}
      <footer className="media-footer">

        <button
          className="home-button"
          onClick={() => navigate("/")}
        >
          HOME
        </button>

        <div className="assistant-bar-small">
          <span>●</span>
          <span>Ask me anything...</span>
        </div>

        <button
          className="apps-button"
          onClick={() => navigate("/all-apps")}
        >
          APPS
        </button>

      </footer>

    </div>
  );
}

export default Media;