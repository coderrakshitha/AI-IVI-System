import { useNavigate } from "react-router-dom";
import "./Phone.css";

function Phone() {
  const navigate = useNavigate();

  return (
    <div className="phone-screen">

      {/* Top Bar */}
      <header className="phone-header">

        <div>
          <h1>Phone</h1>
          <p>Connected via Bluetooth</p>
        </div>

        <div className="phone-status">
          <span>10:30 AM</span>
          <span>28°C</span>
          <span>📶</span>
          <span>🔋 82%</span>
        </div>

      </header>


      {/* Main Content */}
      <main className="phone-content">

        {/* Left - Recent Calls */}
        <section className="recent-section">

          <div className="section-title">
            <h2>Recent Calls</h2>
            <span>Today</span>
          </div>

          <div className="call-list">

            <div className="call-item">
              <div className="contact-icon">R</div>

              <div className="contact-info">
                <h3>Rahul</h3>
                <p>Mobile • 10:12 AM</p>
              </div>

              <span className="call-type incoming">↙</span>
            </div>


            <div className="call-item">
              <div className="contact-icon">A</div>

              <div className="contact-info">
                <h3>Ananya</h3>
                <p>Mobile • 09:45 AM</p>
              </div>

              <span className="call-type outgoing">↗</span>
            </div>


            <div className="call-item">
              <div className="contact-icon">V</div>

              <div className="contact-info">
                <h3>Vikram</h3>
                <p>Mobile • Yesterday</p>
              </div>

              <span className="call-type missed">✕</span>
            </div>


            <div className="call-item">
              <div className="contact-icon">P</div>

              <div className="contact-info">
                <h3>Priya</h3>
                <p>Mobile • Yesterday</p>
              </div>

              <span className="call-type outgoing">↗</span>
            </div>

          </div>

        </section>


        {/* Right - Dial Pad */}
        <section className="dial-section">

          <div className="dial-display">
            <span>+91</span>
            <strong>98765 43210</strong>
          </div>


          <div className="dial-pad">

            <button>
              <strong>1</strong>
              <small></small>
            </button>

            <button>
              <strong>2</strong>
              <small>ABC</small>
            </button>

            <button>
              <strong>3</strong>
              <small>DEF</small>
            </button>

            <button>
              <strong>4</strong>
              <small>GHI</small>
            </button>

            <button>
              <strong>5</strong>
              <small>JKL</small>
            </button>

            <button>
              <strong>6</strong>
              <small>MNO</small>
            </button>

            <button>
              <strong>7</strong>
              <small>PQRS</small>
            </button>

            <button>
              <strong>8</strong>
              <small>TUV</small>
            </button>

            <button>
              <strong>9</strong>
              <small>WXYZ</small>
            </button>

            <button>
              <strong>*</strong>
            </button>

            <button>
              <strong>0</strong>
              <small>+</small>
            </button>

            <button>
              <strong>#</strong>
            </button>

          </div>


          <button className="call-button">
            📞
            <span>Call</span>
          </button>

        </section>

      </main>


      {/* Bottom Bar */}
      <footer className="phone-footer">

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

export default Phone;