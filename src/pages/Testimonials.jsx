import "../style/Testimonials.css";

const videoTestimonials = [
  {
    id: 1,
    title: "Patient Testimonial 1",
    type: "youtube",
    video: "https://www.youtube.com/embed/8nEIP8dkF3s"
  },
  {
    id: 2,
    title: "Patient Testimonial 2",
    type: "youtube",
    video: "https://www.youtube.com/embed/bNkUXqaFjrQ"
  },
  {
    id: 3,
    title: "Patient Testimonial 3",
    type: "youtube",
    video: "https://www.youtube.com/embed/Wq0dDYTy7LY"
  },
  {
    id: 4,
    title: "Patient Testimonial 4",
    type: "youtube",
    video: "https://www.youtube.com/embed//asPK5Uke6X4"
  }
];

const writtenTestimonials = [
  {
    name: "Ramesh Kumar",
    city: "Delhi",
    experience:
      "Shashwat Chikitsa completely changed my lifestyle. I finally feel healthy and balanced.",
    rating: 5
  },
  {
    name: "Sunita Sharma",
    city: "Jaipur",
    experience:
      "Doctors here focus on root cause treatment. No side effects, only healing.",
    rating: 5
  },
  {
    name: "Amit Verma",
    city: "Noida",
    experience:
      "Nadi Chikitsa diagnosis was extremely accurate. Highly recommended.",
    rating: 4
  },
  {
    name: "Pooja Singh",
    city: "Lucknow",
    experience:
      "Panchakarma therapy helped me regain my energy and immunity.",
    rating: 5
  },
  {
    name: "Rajesh Patel",
    city: "Ahmedabad",
    experience:
      "Natural treatment with real results. Very disciplined and ethical approach.",
    rating: 5
  },
  {
    name: "Neha Gupta",
    city: "Gurgaon",
    experience:
      "Hormonal imbalance improved within months. Grateful to the team.",
    rating: 4
  },
  {
    name: "Vikas Mehta",
    city: "Indore",
    experience:
      "Water healing therapy gave me mental peace and clarity.",
    rating: 5
  },
  {
    name: "Anjali Mishra",
    city: "Varanasi",
    experience:
      "The guidance feels spiritual yet scientific. Truly unique.",
    rating: 5
  },
  {
    name: "Suresh Yadav",
    city: "Patna",
    experience:
      "Authentic Ayurveda with modern understanding. Very effective.",
    rating: 4
  },
  {
    name: "Kavita Joshi",
    city: "Udaipur",
    experience:
      "Healing here feels personal and long-lasting.",
    rating: 5
  }
];

// 🔹 helper (scroll only)
const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
};

export default function Testimonials() {
  return (
    <section className="testimonials-page">
      <h2 className="testimonials-title">रोगियों के अनुभव</h2>
      <p className="testimonials-subtitle">
        वास्तविक अनुभव जो शाश्वत चिकित्सा पर विश्वास बढ़ाते हैं
      </p>

      {/* SWITCH BUTTONS */}
      <div className="testimonial-switch">
        <button onClick={() => scrollToSection("video-testimonials")}>
          🎥 Video Testimonials
        </button>
        <button onClick={() => scrollToSection("text-testimonials")}>
          ✍️ Written Reviews
        </button>
      </div>

      {/* VIDEO TESTIMONIALS */}
      <h3 id="video-testimonials" className="section-heading">
        Video Testimonials
      </h3>

      <div className="video-grid">
        {videoTestimonials.map(video => (
          <div className="video-card" key={video.id}>
            
            {video.type === "youtube" ? (
              <iframe
                src={video.video}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <video controls>
                <source src={video.video} type="video/mp4" />
              </video>
            )}

            <p>{video.title}</p>
          </div>
        ))}
      </div>

      {/* WRITTEN TESTIMONIALS */}
      <h3 id="text-testimonials" className="section-heading">
        Written Reviews
      </h3>

      <div className="review-grid">
        {writtenTestimonials.map((item, index) => (
          <div className="review-card" key={index}>
            <h4>👤 {item.name}</h4>
            <p className="city">🏙️ {item.city}</p>
            <p className="experience">💬 {item.experience}</p>
            <p className="rating">{"⭐".repeat(item.rating)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
