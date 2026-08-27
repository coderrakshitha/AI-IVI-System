import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  // ============================================
  // NODE.JS → REACT CONNECTION
  // ============================================
  useEffect(() => {
    const eventSource = new EventSource(
      "http://localhost:3000/ivi-events"
    );

    eventSource.onopen = () => {
      console.log("Connected to Node.js");
    };

    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);

        console.log("Screen received from Node.js:", data);

        const screenRoutes = {
          home: "/",
          music: "/music",
          navigation: "/navigation",
          climate: "/climate",
          phone: "/phone",
          "all-apps": "/all-apps",
          media: "/media",
          radio: "/radio",
          bluetooth: "/bluetooth",
          settings: "/settings",
          vehicle: "/vehicle",
          notifications: "/notifications",
          profile: "/profile",
          "system-info": "/system-info",
        };

        const route = screenRoutes[data.screen];

        if (route) {
          navigate(route);
        } else {
          console.log("Unknown screen:", data.screen);
        }
      } catch (error) {
        console.error("Error processing Node.js message:", error);
      }
    };

    eventSource.onerror = (error) => {
      console.error("Node.js connection error:", error);
    };

    return () => {
      eventSource.close();
      console.log("Disconnected from Node.js");
    };
  }, [navigate]);

  return (
    <div className="ivi-home">

      {/* =====================================================
          TOP STATUS BAR
          ===================================================== */}

      <header className="status-bar">

        <div className="top-system-title">
          <span className="system-dot"></span>
          <span>IVI SYSTEM</span>
        </div>

        <div className="status-info">

          <span className="status-item">
            10:30 AM
          </span>

          <span className="status-item">
            28°C
          </span>

          <span className="status-item">
            📶
          </span>

          <span className="status-item">
            Bluetooth
          </span>

          <span className="status-item">
            🔋 82%
          </span>

          <button
            className="notification-button"
            onClick={() => navigate("/notifications")}
            title="Notifications"
          >
            🔔
          </button>

        </div>

      </header>


      {/* =====================================================
          MAIN DASHBOARD
          ===================================================== */}

      <div className="dashboard-layout">


        {/* =================================================
            LEFT SIDEBAR
            ================================================= */}

        <aside className="side-navigation">

          <button
            className="side-nav-item active"
            onClick={() => navigate("/")}
          >
            <span className="side-nav-icon">⌂</span>
            <span className="side-nav-label">Home</span>
          </button>


          <button
            className="side-nav-item"
            onClick={() => navigate("/music")}
          >
            <span className="side-nav-icon">♫</span>
            <span className="side-nav-label">Music</span>
          </button>


          <button
            className="side-nav-item"
            onClick={() => navigate("/navigation")}
          >
            <span className="side-nav-icon">⌖</span>
            <span className="side-nav-label">Map</span>
          </button>


          <button
            className="side-nav-item"
            onClick={() => navigate("/phone")}
          >
            <span className="side-nav-icon">☎</span>
            <span className="side-nav-label">Phone</span>
          </button>


          <button
            className="side-nav-item"
            onClick={() => navigate("/climate")}
          >
            <span className="side-nav-icon">❄</span>
            <span className="side-nav-label">Climate</span>
          </button>


          <button
            className="side-nav-item"
            onClick={() => navigate("/vehicle")}
          >
            <span className="side-nav-icon">🚗</span>
            <span className="side-nav-label">Vehicle</span>
          </button>


          <div className="side-nav-spacer"></div>


          <button
            className="side-nav-item"
            onClick={() => navigate("/settings")}
          >
            <span className="side-nav-icon">⚙</span>
            <span className="side-nav-label">Settings</span>
          </button>


          <button
            className="side-nav-item"
            onClick={() => navigate("/all-apps")}
          >
            <span className="side-nav-icon">▦</span>
            <span className="side-nav-label">Apps</span>
          </button>

        </aside>


        {/* =================================================
            HOME CONTENT
            ================================================= */}

        <main className="home-content">


          {/* ===============================================
              DASHBOARD HEADER
              =============================================== */}

          <div className="dashboard-header">

            <div className="greeting">

              <span className="dashboard-overline">
                VEHICLE CONTROL CENTER
              </span>

              <h1>
                Good Morning
              </h1>

              <p>
                Welcome to your intelligent vehicle system
              </p>

            </div>


            <div className="connection-status">

              <span className="connection-indicator"></span>

              <span>
                SYSTEM ONLINE
              </span>

            </div>

          </div>


          {/* =================================================
              DASHBOARD CARDS
              ================================================= */}

          <div className="main-cards">


            {/* ================= MUSIC ================= */}

            <div
              className="ivi-card music-card"
              onClick={() => navigate("/music")}
            >

              <div className="card-header">

                <div className="card-title">

                  <span className="card-icon">
                    ♫
                  </span>

                  <div>
                    <span className="card-label">
                      NOW PLAYING
                    </span>

                    <span className="card-subtitle">
                      Music
                    </span>
                  </div>

                </div>

                <span className="card-arrow">
                  ↗
                </span>

              </div>


              <div className="music-body">

                <div className="album-art">
                  ♫
                </div>

                <div className="music-details">

                  <h2>
                    Perfect
                  </h2>

                  <p>
                    Ed Sheeran
                  </p>

                  <div className="music-progress">

                    <span className="progress-line"></span>

                    <span className="progress-dot"></span>

                  </div>

                  <div className="music-time">
                    <span>1:42</span>
                    <span>4:23</span>
                  </div>

                </div>

              </div>


              <div className="music-controls">

                <button
                  onClick={(e) => e.stopPropagation()}
                >
                  ◀
                </button>

                <button
                  className="play-button"
                  onClick={(e) => e.stopPropagation()}
                >
                  ▶
                </button>

                <button
                  onClick={(e) => e.stopPropagation()}
                >
                  ▶
                </button>

              </div>

            </div>


            {/* ================= NAVIGATION ================= */}

            <div
              className="ivi-card navigation-card"
              onClick={() => navigate("/navigation")}
            >

              <div className="card-header">

                <div className="card-title">

                  <span className="card-icon">
                    ⌖
                  </span>

                  <div>
                    <span className="card-label">
                      NAVIGATION
                    </span>

                    <span className="card-subtitle">
                      Current route
                    </span>
                  </div>

                </div>

                <span className="card-arrow">
                  ↗
                </span>

              </div>


              <div className="map-placeholder">

                <div className="map-grid"></div>

                <div className="map-road road-one"></div>

                <div className="map-road road-two"></div>

                <div className="route-line"></div>

                <div className="location-point">
                  ●
                </div>

                <span className="map-text">
                  CURRENT LOCATION
                </span>

              </div>


              <div className="navigation-footer">

                <div>
                  <span className="small-label">
                    DESTINATION
                  </span>

                  <strong>
                    No active route
                  </strong>
                </div>

                <span className="navigation-status">
                  ● READY
                </span>

              </div>

            </div>


            {/* ================= CLIMATE ================= */}

            <div
              className="ivi-card climate-card"
              onClick={() => navigate("/climate")}
            >

              <div className="card-header">

                <div className="card-title">

                  <span className="card-icon">
                    ❄
                  </span>

                  <div>
                    <span className="card-label">
                      CLIMATE
                    </span>

                    <span className="card-subtitle">
                      Automatic control
                    </span>
                  </div>

                </div>

                <span className="card-arrow">
                  ↗
                </span>

              </div>


              <div className="climate-main">

                <div className="temperature">
                  22°
                  <span>C</span>
                </div>

                <div className="climate-mode">
                  AUTO
                </div>

              </div>


              <div className="climate-controls">

                <button
                  onClick={(e) => e.stopPropagation()}
                >
                  −
                </button>

                <div className="temperature-control">

                  <span className="temperature-line"></span>

                  <span className="temperature-knob"></span>

                </div>

                <button
                  onClick={(e) => e.stopPropagation()}
                >
                  +
                </button>

              </div>

            </div>


            {/* ================= PHONE ================= */}

            <div
              className="ivi-card phone-card"
              onClick={() => navigate("/phone")}
            >

              <div className="card-header">

                <div className="card-title">

                  <span className="card-icon">
                    ☎
                  </span>

                  <div>
                    <span className="card-label">
                      PHONE
                    </span>

                    <span className="card-subtitle">
                      Connected device
                    </span>
                  </div>

                </div>

                <span className="card-arrow">
                  ↗
                </span>

              </div>


              <div className="phone-content">

                <div className="contact-circle">
                  RK
                </div>


                <div className="phone-details">

                  <h3>
                    No Active Call
                  </h3>

                  <p>
                    Connected to phone
                  </p>

                  <div className="phone-status">
                    <span></span>
                    CONNECTED
                  </div>

                </div>

              </div>


              <div className="phone-actions">

                <span>
                  Contacts
                </span>

                <span>
                  Recent
                </span>

              </div>

            </div>

          </div>

        </main>

      </div>


      {/* =====================================================
          BOTTOM NAVIGATION BAR
          ===================================================== */}

      <footer className="assistant-bar">


        <button
          className="home-button"
          onClick={() => navigate("/")}
        >

          <span className="bottom-icon">
            ⌂
          </span>

          <span>
            HOME
          </span>

        </button>


        <div className="bottom-navigation">

          <button
            className="bottom-nav-button"
            onClick={() => navigate("/music")}
          >
            <span className="bottom-icon">
              ♫
            </span>

            <span>
              Music
            </span>
          </button>


          <button
            className="bottom-nav-button"
            onClick={() => navigate("/navigation")}
          >
            <span className="bottom-icon">
              ⌖
            </span>

            <span>
              Navigation
            </span>
          </button>


          <button
            className="bottom-nav-button"
            onClick={() => navigate("/phone")}
          >
            <span className="bottom-icon">
              ☎
            </span>

            <span>
              Phone
            </span>
          </button>


          <button
            className="bottom-nav-button"
            onClick={() => navigate("/settings")}
          >
            <span className="bottom-icon">
              ⚙
            </span>

            <span>
              Settings
            </span>
          </button>

        </div>


        <button
          className="apps-button"
          onClick={() => navigate("/all-apps")}
        >

          <span className="bottom-icon">
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

export default Home;