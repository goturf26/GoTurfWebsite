import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer" id="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>GoTurf</h2>
          <p>
            Play smarter. Book faster. Never miss your game.
          </p>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>📧 support@goturf.co.in</p>
          <p>🌐 goturf.co.in</p>
          <p>📍 Tamil Nadu, India</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <p><a href="#home">Home</a></p>
          <p><a href="#turf">Turf</a></p>
          <p><a href="#tournament">Tournament</a></p>
          <p>Download App</p>
        </div>

        {/* Legal */}
        <div className="footer-legal">
          <h3>Legal</h3>

          <p>
            <Link to="/privacy-policy">
              Privacy Policy
            </Link>
          </p>

          <p>
            <Link to="/terms">
              Terms & Conditions
            </Link>
          </p>
        </div>

      </div>

      <div className="copyright">
        © 2026 GoTurf. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;