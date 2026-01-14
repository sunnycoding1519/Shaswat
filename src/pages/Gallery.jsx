import "../style/Gallery.css";

const gallerySections = [
  {
    title: "Event Gallery",
    icon: "📸",
    images: [
      "/Images/gallery/clinical 1.jpeg",
      "/Images/gallery/clinical 2.jpeg",
      "/Images/gallery/clinical 3.jpeg",
      "/Images/gallery/clinical 4.jpeg"
    ]
  },
  {
    title: "Therapy Sessions",
    icon: "🧘",
    images: [
      "/Images/gallery/Therapy 1.jpeg",
      "/Images/gallery/Therapy 2.jpeg",
      "/Images/gallery/Therapy 3.jpeg"
    ]
  },
  {
    title: "Events",
    icon: "🎤",
    images: [
      "/Images/gallery/event1.jpeg",
      "/Images/gallery/event2.jpeg",
      "/Images/gallery/event 3.jpeg",
      "/Images/gallery/event 4.jpeg"
    ]
  },
  {
    title: "Guru Ji Moments",
    icon: "👨‍⚕️",
    images: [
      "/Images/gallery/moment 1.jpeg",
      "/Images/gallery/Moment 2.jpeg",
      "/Images/gallery/Moment 3.jpeg",
      "/Images/gallery/moment 4.jpeg",
      "/Images/gallery/moment 5.jpeg"
    ]
  }
];

export default function Gallery() {
  return (
    <section className="gallery-page">
      <h2 className="gallery-title">शाश्वत चिकित्सा की झलकियाँ</h2>
      <p className="gallery-subtitle">
        प्राकृतिक उपचार, शिविर एवं मार्गदर्शन के वास्तविक क्षण
      </p>

      {gallerySections.map((section, index) => (
        <div className="gallery-section" key={index}>
          <h3>
            <span>{section.icon}</span> {section.title}
          </h3>

          <div className="gallery-grid">
            {section.images.map((img, i) => (
              <div className="gallery-card" key={i}>
                <img src={img} alt={section.title} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
