import { useState } from "react";
import "../style/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // ✅ GOOGLE SHEET SUBMIT (FINAL WORKING VERSION)
  const handleSubmit = (e) => {
    e.preventDefault();

    const bodyData =
      `name=${encodeURIComponent(formData.name)}` +
      `&phone=${encodeURIComponent(formData.phone)}` +
      `&address=${encodeURIComponent(formData.address)}` +
      `&message=${encodeURIComponent(formData.message)}`;

    fetch(
      "https://script.google.com/macros/s/AKfycbzZ79VOYUUC5WYF3_x8vfkbLA4Li6sYb1EWuXhW52-AWUhWRflYBhfjfrTAdRG-dmW7FA/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: bodyData
      }
    )
      .then((res) => res.text())
      .then(() => {
        alert("Thank you! Your enquiry has been sent successfully.");

        setFormData({
          name: "",
          phone: "",
          address: "",
          message: ""
        });
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <section className="contact-page">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-subtitle">
        Get in touch with Shashwat Chikitsa for consultation & guidance
      </p>

      <div className="contact-grid">
        {/* LEFT INFO */}
        <div className="contact-info">
          <div className="baba-section">
            <img src="/Images/babaji.jpg" alt="Baba Ji" />
            <p className="baba-quote">
              “Healing begins with faith, discipline, and right guidance.”
            </p>
          </div>

          <h3>📞 Phone</h3>
          <p>
            <a href="tel:+917355095660">+91 73550 95660</a>
          </p>
          <h3>📞 Phone</h3>
          <p>
            <a href="tel:+919250588545">+91 9250588545</a>
          </p>

          <h3>💬 WhatsApp</h3>
          <a
            className="whatsapp-btn"
            href="https://wa.me/917355095660"
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
          </a>

          <h3>📧 Email</h3>
          <p>
            <a href="mailto:info@shashwatchikitsa.com">
              info@shashwatchikitsa.com
            </a>
          </p>

          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps?q=India&output=embed"
              loading="lazy"
              title="Shashwat Chikitsa Location"
            ></iframe>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form-box">
          <h3>Send Enquiry</h3>

          <form onSubmit={handleSubmit}>
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

            <input
              type="text"
              name="address"
              placeholder="Your Address"
              value={formData.address}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">Send Enquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
}
