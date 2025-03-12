import React, { useState, useEffect,  } from 'react';
import './home.css';
import { useTranslation } from 'react-i18next';
// import Logo from './imgs/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCheckCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { IoStar } from "react-icons/io5";
import Header from './header'
import Footer from './footer'

const Home = () => {

  const { t, i18n } = useTranslation();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [videos, setVideos] = useState([]);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleStarHover = (hoveredRating) => {
    setHoverRating(hoveredRating);
  };

  const handleStarLeave = () => {
    setHoverRating(0);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0 || feedback.trim() === '') {
      setIsErrorModalOpen(true);
    } else {
      setIsModalOpen(true);
      // هنا يمكنك إضافة الكود لإرسال التقييم إلى الخادم
      setRating(0);
      setFeedback('');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeErrorModal = () => {
    setIsErrorModalOpen(false);
  };
  // const { t, i18n } = useTranslation();
  // const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  // const languageRef = useRef(null);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (languageRef.current && !languageRef.current.contains(event.target)) {
  //       setIsLanguageOpen(false);
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);

  // const toggleLanguageMenu = () => {
  //   setIsLanguageOpen(!isLanguageOpen);
  // };

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  //   localStorage.setItem('language', lng);
  //   setIsLanguageOpen(false);
  // };

  const allVideos = {
    ar: [
        {
            id: 1,
            title: 'أساسيات العقيدة الإسلامية',
            description: 'شرح لأهم أصول العقيدة الإسلامية للمبتدئين ومجمل أركان الإيمان',
            link: 'https://www.youtube.com/embed/FsDrBKQy7gM?si=h414kkga6ycM4r5o',
        },
        {
            id: 2,
            title: 'فضائل شهر رمضان',
            description: 'محاضرة عن فضائل شهر رمضان وأهميته في الإسلام',
            link: 'https://www.youtube.com/embed/ZINjuzYQxX4?si=LIMh4FGyhj_5goO6',
        },
        {
            id: 3,
            title: 'السيرة النبوية',
            description: 'دروس من حياة النبي محمد صلى الله عليه وسلم',
            link: 'https://www.youtube.com/embed/tjp7wiUaPZk?si=QTrBLZ8nzMYXSliB',
        },
    ],
    en: [
        {
            id: 1,
            title: 'Basics of Islamic Creed',
            description: 'Explanation of the most important principles of Islamic creed for beginners',
            link: "https://www.youtube.com/embed/XPOX5QedkGo?si=M0JFmuWgsHLGt6eh",
        },
        {
            id: 2,
            title: 'Virtues of Ramadan',
            description: 'Lecture on the virtues of Ramadan and its importance in Islam',
            link: "https://www.youtube.com/embed/f8PTOQFl4f4?si=d_qlbHJKMltZsNQf",
        },
        {
            id: 3,
            title: 'Virtues of Ramadan',
            description: 'Lecture on the virtues of Ramadan and its importance in Islam',
            link: "https://www.youtube.com/embed/UK94ne7RrIM?si=GiFDf1xL4aDjFCu2",
        },
    ],
    ur: [  
        {
            id: 1,
            title: "عقیدہ کی اہمیت",
            description: "عقیدہ کی اہمیتعقیدہ کی اہمیت",
            link: 'https://www.youtube.com/embed/GqFrODsIPlQ?si=llaU_0ED6T2azXV1',
        },
        {
            id: 2,
            title: "عام غلطیوں کی وضاحت اور سورۃ الفاتحہ پڑھنے کا صحیح طریقہ",
            description: "عقیدہ کی اہمیتعقیدہ کی اہمیت",
            link: 'https://www.youtube.com/embed/2DmMjDj4KMQ?si=4Myueswq1qDh3Hdl',
        },
        {
            id: 3,
            title: "عقیدہ کی اہمیت",
            description: "عقیدہ کی اہمیتعقیدہ کی اہمیت",
            link: 'https://www.youtube.com/embed/GqFrODsIPlQ?si=llaU_0ED6T2azXV1',
        },
    ],
    fr: [
      
    ],
    tr: [

    ],
    id: [

    ],
    ru: [

    ],
    hi: [

    ],
    bn: [

    ],
    zh: [

    ],
    tl: [

    ],
    fa: [

    ],
}

useEffect(() => {
  const currentLanguage = i18n.language;
  setVideos(allVideos[currentLanguage] || allVideos.en);
}, [i18n.language]);

useEffect(() => {
  if (isModalOpen) {
    const timer = setTimeout(() => {
      setIsModalOpen(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }
}, [isModalOpen]);





  return (
    <>
    <Header />
    <aside className="hero">
      <div className="hero-pattern"></div>
      <div className="hero-content">
        <h1>{t('منافع للعلوم الإسلامية')}</h1>
        <p>
          {t('منصة تعليمية إسلامية متكاملة تقدم دروساً ومحاضرات في العلوم الشرعية والتربوية بأسلوب عصري مُيسّر')}
        </p>
      </div>
      <div className="hero-shape">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </aside>
    <div className="videos-section">
      <div className="section-title">
        <h4>{t('أحدث الدروس')}</h4>
        <div className="ornament">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      <div className="videos-grid">
      {videos.map(video => (
            <div className="video-card" key={video.id}>
              <div className="video-thumbnail">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={video.link} 
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            <div className="video-info">
              <h3 className="video-title">{video.title}</h3>
              <p className="video-desc">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="more-btn-container">
        <a href="/videos" className="more-btn">
          {t('عرض المزيد من الدروس')}
          <FontAwesomeIcon icon={faArrowLeft} />
        </a>
      </div>
    </div>

    <main className="rating-section">
        <h2 className="rating-section-title">{t('شاركنا رأيك')}</h2>
        <div className="stars-container">
          {[1, 2, 3, 4, 5].map((index) => (
            <IoStar
              key={index}
              className={`star ${(hoverRating || rating) >= index ? 'active' : ''}`}
              onClick={() => handleStarClick(index)}
              onMouseEnter={() => handleStarHover(index)}
              onMouseLeave={handleStarLeave}
            />
          ))}
        </div>
        <form className="feedback-form" onSubmit={handleSubmit}>
          <textarea
            placeholder={t("اكتب تعليقك هنا...")}
            value={feedback}
            onChange={handleFeedbackChange}
          ></textarea>
          <button type="submit" className="submit-btn">{t("إرسال التقييم")}</button>
        </form>
      </main>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="success-modal">
            <div className="success-icon">
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <h3 className="modal-title">{t('تم بنجاح!')}</h3>
            <p className="modal-message">{t('تم إرسال تقييمك بنجاح، شكراً لك!')}</p>
            <button className="modal-close-btn" onClick={closeModal}>
              {t('إغلاق')}
            </button>
          </div>
        </div>
      )}
      
      {isErrorModalOpen && (
        <div className="modal-overlay">
          <div className="error-modal">
            <div className="error-icon">
              <FontAwesomeIcon icon={faCircleXmark} />
            </div>
            <h3 className="modal-title">{t('خطأ!')}</h3>
            <p className="modal-message">{t('يرجى اختيار عدد النجوم وكتابة تعليق قبل الإرسال')}</p>
            <button className="modal-close-btn" onClick={closeErrorModal}>
              {t('إغلاق')}
            </button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Home;
