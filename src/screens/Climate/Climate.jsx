import { useNavigate } from "react-router-dom";
import "./Climate.css";

function Climate() {
  const navigate = useNavigate();

  return (
    <div className="climate-screen">

      {/* Top Bar */}
      <header className="climate-header">

        <div>
          <h1>Climate</h1>
          <p>Dual-zone automatic climate control</p>
        </div>

        <div className="climate-status">
          <span>10:30 AM</span>
          <span>28°C</span>
          <span>Wi-Fi</span>
          <span>🔋 82%</span>
        </div>

      </header>


      {/* Main Climate Area */}
      <main className="climate-content">

        {/* Driver Zone */}
        <section className="temperature-zone">

          <p className="zone-label">DRIVER</p>

          <div className="temperature-display">
            <button>−</button>

            <div>
              <strong>22°</strong>
              <span>C</span>
            </div>

            <button>+</button>
          </div>

          <p className="comfort-text">
            Comfortable
          </p>

        </section>


        {/* Center Climate Controls */}
        <section className="climate-center">

          <div className="fan-display">

            <span className="fan-icon">♨</span>

            <strong>3</strong>

            <span className="fan-label">
              FAN
            </span>

          </div>


          <div className="fan-controls">

            <button>−</button>

            <div className="fan-bars">
              <span className="active"></span>
              <span className="active"></span>
              <span className="active"></span>
              <span></span>
              <span></span>
            </div>

            <button>+</button>

          </div>


          <div className="air-direction">

            <button className="direction active-direction">
              ↑
              <small>Face</small>
            </button>

            <button className="direction">
              ↓
              <small>Feet</small>
            </button>

            <button className="direction">
              ↕
              <small>Face + Feet</small>
            </button>

          </div>

        </section>


        {/* Passenger Zone */}
        <section className="temperature-zone">

          <p className="zone-label">PASSENGER</p>

          <div className="temperature-display">
            <button>−</button>

            <div>
              <strong>22°</strong>
              <span>C</span>
            </div>

            <button>+</button>
          </div>

          <p className="comfort-text">
            Comfortable
          </p>

        </section>


        {/* Bottom Controls */}
        <section className="climate-options">

          <button className="climate-option active-option">
            <span>❄</span>
            <strong>AC</strong>
            <small>ON</small>
          </button>

          <button className="climate-option active-option">
            <span>AUTO</span>
            <strong>Auto</strong>
            <small>ON</small>
          </button>

          <button className="climate-option">
            <span>↻</span>
            <strong>Recirculate</strong>
            <small>OFF</small>
          </button>

          <button className="climate-option">
            <span>▣</span>
            <strong>Front Defrost</strong>
            <small>OFF</small>
          </button>

          <button className="climate-option">
            <span>▤</span>
            <strong>Rear Defrost</strong>
            <small>OFF</small>
          </button>

          <button className="climate-option active-option">
            <span>♨</span>
            <strong>Driver Seat</strong>
            <small>HEAT 1</small>
          </button>

        </section>

      </main>


      {/* Bottom Bar */}
      <footer className="climate-footer">

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

export default Climate;