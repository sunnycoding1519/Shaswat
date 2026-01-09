import "../style/UpcomingEvents.css";

const announcementText =
  "📢 Upcoming Healing Camps, Satsang & Training Programs – Stay Connected with Shashwat Chikitsa";

const events = [
  {
    id: 1,
    title: "Shashwat Chikitsa Shivir",
    location: "Terapanth Seva Samaj, Ahmedabad, Gujarat",
    date: "16 to 18 january 2026",
    speaker: "Dr. Swami Bhakti Prakash Ji",
    image: "/Images/events/event GJ.jpeg",
    description:
      "A holistic healing camp focused on root-cause treatment through Shashwat Chikitsa principles."
  },
  {
    id: 2,
    title: "Panchakarma Awareness Program",
    location: "Jaipur, Rajasthan",
    date: "22 March 2026",
    speaker: "Ayurveda Expert Team",
    image: "/Images/events/event2.jpg",
    description:
      "Learn the importance of Panchakarma therapy and its role in detoxification and rejuvenation."
  },
  {
    id: 3,
    title: "Water Healing Therapy Workshop",
    location: "Online (Live)",
    date: "30 March 2026",
    speaker: "Dr. Swami Bhakti Prakash Ji",
    image: "/Images/events/event3.jpg",
    description:
      "An online workshop explaining the power of energized water and healing through awareness."
  },
  {
    id: 4,
    title: "Hormonal Balance Guidance Session",
    location: "Delhi NCR",
    date: "10 April 2026",
    speaker: "Natural Healing Experts",
    image: "/Images/events/event4.jpg",
    description:
      "A special session dedicated to understanding and correcting hormonal imbalance naturally."
  },
  {
    id: 5,
    title: "Nadi Chikitsa Diagnostic Camp",
    location: "Ahmedabad, Gujarat",
    date: "18 April 2026",
    speaker: "Senior Nadi Chikitsa Practitioner",
    image: "/Images/events/event5.jpg",
    description:
      "Experience pulse diagnosis and holistic health assessment through Nadi Chikitsa."
  }
];

export default function UpcomingEvents() {
  return (
    <section className="events-page">
      <h2 className="events-title">आगामी शिविर एवं कार्यक्रम</h2>

      {/* Announcement Line */}
      <div className="announcement-bar">
        <div className="announcement-text">{announcementText}</div>
      </div>

      {/* Events */}
      <div className="events-grid">
        {events.map(event => (
          <div className="event-card" key={event.id}>
            <img src={event.image} alt={event.title} />

            <div className="event-content">
              <h3>{event.title}</h3>

              <div className="event-meta">
                <p>📍 {event.location}</p>
                <p>📅 {event.date}</p>
                <p>🎤 {event.speaker}</p>
              </div>

              <p className="event-desc">{event.description}</p>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}
