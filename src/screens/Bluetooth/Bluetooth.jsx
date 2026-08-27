import { useNavigate } from "react-router-dom";
import "./Bluetooth.css";

function Bluetooth() {
  const navigate = useNavigate();

  return (
    <div className="bluetooth-screen">

      {/* Header */}
      <header className="bluetooth-header">

        <div>
          <h1>Connectivity</h1>
          <p>Bluetooth & connected devices</p>
        </div>

        <div className="bluetooth-status">
          <span>10:30 AM</span>
          <span>28°C</span>
          <span>Wi-Fi</span>
          <span>🔋 82%</span>
        </div>

      </header>


      {/* Main Content */}
      <main className="bluetooth-content">

        {/* Bluetooth Status */}
        <section className="bluetooth-main">

          <div className="bluetooth-icon">
            ᛒ
          </div>

          <h2>Bluetooth</h2>

          <p className="connection-status">
            Bluetooth is ON
          </p>

          <button className="toggle-button active-toggle">
            <span></span>
            ON
          </button>

          <p className="device-count">
            1 device connected
          </p>

        </section>


        {/* Connected Device */}
        <section className="devices-panel">

          <div className="panel-heading">
            <h2>Connected Devices</h2>
            <span>1 Active</span>
          </div>

          <div className="device-card active-device">

            <div className="device-symbol">
              📱
            </div>

            <div className="device-info">
              <h3>Rakshu's Phone</h3>
              <p>Connected • Calls & Media</p>
            </div>

            <div className="device-actions">
              <span className="connected-dot"></span>
              <button>⋮</button>
            </div>

          </div>


          {/* Available Devices */}
          <div className="available-heading">
            <h2>Available Devices</h2>
            <span>Scanning...</span>
          </div>

          <div className="device-card">

            <div className="device-symbol">
              🎧
            </div>

            <div className="device-info">
              <h3>Wireless Headset</h3>
              <p>Available</p>
            </div>

            <button className="connect-button">
              Connect
            </button>

          </div>


          <div className="device-card">

            <div className="device-symbol">
              📱
            </div>

            <div className="device-info">
              <h3>Galaxy Phone</h3>
              <p>Available</p>
            </div>

            <button className="connect-button">
              Connect
            </button>

          </div>

        </section>


        {/* Connectivity Options */}
        <section className="connectivity-options">

          <button className="connectivity-option">
            <span>📞</span>
            <strong>Calls</strong>
            <small>Enabled</small>
          </button>

          <button className="connectivity-option">
            <span>🎵</span>
            <strong>Media Audio</strong>
            <small>Enabled</small>
          </button>

          <button className="connectivity-option">
            <span>👤</span>
            <strong>Contacts</strong>
            <small>Synced</small>
          </button>

          <button className="connectivity-option">
            <span>🔄</span>
            <strong>Auto Connect</strong>
            <small>Enabled</small>
          </button>

        </section>

      </main>


      {/* Footer */}
      <footer className="bluetooth-footer">

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

export default Bluetooth;