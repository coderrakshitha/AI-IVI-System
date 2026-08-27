import { useNavigate } from "react-router-dom";
import "./Notifications.css";

function Notifications() {
  const navigate = useNavigate();

  return (
    <div className="notifications-screen">

      {/* Header */}
      <header className="notifications-header">
        <div>
          <h1>Notifications</h1>
          <p>Recent alerts and updates</p>
        </div>

        <div className="notifications-status">
          <span>10:30 AM</span>
          <span>28°C</span>
          <span>Wi-Fi</span>
          <span>🔋 82%</span>
        </div>
      </header>


      {/* Main */}
      <main className="notifications-content">

        {/* Summary */}
        <div className="notifications-summary">
          <div>
            <h2>Recent Notifications</h2>
            <p>3 unread notifications</p>
          </div>

          <button className="mark-read">
            Mark all as read
          </button>
        </div>


        {/* Notification List */}
        <section className="notification-list">

          {/* Notification 1 */}
          <div className="notification-card unread">

            <div className="notification-icon">
              🚗
            </div>

            <div className="notification-info">
              <div className="notification-title">
                <h3>Vehicle Status</h3>
                <span>2 min ago</span>
              </div>

              <p>
                Vehicle systems are ready. Battery level is currently 82%.
              </p>

              <small>Vehicle</small>
            </div>

            <span className="unread-dot"></span>

          </div>


          {/* Notification 2 */}
          <div className="notification-card unread">

            <div className="notification-icon">
              📱
            </div>

            <div className="notification-info">
              <div className="notification-title">
                <h3>Missed Call</h3>
                <span>15 min ago</span>
              </div>

              <p>
                You have 1 missed call from your recent contact.
              </p>

              <small>Phone</small>
            </div>

            <span className="unread-dot"></span>

          </div>


          {/* Notification 3 */}
          <div className="notification-card unread">

            <div className="notification-icon">
              🎵
            </div>

            <div className="notification-info">
              <div className="notification-title">
                <h3>Music</h3>
                <span>32 min ago</span>
              </div>

              <p>
                Your recently played playlist is ready to continue.
              </p>

              <small>Media</small>
            </div>

            <span className="unread-dot"></span>

          </div>


          {/* Notification 4 */}
          <div className="notification-card">

            <div className="notification-icon">
              🔵
            </div>

            <div className="notification-info">
              <div className="notification-title">
                <h3>Bluetooth</h3>
                <span>1 hour ago</span>
              </div>

              <p>
                Your phone was connected successfully.
              </p>

              <small>Connectivity</small>
            </div>

          </div>


          {/* Notification 5 */}
          <div className="notification-card">

            <div className="notification-icon">
              🗺️
            </div>

            <div className="notification-info">
              <div className="notification-title">
                <h3>Navigation</h3>
                <span>2 hours ago</span>
              </div>

              <p>
                Your recent destination is available for quick navigation.
              </p>

              <small>Navigation</small>
            </div>

          </div>

        </section>


        {/* Empty / Bottom Information */}
        <div className="notification-footer-info">
          <span>●</span>
          <p>Notifications are automatically updated by the vehicle system.</p>
        </div>

      </main>


      {/* Footer */}
      <footer className="notifications-footer">

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

export default Notifications;