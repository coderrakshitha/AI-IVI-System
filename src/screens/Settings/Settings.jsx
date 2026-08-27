import { useNavigate } from "react-router-dom";
import "./Settings.css";

function Settings() {
  const navigate = useNavigate();

  return (
    <div className="settings-screen">

      {/* Header */}
      <header className="settings-header">

        <div>
          <h1>Settings</h1>
          <p>Vehicle infotainment preferences</p>
        </div>

        <div className="settings-status">
          <span>10:30 AM</span>
          <span>28°C</span>
          <span>Wi-Fi</span>
          <span>🔋 82%</span>
        </div>

      </header>


      {/* Main */}
      <main className="settings-content">

        {/* Settings Menu */}
        <aside className="settings-menu">

          <button className="settings-menu-item active">
            <span>◉</span>
            <div>
              <strong>General</strong>
              <small>Language, units & system</small>
            </div>
          </button>

          <button className="settings-menu-item">
            <span>▣</span>
            <div>
              <strong>Display</strong>
              <small>Brightness & appearance</small>
            </div>
          </button>

          <button className="settings-menu-item">
            <span>🔊</span>
            <div>
              <strong>Sound</strong>
              <small>Volume & audio</small>
            </div>
          </button>

          <button className="settings-menu-item">
            <span>🚗</span>
            <div>
              <strong>Vehicle</strong>
              <small>Driving preferences</small>
            </div>
          </button>

          <button className="settings-menu-item">
            <span>🔒</span>
            <div>
              <strong>Privacy</strong>
              <small>Permissions & data</small>
            </div>
          </button>

          <button className="settings-menu-item">
            <span>ℹ</span>
            <div>
              <strong>System</strong>
              <small>Software information</small>
            </div>
          </button>

        </aside>


        {/* Settings Details */}
        <section className="settings-details">

          <div className="details-heading">
            <div>
              <h2>General</h2>
              <p>Configure your infotainment system</p>
            </div>

            <span className="system-ready">
              ● System Ready
            </span>
          </div>


          {/* Language */}
          <div className="setting-row">

            <div className="setting-info">
              <span className="setting-icon">文</span>

              <div>
                <strong>Language</strong>
                <small>Choose the system language</small>
              </div>
            </div>

            <button className="setting-value">
              English
              <span>›</span>
            </button>

          </div>


          {/* Units */}
          <div className="setting-row">

            <div className="setting-info">
              <span className="setting-icon">°</span>

              <div>
                <strong>Units</strong>
                <small>Temperature and distance units</small>
              </div>
            </div>

            <button className="setting-value">
              Metric
              <span>›</span>
            </button>

          </div>


          {/* Automatic Time */}
          <div className="setting-row">

            <div className="setting-info">
              <span className="setting-icon">◷</span>

              <div>
                <strong>Automatic Time</strong>
                <small>Set time automatically using network</small>
              </div>
            </div>

            <button className="settings-toggle active">
              <span></span>
              ON
            </button>

          </div>


          {/* Notifications */}
          <div className="setting-row">

            <div className="setting-info">
              <span className="setting-icon">♢</span>

              <div>
                <strong>Notifications</strong>
                <small>Manage system notifications</small>
              </div>
            </div>

            <button className="settings-toggle active">
              <span></span>
              ON
            </button>

          </div>


          {/* Voice Assistant */}
          <div className="setting-row">

            <div className="setting-info">
              <span className="setting-icon">●</span>

              <div>
                <strong>Voice Assistant</strong>
                <small>Enable AI voice commands</small>
              </div>
            </div>

            <button className="settings-toggle active">
              <span></span>
              ON
            </button>

          </div>


          {/* Reset */}
          <div className="reset-section">

            <div>
              <strong>Reset Settings</strong>
              <p>Restore infotainment settings to default</p>
            </div>

            <button className="reset-button">
              Reset
            </button>

          </div>

        </section>

      </main>


      {/* Footer */}
      <footer className="settings-footer">

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

export default Settings;