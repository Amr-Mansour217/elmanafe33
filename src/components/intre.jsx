import React, { useState, useEffect } from 'react';
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
  ];
  
  const allBooks = {
  ar: [
      {
        id: 1,
        title: "كيفية زيارة مسجد الرسول",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1hv72fKhQG1m2whBBqDTS63ieVNLPsu2i/preview"
      },
      {
        id: 2,
        title: "من معجزات النبي",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1YfWpJcysDhW6plIH-QJ0sDc-wpcKkDPV/preview"
      },
      {
        id: 3,
        title: "رسالة في فقه الميسر",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1gy-qFZrmnMEDFiZXiTHZRSwwsNr1lu3Y/preview"
      },
      {
        id: 4,
        title: "صفحة الحج واحكام الزيارة",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1RZWCnHbMOL5x_6_mMZRTe6LM9ECqlHSa/preview"
      },
      {
        id: 5,
        title: "الحج والعمرة (سؤال وجواب)",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1LUcNUCBP5I8pueN_frd7f4lvdYJn3vjc/preview"
      },
      {
        id: 6,
        title: "ثلاثة الاصول وادلتها",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1Vvckj_lk3XjBXMjoxTinXhwNgsCWPxoL/preview"
      },
      {
        id: 7,
        title: "المدينة المنورة (فضائلها - المسجد النبوي - الحجرة النبوية)",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1W8ZkOA_3SHdrcHvVJ1YCM81DdkJeY21y/preview"
      },
      {
        id: 8,
        title: "العقيدة الصحيحة وما يضادها",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1rZZrbriz1abdKqL9X_K7owUQ8vuNRz85/preview"
      },
      {
        id: 9,
        title: "كيف اصلي",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1AjkIZCRQZa4TB7ES2XbOzUzVS8_xJEyY/preview"
      },
      {
        id: 10,
        title: "مجموعة الاحاديث النبوية",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1fTtMKPqeVfZP87snatLhAUBppX7Vgjzb/preview"
      },
    ],
  en: [
      {
        id: 1,
        title: 'The True Religion of God',
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1tKNqOde60ryRX-F5-Z201AHx7MdBNVKt/preview"
      },
      {
        id: 2,
        title: 'The Obligation of Adhering to the Sunnah',
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1tmgYmM-s7Hx-wSVyR5j2XitN3ZGkcl0E/preview"
      },
      {
        id: 3,
        title: 'The Authenic Creed',
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1QmZaAT6WiN4YPO3oRcJmpjMd9Dm9N4Vi/preview"
      },
      {
        id: 4,
        title: 'The Massenger Of Islam Muhammad',
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1_NkRkm_vDQXyHIh8csJCQbvomwSp6YYO/preview"
      },
      {
        id: 5,
        title: 'Iam Muslim',
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1bW0l_BnLhuBphUvpHcZX5kNNVNohgdTp/preview"
      },
      {
        id: 6,
        title: 'Islam: The Religion of all Prophets',
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1snyIiXw13ujN0BMUrmt12efXz8PvYjWx/preview"
      },
      {
        id: 7,
        title: 'THE RELIGION OF ADAM AND EVE',
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/18-wqYd6YiOWD58mQjhFBEAB7qOag5FNa/preview"
      },
      {
        id: 8,
        title: 'The Three Fundamental Principles of Islam and TheirProofs',
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1KK95Op49ewAnSQoX1_M88h1RC3ljTvBg/preview"
      },
      {
        id: 9,
        title: 'WHO CREATED ME AND WHY ?',
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1LhSWcfko2YNRr3VwEcddU9D1iE9CETEd/preview"
      },
    ],
  ur: [
      {
        id: 1,
        title: "ہمارا اہل سنت پر اعتماد ہے۔",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1jrd6YZxKbCmRH-dO6w1Dwgx65WNmSGTF/preview"
      },
      {
        id: 2,
        title: "ِصفاکیاغیپم",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/15u1v1s0zCEM_ZKK-_7-THlN1NqArhySs/preview"
      },
      {
        id: 3,
        title: "تّنُس وبنیصلى الله عليه وسلم رپلمع اوردبتع",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1W5KNSxzaHREeK08474cxKOKwzzemx2ro/preview"
      },
      {
        id: 4,
        title: "روسلصلى الله عليه وسلمیک تنس رپ لمع وابج ےہ",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1ygo4JGrMP_FxlPEEBDslpInBLHyljCDa/preview"
      },
      {
        id: 5,
        title: "املسمونں ےک ےیلصتخم اور یفم ولعمامت",
        image: BookCoverr,
        description: "كتاب شامل في الفقه الإسلامي",
        link: "https://drive.google.com/file/d/1HvVxfavCZeN45fhGqIQDcn_QetfykyRz/preview"
      },
      {
        id: 6,
        title: "ںیم املسمن وہں",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1dXD1Kjxye2bmreYQ1kcUkh8Gqg35rKsd/preview"
      },
      {
        id: 7,
        title: "اسالمى عقيده كا مختصر",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1-HiOW-mSG_peJvgd5rgiUiRAWeaOQ-jd/preview"
      },
      {
        id: 8,
        title: "میری حضرت عیسیٰ علیہ السلام سے بڑی محبت ہے۔",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1b0Z-1raAmuUZyLthAhKt_Xp78Xk1juqR/preview"
      },
      {
        id: 9,
        title: "صحیح عقیدہ، اس کی مخالفچیزیں اور نواقض اسالم",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1UacVUr8e99WsX2Bi_TsfuGZnPJxvE0zA/preview"
      },
      {
        id: 10,
        title: "�آن �� �� �؟",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1LlvrodzIrWTjBc66k5XKOWnBZa4wcCoi/preview"
      },
      {
        id: 11,
        title: "نیت اینبد ی ا ںیت ا و ر ا ن ےک د اللئ",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1RKgClbq5o5vzdke4UY8poT0053la2rcH/preview"
      },
      {
        id: 12,
        title: "لاالسم محم صلى الله عليه وسلم روس",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/14yKbAmUJtbBHbKpQsyEL5CuijKrK6Jtq/preview"
      },
      {
        id: 13,
        title: "ذم ہ ب االسم اک اکی رصتخم ق",
        image: BookCover,
        description: "كتاب في أصول العقيدة الإسلامية",
        link: "https://drive.google.com/file/d/19-yUugOxq7jEwYO42xsC64hXvF_00tWF/preview"
      },
      {
        id: 14,
        title: "مجھے کس نے پیدا کیا؟ اور کیوں؟ ہر ایک چیز خالق کے وجود پر دلالت کرتی ہے۔",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1nSdmAobcwXsT7ZazBYcnMncsVrQbLYVO/preview"
      },
      
    ],
    id:[
      {
        id: 1,
        title: "Dzikir",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1J4XTx82MjTmwCMTFUoMhvu_cHjwR6sWF/preview"
      },
      {
        id: 2,
        title: "DIALOG ANTARA PROFESOR ATEIS DAN PELAJAR MUSLIM",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1_7bmBruPPw3G59oaJWnRWjL1XHUECxI8/preview"
      },
      {
        id: 3,
        title: "Benteng Muslim",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1X9Y4fRM_7YaqfyiW8SOP6fufJrI27Ecm/preview"
      },
      {
        id: 4,
        title: "islam_religi",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1WYmxOP8RC2r2m3z5-_co3gJpOgPFBu0H/preview"
      },
      {
        id: 5,
        title: "RUKUN IMAN",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/10nuHQ_1tZtePse75BzCbZsKTOp_Wd4aW/preview"
      },
      {
        id: 6,
        title: "Para Nabi",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1gcbUvIg7l59899AJ78L5S-wuUwcJVvpw/preview"
      },
      {
        id: 7,
        title: "TIGA ASAS UTAMA",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1dNLKdvc3pCvuUO7u0vaGNCBWlpQuoeI0/preview"
      },
      {
        id: 8,
        title: "Sepuluh terakhir",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1MKwKVe7qjZVCV0yzjTqsNcAjCDCAb6_P/preview"
      },
      {
        id: 9,
        title: "DOA",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1US4LEWnEyjs6HL3OndNSmKszgveXaPQL/preview"
      },
      {
        id: 10,
        title: "TANDA-TANDA BUKTI KENABIAN",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/11xqxQexNFduZUBWVoYTeT2wMLJN_Y8Ha/preview"
      },

    ],
    bn:[
      {
        id: 1,
        title: "তিনটি মূলনীতি এবং তার প্রমাণপত্র",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/14WdMnmDoVUcr4OjBVq7CBkFFHVbGyW2Q/preview"
      },
      {
        id: 2,
        title: "কুরআন ও হাদীসের আসল আকীদা ",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/16_k_fGAKfxy0NnrVOgx_XvkwmHmAmNJH/preview"
      },
      {
        id: 3,
        title: "ঈমানের মূলেীতিসমূনের ব্যাখ্যা",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/13KXVYblBaUp74In9EflEW8I1DjW1Fma-/preview"
      },
      {
        id: 4,
        title: "ইসলােমর সিচতৰ্ গাইড",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1LGNnQuwGgPE23-ZBGdo-lX7-Nb5jVavn/preview"
      },
      {
        id: 5,
        title: "নবীদের প্রার্থনা",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1cFg4eeFbhi-ZvklA8C8KNA78GIVJ72Q_/preview"
      },
      {
        id: 6,
        title: "রাসুলুল্লাহ্ এর সুন্নত অনুযায়ী কাজ করা ফরজ এবং যে এটি অস্বীকার করবে সে কাফের।",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1J4g-XamOEoNR429d8nrKWe3emsU2eRaH/preview"
      },
      {
        id: 7,
        title: "সুন্নাতে রাসূলুল্লাহ্ অনুযায়ী চলা এবং বিদ‘আত থেকে বাঁচা।",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1sottcutZZck3n6-rmSVwn8qEcEnogIo9/preview"
      },
      {
        id: 8,
        title: "মুসলিম মর্যাদা এবং চরিত্র সংলিপ্তভাবে।",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1Zx7YOIZGa-wgMeULVdC4A9nP-bvOUuIU/preview"
      },
      {
        id: 9,
        title: "আপনি যদি মুসলিম হওয়ার সিদ্ধান্ত নেন, তাহলে আপনাকে যা করতে হবে:",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1dAy7dF02559rz1AgWF82-TwRlg6J5Sa_/preview"
      },
      {
        id: 10,
        title: "ইসলামের রাসূল হযরত মুহাম্মদ সাল্লাল্লাহু ‘আলাইহহ ওয়াসাল্লাম",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1InnMq6zk0_JMiffvckPW7GXYTEkKv4DA/preview"
      },
      {
        id: 11,
        title: "ইসলাম একটি পূর্ণাঙ্গ ধর্ম।",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1D4LDGIZSbM22bL3JfFs3DBEyFzvWWESw/preview"
      },
      {
        id: 12,
        title: "সর্বসাধারণের জন্য গুরুত্বপূর্ণ পাঠ্যবই।",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1F5OIX081xyE5fAWaA4Ct9KvCfGLe_nv-/preview"
      },
      {
        id: 13,
        title: "সঠিক আকীদা এবং যা তার বিপরীত।",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1-qcbjEJoqesJDb2Cc_ujSBmUt33xtD54/preview"
      },

    ],
    
      tr:[
        {
          id: 1,
          title: "Dinde Üç Temel Esas ve Delilleri",
          image: BookCover,
          description: "",
          link: "https://drive.google.com/file/d/1kGVxy2FRpnXKthoRXrRHdbojjFZf5UZO/preview"
        },
        {
          id: 2,
          title: "Peygamberlerin duası ",
          image: BookCoverr,
          description: "",
          link: "https://drive.google.com/file/d/1YhBP4DcYE0LOQabk2_YbAw5aBujHqVMv/preview"
        },
        {
          id: 3,
          title: "İSLÂM ESASLARI ŞERHİ",
          image: BookCoverr,
          description: "",
          link: "https://drive.google.com/file/d/1wa0tGVzbXUUCkqjLyVTuRFacWJlXE0bj/preview"
        },
        {
          id: 4,
          title: "RASÛLULLAH -sallallahu aleyhi ve sellem-'in SÜNNETİNE GÖRE HAREKET ETMEK FARZDIR ve BUNU İNKÂR ETMEK KÜFÜRDÜR",
          image: BookCover,
          description: "",
          link: "https://drive.google.com/file/d/1t3rckKne2uFCEv63b5kvL4Y6Dlc8LB-j/preview"
        },
        {
          id: 5,
          title: "İslâm",
          image: BookCoverr,
          description: "",
          link: "https://drive.google.com/file/d/1xEIrRcla1hhZw5vshR6i6ej_2b7EajFZ/preview"
        },
        {
          id: 6,
          title: "İSLÂM PEYGAMBERİ MUHAMMED -SALLALLAHU ALEYHİ VE SELLEM-",
          image: BookCoverr,
          description: "",
          link: "https://drive.google.com/file/d/1z8J12aZ5gcYy6xzsaFgWsHPDjttKbD1A/preview"
        },
        {
          id: 7,
          title: "Ben Müslümanım",
          image: BookCover,
          description: "",
          link: "https://drive.google.com/file/d/1KrZC39el8NoTS7Mfw19Wnm6qB1fZoYpF/preview"
        },
        {
          id: 8,
          title: "KUR'AN-I KERİM NEDİR?",
          image: BookCoverr,
          description: "",
          link: "https://drive.google.com/file/d/1qdoFpLDaNBfxNne4CFAZV6vW9A8-Sjq5/preview"
        },
        {
          id: 9,
          title: "ALLAH'IN G÷NDERDİĞİ RAS¤LLERİN DİNİDİR",
          image: BookCoverr,
          description: "",
          link: "https://drive.google.com/file/d/1PM6CNZvIGk1Sl68IYCtPjkwHnzpLrU1K/preview"
        },
        {
          id: 10,
          title: "KISA VE TASVİRLİ İSLAM’I ANLAMA REHBERİ",
          image: BookCover,
          description: "",
          link: "https://drive.google.com/file/d/1VUl-J4PSsxtIwKRT0vJXtFdNWTxIZYEj/preview"
        },
        {
          id: 11,
          title: "Doğru İnanç ve Ona Aykırı Olan Şeyler.",
          image: BookCover,
          description: "",
          link: "https://drive.google.com/file/d/10X7z1wmLmrjZQwTWYY_OknqjMo6IvJ3M/preview"
        },
        {
          id: 12,
          title: "Sadece Bir Mesaj!",
          image: BookCover,
          description: "",
          link: "https://drive.google.com/file/d/1zozJf4Kv9s0My_nN1ziKS2iZf4pJARO-/preview"
        },
        {
          id: 13,
          title: "HAYIZ VE LOHUSALIK HÜKÜMLERİNDE ALTMIŞ SORU",
          image: BookCover,
          description: "",
          link: "https://drive.google.com/file/d/1_Lqogh5q9ZzRQ9Ot9ztX4F_OTFRRW6if/preview"
        },
        {
          id: 14,
          title: "Gençler İçin Ehl-i Sünnet Akîdesi",
          image: BookCover,
          description: "",
          link: "https://drive.google.com/file/d/1YE56Q7_ic0nkp7pwd5n3RGayy3m_WH5c/preview"
        },
  
      ],
    ru:[

      {
        id: 1,
        title: "КРАТКОЕ ИЛЛЮСТРИРОВАННОЕ РУКОВОДСТВО ДЛЯ ПОНИМАНИЯ ИСЛАМА",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1vgYsm42yPGCVof0SaMaTNOBNJSNAjUr3/preview"
      },
      {
        id: 2,
        title: "Как совершал молитву Пророк да благословит его Аллах и приветствует",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1J9cQoUTCUSDGeTC9QzwQVyYlNLiM1vcT/preview"
      },
      {
        id: 3,
        title: "Правильные вероубеждения и то, что им противоречит",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1o0qS5wzGxqHLOk1nNphIhJFrz-OagCMW/preview"
      },
      {
        id: 4,
        title: "Только для бесплатного распространения",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1UGMnM_DlGf3dbIe8uKA5DhqV634WGmQe/preview"
      },
      {
        id: 5,
        title: "Я — МУСУЛЬМАНИН",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1QHrpR3c0iJxaX4D6l5OjI_loAMAe2gUB/preview"
      },
      {
        id: 6,
        title: "Что такое Священный Коран?",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1FwLBNJrQA3lKUIXFtWYodj5GMh-0YVML/preview"
      },
      {
        id: 7,
        title: "Краткий справочник для принявшего ислам",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1mtYcXwIgy3oMwa2W6-uSBfB0vzUwCqtr/preview"
      },
      {
        id: 8,
        title: "Ислам — Господь миров.",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1jS3xfsG7W3W40fR5tKSHE_dmuFv4vPUY/preview"
      },
      {
        id: 9,
        title: "Три основы и их доказательства",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1U8khPY6KnflR9Seizr3xo0LXH081jxCK/preview"
      },
      {
        id: 10,
        title: "КРАТКОК ИЗЛОЖЕНИЕ ИСЛАМСКИХ УБЕЖДЕНИЙ",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1zATfN5iRWcm2sbcM77gHx88Xhv5ZooPE/preview"
      },
      {
        id: 11,
        title: "Ислам Краткое описание религии Ислам, основанное на Коране и Сунне",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1H_NTYZ2u2dN6p3UzG2GVu6LAh4cYzNlc/preview"
      },
      {
        id: 12,
        title: "Посланник ислама Мухаммад (мир ему и благословение Аллаха)",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1iv_WfKRc6Hyh8Rea9LSzTpj-vYU8Hgcg/preview"
      },
      {
        id: 13,
        title: "60 ВОПРОСОВ",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1QEK4-475Ag-yJcw11RdJDGWUi6DiErwg/preview"
      },
      {
        id: 14,
        title: "Упрощённая акыда из Священного Корана и Пречистой Сунны",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1ej-udG5yQs1ZG1RT_65TwJWAG03Hk4Pi/preview"
      },
      {
        id: 15,
        title: "Кто меня сотворили зачем?Всё",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/16Iuqva0MnKhGhv104-hdckYS4t-H8eGX/preview"
      },

    ],
    zh:[
      {
        id: 1,
        title: "《古兰》与《圣训》中的祈祷词",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/151wdCEFzmSKTVX9eYBpLAQFxLrARGHHa/preview"
      },
      {
        id: 2,
        title: "这些翻译传达了“向广大国家传授重要教训”的意思。",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1Jsu0hDZfn6W9noEOwmleE5gfw02ta-mY/preview"
      },
      {
        id: 3,
        title: "一脉相承的使命",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1WEJ59U-1aA2pF2_URUbn3xuPmezotPhF/preview"
      },
      {
        id: 4,
        title: "先知的礼拜方式",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1Z_yhIHXQs2Yxl8XnEPTa53ZBoF94GaCV/preview"
      },
      {
        id: 5,
        title: "奉普慈特慈的安拉之名",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1eOj5MsT6qWcdBg07PhRq1WdweaE9zMOF/preview"
      },
      {
        id: 6,
        title: "正确的信仰",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1BdELoY0CzMfhMxALrqjaVaTxnGrztKaI/preview"
      },
      {
        id: 7,
        title: "三项根本",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1tmvHgUh2_Gk0GeoV4IBkq-CqjD_sziRw/preview"
      },
      {
        id: 8,
        title: "真主的真实宗教 ",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1GcpzBkwLbh5DMxyga1jpfa9qNHeQtXef/preview"
      },
      {
        id: 9,
        title: "《古兰经简介》",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1nrmyncb7uCC7z1LHhP9h8sN-pa4KCLMx/preview"
      },
      {
        id: 10,
        title: "穆斯林儿童必知",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/12zxgO3bd4tEr4r9JGMaNafnBbfsnizwj/preview"
      },
      {
        id: 11,
        title: "伊斯兰 符合人之天性、理性 及带给人幸福的宗教",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1GNcNuWcLBcvNVtwKWyHIOY5-DfIbKCyE/preview"
      },
      {
        id: 12,
        title: "新穆简明读本",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1WAWCvnOkandjIArnVC6QDX6O-OsE5f5p/preview"
      },
      {
        id: 13,
        title: "谁创造了宇宙?谁创造 了我?为什么?",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1QtTvA_i5vjZNSKzFr0j5tj5_0Tb2_ZCq/preview"
      },
      {
        id: 14,
        title: "伊斯兰教",
        image: BookCover,
        description: "",
        link:"https://drive.google.com/file/d/1VZso4GesjlcR5JkWhoAMAn0qdkh1Gt0I/preview",
      },
    ],
    fa:[
      {
        id: 1,
        title: "حقيقت انسان از ديدگاه اسلام",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/15cl3h1tq3tEOQHO0Eraavat6_fKnmrn2/preview"
      },
      {
        id: 2,
        title: "سه اصل بزرگ اسلام",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1UmM2mHBKXR6ayPW2NJVjK-89z9FyQvgD/preview"
      },
      {
        id: 3,
        title: "خالصه ای در عقیده اسلامی",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1TCPX9z79WQjxcPVNn5A906d7vjYh5e4y/preview"
      },
      {
        id: 4,
        title: "اسالم",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1T1U1s5eUY__uDZ44o9G8CoBbaP67JvMA/preview"
      },
      {
        id: 5,
        title: "قرآن کریم چیست؟",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/184dsjU11gg__AYOYDSxq2mcrN1vdJcBW/preview"
      },
      {
        id: 6,
        title: "� اسلام دین پ�ام�ان است",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/14ol3wf-N4wm-spIuvr6_bi1uvANKTiNT/preview"
      },
      {
        id: 7,
        title: "مخترصومفید، برایمسلمان جدید",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1mFYQfFDnWhJsPidfAkUZMJUTMpv71Cw4/preview"
      },
      {
        id: 8,
        title: "پیامبر اسلام محمد صلی اللہ علیہ وسلم",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1J6qVPwBa44zLKONE3JK6ZWwZwayfiQFh/preview"
      },
      {
        id: 9,
        title: "من مسلمانم",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1nrTKZB7sfoNKQ2JDIsykKNCG6cFyM0C8/preview"
      },
      {
        id: 10,
        title: "چگونه نماز بخوانم؟",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1OfyS8u9dQl91Frqyh0fvL5rtAmkoKNAz/preview"
      },
      {
        id: 11,
        title: "چگونه وضو بگیرم؟",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/11s6FusNInOmo6Qevt3qgQKsojt3BeGP5/preview"
      },
      {
        id: 12,
        title: "بيان معاني قرآن كريم",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1kHCUzQ3g-GxDnNaKbzhGd9KberwunBpc/preview"
      },
      {
        id: 13,
        title: "اعتقاد آسان",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/135Cbu8801GMfmEAy4mhmzpPmK8st-C4i/preview"
      },
    ],
    fr:[
      {
        id: 1,
        title: "L’obligation de se conformer à la Sunna du Prophète (S)",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1p6cK89eaiNs-SitAt7l9xSMwAv1CxiNx/preview"
      },
      {
        id: 2,
        title: "L'Islam est lareligion des Messagers d'Allah",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1uy1hTeX5JajiBv01_M1ZAjBvNTXayN7q/preview"
      },
      {
        id: 3,
        title: "Le Livre du Monothéisme",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1T0BHcO0sAee84Eomp6dq0sykMkqH3Phu/preview"
      },
      {
        id: 4,
        title: "Comment le Prophète a prié",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1elEWlauOXP8jeEsTg7uIFj2pseHn78OF/preview"
      },
      {
        id: 5,
        title: "L'Islam est lareligion desMessagers d'Allah",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1uy1hTeX5JajiBv01_M1ZAjBvNTXayN7q/preview"
      },
      {
        id: 6,
        title: "Le Livre du Monothéisme",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1T0BHcO0sAee84Eomp6dq0sykMkqH3Phu/preview"
      },
      {
        id: 7,
        title: "LA RELIGION D’ADAM ET EVE !",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1l9ig7RXNjwBZa6ERkdTnOybtYbHo_nQP/preview"
      },
      {
        id: 8,
        title: "L'Islam ",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1nwBYQGftcOyJJPnOgvMkaCMe5tDsmDm7/preview"
      },
      {
        id: 9,
        title: "JE SUIS MUSULMAN",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1qDSVokm4aB8adR1tWo-bYAOIV-jJRpkh/preview"
      },
      {
        id: 10,
        title: "La vraie Religion",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1nBAKALuLIlrVN1ULpO3hZVHPO7GryP0W/preview"
      },
      {
        id: 11,
        title: "la croyance",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/15nHaL0xzmGG3Wdus938FfoN5WdZJ38F4/preview"
      },
      {
        id: 12,
        title: "Les leçons importantes pour l'ensemble de la nation",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1KEB5YD9pPcY0EmmA82PUB6tgGVbxc5jM/preview"
      },
    ],
    tl:[

      {
        id: 1,
        title: "Ang maikling paglalarawan ng pamamatnubay tungo sa pag-unawa sa Islam.",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1bnFDBmg7MeXxC3O4d0yhMhsa_QiqjwE6/preview"
      },
      {
        id: 2,
        title: "PAGPAPALIWANAG SA MGA SALIGAN NG PANANAMPALATAYA Shar'h Usool Al Eeman.",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1177c8RlqO3q2vzATMzMcBQMj1kbI8nay/preview"
      },
      {
        id: 3,
        title: "alsunna",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1hkc5XdSo4mGpfVEUzSNY9S6-p_pDhFH0/preview"
      },
      {
        id: 4,
        title: "ay Relihiyon ng mga Sugo ni Allāh",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1AvmqfwUZvxVx93SQ11aKtzdRa7Skpj3e/preview"
      },
      {
        id: 5,
        title: "Ang relihiyon nina Adan at Eva.",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1BNNehZt2gwCI1cwBr7aNs7CsWknITVqU/preview"
      },
      {
        id: 6,
        title: "Sa ngalan ni Allāh, ang Napakamaawain, ang Maawain",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1jMWZlWMQ5iDbZMDOzBcXN5zxnq6HaQE0/preview"
      },
      {
        id: 7,
        title: "Ang Relihiyong Islām",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1krAnV8ypWN2Hrd-2ChV_j8lVsfXVSGvf/preview"
      },
      {
        id: 8,
        title: "Serye ng Unang Araw Ko Sa Islām ",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1Ao4EokarLFG6C_zg19G6iOI2psUJZCHj/preview"
      },
      {
        id: 9,
        title: "Ang Dakilang Pag-ibig ko kay Hesus Ang Naghatid sa Akin sa Islam.",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1gsVQ2viFEjOK1oClfmJlGrfNI8IXv3Le/preview"
      },
      {
        id: 10,
        title: "ANG TUMPAK NA PANINIWALA AT ANG SUMASALUNGAT DITO AT ANG MGA TAGASIRA NG ISLĀM",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1fObFmvARhlKoEV0WJq5WURBtFU2cKDsg/preview"
      },
      {
        id: 11,
        title: "Isang Mensahe Hinggil sa mga Pagdurugong Likas sa mga Babae.",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1j0ShpBSdeNUxN2R43I4sEz4oxqi2oPjK/preview"
      },
      {
        id: 12,
        title: "60 TANONG HINGGIL SA MGA PATAKARAN NG REGLA AT NIFĀS.",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/11AbXfAyjT-quMKlCtYLK5VzJAHBLKHCq/preview"
      },
      {
        id: 13,
        title: "ANG SUGO NG ISLAM NA SI MUḤAMMAD – BASBASAN SIYA NI ALLAH AT PANGALAGAAN.",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1XISX9TVlCBFSTVis_1sNYJW1uOOei9pJ/preview"
      },
      {
        id: 14,
        title: "Kapaki-pakinabang na Buod sa Talambuhay at Katangian ng Hinirang na Propeta.",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1fQsQSUr9IPmf8egf_NnZ2W9YEvDm6f2f/preview"
      },
      {
        id: 15,
        title: "Ang Tatlong Batayan at ang mga Patunay ng mga Ito.",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1CZNg4I44FKfeV5OB8RynmMXBKGvVVSNx/preview"
      },
      {
        id: 16,
        title: "Sino ang lumikha sa akin? At bakit? Bawat bagay ay nagpapahiwatig ng kairalan ng Tagalikha.",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1GlolTc4H1b8zjjtPXM_yTBQEWr1Y9dDG/preview"
      },

    ],
    hi:[
      {
        id: 1,
        title: "नमस्ते, इस्लाम के पैगंबर",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/16Wd8eGhkLWyAZG5Qwy0nc3gzCgH17zpm/preview"
      },
      {
        id: 2,
        title: "सही आस्था और इसका विपरीत क्या है?",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1zmUKyA7z3SuJ0RxO5ARQ5eEvE0rooTdt/preview"
      },
      {
        id: 3,
        title: "इस्लाम के रसूल मुह़म्मद सल्लल्लाहु अलैहि व सल्लम.",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1hQZynJJ4XhHDL--nRaoU-nI6iApZ7mJD/preview"
      },
      {
        id: 4,
        title: "पैगंबर की सुन्नत",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1z--TNxDvuBw-JJ2GpbCuZmCAmR5RlCGL/preview"
      },
      {
        id: 5,
        title: "कुरआन का परिचय",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1kQ-qGdft9gbismgbDxn82oCuMr8eZcNS/preview"
      },
      {
        id: 6,
        title: "महत्वपूर्ण पाठ सामान्य लोगों के लिए.",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1Ybu7ZvMH8bH6Vnz-rIytDjKjLy9qPRaA/preview"
      },
      {
        id: 7,
        title: "इस्लाम एक प्रवृत्तिक, तात्तकि क एवं कल्याणकारी धर्म।",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1OQxmVs3JdGF1GlUe4YuRNZfBsn5ccjmj/preview"
      },
      {
        id: 8,
        title: "पूरी किताब या उसकी मुद्रित प्रति ऑनलाइन प्राप्त करने अथवा इस्लाम के बारे में अधिक जानकारी के लिए। ",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1CZ-eZlRPrsA0jjZc1wsGOYNICn8uSowX/preview"
      },
      {
        id: 9,
        title: "मूलभूत तत्व",
        image: BookCoverr,
        description: "",
        link: "https://drive.google.com/file/d/1VA3HVrikMS6kY7UUbJ-w5IcnHR1-RNwd/preview"
      },
      {
        id: 10,
        title: "मुसलमान के लिए सलाह",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1jG0RsWgobPi1HhqKr2FzSh7bqpDsV2V4/preview"
      },
      {
        id: 11,
        title: "इस्लाम  वित्र क़ुरआन तथा नबी सल्लल्लाहु अलैहि व सल्लम की सुन्नत की रोशनी में इस्लाम का संक्षिप्त परिचय।",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1UPOLex5Mar2j7gpE9vK3RqDZChIgimHZ/preview"
      },
      {
        id: 12,
        title: "ब्रह्माण्ड की रचना किसने की? मेरी रचना किसने की? और क्यों?",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1Vl79977u0EEgthfDViW99H4nwQ1laMon/preview"
      },
      {
        id: 13,
        title: "प्रकाशक की भूममका",
        image: BookCover,
        description: "",
        link: "https://drive.google.com/file/d/1wX6qUQoJZvbnLQeE5qUOENvBE2l7mFOg/preview"
      },
    ]
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
                <a href={book.link} target='_blank' ><img src={BookCover} alt={book.title} /></a>
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