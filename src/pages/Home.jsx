import "../style/Home.css";
import heroImg from "../images/Meditation.jpg";
import img1 from "../images/baba-1.jpg";
import img2 from "../images/baba-2.jpg";
import img3 from "../images/baba-hero.jpg";
import img4 from "../images/baba-4.jpg";
import ebookImg from "../images/e book.png";
const Home = () => {
  return (
    <main className="home">

      {/* ================= HERO ================= */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-welcome">Welcome to</span>
            <span className="hero-main">Shashwat Chikitsa</span>
            <span className="hero-tagline">
              प्रकृति से जुड़कर पूर्ण स्वास्थ्य की ओर
            </span>
          </h1>

          <p>
            जब दवाइयाँ केवल लक्षण दबा रही हों और
            बीमारी बार-बार लौट रही हो,
            तब आवश्यकता होती है
            जड़ से उपचार की।
          </p>

          <p className="guru">
            मार्गदर्शक – <strong>डॉ. स्वामी भक्ति प्रकाश जी</strong>
          </p>

          <div className="hero-buttons">
            <a href="/Upcoming Events" className="btn primary">
              Join Now
            </a>
          </div>
        </div>
      </section>

      {/* ================= WHAT IS SHASHWAT ================= */}
      <section className="about-section">
        <div className="about-left">
          <h2>शाश्वत चिकित्सा क्या है?</h2>

          <p>
            शाश्वत चिकित्सा एक प्राचीन वैदिक चिकित्सा विज्ञान है,
            जिसका उद्देश्य केवल बीमारी हटाना नहीं,
            बल्कि शरीर के भीतर
            प्राकृतिक संतुलन स्थापित करना है।
          </p>

          <p>
            पंचतत्त्व — पृथ्वी, जल, अग्नि, वायु और आकाश —
            के असंतुलन से शरीर में रोग उत्पन्न होते हैं।
            शाश्वत चिकित्सा इन तत्वों को संतुलित कर
            रोग के मूल कारण को समाप्त करती है।
          </p>

          <p>
            <strong>डॉ. स्वामी भक्ति प्रकाश जी</strong> के
            मार्गदर्शन में यह पद्धति
            हजारों लोगों के जीवन में
            सकारात्मक परिवर्तन ला चुकी है।
          </p>
        </div>

        <div className="about-right">
          <div className="image-grid">
            <img src={img1} alt="Baba Ji" />
            <img src={img2} alt="Healing" />
            <img src={img3} alt="Treatment" />
            <img src={img4} alt="Spiritual Care" />
          </div>
        </div>
      </section>

      <section className="counter-section">
  <div className="stats-wrapper">

    <div className="stat-box">
      <div className="stat-icon">🧘</div>
      <h3 className="counter">20+</h3>
      <span>Experience Healer</span>
    </div>

    <div className="stat-box">
      <div className="stat-icon">😊</div>
      <h3 className="counter">10000+</h3>
      <span>Patients Recovered</span>
    </div>

    <div className="stat-box">
      <div className="stat-icon">🏥</div>
      <h3 className="counter">10+</h3>
      <span>Centers</span>
    </div>

  </div>
</section>

      {/* ================= DISEASES ================= */}
      <section className="disease-section">
        <h2>किन रोगों में शाश्वत चिकित्सा प्रभावी है?</h2>

        <p className="disease-intro">
          यदि आप लंबे समय से दवाइयाँ ले रहे हैं
          लेकिन रोग पूरी तरह ठीक नहीं हो रहा,
          तो इसका अर्थ है कि
          बीमारी का मूल कारण अभी भी मौजूद है।
        </p>

        <div className="disease-grid">
          <div className="disease-card">
            <h3>🦴 जोड़ों एवं हड्डियों के रोग</h3>
            <p>
              घुटनों का दर्द, कमर दर्द, सर्वाइकल,
              गठिया जैसी समस्याएँ
              शरीर में वायु एवं पृथ्वी तत्व
              के असंतुलन से उत्पन्न होती हैं।
            </p>
          </div>

          <div className="disease-card">
            <h3>🔥 पाचन तंत्र की समस्याएँ</h3>
            <p>
              गैस, कब्ज, अपच, एसिडिटी
              अग्नि तत्व के असंतुलन का परिणाम हैं।
            </p>
          </div>

          <div className="disease-card">
            <h3>🧠 मानसिक तनाव एवं अनिद्रा</h3>
            <p>
              चिंता, अवसाद, नींद न आना
              वायु और आकाश तत्व के असंतुलन से होता है।
            </p>
          </div>

          <div className="disease-card">
            <h3>🩸 हार्मोनल रोग</h3>
            <p>
              थायरॉइड, शुगर, PCOD
              शरीर की आंतरिक ऊर्जा प्रणाली
              के असंतुलन से उत्पन्न होते हैं।
            </p>
          </div>

          <div className="disease-card">
            <h3>🌿 त्वचा रोग</h3>
            <p>
              एलर्जी, खुजली, सोरायसिस
              रक्त और जल तत्व की अशुद्धि से होते हैं।
            </p>
          </div>

          <div className="disease-card">
            <h3>⚡ कमजोरी एवं थकान</h3>
            <p>
              बार-बार थक जाना
              जीवन शक्ति के क्षीण होने का संकेत है।
            </p>
          </div>
        </div>

        <div className="disease-cta">
          <a href="/Contact us" className="btn primary">
            आज ही परामर्श लें
          </a>
        </div>
      </section>
      {/* ================= EBOOK SECTION ================= */}
<section className="ebook-section">

  <div className="ebook-container">
<div className="ebook-image">
  <img src={ebookImg} alt="Ebook" />
</div>
    {/* RIGHT CONTENT SECTION */}
    <div className="ebook-content">

      <span className="ebook-tag">
         Healing E-Book
      </span>

      <h2>
        शाश्वत चिकित्सा E-Book
      </h2>

      <p>
        इस विशेष E-Book में जानिए प्राकृतिक चिकित्सा,
        पंचतत्त्व संतुलन, जल चिकित्सा,
        शरीर शुद्धि एवं रोगों के मूल कारणों के बारे में।
      </p>

      <ul className="ebook-points">
        <li>✔ प्राकृतिक उपचार विधियाँ</li>
        <li>✔ जल चिकित्सा के रहस्य</li>
        <li>✔ रोगों का मूल कारण</li>
        <li>✔ शरीर को प्राकृतिक रूप से स्वस्थ बनाना</li>
      </ul>

      <a
        href="https://cosmofeed.com/vp/69eaed6fba5f160013fbfa0a"
        target="_blank"
        rel="noopener noreferrer"
        className="ebook-btn"
      >
        Download Now
      </a>

    </div>

  </div>

</section>

    </main>
  );
};

export default Home;
