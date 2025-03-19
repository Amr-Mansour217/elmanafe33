import React, { useState, useEffect,  } from 'react';
import './home.css';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
// import Logo from './imgs/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCheckCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { IoStar } from "react-icons/io5";
import Header from './header'
import Footer from './footer'

const Home = () => {

  const { t, i18n } = useTranslation();
  const [stars, setStars] = useState(0);  // Changed from rating to stars
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');  // Changed from feedback to comment
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [videos, setVideos] = useState([]);

  const handleStarClick = (selectedStars) => {
    setStars(selectedStars);  // Changed from setRating to setStars
  };

  const handleStarHover = (hoveredRating) => {
    setHoverRating(hoveredRating);
  };

  const handleStarLeave = () => {
    setHoverRating(0);
  };

  const handleCommentChange = (e) => {  // Changed from handleFeedbackChange
    setComment(e.target.value);  // Changed from setFeedback to setComment
  };

  // ... (previous imports)
    // ... (previous state declarations)
  

    
    
      // ... (previous state declarations)
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (stars === 0 || comment.trim() === '') {
          setIsErrorModalOpen(true);
        } else {
          try {
            const response = await axios.post('/feedback', {
              stars: stars,
              comment: comment
            });
            
            if (response.status === 200) {
              setIsModalOpen(true);
              setStars(0);
              setComment('');
            } else {
              throw new Error('Unexpected response from server');
            }
          } catch (error) {
            console.error('Error submitting feedback:', error);
            let errorMessage = 'An error occurred while submitting feedback.';
            if (error.response) {
              errorMessage = `Server error: ${error.response.status}`;
              if (error.response.data && error.response.data.message) {
                errorMessage += ` - ${error.response.data.message}`;
              }
            } else if (error.request) {
              errorMessage = 'No response received from server. Please check your internet connection.';
            } else {
              errorMessage = error.message;
            }
            setIsErrorModalOpen(true);
            setErrorMessage(errorMessage);
          }
        }
      };
    
      // ... (rest of the component remains the same)
    
    
  
    // ... (rest of the component)
  

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
            title: 'الأخلاق في رمضان',
            description: 'مقطع يتحث عن الاخلاق غي رمضان',
            link:"https://www.youtube.com/embed/BYkWHLm4bSk" ,
        },
        {
            id: 2,
            title: 'الحلقة الأولى | حديث رمضان | الموسم الأول عنوان الحلقة: إستقبال رمضان',
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
            title: 'Cleaning up before Ramadan - FULL LECTURE - Mufti Menk',
            description: 's a thought-provoking and insightful lecture by renowned Islamic scholar Mufti Ismail Menk. In this talk, Mufti Menk discusses the spiritual,',
            link:"https://www.youtube.com/embed/Q-eK7M4OqSo",
        },
        {
            id: 2,
            title: 'Make The Most of This Month! | Ramadan Reminder 01 | Mufti Menk',
            description: 'a useful video about how to exploit ramdan',
            link:"https://www.youtube.com/embed/ufffdfz-Wqc",
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
            title: "uran Tafseer | Juz 2 | Ramadan Special",
            description: "عقیدہ کی اہمیتعقیدہ کی اہمیت",
            link: 'https://www.youtube.com/embed/GqFrODsIPlQ?si=llaU_0ED6T2azXV1',
        },
        {
            id: 2,
            title: "رمضان کے روزوں کی فضیلت واہمیت",
            description: "عقیدہ کی اہمیتعقیدہ کی اہمیت",
            link: "https://www.youtube.com/embed/3H-5zH6ZMnw",
        },
        {
            id: 3,
            title: "عقیدہ کی اہمیت",
            description: "عقیدہ کی اہمیتعقیدہ کی اہمیت",
            link: 'https://www.youtube.com/embed/GqFrODsIPlQ?si=llaU_0ED6T2azXV1',
        },
    ],
    fr: [

      {
        id: 1,
        title: "RAMADAN : 30 JOURS POUR CHANGER - NADER ABOU ANAS",
        description: "",
        link: 'https://www.youtube.com/embed/GqFrODsIPlQ?si=llaU_0ED6T2azXV1',
    },
    {
        id: 2,
        title: "Le Ramadan - Imam Yacine [ Conférence complète en 4K ]",
        description: "",
        link:"https://www.youtube.com/embed/5ylnAaWaino",
    },
    {
        id: 3,
        title: "Le Ramadan - Imam Yacine ",
        description: "",
        link:"https://www.youtube.com/embed/5ylnAaWaino" ,
    },
      
    ],
    tr: [
      {
        id: 1,
        title: "İslam'da Ramazan ayının yeri ve önemi | Dr. Ömer Demirbağ | Ahmed Şahin | Bir Başka Ramazan",
        description: "",
        link:"https://www.youtube.com/embed/UnZNrKdizJE" ,
    },
    {
        id: 2,
        title: "Ramazan'da Bu 4 Şeyi Kesinlikle Yapın!",
        description: "",
        link:"https://www.youtube.com/embed/EG8ewqGifDg",
    },
    {
        id: 3,
        title: "DHBT MBSTS ÖABT DKAB INANÇ ESASLARI - UNITE 1 - DIN VE INANÇ 🕋",
        description: "",
        link:"https://www.youtube.com/embed/aqXM_hM20hI?list=PLTfYWRDOnXGkMUYA7kYE65D1-GoB2JpRL" ,
    },

    ],
    id: [

      {
        id: 1,
        title: "Tiga Amalan Pokok Ramadhan - Ustadz Adi Hidayat",
        description: "",
        link:"https://www.youtube.com/embed/koE44zuc_ic"  ,
    },
    {
        id: 2,
        title: "Empat Keistimewaan Ramadhan - Ustadz Adi Hidayat",
        description: "",
        link:"https://www.youtube.com/embed/GU59no0BBrw",
    },
    {
        id: 3,
        title: "Pondasi Iman - Ustadz Adi Hidayat",
        description: "",
        link:"https://www.youtube.com/embed/VYD_2fsylcM"  ,
    },

    ],
    ru: [

      {
        id: 1,
        title: "ИСТОРИЯ ПОСТА в месяц Рамадан - Доктор Закир Найк",
        description: "",
        link:"https://www.youtube.com/embed/XcdBtTBLayU"  ,
    },
    {
        id: 2,
        title: "ЧТО ТАКОЕ РАМАДАН? Рауф Гаджиев",
        description: "",
        link:"https://www.youtube.com/embed/4_p-of9xt8k",
    },
    {
        id: 3,
        title: "Правильная АКЫДА! | Вероубеждения АХЛЮ СУННА валь джамаа | Юсуф Берхудар",
        description: "",
        link:"https://www.youtube.com/embed/HTnW5v0CUCA"  ,
    },

    ],
    hi: [

      {
        id: 1,
        title: "Quran Tafseer | Juz 2 | Ramadan Special ",
        description: "",
        link:"https://www.youtube.com/embed/vtTw3SHElsQ"  ,
    },
    {
        id: 2,
        title: "Ramzan Ke Roze Ki Fazilat & Ahmiyat | رمضان کے روزوں کی فضیلت واہمیت Baseerat | بصیرت",
        description: "",
        link:"https://www.youtube.com/embed/3H-5zH6ZMnw",
    },
    {
        id: 3,
        title: "Roze ka Hukm & Roza na Rakhne wale log | روزے کا حکم نیز روزہ نہ رکھنے والے لوگ | Baseerat | بصیرت",
        description: "",
        link:"https://www.youtube.com/embed/QlTqvBVI4zI",
    },

    ],
    bn: [

      {
        id: 1,
        title: "রমযান কোরআনের মাস  ",
        description: "",
        link:"https://www.youtube.com/embed/R5wsOLKlK_E"  ,
    },
    {
        id: 2,
        title: "ভূমিকা পর্ব: তিনটি মূলনীতির ধারাবাহিক ক্লাস।আলোচকঃ আব্দুর রব আফ্ফান,দ্বীরা সেন্টার রিয়াদ সৌদি আরব।",
        description: "",
        link:"https://www.youtube.com/embed/9TkZdhf51Po",
    },
    {
        id: 3,
        title: "রমযান কোরআনের মাস",
        description: "",
        link:"https://www.youtube.com/embed/R5wsOLKlK_E",
    },

    ],
    zh: [

      {
        id: 1,
        title: "斋戒的律例",
        description: "",
        link:"https://www.youtube.com/embed/5WgqPoiqb08"  ,
    },
    {
        id: 2,
        title: "Karim Khan－關於開齋節的中文翻譯版。祝大家開齋節快樂",
        description: "",
        link:"https://www.youtube.com/embed/iMRMd-1crHQ",
    },
    {
        id: 3,
        title: "穆圣和他的同伴们怎样度过斋月——马雪平",
        description: "",
        link:"https://www.youtube.com/embed/o8koNdcRAC4",
    },

    ],
    tl: [

      {
        id: 1,
        title: "Ang kabutihan ng Ramadan at pag-aayuno",
        description: "",
        link:"https://www.youtube.com/embed/8oAv_PsVg1s"  ,
    },
    {
        id: 2,
        title: "Ang pinakamahusay na ng Ramadan",
        description: "",
        link:"https://www.youtube.com/embed/UhL6B7PTyBg",
    },
    {
        id: 3,
        title: "Umrah sa Ramadan - sa Filipino.",
        description: "",
        link:"https://www.youtube.com/embed/EyMCtF3b2VE",
    },

    ],
    fa: [

      {
        id: 1,
        title: "دروس رمضان - به زبان فارسی دروس رمضان به زبان فارسی",
        description: "",
        link:"https://www.youtube.com/embed/6ZIJ4rwiIUI"  ,
    },
    {
        id: 2,
        title: "آیا اسلام دین جدیدی است؟ به فارسی آیا اسلام دین جدیدی است؟ به زبان فارسی",
        description: "",
        link:"https://www.youtube.com/embed/8ZSg3yQM56k" ,
    },
    {
        id: 3,
        title: "دین اسلام درس زبان فارسی 1 قسمت اول",
        description: "",
        link:"https://www.youtube.com/embed/MNY4zsXXT_w" ,
    },

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
          <FontAwesomeIcon icon={i18n.dir() === 'ltr' ? faArrowRight : faArrowLeft} />
        </a>
      </div>
    </div>

    {/* ... other JSX */}
    <main className="rating-section">
        <h2 className="rating-section-title">{t('شاركنا رأيك')}</h2>
        <div className="stars-container">
          {[1, 2, 3, 4, 5].map((index) => (
            <IoStar
              key={index}
              className={`star ${(hoverRating || stars) >= index ? 'active' : ''}`}  // Changed from rating to stars
              onClick={() => handleStarClick(index)}
              onMouseEnter={() => handleStarHover(index)}
              onMouseLeave={handleStarLeave}
            />
          ))}
        </div>
        <form className="feedback-form" onSubmit={handleSubmit}>
          <textarea
            placeholder={t("اكتب تعليقك هنا...")}
            value={comment}  // Changed from feedback to comment
            onChange={handleCommentChange}  // Changed from handleFeedbackChange
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
            <p className="modal-message">{errorMessage}</p>
            <button className="modal-close-btn" onClick={closeErrorModal}>
              {t('إغلاق')}
            </button>
          </div>
        </div>
      )}
      )
      <Footer />
    </>
  );

}


export default Home;
