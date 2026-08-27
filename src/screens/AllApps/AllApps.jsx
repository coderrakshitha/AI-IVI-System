import { useNavigate } from "react-router-dom";
import "./AllApps.css";

function AllApps() {
  const navigate = useNavigate();

  const apps = [
    { icon: "♫", name: "Music", route: "/music", accent: "music" },
    { icon: "⌖", name: "Navigation", route: "/navigation", accent: "navigation" },
    { icon: "☎", name: "Phone", route: "/phone", accent: "phone" },
    { icon: "❄", name: "Climate", route: "/climate", accent: "climate" },
    { icon: "◉", name: "Radio", route: "/radio", accent: "radio" },
    { icon: "◈", name: "Bluetooth", route: "/bluetooth", accent: "bluetooth" },
    { icon: "⚙", name: "Settings", route: "/settings", accent: "settings" },
    { icon: "▣", name: "Vehicle", route: "/vehicle", accent: "vehicle" },
    { icon: "●", name: "Notifications", route: "/notifications", accent: "notifications" },
    { icon: "◉", name: "Media", route: "/media", accent: "media" },
    { icon: "◎", name: "Profile", route: "/profile", accent: "profile" },
    { icon: "ⓘ", name: "System Info", route: "/system-info", accent: "system" },
  ];

  return (
    <div className="all-apps-screen">

      {/* =====================================================
          TOP STATUS BAR
          ===================================================== */}

      <header className="apps-topbar">

        <div className="apps-title-section">

          <div className="apps-title-icon">
            ▦
          </div>

          <div>
            <h1>All Applications</h1>
            <p>Access your IVI system applications</p>
          </div>

        </div>


        <div className="apps-status-section">

          <div className="status-pill">
            <span className="status-dot"></span>
            System Ready
          </div>

          <div className="status-value">
            10:30 AM
          </div>

          <div className="status-value">
            28°C
          </div>

          <div className="status-value">
            Wi-Fi
          </div>

          <div className="status-value battery-status">
            🔋 82%
          </div>

        </div>

      </header>


      {/* =====================================================
          MAIN APPLICATION AREA
          ===================================================== */}

      <main className="apps-main">

        <div className="apps-section-heading">

          <div>
            <span className="section-label">
              APPLICATIONS
            </span>

            <span className="section-description">
              Select an application to continue
            </span>
          </div>

          <span className="app-count">
            {apps.length} Apps
          </span>

        </div>


        {/* =================================================
            APPLICATION GRID
            ================================================= */}

        <div className="apps-grid">

          {apps.map((app) => (

            <button
              key={app.name}
              className={`app-card ${app.accent}`}
              onClick={() => navigate(app.route)}
            >

              <div className="app-card-glow"></div>

              <div className="app-icon-wrapper">
                <span className="app-icon">
                  {app.icon}
                </span>
              </div>

              <div className="app-card-info">

                <span className="app-name">
                  {app.name}
                </span>

                <span className="app-arrow">
                  →
                </span>

              </div>

            </button>

          ))}

        </div>

      </main>


      {/* =====================================================
          BOTTOM NAVIGATION
          ===================================================== */}

      <footer className="apps-bottom-bar">

        <button
          className="apps-home-button"
          onClick={() => navigate("/")}
        >

          <span className="home-icon">
            ←
          </span>

          <span>
            HOME
          </span>

        </button>


        <div className="apps-system-status">

          <span className="system-status-light"></span>

          <span>
            IVI SYSTEM
          </span>

          <span className="system-status-divider">
            |
          </span>

          <span>
            ALL APPLICATIONS
          </span>

        </div>


        <button
          className="apps-current-button"
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

export default AllApps;