import { useNavigate } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const navigate = useNavigate();

  return (
    <div className="navigation-screen">

      {/* Top Bar */}
      <header className="navigation-header">

        <div>
          <h1>Navigation</h1>
          <p>Drive smarter, arrive safely</p>
        </div>

        <div className="navigation-status">
          <span>10:30 AM</span>
          <span>28°C</span>
          <span>Wi-Fi</span>
          <span>🔋 82%</span>
        </div>

      </header>


      {/* Main Area */}
      <main className="navigation-content">

        {/* Map */}
        <div className="map-area">

          {/* Dummy roads */}
          <div className="road road-one"></div>
          <div className="road road-two"></div>
          <div className="road road-three"></div>

          {/* Location */}
          <div className="current-location">
            <div className="location-dot"></div>
            <span>You are here</span>
          </div>

          {/* Destination */}
          <div className="destination-marker">
            <div>📍</div>
            <span>Destination</span>
          </div>

          {/* Map labels */}
          <span className="map-label label-one">
            MG Road
          </span>

          <span className="map-label label-two">
            Airport Road
          </span>

          <span className="map-label label-three">
            Ring Road
          </span>

          {/* Zoom buttons */}
          <div className="zoom-controls">

            <button>+</button>

            <button>−</button>

          </div>

        </div>


        {/* Navigation Information */}
        <div className="route-panel">

          <div className="route-header">
            <span>Current Location</span>
            <span className="gps-status">● GPS Active</span>
          </div>

          <h2>No Destination</h2>

          <p className="route-message">
            Where would you like to go?
          </p>

          <button className="search-destination">
            🔍 Search destination
          </button>

          <div className="quick-destinations">

            <button>🏠 Home</button>

            <button>💼 Work</button>

            <button>⭐ Favorites</button>

          </div>

        </div>

      </main>


      {/* Bottom Bar */}
      <footer className="navigation-footer">

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

export default Navigation;