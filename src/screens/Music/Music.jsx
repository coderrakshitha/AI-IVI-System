import { useNavigate } from "react-router-dom";
import "./Music.css";

function Music() {
  const navigate = useNavigate();

  return (
    <div className="music-screen">

      {/* =====================================================
          TOP STATUS BAR
          ===================================================== */}

      <header className="music-header">

        <div className="music-title-section">

          <div className="music-title-icon">
            ♫
          </div>

          <div>
            <h1>Music</h1>
            <p>Now playing</p>
          </div>

        </div>


        <div className="music-status">

          <div className="music-system-status">
            <span className="status-dot"></span>
            System Ready
          </div>

          <span>10:30 AM</span>

          <span>28°C</span>

          <span>Wi-Fi</span>

          <span>🔋 82%</span>

        </div>

      </header>


      {/* =====================================================
          MAIN MUSIC AREA
          ===================================================== */}

      <main className="music-content">


        {/* =================================================
            LEFT — ALBUM / ARTWORK
            ================================================= */}

        <section className="album-section">

          <div className="album-card">

            <div className="album-glow"></div>

            <div className="album-art">

              <div className="album-art-inner">

                <span className="album-note">
                  ♫
                </span>

                <div className="album-wave wave-one"></div>
                <div className="album-wave wave-two"></div>
                <div className="album-wave wave-three"></div>

              </div>

            </div>

          </div>


          <div className="source-section">

            <span className="source-indicator"></span>

            <span>
              Bluetooth Audio
            </span>

          </div>

        </section>


        {/* =================================================
            RIGHT — SONG INFORMATION
            ================================================= */}

        <section className="song-section">


          <div className="now-playing-label">
            NOW PLAYING
          </div>


          <h2>
            Perfect
          </h2>


          <p className="artist">
            Ed Sheeran
          </p>


          <p className="album-name">
            ÷ (Divide)
          </p>


          {/* =================================================
              PROGRESS
              ================================================= */}

          <div className="progress-container">

            <div className="progress-bar">

              <div className="progress"></div>

              <div className="progress-dot"></div>

            </div>


            <div className="time-info">

              <span>
                1:42
              </span>

              <span>
                4:23
              </span>

            </div>

          </div>


          {/* =================================================
              MUSIC CONTROLS
              ================================================= */}

          <div className="music-controls-large">

            <button
              className="control-button secondary-control"
              title="Shuffle"
            >
              🔀
            </button>


            <button
              className="control-button"
              title="Previous"
            >
              ◀
            </button>


            <button
              className="play-button-large"
              title="Play"
            >
              ▶
            </button>


            <button
              className="control-button"
              title="Next"
            >
              ▶
            </button>


            <button
              className="control-button secondary-control"
              title="Repeat"
            >
              🔁
            </button>

          </div>


          {/* =================================================
              VOLUME
              ================================================= */}

          <div className="volume-section">

            <span className="volume-icon">
              🔊
            </span>


            <div className="volume-bar">

              <div className="volume-level"></div>

              <div className="volume-dot"></div>

            </div>


            <span className="volume-value">
              70%
            </span>

          </div>


          {/* =================================================
              PLAYER INFORMATION
              ================================================= */}

          <div className="player-info-row">

            <div className="player-info-item">

              <span className="info-label">
                SOURCE
              </span>

              <span className="info-value">
                Bluetooth
              </span>

            </div>


            <div className="player-info-item">

              <span className="info-label">
                QUALITY
              </span>

              <span className="info-value">
                High Quality
              </span>

            </div>


            <div className="player-info-item">

              <span className="info-label">
                DEVICE
              </span>

              <span className="info-value">
                Connected
              </span>

            </div>

          </div>

        </section>

      </main>


      {/* =====================================================
          BOTTOM NAVIGATION BAR
          ===================================================== */}

      <footer className="music-footer">


        <button
          className="music-home-button"
          onClick={() => navigate("/")}
        >

          <span className="footer-icon">
            ←
          </span>

          <span>
            HOME
          </span>

        </button>


        <div className="music-system-bar">

          <span className="system-status-light"></span>

          <span>
            IVI SYSTEM
          </span>

          <span className="footer-divider">
            |
          </span>

          <span>
            MUSIC
          </span>

        </div>


        <button
          className="music-apps-button"
          onClick={() => navigate("/all-apps")}
        >

          <span>
            ▦
          </span>

          <span>
            APPS
          </span>

        </button>


      </footer>

    </div>
  );
}

export default Music;