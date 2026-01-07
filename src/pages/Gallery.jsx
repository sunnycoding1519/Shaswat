import "../style/Gallery.css";

const gallerySections = [
  {
    title: "Clinic Gallery",
    icon: "📸",
    images: [
      "/Images/gallery/clinic1.jpg",
      "/Images/gallery/clinic2.jpg",
      "/Images/gallery/clinic3.jpg"
    ]
  },
  {
    title: "Panchakarma / Therapy Sessions",
    icon: "🧘",
    images: [
      "/Images/gallery/therapy1.jpg",
      "/Images/gallery/therapy2.jpg",
      "/Images/gallery/therapy3.jpg"
    ]
  },
  {
    title: "Events & Satsang",
    icon: "🎤",
    images: [
      "/Images/gallery/event1.jpeg",
      "/Images/gallery/event2.jpeg",
      "/Images/gallery/event3.jpg"
    ]
  },
  {
    title: "Doctor / Guru Ji Moments",
    icon: "👨‍⚕️",
    images: [
      "/Images/gallery/guru1.jpg",
      "/Images/gallery/guru2.jpg",
      "/Images/gallery/guru3.jpg"
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
