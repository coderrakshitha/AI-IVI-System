import { useNavigate } from "react-router-dom";
import "./Vehicle.css";

function Vehicle() {
  const navigate = useNavigate();

  return (
    <div className="vehicle-screen">

      {/* Header */}
      <header className="vehicle-header">
        <div>
          <h1>Vehicle</h1>
          <p>Vehicle controls & status</p>
        </div>

        <div className="vehicle-status">
          <span>10:30 AM</span>
          <span>28°C</span>
          <span>Wi-Fi</span>
          <span>🔋 82%</span>
        </div>
      </header>


      {/* Main Content */}
      <main className="vehicle-content">

        {/* Vehicle Overview */}
        <section className="vehicle-overview">

          <div className="vehicle-image">
            🚗
          </div>

          <h2>My Vehicle</h2>

          <p className="vehicle-state">
            Vehicle is ready
          </p>

          <div className="vehicle-stats">

            <div>
              <strong>82%</strong>
              <small>Battery</small>
            </div>

            <div>
              <strong>642 km</strong>
              <small>Range</small>
            </div>

            <div>
              <strong>32,480</strong>
              <small>Odometer</small>
            </div>

          </div>

        </section>


        {/* Vehicle Controls */}
        <section className="vehicle-controls">

          <div className="vehicle-section-title">
            <div>
              <h2>Vehicle Controls</h2>
              <p>Quick access to vehicle functions</p>
            </div>
          </div>


          <div className="control-grid">

            <button className="vehicle-control active-control">
              <span>💡</span>
              <strong>Ambient Lights</strong>
              <small>ON</small>
            </button>

            <button className="vehicle-control">
              <span>🔒</span>
              <strong>Doors</strong>
              <small>Locked</small>
            </button>

            <button className="vehicle-control active-control">
              <span>🪑</span>
              <strong>Seat Ventilation</strong>
              <small>Level 2</small>
            </button>

            <button className="vehicle-control">
              <span>🪟</span>
              <strong>Windows</strong>
              <small>Closed</small>
            </button>

          </div>


          {/* Driving Mode */}
          <div className="driving-mode">

            <div>
              <h3>Driving Mode</h3>
              <p>Select your preferred driving experience</p>
            </div>

            <div className="mode-options">

              <button className="mode active-mode">
                <strong>Comfort</strong>
                <small>Smooth & balanced</small>
              </button>

              <button className="mode">
                <strong>Eco</strong>
                <small>Maximum efficiency</small>
              </button>

              <button className="mode">
                <strong>Sport</strong>
                <small>Dynamic performance</small>
              </button>

            </div>

          </div>

        </section>


        {/* Vehicle Health */}
        <section className="vehicle-health">

          <div className="health-heading">
            <h2>Vehicle Status</h2>
            <span>All systems normal</span>
          </div>

          <div className="health-grid">

            <div className="health-card">
              <span>◉</span>
              <div>
                <strong>Tire Pressure</strong>
                <small>Normal · 35 PSI</small>
              </div>
            </div>

            <div className="health-card">
              <span>⚡</span>
              <div>
                <strong>Battery</strong>
                <small>Healthy · 82%</small>
              </div>
            </div>

            <div className="health-card">
              <span>🔧</span>
              <div>
                <strong>Service</strong>
                <small>Next service · 4,200 km</small>
              </div>
            </div>

          </div>

        </section>

      </main>


      {/* Footer */}
      <footer className="vehicle-footer">

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

export default Vehicle;