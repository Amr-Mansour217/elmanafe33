import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './video.css';
import Header from './header'
import Footer from './footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import i18n from './i18n';



function Videos(){
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState('all');
    const [videos, setVideos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const videosPerPage = 8;
    
    const categories = [
        { id: 'all', name: t('جميع الفيديوهات') },
        { id: 'aqeedah', name: t('العقيدة') },
        { id: 'fiqh', name: t('الفقه') },
        { id: 'tafseer', name: t('تفسير القرآن') },
        { id: 'seerah', name: t('السيرة النبوية') },
        { id: 'hadith', name: t('الحديث') },
        { id: 'akhlaq', name: t('الأخلاق') },
        { id: 'education', name: t('العلوم التربوية') },
    ]

    
    const allVideos = {
        ar: [
            {
                id: 1,
                title: 'أساسيات العقيدة الإسلامية',
                description: 'شرح لأهم أصول العقيدة الإسلامية للمبتدئين ومجمل أركان الإيمان',
                link: 'https://www.youtube.com/embed/FsDrBKQy7gM?si=h414kkga6ycM4r5o',
                category: 'aqeedah'
            },
            {
                id: 2,
                title: 'فضائل شهر رمضان',
                description: 'محاضرة عن فضائل شهر رمضان وأهميته في الإسلام',
                link: 'https://www.youtube.com/embed/ZINjuzYQxX4?si=LIMh4FGyhj_5goO6',
                category: 'fiqh'
            },
            {
                id: 3,
                title: 'السيرة النبوية',
                description: 'دروس من حياة النبي محمد صلى الله عليه وسلم',
                link: 'https://www.youtube.com/embed/tjp7wiUaPZk?si=QTrBLZ8nzMYXSliB',
                category: 'seerah'
            },
            {
                id: 4,
                title: 'شرح ثلاثة الأصول (1)',
                description: 'دروس من حياة النبي محمد صلى الله عليه وسلم',
                link: 'https://www.youtube.com/embed/R5f3FFeRtto?si=-SHbaTiMwad2OP1d',
                category: 'aqeedah'
            },
            {
                id: 5,
                title: 'السيرة النبوية',
                description: 'دروس من حياة النبي محمد صلى الله عليه وسلم',
                link: 'https://www.youtube.com/embed/tjp7wiUaPZk?si=QTrBLZ8nzMYXSliB',
                category: 'seerah'
            },
            {
                id: 6,
                title: 'فضائل شهر رمضان',
                description: 'محاضرة عن فضائل شهر رمضان وأهميته في الإسلام',
                link: 'https://www.youtube.com/embed/ZINjuzYQxX4?si=LIMh4FGyhj_5goO6',
                category: 'tafseer'
            },
            {
                id: 7,
                title: 'السيرة النبوية',
                description: 'دروس من حياة النبي محمد صلى الله عليه وسلم',
                link: 'https://www.youtube.com/embed/tjp7wiUaPZk?si=QTrBLZ8nzMYXSliB',
                category: 'seerah'
            },
            {
                id: 8,
                title: 'السيرة النبوية',
                description: 'دروس من حياة النبي محمد صلى الله عليه وسلم',
                link: 'https://www.youtube.com/embed/tjp7wiUaPZk?si=QTrBLZ8nzMYXSliB',
                category: 'seerah'
            },
            {
                id: 9,
                title: 'السيرة النبوية',
                description: 'دروس من حياة النبي محمد صلى الله عليه وسلم',
                link: 'https://www.youtube.com/embed/tjp7wiUaPZk?si=QTrBLZ8nzMYXSliB',
                category: 'seerah'
            },
            {
                id: 10,
                title: 'السيرة النبوية',
                description: 'دروس من حياة النبي محمد صلى الله عليه وسلم',
                link: 'https://www.youtube.com/embed/tjp7wiUaPZk?si=QTrBLZ8nzMYXSliB',
                category: 'seerah'
            },
        ],
        en: [
            {
                id: 1,
                title: 'Basics of Islamic Creed',
                description: 'Explanation of the most important principles of Islamic creed for beginners',
                link: "https://www.youtube.com/embed/XPOX5QedkGo?si=M0JFmuWgsHLGt6eh",
                category: 'aqeedah'
            },
            {
                id: 2,
                title: 'Virtues of Ramadan',
                description: 'Lecture on the virtues of Ramadan and its importance in Islam',
                link: "https://www.youtube.com/embed/f8PTOQFl4f4?si=d_qlbHJKMltZsNQf",
                category: 'fiqh'
            },
            {
                id: 3,
                title: 'Virtues of Ramadan',
                description: 'Lecture on the virtues of Ramadan and its importance in Islam',
                link: "https://www.youtube.com/embed/UK94ne7RrIM?si=GiFDf1xL4aDjFCu2",
                category: 'aqeedah'
            },
            {
                id: 4,
                title: 'Virtues of Ramadan',
                description: 'Lecture on the virtues of Ramadan and its importance in Islam',
                link: 'https://www.youtube.com/embed/8IoNr9Q14WI?si=lBIwXUs7MB6IUnTG',
                category: 'aqeedah'
            },
            {
                id: 5,
                title: 'Virtues of Ramadan',
                description: 'Lecture on the virtues of Ramadan and its importance in Islam',
                link: 'https://www.youtube.com/embed/6tJqEU9W4jg?si=q0Vtx54BbPBO2HMn',
                category: 'seerah'
            },
            {
                id: 6,
                title: 'Virtues of Ramadan',
                description: 'Lecture on the virtues of Ramadan and its importance in Islam',
                link: "https://www.youtube.com/embed/GIHr2PmrH_8?si=O9GaryPvxzyCqV9v",
                category: 'fiqh'
            },
            {
                id: 7,
                title: 'Virtues of Ramadan',
                description: 'Lecture on the virtues of Ramadan and its importance in Islam',
                link: "https://www.youtube.com/embed/GIHr2PmrH_8?si=O9GaryPvxzyCqV9v",
                category: 'fiqh'
            },
            {
                id: 8,
                title: 'Virtues of Ramadan',
                description: 'Lecture on the virtues of Ramadan and its importance in Islam',
                link: "https://www.youtube.com/embed/GIHr2PmrH_8?si=O9GaryPvxzyCqV9v",
                category: 'fiqh'
            },
            {
                id: 9,
                title: 'Virtues of Ramadan',
                description: 'Lecture on the virtues of Ramadan and its importance in Islam',
                link: "https://www.youtube.com/embed/GIHr2PmrH_8?si=O9GaryPvxzyCqV9v",
                category: 'fiqh'
            },
            {
                id: 10,
                title: 'Virtues of Ramadan',
                description: 'Lecture on the virtues of Ramadan and its importance in Islam',
                link: "https://www.youtube.com/embed/GIHr2PmrH_8?si=O9GaryPvxzyCqV9v",
                category: 'fiqh'
            },
            {
                id: 11,
                title: 'Virtues of Ramadan',
                description: 'Lecture on the virtues of Ramadan and its importance in Islam',
                link: "https://www.youtube.com/embed/GIHr2PmrH_8?si=O9GaryPvxzyCqV9v",
                category: 'fiqh'
            },
        ],
        ur: [  
            {
                id: 1,
                title: "عقیدہ کی اہمیت",
                description: "عقیدہ کی اہمیتعقیدہ کی اہمیت",
                link: 'https://www.youtube.com/embed/GqFrODsIPlQ?si=llaU_0ED6T2azXV1',
                category: 'aqeedah'
            },
            {
                id: 2,
                title: "عام غلطیوں کی وضاحت اور سورۃ الفاتحہ پڑھنے کا صحیح طریقہ",
                description: "عقیدہ کی اہمیتعقیدہ کی اہمیت",
                link: 'https://www.youtube.com/embed/2DmMjDj4KMQ?si=4Myueswq1qDh3Hdl',
                category: 'fiqh'
            },
            {
                id: 3,
                title: "عقیدہ کی اہمیت",
                description: "عقیدہ کی اہمیتعقیدہ کی اہمیت",
                link: 'https://www.youtube.com/embed/GqFrODsIPlQ?si=llaU_0ED6T2azXV1',
                category: 'fiqh'
            },
            {
                id: 4,
                title: "عقیدہ کی اہمیت",
                description: "عقیدہ کی اہمیتعقیدہ کی اہمیت",
                link: 'https://www.youtube.com/embed/GqFrODsIPlQ?si=llaU_0ED6T2azXV1',
                category: 'aqeedah'
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
    
    // useEffect(() => {
    //     updateVideos();
    // }, [i18n.language, activeCategory]);

    // const updateVideos = () => {
    //     const currentLanguage = i18n.language;
    //     const languageVideos = allVideos[currentLanguage] || [];
        
    //     if (activeCategory === 'all') {
    //         setVideos(languageVideos);
    //     } else {
    //         const filteredVideos = languageVideos.filter(video => video.category === activeCategory);
    //         setVideos(filteredVideos);
    //     }
    // };

    useEffect(() => {
        updateVideos();
    }, [i18n.language, activeCategory]);

    const updateVideos = () => {
        const currentLanguage = i18n.language;
        const languageVideos = allVideos[currentLanguage] || [];
        
        if (activeCategory === 'all') {
            setVideos(languageVideos);
        } else {
            const filteredVideos = languageVideos.filter(video => video.category === activeCategory);
            setVideos(filteredVideos);
        }
        setCurrentPage(1);
    };

    const handleCategoryClick = (categoryId) => {
        setActiveCategory(categoryId);
    };

    // حساب الصفحات
    const indexOfLastVideo = currentPage * videosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

    // حساب عدد الصفحات
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(videos.length / videosPerPage); i++) {
        pageNumbers.push(i);
    }

    // التنقل بين الصفحات
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    // const filteredVideos = allVideos[activeCategory] || allVideos.all;
    return (
        <>
            <Header/>
            <div className="videos-header">
                <h1>{t('مكتبة الفيديوهات الإسلامية')}</h1>
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

            <section className="videos-section">
                <div className="section-title">
                    <h2>{t('فيديوهات مختارة')}</h2>
                </div>

                <div className="videos-grid">
                    {currentVideos.map(video => (
                        <div key={video.id} className="video-card">
                            <div className="video-thumbnail">
                                <iframe src={video.link} title={video.title} allowFullScreen></iframe>
                            </div>
                            <div className="video-info">
                                <h3 className="video-title">{video.title}</h3>
                                <p className="video-description">{video.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="pagination">
                    <ul>
                        {currentPage > 1 && (
                            <li><a href="#" onClick={() => paginate(currentPage - 1)}><FontAwesomeIcon icon={faChevronRight} /></a></li>
                        )}
                        {pageNumbers.map(number => (
                            <li key={number}>
                                <a href="#" onClick={() => paginate(number)} className={currentPage === number ? 'active' : ''}>
                                    {number}
                                </a>
                            </li>
                        ))}
                        {currentPage < pageNumbers.length && (
                            <li><a href="#" onClick={() => paginate(currentPage + 1)}><FontAwesomeIcon icon={faChevronLeft} /></a></li>
                        )}
                    </ul>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Videos;