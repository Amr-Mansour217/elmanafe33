import React, {useState} from 'react';
// import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import './intractivefiles.css' // تأكد من إنشاء هذا الملف CSS
import Header from "./header";
import Footer from './footer';
import RamadanPic from './imgs/ramadan.jpg';
function Intre() {
  const { t } = useTranslation();

  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: t('جميع الفيديوهات') },
    { id: 'aqeedah', name: t('العقيدة') },
    { id: 'fiqh', name: t('الفقه') },
    { id: 'tafseer', name: t('تفسير القرآن') },
    { id: 'seerah', name: t('السيرة النبوية') },
    { id: 'hadith', name: t('الحديث') },
    { id: 'akhlaq', name: t('الأخلاق') },
    { id: 'education', name: t('العلوم التربوية') },
  ];
  
  const allVideos = [
    {
      id: 1,
      title: "فضائل رمضان",
      image: RamadanPic,
      description: "شرح فضائل شهر رمضان المبارك",
      category: "all"
    },
    {
      id: 2,
      title: "أحكام الصلاة",
      image: "/path/to/prayer-image.jpg",
      description: "شرح مفصل لأحكام الصلاة",
      category: "aqeedah"
    },
    {
      id: 3,
      title: "تفسير سورة البقرة",
      image: "/path/to/tafseer-image.jpg",
      description: "تفسير مفصل لسورة البقرة",
      category: "fiqh"
    },
    // يمكنك إضافة المزيد من الفيديوهات هنا
  ];

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const filteredVideos = activeCategory === 'all' 
    ? allVideos 
    : allVideos.filter(video => video.category === activeCategory);
  
  return (
    <>
    <Header />
    <div className="videos-header">
            <h1>{t('مكتبة الكتب الإسلامية')}</h1>
            <p>{t('مجموعة مميزة من المحاضرات والدروس في علوم الشريعة والسيرة النبوية')}</p>
            </div>
    <div className="video-categories">
        <ul>
          {categories.map(category => (
            <li key={category.id}>
              <a 
                href="#" 
                className={activeCategory === category.id ? 'active' : ''}
                onClick={() => handleCategoryClick(category.id)}
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>
    </div>

    
      <div className="content-wrapper">
        <section className='videos-section'>
        <div class="section-title">
            <h2>{t('كتب مختارة')}</h2>
        </div>
          <div className="videos-grid">
            {filteredVideos.map(book => (
              <div key={book.id} className="video-card pdf-card">
                <div className="video-thumbnail">
                  <img src={book.image} alt={book.title} />
                </div>
                <div className="video-info">
                  <h3 className="video-title">{book.title}</h3>
                  <p className="video-description">{book.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    <Footer/>
    </>
  )
}

export default Intre