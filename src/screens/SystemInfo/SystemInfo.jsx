import { useNavigate } from "react-router-dom";
import "./SystemInfo.css";

function SystemInfo() {
  const navigate = useNavigate();

  return (
    <div className="system-info-screen">

      {/* Header */}
      <header className="system-info-header">
        <div>
          <h1>System Information</h1>
          <p>IVI system status & information</p>
        </div>

        <div className="system-info-status">
          <span>10:30 AM</span>
          <span>28°C</span>
          <span>Wi-Fi</span>
          <span>🔋 82%</span>
        </div>
      </header>


      {/* Main Content */}
      <main className="system-info-content">

        {/* System Status */}
        <section className="system-status-card">

          <div className="system-status-icon">
            ✓
          </div>

          <div>
            <h2>System Operational</h2>
            <p>All IVI systems are functioning normally</p>
          </div>

          <span className="status-badge">
            Online
          </span>

        </section>


        {/* Software Information */}
        <section className="info-section">

          <div className="section-heading">
            <h2>Software Information</h2>
            <p>Current IVI software configuration</p>
          </div>

          <div className="info-grid">

            <div className="info-card">
              <span>Software Version</span>
              <strong>IVI OS 4.2.1</strong>
            </div>

            <div className="info-card">
              <span>HMI Version</span>
              <strong>HMI 2.8.0</strong>
            </div>

            <div className="info-card">
              <span>AI Agent</span>
              <strong>Agent v1.0</strong>
            </div>

            <div className="info-card">
              <span>Build Number</span>
              <strong>2026.08.10</strong>
            </div>

          </div>

        </section>


        {/* Hardware Information */}
        <section className="info-section">

          <div className="section-heading">
            <h2>Hardware</h2>
            <p>IVI hardware resources</p>
          </div>

          <div className="hardware-grid">

            <div className="hardware-card">
              <span className="hardware-icon">⚙️</span>

              <div>
                <strong>Processor</strong>
                <small>8-Core Automotive SoC</small>
              </div>

              <span className="hardware-value">
                Normal
              </span>
            </div>


            <div className="hardware-card">
              <span className="hardware-icon">💾</span>

              <div>
                <strong>Memory</strong>
                <small>6.2 GB / 8 GB</small>
              </div>

              <span className="hardware-value">
                78%
              </span>
            </div>


            <div className="hardware-card">
              <span className="hardware-icon">💽</span>

              <div>
                <strong>Storage</strong>
                <small>128 GB / 256 GB</small>
              </div>

              <span className="hardware-value">
                50%
              </span>
            </div>

          </div>

        </section>


        {/* Connectivity */}
        <section className="connectivity-section">

          <div className="section-heading">
            <h2>Connectivity</h2>
            <p>Connected services and devices</p>
          </div>

          <div className="connectivity-grid">

            <div className="connectivity-card">
              <span>📶</span>
              <div>
                <strong>Wi-Fi</strong>
                <small>Connected</small>
              </div>
            </div>

            <div className="connectivity-card">
              <span>🔵</span>
              <div>
                <strong>Bluetooth</strong>
                <small>Phone connected</small>
              </div>
            </div>

            <div className="connectivity-card">
              <span>☁️</span>
              <div>
                <strong>Cloud Services</strong>
                <small>Available</small>
              </div>
            </div>

          </div>

        </section>


        {/* System Update */}
        <section className="update-section">

          <div>
            <h2>System Update</h2>
            <p>Your system is up to date.</p>
          </div>

          <button>
            Check for Updates
          </button>

        </section>

      </main>


      {/* Footer */}
      <footer className="system-info-footer">

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

export default SystemInfo;