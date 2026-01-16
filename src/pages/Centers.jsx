import { useState } from "react";
import "../style/Centers.css";

const centers = [
  {
    id: 1,
    city: "Lucknow",
    name: "Shashwat Chikitsa – Lucknow",
    address:
      "1/639,sec-J,Janki Mor, Near Gudmba Police Station,Jankipuram,Lucknow – 226026",
    phone: "+91 73550 95660",
    timing: "Mon – Sat : 8:00 AM – 4:00 PM",
    image: "/Images/centers/center UP.jpeg",
    map:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5975.778133642752!2d80.94156777770996!3d26.913884999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957c2c3d0fd13%3A0x871ab3b0fedf760!2sJankipuram%2C%20Lucknow!5e1!3m2!1sen!2sin!4v1767985897468!5m2!1sen!2sin",
    scripturl:
      "https://script.google.com/macros/s/AKfycbxaI8p4I87OKFh9eEsr9lPkqAQTlIqBNTlwdnL3n0B1gx_492vTKswJdvR2i1s288O5/exec"
  }
  // future centers yahin add honge
];

export default function Centers() {
  const [selectedCity, setSelectedCity] = useState(centers[0].city);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ ONLY REQUIRED UPDATE (fetch added)
  const handleSubmit = (e, center) => {
    e.preventDefault();

    fetch(center.scripturl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        name: formData.name,
        phone: formData.phone,
        message: formData.message
      })
    })
      .then(() => {
        alert(`Enquiry sent for ${center.name}`);
        setFormData({ name: "", phone: "", message: "" });
      })
      .catch(() => {
        alert("Something went wrong");
      });
  };

  return (
    <section className="centers-page">
      <h2 className="centers-title">हमारे चिकित्सा केंद्र</h2>
      <p className="centers-subtitle">
        भारत के विभिन्न स्थानों पर उपलब्ध शाश्वत चिकित्सा केंद्र
      </p>

      {/* CITY DROPDOWN */}
      <div className="center-filter">
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          {centers.map((center) => (
            <option key={center.id} value={center.city}>
              {center.city}
            </option>
          ))}
        </select>
      </div>

      <div className="centers-grid">
        {centers
          .filter((center) => center.city === selectedCity)
          .map((center) => (
            <div className="center-card" key={center.id}>
              {/* LEFT */}
              <div className="center-left">
                <img src={center.image} alt={center.name} />
                <h3>📍 {center.name}</h3>
                <p>
                  <strong>🏥 Address:</strong> {center.address}
                </p>
                <p>
                  <strong>📞 Contact:</strong> {center.phone}
                </p>
                <p>
                  <strong>🕒 Timing:</strong> {center.timing}
                </p>
              </div>

              {/* RIGHT */}
              <div className="center-right">
                <iframe
                  src={center.map}
                  loading="lazy"
                  title={center.name}
                ></iframe>

                <form
                  className="enquiry-form"
                  onSubmit={(e) => handleSubmit(e, center)}
                >
                  <h4>Center Enquiry</h4>

                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                  <textarea
                    name="message"
                    placeholder="Your Query"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>

                  <button type="submit">Submit Enquiry</button>
                </form>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
