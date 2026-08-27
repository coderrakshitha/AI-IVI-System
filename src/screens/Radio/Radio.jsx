import { useNavigate } from "react-router-dom";
import "./Radio.css";

function Radio() {
  const navigate = useNavigate();

  return (
    <div className="radio-screen">

      {/* Header */}
      <header className="radio-header">
        <div>
          <h1>Radio</h1>
          <p>FM Radio</p>
        </div>

        <div className="radio-status">
          <span>10:30 AM</span>
          <span>28°C</span>
          <span>Wi-Fi</span>
          <span>🔋 82%</span>
        </div>
      </header>


      {/* Main Content */}
      <main className="radio-content">

        {/* Left: Current Station */}
        <section className="radio-main">

          <div className="radio-source">
            FM
          </div>

          <p className="station-name">
            Radio City
          </p>

          <div className="frequency">
            91.1
            <span> MHz</span>
          </div>

          <p className="program-name">
            Music Hour
          </p>

          {/* Frequency Scale */}
          <div className="frequency-scale">

            <span>88</span>
            <span>90</span>
            <span className="current-frequency">91.1</span>
            <span>94</span>
            <span>98</span>
            <span>102</span>
            <span>108</span>

          </div>

          <div className="frequency-line">
            <div className="frequency-marker"></div>
          </div>


          {/* Radio Controls */}
          <div className="radio-controls">

            <button className="radio-control">
              ◀◀
              <small>Seek</small>
            </button>

            <button className="radio-control scan-button">
              SCAN
            </button>

            <button className="radio-control">
              ▶▶
              <small>Seek</small>
            </button>

          </div>

        </section>


        {/* Right: Presets */}
        <section className="preset-panel">

          <div className="preset-header">
            <h2>Presets</h2>
            <span>FM</span>
          </div>

          <div className="preset-list">

            <button className="preset active-preset">
              <span>1</span>
              <div>
                <strong>91.1 MHz</strong>
                <small>Radio City</small>
              </div>
            </button>

            <button className="preset">
              <span>2</span>
              <div>
                <strong>93.5 MHz</strong>
                <small>Red FM</small>
              </div>
            </button>

            <button className="preset">
              <span>3</span>
              <div>
                <strong>94.3 MHz</strong>
                <small>Mirchi</small>
              </div>
            </button>

            <button className="preset">
              <span>4</span>
              <div>
                <strong>98.3 MHz</strong>
                <small>Radio One</small>
              </div>
            </button>

            <button className="preset">
              <span>5</span>
              <div>
                <strong>100.1 MHz</strong>
                <small>FM Gold</small>
              </div>
            </button>

            <button className="preset">
              <span>6</span>
              <div>
                <strong>102.6 MHz</strong>
                <small>Rainbow FM</small>
              </div>
            </button>

          </div>

        </section>

      </main>


      {/* Bottom Bar */}
      <footer className="radio-footer">

        <button
          className="home-button"
          onClick={() => navigate("/")}
        >
          HOME
        </button>

        <div className="volume-control">
          <span>🔊</span>

          <div className="volume-line">
            <div className="volume-level"></div>
          </div>

          <span>70%</span>
        </div>

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

export default Radio;