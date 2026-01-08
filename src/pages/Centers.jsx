import { useState } from "react";
import "../style/Centers.css";

const centers = [
  {
    id: 1,
    name: "Shashwat Chikitsa – Haridwar",
    address: "Near Ganga Ghat, Haridwar, Uttarakhand – 249401",
    phone: "+91 73550 95660",
    timing: "Mon – Sun : 9:00 AM – 6:00 PM",
    image: "/Images/centers/haridwar.jpg",
    map: "https://www.google.com/maps?q=Haridwar&output=embed"
  },
  {
    id: 2,
    name: "Shashwat Chikitsa – Jaipur",
    address: "Vaishali Nagar, Jaipur, Rajasthan – 302021",
    phone: "+91 73550 95660",
    timing: "Mon – Sat : 10:00 AM – 5:00 PM",
    image: "/Images/centers/jaipur.jpg",
    map: "https://www.google.com/maps?q=Jaipur&output=embed"
  },
  {
    id: 3,
    name: "Shashwat Chikitsa – Delhi NCR",
    address: "Sector 62, Noida, Uttar Pradesh – 201301",
    phone: "+91 73550 95660",
    timing: "Mon – Sat : 10:00 AM – 6:00 PM",
    image: "/Images/centers/delhi.jpg",
    map: "https://www.google.com/maps?q=Noida&output=embed"
  }
];

export default function Centers() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e, centerName) => {
    e.preventDefault();

    console.log("Center:", centerName);
    console.log("Form Data:", formData);

    alert(`Enquiry sent for ${centerName}`);

    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section className="centers-page">
      <h2 className="centers-title">हमारे चिकित्सा केंद्र</h2>
      <p className="centers-subtitle">
        भारत के विभिन्न स्थानों पर उपलब्ध शाश्वत चिकित्सा केंद्र
      </p>

      <div className="centers-grid">
        {centers.map(center => (
          <div className="center-card" key={center.id}>
            {/* LEFT */}
            <div className="center-left">
              <img src={center.image} alt={center.name} />
              <h3>📍 {center.name}</h3>
              <p><strong>🏥 Address:</strong> {center.address}</p>
              <p><strong>📞 Contact:</strong> {center.phone}</p>
              <p><strong>🕒 Timing:</strong> {center.timing}</p>
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
                onSubmit={(e) => handleSubmit(e, center.name)}
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
