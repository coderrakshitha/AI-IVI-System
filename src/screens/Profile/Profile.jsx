import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();

  return (
    <div className="profile-screen">

      {/* Header */}
      <header className="profile-header">
        <div>
          <h1>Driver Profile</h1>
          <p>Personalized vehicle experience</p>
        </div>

        <div className="profile-status">
          <span>10:30 AM</span>
          <span>28°C</span>
          <span>Wi-Fi</span>
          <span>🔋 82%</span>
        </div>
      </header>


      {/* Main */}
      <main className="profile-content">

        {/* Profile Card */}
        <section className="profile-card">

          <div className="profile-avatar">
            RK
          </div>

          <h2>Driver</h2>

          <p className="profile-subtitle">
            Primary driver
          </p>

          <div className="profile-status-badge">
            ● Profile Active
          </div>

          <div className="profile-stats">

            <div>
              <strong>124</strong>
              <small>Trips</small>
            </div>

            <div>
              <strong>2,840 km</strong>
              <small>This Month</small>
            </div>

            <div>
              <strong>92%</strong>
              <small>Efficiency</small>
            </div>

          </div>

        </section>


        {/* Preferences */}
        <section className="profile-preferences">

          <div className="profile-heading">
            <h2>Personalized Preferences</h2>
            <p>Settings saved for this driver</p>
          </div>


          <div className="preference-row">

            <div className="preference-info">
              <span>🎵</span>

              <div>
                <strong>Preferred Music</strong>
                <small>Recently played playlist</small>
              </div>
            </div>

            <button>›</button>

          </div>


          <div className="preference-row">

            <div className="preference-info">
              <span>🗺️</span>

              <div>
                <strong>Navigation</strong>
                <small>Home & work destinations</small>
              </div>
            </div>

            <button>›</button>

          </div>


          <div className="preference-row">

            <div className="preference-info">
              <span>❄️</span>

              <div>
                <strong>Climate Preference</strong>
                <small>22°C · Automatic</small>
              </div>
            </div>

            <button>›</button>

          </div>


          <div className="preference-row">

            <div className="preference-info">
              <span>🚗</span>

              <div>
                <strong>Driving Mode</strong>
                <small>Comfort</small>
              </div>
            </div>

            <button>›</button>

          </div>


          {/* AI Personalization */}
          <div className="ai-preference">

            <div className="ai-icon">
              ✦
            </div>

            <div>
              <strong>AI Personalization</strong>

              <p>
                The AI agent can learn your preferences
                and adapt the IVI interface accordingly.
              </p>
            </div>

            <button className="ai-toggle">
              <span></span>
              ON
            </button>

          </div>

        </section>

      </main>


      {/* Footer */}
      <footer className="profile-footer">

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

export default Profile;