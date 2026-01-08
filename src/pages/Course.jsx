import { useState } from "react";
import "../style/Course.css";

const courses = [
  {
    id: 1,
    title: "Shashwat Chikitsa",
    image: "/Images/shashwat-chikitsa.jpg",
    description:
      "Shashwat Chikitsa is an ancient holistic healing system rooted in Vedic wisdom. It focuses on identifying and correcting the root cause of diseases rather than suppressing symptoms.",
    learnings: [
      "Understanding Panchatatva balance",
      "Root-cause based healing approach",
      "Lifestyle & dietary alignment",
      "Natural disease prevention"
    ],
    duration: "Self-paced learning"
  },
  {
    id: 2,
    title: "Water Healing Therapy",
    image: "/Images/water-healing.jpg",
    description:
      "Water Healing Therapy uses energized and programmed water to heal physical, emotional, and mental imbalances through intention and awareness.",
    learnings: [
      "Water programming techniques",
      "Emotional & energy healing",
      "Daily healing practices",
      "Mind-body connection"
    ],
    duration: "Beginner to Advanced"
  },
  {
    id: 3,
    title: "Hormonal Imbalance",
    image: "/images/hormonal.jpg",
    description:
      "This course explains hormonal imbalance from a natural and holistic perspective, helping restore internal harmony through lifestyle and healing methods.",
    learnings: [
      "Hormonal root causes",
      "Stress & hormone relationship",
      "Natural balancing methods",
      "Daily routine correction"
    ],
    duration: "Structured modules"
  },
  {
    id: 4,
    title: "Nadi Parikshan",
    image: "/images/nadi.jpeg",
    description:
      "Nadi Parikshan is a powerful diagnostic science where diseases are identified by reading the pulse and understanding body energy patterns.",
    learnings: [
      "Pulse reading fundamentals",
      "Energy imbalance detection",
      "Holistic diagnosis methods",
      "Preventive health insights"
    ],
    duration: "Advanced learning"
  }
];

export default function Courses() {
  const [activeCourse, setActiveCourse] = useState(null);

  return (
    <section className="courses-section">
      <h2 className="courses-title">Our Courses</h2>
      <p className="courses-subtitle">
        Learn Ancient Healing Wisdom with Modern Understanding
      </p>

      <div className="courses-grid">
        {courses.map(course => (
          <div className="course-card" key={course.id}>
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <button onClick={() => setActiveCourse(course)}>
              View More
            </button>
          </div>
        ))}
      </div>

      {activeCourse && (
        <div
          className="modal-overlay"
          onClick={() => setActiveCourse(null)}
        >
          <div
            className="modal"
            onClick={e => e.stopPropagation()}
          >
            <img src={activeCourse.image} alt={activeCourse.title} />
            <h3>{activeCourse.title}</h3>
            <p className="modal-desc">{activeCourse.description}</p>

            <h4>What You Will Learn</h4>
            <ul>
              {activeCourse.learnings.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <p className="duration">
              <strong>Duration:</strong> {activeCourse.duration}
            </p>

            <button
              className="close-btn"
              onClick={() => setActiveCourse(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
