import { useState } from "react";
import "../style/Navbar.css";
import logo from "../images/shaswat-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

return (
    <header className="navbar-wrapper" style={{ color: "black" }}>
        <nav className="navbar-inner">

            {/* LEFT : LOGO */}
            <div className="nav-logo">
                <img src={logo} alt="Shashwat Chikitsa" />
                <span>Shashwat Chikitsa</span>
            </div>

            {/* CENTER : LINKS */}
            <ul className={`nav-links ${open ? "open" : ""}`}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/Gallery">Gallery</a></li>
                <li><a href="/OurCenters">Our Centers</a></li>
                <li><a href="/Our Courses">Our Courses</a></li>
                <li><a href="/Upcoming Events">Upcoming Events</a></li>
                <li><a href="/Testimonials">Testimonials</a></li>
                <li><a href="/Contact us">Contact us</a></li>
                <li className="mobile-only">
                    <a href="/contact">Contact</a>
                </li>
                <li className="mobile-only phone">
                    <a href="tel:7355095660">Helpline no.📞+91-7355095660</a>
                </li>
            </ul>

            {/* RIGHT : PHONE */}
            <div className="nav-right">
                <a href="tel:7355095660" className="nav-phone">
                    📞 +91-7355095660
                </a>

                <div
                    className="hamburger"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </div>
            </div>

        </nav>
    </header>
);
};

export default Navbar;
