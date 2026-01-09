import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Course from "./pages/Course";
import Gallery from "./pages/Gallery";
import UpcomingEvents from "./pages/UpcomingEvents";
import Centers from "./pages/Centers";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Navbar exact paths (case + space sensitive) */}
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Our Courses" element={<Course />} />
        <Route path="/Upcoming Events" element={<UpcomingEvents />} />
        <Route path="/OurCenters" element={<Centers />} />
        <Route path="/Contact us" element={<Contact />} />
        <Route path="/Testimonials" element={<Testimonials />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
