
import { useState } from "react";
import "../style/About.css";

// Existing Images
import aboutBg from "../images/about-hero-bg.jpeg";
//import babaCutout from "../images/about-baba-cutout.png";

import shaswatImg from "../images/about-shaswat.jpg";
import gurudevImg from "../images/gurudev.jpg";
import babaImg from "../images/baba-bio.jpg";
import ashrm from "../images/ashram.jpg";
import bookCover from "../images/e book.png";
import award from "../images/award.jpg";
import training from "../images/training.jpg";
import aiims from "../images/Aiims.jpg";
import media from "../images/media.jpg";
import spiritual from "../images/spiritual.jpg";
const About = () => {
  const [activeCert, setActiveCert] = useState(null);

  // Image placeholder for new PDF sections
  const ImagePlaceholder = ({ title }) => (
    <div
      style={{
        width: "100%",
        maxWidth: "460px",
        minHeight: "280px",
        background: "#efe2cf",
        border: "2px dashed #b08a60",
        borderRadius: "18px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
        color: "#8b5e34",
        margin: "auto"
      }}
    >
      <p>📷 Upload Image Here<br />{title}</p>
    </div>
  );

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
        {/*<div className="about-hero-cutout">
          <img src={babaCutout} alt="Baba Swami Bhakti Prakash Ji" />
        </div>*/}
      </section>

      {/* ================= EXISTING SECTION 1 ================= */}
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

      {/* ================= EXISTING SECTION 2 ================= */}
      <section className="about-section reverse">
        <div className="about-text">
          <h2>
            <span className="brown">हमारे प्रेरणा स्रोत</span>{" "}
            <span className="black">
              गुरुदेव डॉ. गुणप्रकाश चैतन्य जी महाराज
            </span>
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

      {/* ================= EXISTING SECTION 3 ================= */}
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

          <h3 className="sub-heading"></h3>

          <ul className="achievement-list">
            <li>Angiras Research Of Shashwat Healing Foundation (Director)</li>
            <li>Deshi Aspatal Pvt Ltd Delhi (Co-Director)</li>
            <li>KDU Natural Pvt Ltd (Co-Director)</li>
            <li>Mahila Swavlamban Trust (President)</li>
          </ul>
        </div>

        <div className="about-image">
          <img src={babaImg} alt="Baba Swami Bhakti Prakash Ji" />
        </div>
      </section>

      {/* ================= EXISTING SECTION 4 ================= */}
      <section className="achievement-gallery">
        <h2>
          <span className="brown">Achievements</span>{" "}
          <span className="black">& Awards</span>
        </h2>

        <div className="gallery-slider">
          {Array.from({ length: 12 }).map((_, i) => {
            const imgSrc = `/Images/certificates/Award ${i + 1}.jpeg`;

            return (
              <div className="gallery-item" key={i}>
                <img
                  src={imgSrc}
                  alt={`Award Certificate ${i + 1}`}
                  loading="lazy"
                  onClick={() => setActiveCert(imgSrc)}
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* =====================================================
           NEW PDF DETAILS START HERE
           EXISTING SECTIONS ABOVE ARE UNCHANGED
      ===================================================== */}

      {/* ================= SECTION 5: PROFESSIONAL OVERVIEW ================= */}
      <section className="about-section">
        <div className="about-text">
          <h2>
            <span className="brown">व्यक्तित्व एवं</span>{" "}
            <span className="black">व्यावसायिक परिचय</span>
          </h2>

          <p>
            बाबा स्वामी भक्ति प्रकाश जी भारतीय आध्यात्मिक संत हैं,
            जो पारंपरिक आश्रमीय व्यवस्था से जुड़े हुए हैं।
            लगभग तीन दशकों से वे शाश्वत चिकित्सा के अध्ययन,
            अभ्यास, जनशिक्षा एवं प्रशिक्षण के कार्य में
            निरंतर सक्रिय हैं।
          </p>

          <p>
            उनकी कार्यशैली अथर्ववेद एवं आंगिरस ऋषि की
            परंपराओं से प्रेरित है। उनके कार्यों में
            प्राकृतिक जीवनशैली, योगिक अनुशासन,
            आध्यात्मिक साधना एवं औषधिरहित
            स्वास्थ्य-जागरूकता संबंधी अभ्यासों पर
            विशेष जोर दिया जाता है।
          </p>

          <p className="designation">
            योगी • निरोगी • उपयोगी
          </p>
        </div>

        <div className="about-image">
           <img src={babaImg} alt="Baba Swami Bhakti Prakash Ji" />
        </div>
      </section>

      {/* ================= SECTION 6: TRADITIONAL EDUCATION ================= */}
      <section className="about-section reverse">
        <div className="about-text">
          <h2>
            <span className="brown">आश्रमीय अध्ययन</span>{" "}
            <span className="black">एवं आध्यात्मिक शिक्षा</span>
          </h2>

          <p>
            बाबा स्वामी भक्ति प्रकाश जी ने पारंपरिक
            आश्रमीय व्यवस्था में अनेक गुरुजनों के
            मार्गदर्शन में अध्ययन किया।
          </p>

          <p>
            उनके अध्ययन में वेद, उपनिषद, योग,
            दर्शन, संस्कृत एवं विभिन्न आध्यात्मिक
            विषय शामिल रहे हैं।
          </p>

          <p>
            उनकी जीवन यात्रा में गुरु-मार्गदर्शन,
            साधना, पारंपरिक ज्ञान एवं आध्यात्मिक
            अनुशासन का महत्वपूर्ण स्थान रहा है।
          </p>

          <p>
            <strong>मानद डॉक्टरेट संबंधी स्पष्टीकरण:</strong>
            {" "}PDF के अनुसार यह सम्मानसूचक उपाधि है,
            अर्जित विश्वविद्यालयी शोध डिग्री अथवा
            चिकित्सा योग्यता नहीं।
          </p>
        </div>

        <div className="about-image">
          <img src={ashrm} alt="Baba Swami Bhakti Prakash Ji" />
        </div>
      </section>

      {/* ================= SECTION 7: BOOK ================= */}
      <section className="about-section">
        <div className="about-text">
          <h2>
            <span className="brown">लेखक एवं</span>{" "}
            <span className="black">ग्रंथ परिचय</span>
          </h2>

          <h3 className="sub-heading">
            वैदिक शाश्वत चिकित्सा का अद्भुत विज्ञान
          </h3>

          <p>
            बाबा स्वामी भक्ति प्रकाश जी द्वारा लिखित
            यह पुस्तक शाश्वत चिकित्सा की पारंपरिक
            अवधारणाओं, साधना, अनुभव एवं जनकल्याण
            की दृष्टि का परिचय देती है।
          </p>

          <p>
            यह कृति उनके दीर्घकालीन अध्ययन,
            अभ्यास एवं शिक्षण यात्रा का
            महत्वपूर्ण दस्तावेज है।
          </p>

          <h3 className="sub-heading">
            अन्य लेखन एवं अनुसंधान
          </h3>

          <p>
            जल साधना, शिव सूत्र एवं जल साधना
            तथा मौन-साधना के अनुभवों पर
            लेखन परियोजनाएँ भी प्रगतिशील हैं।
          </p>

          <p>
            ये परियोजनाएँ PDF में निर्माणाधीन
            कृतियों के रूप में वर्णित हैं,
            प्रकाशित पुस्तकों के रूप में नहीं।
          </p>
        </div>

        <div className="about-image">
        <img src={bookCover} alt="Book Cover – Vaidik Shashwat Chikitsa Ka Adbhut Vigyan" />
        </div>
      </section>

      {/* ================= SECTION 8: RECOGNITION ================= */}
      <section className="about-section reverse">
        <div className="about-text">
          <h2>
            <span className="brown">राष्ट्रीय एवं</span>{" "}
            <span className="black">अंतरराष्ट्रीय सम्मान</span>
          </h2>

          <p>
            उपलब्ध स्मारिका में बाबा स्वामी भक्ति प्रकाश जी
            से संबंधित विभिन्न सम्मान एवं मान्यताओं
            का उल्लेख किया गया है।
          </p>

          <ul className="achievement-list">
            <li>मानद डॉक्टरेट</li>
            <li>भारत गौरव अवार्ड 2025</li>
            <li>अंतरराष्ट्रीय गौरव अवार्ड 2024 (नेपाल)</li>
            <li>विजनरी लीडर्स अवार्ड 2025</li>
            <li>आयुष रत्न</li>
            <li>देवभूमि से संबंधित सम्मान</li>
            <li>कर्नाटक ओपन यूनिवर्सिटी के सम्मान से जुड़ी सामग्री</li>
            <li>पद्मश्री सम्मान का उल्लेख उपलब्ध सामग्री में किया गया है</li>
          </ul>

          <p>
            <strong>महत्वपूर्ण:</strong> सभी पुरस्कारों के
            सटीक नाम, वर्ष एवं प्रदान करने वाली संस्थाओं
            का मिलान मूल प्रमाणपत्रों से किया जाना चाहिए।
          </p>
        </div>

        <div className="about-image">
          <img src={award} alt="Baba Swami Bhakti Prakash Ji" />
        </div>
      </section>

      {/* ================= SECTION 9: NATIONAL OUTREACH ================= */}
      <section className="about-section">
        <div className="about-text">
          <h2>
            <span className="brown">भारतव्यापी</span>{" "}
            <span className="black">प्रशिक्षण एवं जनसेवा</span>
          </h2>

          <p>
            बाबा स्वामी भक्ति प्रकाश जी द्वारा विभिन्न
            स्थानों पर प्रशिक्षण कार्यक्रम,
            चिकित्सा शिविर, आध्यात्मिक कार्यक्रम
            एवं स्वास्थ्य-जागरूकता गतिविधियों
            से संबंधित कार्य किए जाने का उल्लेख
            स्मारिका में किया गया है।
          </p>

          <h3 className="sub-heading">
            प्रमुख आयोजन एवं गतिविधियों के स्थान
          </h3>

          <ul className="achievement-list">
            <li>मुंबई</li>
            <li>लखनऊ</li>
            <li>हरिद्वार</li>
            <li>उज्जैन</li>
            <li>अजमेर</li>
            <li>अहमदाबाद</li>
            <li>ठाणे</li>
            <li>कांदिवली</li>
            <li>हिमाचल प्रदेश</li>
            <li>दमन</li>
            <li>अन्य स्थान</li>
          </ul>

          <h3 className="sub-heading">
            Shashwat Morning Miracle
          </h3>

          <p>
            बाबा जी द्वारा Shashwat Morning Miracle
            नामक प्रातःकालीन अभ्यास का संचालन भी
            किया जाता है। इसके अतिरिक्त प्रारंभिक
            एवं उन्नत प्रशिक्षण कार्यक्रम विकसित
            किए गए हैं।
          </p>
        </div>

        <div className="about-image">
          <img src={training} alt="Baba Swami Bhakti Prakash Ji" />
        </div>
      </section>

      {/* ================= SECTION 10: MEDICAL DIALOGUE ================= */}
      <section className="about-section reverse">
        <div className="about-text">
          <h2>
            <span className="brown">चिकित्सा विशेषज्ञों</span>{" "}
            <span className="black">के साथ संवाद</span>
          </h2>

          <p>
            उपलब्ध स्मारिका में नई दिल्ली स्थित
            AIIMS में शाश्वत चिकित्सा के संबंध में
            हुई बताई गई चर्चा का उल्लेख किया गया है।
          </p>

          <p>
            हड्डियों से संबंधित समस्याओं के अनुभवों
            की प्रस्तुति एवं संभावित अनुसंधान सहयोग
            का भी उल्लेख उपलब्ध विवरण में मिलता है।
          </p>

          <p>
            इन विवरणों को किसी संस्थागत समर्थन,
            आधिकारिक साझेदारी या उपचार की
            वैज्ञानिक प्रभावशीलता का प्रमाण
            नहीं माना जाना चाहिए।
          </p>
        </div>

        <div className="about-image">
        <img src={aiims} alt="Baba Swami Bhakti Prakash Ji" />
        </div>
      </section>

      {/* ================= SECTION 11: MEDIA COVERAGE ================= */}
      <section className="about-section">
        <div className="about-text">
          <h2>
            <span className="brown">मीडिया एवं</span>{" "}
            <span className="black">जनसंपर्क</span>
          </h2>

          <p>
            बाबा स्वामी भक्ति प्रकाश जी की
            शाश्वत चिकित्सा, आध्यात्मिक साधना,
            जनसेवा एवं स्वास्थ्य-जागरूकता
            से संबंधित गतिविधियों का उल्लेख
            विभिन्न उपलब्ध मीडिया सामग्रियों
            में किया गया है।
          </p>

          <h3 className="sub-heading">
            समाचार-पत्र में उल्लेख
          </h3>

          <p>
            सवेरा इंडिया टाइम्स, दमन के
            शुक्रवार, 24 मई 2024 के अंक में
            बाहुकीनाथ मंदिर परिसर में आयोजित
            तीन दिवसीय निःशुल्क चिकित्सा शिविर
            से संबंधित समाचार प्रकाशित होने
            का उल्लेख स्मारिका में है।
          </p>

          <p>
            इस शिविर में स्वामी भक्ति प्रकाश जी
            द्वारा चिकित्सा परामर्श एवं उपचार
            संबंधी सेवाएँ प्रदान किए जाने का
            विवरण दिया गया है।
          </p>

          <h3 className="sub-heading">
            मीडिया गतिविधियाँ
          </h3>

          <ul className="achievement-list">
            <li>समाचार-पत्रों की मूल कटिंग</li>
            <li>प्रेस वार्ता</li>
            <li>इंटरव्यू</li>
            <li>पॉडकास्ट</li>
            <li>समाचार चैनलों से संबंधित उपलब्ध तस्वीरें</li>
          </ul>
        </div>

        <div className="about-image">
         <img src={media} alt="Baba Swami Bhakti Prakash Ji" />
        </div>
      </section>

      {/* ================= SECTION 12: COMMUNITY SERVICE ================= */}
      <section className="about-section reverse">
        <div className="about-text">
          <h2>
            <span className="brown">आध्यात्मिक साधना</span>{" "}
            <span className="black">एवं जनसेवा</span>
          </h2>

          <p>
            स्वामी भक्ति प्रकाश जी का कार्य
            पारंपरिक आश्रमीय अध्ययन,
            आध्यात्मिक अभ्यास, प्राकृतिक जीवनशैली,
            जनसेवा तथा शाश्वत चिकित्सा के
            शिक्षण पर केंद्रित है।
          </p>

          <p>
            उनके मार्गदर्शक जीवन सूत्र
            “योगी–निरोगी–उपयोगी” के अंतर्गत
            स्वास्थ्य जागरूकता, पारंपरिक ज्ञान,
            प्रशिक्षण कार्यक्रम एवं सामुदायिक
            जनसेवा की गतिविधियाँ शामिल हैं।
          </p>

          <p>
            यह यात्रा साधना, अध्ययन,
            शिक्षण एवं समाज के बीच
            पारंपरिक ज्ञान के प्रसार
            के उद्देश्य से आगे बढ़ती रही है।
          </p>
        </div>

        <div className="about-image">
        <img src={spiritual} alt="Baba Swami Bhakti Prakash Ji" />
        </div>
      </section>

      {/* ================= SECTION 13: INSTITUTIONAL STATEMENT ================= 
      <section className="about-section">
        <div className="about-text">
          <h2>
            <span className="brown">संस्थागत</span>{" "}
            <span className="black">परिचय</span>
          </h2>

          <p>
            शाश्वत चिकित्सा से संबंधित यह परिचय
            आध्यात्मिक साधना, जनसेवा,
            स्वास्थ्य-जागरूकता एवं पारंपरिक
            ज्ञान के शिक्षण से जुड़ी
            गतिविधियों का संकलन है।
          </p>

          <p>
            इसका उद्देश्य उपलब्ध जानकारी,
            प्रशिक्षण गतिविधियों,
            अनुभवों एवं जनकल्याण से जुड़े
            कार्यों को एक व्यवस्थित रूप में
            प्रस्तुत करना है।
          </p>

          <p className="designation">
            योगी • निरोगी • उपयोगी
          </p>
        </div>

        <div className="about-image">
          <ImagePlaceholder title="Institutional Activities & Team Photographs" />
        </div>
      </section>*/}

      {/* ================= SECTION 14: CONTACT ================= */}
      {/*<section className="about-section reverse">*/}
        <div className="about-text">
          <h2>
            <span className="brown">संपर्क</span>{" "}
            <span className="black">एवं जानकारी</span>
          </h2>

          <p>
            शाश्वत चिकित्सा से संबंधित प्रशिक्षण,
            कार्यक्रमों एवं उपलब्ध जानकारियों
            के लिए संपर्क करें।
          </p>

          <ul className="achievement-list">
            <li>
              <strong>Website:</strong>{" "}
              www.shashwatchikitsa.com
            </li>

            <li>
              <strong>YouTube:</strong>{" "}
              youtube.com/@swamibhaktiprakash
            </li>

            <li>
              <strong>Team Contact:</strong> Nigam Raj
            </li>

            <li>
              <strong>Contact Number:</strong>{" "}
              +91 7970365235
            </li>

            <li>
              <strong>Alternate Number:</strong>{" "}
              +91 6390504549
            </li>
          </ul>
        </div>

        {/*<div className="about-image">
          <ImagePlaceholder title="Contact & Organization Photograph" />
        </div>
      </section>*/}

      {/* ================= RESEARCH & EVIDENCE NOTE ================= */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "40px auto",
          padding: "35px 25px",
          background: "#efe2cf",
          borderRadius: "18px",
          color: "#3f2f1f",
          lineHeight: "1.8"
        }}
      >
        <h2 style={{ color: "#8b5e34", marginBottom: "18px" }}>
          Research & Evidence Note
        </h2>

        <p>
          शाश्वत चिकित्सा से संबंधित उपचार अनुभव,
          प्रतिभागियों के परिणाम एवं चिकित्सकीय
          दावे उपलब्ध कराई गई सामग्री और
          अभ्यासकर्ताओं द्वारा साझा अनुभवों
          पर आधारित हैं।
        </p>

        <p>
          इन दावों का स्वतंत्र नैदानिक एवं
          वैज्ञानिक मूल्यांकन आवश्यक है।
          शाश्वत चिकित्सा को चिकित्सकीय
          निदान या प्रमाण-आधारित चिकित्सा
          उपचार के विकल्प के रूप में प्रस्तुत
          नहीं किया जाना चाहिए।
        </p>

        <p>
          किसी भी संस्थागत अनुसंधान सहयोग
          अथवा आधिकारिक समर्थन का उल्लेख
          संबंधित संस्था के लिखित दस्तावेज
          उपलब्ध होने पर ही किया जाना चाहिए।
        </p>
      </section>

      {/* ================= CERTIFICATE FULLSCREEN MODAL ================= */}
      {activeCert && (
        <div
          className="certificate-modal"
          onClick={() => setActiveCert(null)}
        >
          <span className="close-btn">✕</span>
          <img src={activeCert} alt="Certificate Full View" />
        </div>
      )}

    </main>
  );
};

export default About;
