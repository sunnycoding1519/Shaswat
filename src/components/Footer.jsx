import "../style/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <img
            src="/Images/shaswat logo.png"
            alt="Shashwat Chikitsa Logo"
            className="footer-logo"
          />
          <p className="footer-desc">
            Shashwat Chikitsa is dedicated to holistic healing through ancient
            wisdom and natural therapies for long-term well-being.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/Gallery">Gallery</a></li>
            <li><a href="/Our Courses">Our Courses</a></li>
            <li><a href="/Upcoming Events">Upcoming Events</a></li>
            <li><a href="/OurCenters">Our Centers</a></li>
            <li><a href="/Testimonials">Testimonials</a></li>
            <li><a href="/Contact us">Contact Us</a></li>
          </ul>
        </div>

        {/* SOCIAL + CONTACT */}
        <div className="footer-social">
          <h4>Connect With Us</h4>

          {/* CONTACT DETAILS */}
          <div className="footer-contact">
            <p>
              📞 Helpline:&nbsp;
              <a href="tel:+919250588545">+91 92505 88545</a>
            </p>

            <p>
              <i className="fa-brands fa-whatsapp"></i>&nbsp; WhatsApp:&nbsp;
              <a
                href="https://wa.me/917355095660"
                target="_blank"
                rel="noreferrer"
              >
                +91 73550 95660
              </a>
            </p>

            <p>
              ✉️ Email:&nbsp;
              <a href="mailto:info@shashwatchikitsa.com">
                info@shashwatchikitsa.com
              </a>
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="social-icons">
            <a href="#" aria-label="YouTube">
              <i className="fa-brands fa-youtube"></i>
            </a>

            <a href="#" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="#" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>

            <a href="#" aria-label="WhatsApp">
              <i className="fa-brands fa-whatsapp"></i>
            </a>

            <a href="#" aria-label="X">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>

          <p className="social-note">
            Follow us for updates, healing insights & events
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 All Rights Reserved | Shashwat Chikitsa
      </div>
    </footer>
  );
}
