import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import './intractivefiles.css' // تأكد من إنشاء هذا الملف CSS
import Header from "./header";
import Footer from './footer';
import BookCover from './imgs/ramadan.jpg';
import BookCoverr from './imgs/ramadan-two.png';
function Intre() {
  const { t, i18n } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 8; // Adjust this number as needed

  const categories = [
    { id: 'all', name: t('جميع الكتب') },
    { id: 'aqeedah', name: t('العقيدة') },
    { id: 'fiqh', name: t('الفقه') },
    { id: 'tafseer', name: t('تفسير القرآن') },
    { id: 'seerah', name: t('السيرة النبوية') },
    { id: 'hadith', name: t('الحديث') },
    { id: 'akhlaq', name: t('الأخلاق') },
    { id: 'education', name: t('العلوم التربوية') },
  ];
  
  const allBooks = {
  ar: [
      {
        id: 1,
        title: "كتاب التوحيد",
        image: BookCover,
        description: "كتاب في أصول العقيدة الإسلامية",
        category: "aqeedah"
      },
      {
        id: 2,
        title: "فقه السنة",
        image: BookCover,
        description: "كتاب شامل في الفقه الإسلامي",
        category: "fiqh"
      },
      {
        id: 3,
        title: "تفسير ابن كثير",
        image: BookCover,
        description: "تفسير مشهور للقرآن الكريم",
        category: "tafseer"
      },
    ],
  en: [
      {
        id: 1,
        title: 'grhkrgergar',
        image: BookCoverr,
        description: "كتاب في أصول العقيدة الإسلامية",
        category: "aqeedah"
      },
      {
        id: 2,
        title: 'grhkrgergar',
        image: BookCoverr,
        description: "كتاب شامل في الفقه الإسلامي",
        category: "fiqh"
      },
      {
        id: 3,
        title: 'grhkrgergar',
        image: BookCoverr,
        description: "تفسير مشهور للقرآن الكريم",
        category: "tafseer"
      },
    ],
  ur: [
      {
        id: 1,
        title: "کتاب کا تعارف",
        image: BookCover,
        description: "كتاب في أصول العقيدة الإسلامية",
        category: "aqeedah"
      },
      {
        id: 2,
        title: "فقہ السنۃ",
        image: BookCoverr,
        description: "كتاب شامل في الفقه الإسلامي",
        category: "fiqh"
      },
      {
        id: 3,
        title: "فقہ السنۃ",
        image: BookCoverr,
        description: "تفسير مشهور للقرآن الكريم",
        category: "tafseer"
      },
    ],
  };

  useEffect(() => {
    updateBooks();
  }, [i18n.language, activeCategory]);

  const updateBooks = () => {
    const currentLanguage = i18n.language;
    const languageBooks = allBooks[currentLanguage] || [];
    
    if (activeCategory === 'all') {
      setBooks(languageBooks);
    } else {
      const filteredBooks = languageBooks.filter(book => book.category === activeCategory);
      setBooks(filteredBooks);
    }
    setCurrentPage(1);
  };

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  // Pagination logic
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(books.length / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  return (
    <>
      <Header />
      <div className="videos-header">
        <h1>{t('مكتبة الكتب الإسلامية')}</h1>
        <p>{t('مجموعة مميزة من الكتب في علوم الشريعة والسيرة النبوية')}</p>
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
          <h2>{t('كتب مختارة')}</h2>
        </div>

        <div className="videos-grid">
          {currentBooks.map(book => (
            <div key={book.id} className="video-card pdf-card">
              <div className="video-thumbnail">
                <img src={BookCover} alt={book.title} />
              </div>
              <div className="video-info">
                <h3 className="video-title">{book.title}</h3>
                <p className="video-description">{book.description}</p>
                {/* <a href={book.link} target="_blank" rel="noopener noreferrer" className="book-link">
                  {t('قراءة الكتاب')}
                </a> */}
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <ul>
            {currentPage > 1 && (
              <li><a href="#" onClick={() => paginate(currentPage - 1)}>&lt;</a></li>
            )}
            {pageNumbers.map(number => (
              <li key={number}>
                <a href="#" onClick={() => paginate(number)} className={currentPage === number ? 'active' : ''}>
                  {number}
                </a>
              </li>
            ))}
            {currentPage < pageNumbers.length && (
              <li><a href="#" onClick={() => paginate(currentPage + 1)}>&gt;</a></li>
            )}
          </ul>
        </div>
      </section>
    <Footer/>
    </>
  )
}

export default Intre