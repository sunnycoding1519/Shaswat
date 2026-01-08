import "../style/About.css";

// Images (replace later)
import aboutBg from "../images/about-hero-bg.jpeg";     // background image
//import babaCutout from "../images/about-baba-cutout.png"; // baba ji cutout

import shaswatImg from "../images/about-shaswat.jpg";
import gurudevImg from "../images/gurudev.jpg";
import babaImg from "../images/baba-bio.jpg";

const About = () => {
  return (
    <main className="about-page">

      {/* ================= HERO SECTION ================= */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <h1>
            <span className="brown">Shashwat Chikitsa</span>
          </h1>

          <p>
            वैदिक ज्ञान पर आधारित शाश्वत चिकित्सा –  
            प्रकृति, पंचतत्त्व और आध्यात्मिक चेतना से  
            पूर्ण स्वास्थ्य की ओर एक दिव्य यात्रा।
          </p>
        </div>

        {/* Baba Ji Cutout */}
        <div className="about-hero-cutout">
          <img src={babaCutout} alt="Baba Swami Bhakti Prakash Ji" />
        </div>
      </section>

      {/* ================= SECTION 1 ================= */}
      <section className="about-section">
        <div className="about-text">
          <h2>
            <span className="brown">वैदिक शाश्वत</span>{" "}
            <span className="black">चिकित्सा का अद्भुत ज्ञान</span>
          </h2>

          <p>
            शाश्वत चिकित्सा एक प्राचीन वैदिक उपचार पद्धति है,
            जो मानव शरीर को पंचतत्त्व — पृथ्वी, जल, अग्नि,
            वायु और आकाश — के संतुलन द्वारा स्वस्थ बनाती है।
            यह चिकित्सा रोग के लक्षणों को नहीं,
            बल्कि रोग के मूल कारण को समझकर
            जड़ से उपचार करने की प्रक्रिया है।
          </p>

          <p>
            अथर्ववेद आधारित यह चिकित्सा
            शरीर, मन और आत्मा को एक साथ संतुलित करती है।
            आधुनिक जीवनशैली से उत्पन्न तनाव,
            मानसिक असंतुलन एवं दीर्घकालिक रोगों में
            यह पद्धति अत्यंत प्रभावशाली सिद्ध होती है।
          </p>
        </div>

        <div className="about-image">
          <img src={shaswatImg} alt="Vaidik Shashwat Chikitsa" />
        </div>
      </section>

      {/* ================= SECTION 2 ================= */}
      <section className="about-section reverse">
        <div className="about-text">
          <h2>
            <span className="brown">हमारे प्रेरणा स्रोत</span>{" "}
            <span className="black">गुरुदेव डॉ. गुणप्रकाश चैतन्य जी महाराज</span>
          </h2>

          <p>
            गुरुदेव डॉ. गुणप्रकाश चैतन्य जी महाराज
            अखिल भारत वर्षीय धर्म संघ एवं
            करपात्री फाउंडेशन से संबद्ध
            एक महान आध्यात्मिक व्यक्तित्व हैं।
          </p>

          <p>
            वे भारतीय संस्कृति, सनातन परंपरा
            और वैदिक ज्ञान के प्रचार-प्रसार में
            आजीवन समर्पित रहे हैं।
            उनके मार्गदर्शन में
            शाश्वत चिकित्सा को
            एक सशक्त दिशा प्राप्त हुई है।
          </p>
        </div>

        <div className="about-image">
          <img src={gurudevImg} alt="Gurudev Dr Gunprakash Chaitanya Ji" />
        </div>
      </section>

      {/* ================= SECTION 3 ================= */}
      <section className="about-section">
        <div className="about-text">
          <h2>
            <span className="brown">जीवन परिचय</span>{" "}
            <span className="black">– बाबा स्वामी भक्ति प्रकाश जी</span>
          </h2>

          <p className="designation">
            वैदिक शाश्वत चिकित्सा मर्मज्ञ | आध्यात्मिक संत
          </p>

          <p>
            बाबा स्वामी भक्ति प्रकाश जी
            अखिल भारत वर्षीय धर्म संघ,
            करपात्री फाउंडेशन से संबद्ध
            प्रतिष्ठित संत हैं।
            विगत 30 वर्षों से
            “योगी–निरोगी–उपयोगी”
            सूत्र पर आधारित साधना,
            अध्ययन एवं समाज सेवा में
            निरंतर सक्रिय हैं।
          </p>

          <p>
            आप अथर्ववेद आधारित
            शाश्वत चिकित्सा के
            गहन ज्ञाता एवं मर्मज्ञ हैं।
            शारीरिक, मानसिक एवं
            आध्यात्मिक स्वास्थ्य हेतु
            समाज सेवा में समर्पित हैं।
          </p>

          <h3 className="sub-heading">सम्मान एवं उपलब्धियाँ</h3>

          <ul className="achievement-list">
            <li>मानद डॉक्टरेट उपाधि – 22 जून 2024</li>
            <li>International Gaurav Award – 22 जून 2024</li>
            <li>भारत गौरव अवार्ड – 20 अप्रैल 2025</li>
            <li>Visionary Leader Award – 24 मई 2025</li>
            <li>देवभूमि राष्ट्रीय रत्न पुरस्कार – 05 जुलाई 2025</li>
            <li>
              चिन्नास्वामी हिंदुस्तान गगन गौरव अवॉर्ड –
              24 दिसंबर 2025
            </li>
          </ul>
        </div>

        <div className="about-image">
          <img src={babaImg} alt="Baba Swami Bhakti Prakash Ji" />
        </div>
      </section>

      {/* ================= SECTION 4 ================= */}
      <section className="achievement-gallery">
        <h2>
          <span className="brown">Achievements</span>{" "}
          <span className="black">& Awards</span>
        </h2>

        <div className="gallery-slider">
          {Array.from({ length: 10 }).map((_, i) => (
            <div className="gallery-item" key={i}></div>
          ))}
        </div>
      </section>

    </main>
  );
};

export default About;
