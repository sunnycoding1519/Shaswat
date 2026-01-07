import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Course from "./pages/Course";
import Gallery from "./pages/Gallery";
import UpcomingEvents from "./pages/UpcomingEvents";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Navbar exact paths */}
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Our Courses" element={<Course />} />
        <Route path="/Upcoming Events" element={<UpcomingEvents />} />

        {/* temporary empty pages (no error) */}
        <Route path="/OurCenters" element={<div />} />
        <Route path="/Testimonials" element={<div />} />
        <Route path="/Contact us" element={<div />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
