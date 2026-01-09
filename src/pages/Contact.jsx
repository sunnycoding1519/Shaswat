import { useState } from "react";
import "../style/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Enquiry:", formData);

    alert("Thank you! We will contact you shortly.");

    setFormData({ name: "", phone: "", message: "" });
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
          <h3>📞 Phone</h3>
          <p>
            <a href="tel:+917355095660">+91 73550 95660</a>
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
          <h3>Send Us a Message</h3>

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

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
