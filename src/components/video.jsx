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
                title: 'احكام الحج',
                description: '  متى يكون الحج واجبا للنساء و هل له عمر  معين',
                link: "https://www.youtube.com/embed/FsDrBKQy7gM",
                category: 'aqeedah',
          },
          {
            id: 2,
            title: '2 احكام الحج',
            description: ' أحكام الحج: بأوضح أسلوب .. وأوجز بيان',
            link:"https://www.youtube.com/embed/3DlaM8VzOA0",
            category: 'aqeedah',
        },
        {
            id: 3,
            title: '3 احكام الحج',
            description: ' أَحْرَمَ بِالحَجِّ، وَمُنِعَ مِنْ دُخُولِ مَكَّةَ؛ لِعَدَمِ حُصُولِهِ عَلَى تَصْرِيحٍ، فَمَاذَا يَفْعَلُ؟',
            link:"https://www.youtube.com/embed/OZloBu0tdN4",
            category: 'aqeedah',
        },
        {
            id: 4,
            title: 'من أحكام الحج _4',
            description: ' تُوُفِّيَتْ وَالِدَتِي فِي أَوَّلِ شَهْرِ رَمَضَانَ، وَلَمْ تَكُنْ قَدْ أَدَّتْ فَرِيضَةَ الحَجِّ مِنْ قَبْلُ؛ وَلِذَلِكَ فَإِنَّنِي أَنْوِي الحَجَّ عَنْهَا، عِلْمًا بِأَنَّنِي لَمْ أُؤَدِّ فَرِيضَةَ الحَجِّ عَنْ نَفْسِي، فَهَلْ هَذَا جَائِزٌ؟',
            link:"https://www.youtube.com/embed/T4OplBYc5_k" ,
            category: 'aqeedah',
        },
        {
            id: 5,
            title: 'أحكام الحج 5 | هل يجوز تأخير الحج للشخص القادر ؟',
            description: ' هَلْ يَجُوزُ لِلشَّخْصِ القَادِرِ عَلَى الحَجِّ، أَنْ يُؤَخِّرَ الحَجَّ عِدَّةَ سَنَوَاتٍ؟',
            link:"https://www.youtube.com/embed/EeARmFLwZtc" ,
            category: 'aqeedah',
        },   
        {
            id: 6,
            title: 'أحكام الحج 6',
            description: '  مَنْ نَسِيَ الإِحْرَامَ، أَوِ انْشَغَلَ عَنْهُ فِي الطَّائِرَةِ، حَتَّى تَجَاوَزَ المِيقَاتَ، فَلَمْ يُحْرِمْ، وَأَرَادَ الرُّجُوعَ بِالسَّيَّارَةِ إِلَى المِيقَاتِ الذِي تَجَاوَزَهُ؛ فَهَلْ يَجُوزُ لَهُ ذَلِكَ؟',
            link:"https://www.youtube.com/embed/41O096K052g" ,
            category: 'aqeedah',
        },
        {
            id: 7,
            title: 'أحكام الحج 7',
            description: '  هَلْ يَجِبُ عَلَى مَنْ دَخَلَ مَكَّةَ لِلْعَمَلِ، أَنْ يُحْرِمَ بِالحَجِّ أَوِ العُمْرَةِ، عِنْدَ دُخُولِهِ إِلَيْهَا؟',
            link:"https://www.youtube.com/embed/NHAjTRWgEW8"  ,
            category: 'aqeedah',
        },
        {
            id: 8,
            title: 'أحكام الحج | ما أركان الحج وما واجباته، وما سننه، وما الفرق بين الثلاثة؟',
            description:  'مَا أَرْكَانُ الحَجِّ، وَمَا وَاجِبَاتُهُ، وَمَا سُنَنُهُ، وَمَا الفَرْقُ بَيْنَ الثَّلَاثَةِ؟.',
            link:"https://www.youtube.com/embed/ydwmJ5hdSEI"  ,
            category: 'aqeedah',
        },
        {
            id: 9,
            title: 'العقيده الاسلاميه للاطفال وتعليم أقسام التوحيد _ نحولة كيدز',
            description:  'العقيدة الاسلامية للاطفال ',
            link:"https://www.youtube.com/embed/FWsZ2HGagZk"  ,
            category: 'aqeedah',
        },
        {
            id: 10,
            title: 'شرح ثلاثة الأصول (1) لمعالي الشيخ صالح آل الشيخ - عقيدة - كبار العلماء',
            description:  'شروحات كتب الشيخ محمد بن عبد الوهاب',
            link:"https://www.youtube.com/embed/R5f3FFeRtto"   ,
            category: 'aqeedah',
        },
        {
            id:11,
            title: 'تعليم الاطفال العقيدة الاسلامية الصحيحة| Teaching children the principles of Islam| الله خالقنا',
            description:  'برنامج أنا مسلم برنامج يهتم ببناء العقيدة والتوحيد والمفاهيم الاساسية للدين الاسلامي للاطفال والكبار',
            link:"https://www.youtube.com/embed/l4JJsY7T654"   ,
            category: 'aqeedah',
        },
        {
            id:12,
            title: 'ما الطريقة المثلى لتعليم الأطفال العقيدة الصحيحة؟ لمعالي الشيخ صالح الفوزان',
            description:  'فتاوى الشيخ صالح الفوزان المستخرجة من الدروس العلمية واللقاءات المفتوحة',
            link:"https://www.youtube.com/embed/LT885l6F0AQ"   ,
            category: 'aqeedah',
        },
        {
            id:13,
            title: 'أهمية الفقه في الإسلام | #بذور_الخير الحلقة الحادية والعشرون',
            description:  ' يتحدث الدكتور محمد نوح عن أهمية الفقه في الإسلام وأساليب تطبيقه في مجتماعتنا.',
            link:"https://www.youtube.com/embed/g00JHEYCYDQ"    ,
            category: 'fiqh',
        },
        {
            id:14,
            title: '01 تفسير الجزء الاول من القرآن الكريم',
            description:  ' تفسير آيات سورة الفاتحة، وسورة البقرة',
            link:"https://www.youtube.com/embed/CrfPLXu8F_s?list=PLQ7560lEIhRwONVvGZ7P2AcU4Si_fbKaY"    ,
            category: 'tafseer',
        },
        {
            id:15,
            title: '02 تفسير الجزء الثاني من القرآن الكريم',
            description:  ' تفسير آيات سورة  سورة البقرة',
            link:"https://www.youtube.com/embed/d6mFf0Tx1Qc?list=PLQ7560lEIhRwONVvGZ7P2AcU4Si_fbKaY"    ,
            category: 'tafseer',
        },
        {
            id:16,
            title: '03 تفسير الجزء الثاني من القرآن الكريم',
            description:  ' تفسير آيات سورة  سورة البقرة',
            link:"https://www.youtube.com/embed/lVfWebt_txg?list=PLQ7560lEIhRwONVvGZ7P2AcU4Si_fbKaY"    ,
            category: 'tafseer',
        },
        {
            id:17,
            title: 'كيف تحولت الدرعية من قرية صغيرة إلى قلب الدولة السعودية الأولى؟ مع د.عبدالله المنيف في مخيال',
            description:  'يتحدث الدكتور طارق السويدان حفظه الله سيرة وحياة المصطفى .',
            link:"https://www.youtube.com/embed/s15LqNPhaNs"    ,
            category: 'seerah',
        },
        {
            id:18,
            title: 'السيرة النبوية 01 للشيخ الدكتور طارق السويدان',
            description:  'يتحدث الدكتور طارق السويدان حفظه الله سيرة وحياة المصطفى .',
            link:"https://www.youtube.com/embed/LrwpOlTcqnI"     ,
            category: 'seerah',
        },  
        {
            id:19,
            title: 'فكيف لو رأوني؟ | سلسلة أحاديث نبوية | مع خالد النجار 🎤',
            description:  'عَنْ أَبِي هُرَيْرَةَ ، قَالَ : قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : إِنَّ لِلَّهِ مَلاَئِكَةً يَطُوفُونَ فِي الطُّرُقِ يَلْتَمِسُونَ أَهْلَ الذِّكْرِ ، فَإِذَا وَجَدُوا قَوْمًا يَذْكُرُونَ اللَّهَ تَنَادَوْا : هَلُمُّوا إِلَى حَاجَتِكُمْ قَالَ : فَيَحُفُّونَهُمْ بِأَجْنِحَتِهِمْ إِلَى السَّمَاءِ الدُّنْيَا قَالَ : فَيَسْأَلُهُمْ رَبُّهُمْ ، وَهُوَ أَعْلَمُ مِنْهُمْ ، مَا يَقُولُ عِبَادِي ؟ قَالُوا : يَقُولُونَ : يُسَبِّحُونَكَ وَيُكَبِّرُونَكَ وَيَحْمَدُونَكَ وَيُمَجِّدُونَكَ قَالَ : فَيَقُولُ : هَلْ رَأَوْنِي ؟ قَالَ : فَيَقُولُونَ : لاَ وَاللَّهِ مَا رَأَوْكَ ؟ قَالَ : فَيَقُولُ : وَكَيْفَ لَوْ رَأَوْنِي ؟ قَالَ : يَقُولُونَ : لَوْ رَأَوْكَ كَانُوا أَشَدَّ لَكَ عِبَادَةً ، وَأَشَدَّ لَكَ تَمْجِيدًا وَتَحْمِيدًا ، وَأَكْثَرَ لَكَ تَسْبِيحًا قَالَ : يَقُولُ : فَمَا يَسْأَلُونِي ؟ قَالَ : يَسْأَلُونَكَ الجَنَّةَ قَالَ : يَقُولُ : وَهَلْ رَأَوْهَا ؟ قَالَ : يَقُولُونَ : لاَ وَاللَّهِ يَا رَبِّ مَا رَأَوْهَا قَالَ : يَقُولُ : فَكَيْفَ لَوْ أَنَّهُمْ رَأَوْهَا ؟ قَالَ : يَقُولُونَ : لَوْ أَنَّهُمْ رَأَوْهَا كَانُوا أَشَدَّ عَلَيْهَا حِرْصًا ، وَأَشَدَّ لَهَا طَلَبًا ، وَأَعْظَمَ فِيهَا رَغْبَةً ، قَالَ : فَمِمَّ يَتَعَوَّذُونَ ؟ قَالَ : يَقُولُونَ : مِنَ النَّارِ قَالَ : يَقُولُ : وَهَلْ رَأَوْهَا ؟ قَالَ : يَقُولُونَ : لاَ وَاللَّهِ يَا رَبِّ مَا رَأَوْهَا قَالَ : يَقُولُ : فَكَيْفَ لَوْ رَأَوْهَا ؟ قَالَ : يَقُولُونَ : لَوْ رَأَوْهَا كَانُوا أَشَدَّ مِنْهَا فِرَارًا ، وَأَشَدَّ لَهَا مَخَافَةً قَالَ : فَيَقُولُ : فَأُشْهِدُكُمْ أَنِّي قَدْ غَفَرْتُ لَهُمْ قَالَ : يَقُولُ مَلَكٌ مِنَ المَلاَئِكَةِ : فِيهِمْ فُلاَنٌ لَيْسَ مِنْهُمْ ، إِنَّمَا جَاءَ لِحَاجَةٍ . قَالَ : هُمُ الجُلَسَاءُ لاَ يَشْقَى بِهِمْ جَلِيسُهُمْ.',
            link:"https://www.youtube.com/embed/rp79XaxrrXk?list=PL0ABfBaCkAn3NBuQ2tdw5Bu9oY5E-sCn7"     ,
            category: 'hadith',
        },
        {
            id:20,
            title: 'ذنوب عنان السماء | سلسلة أحاديث نبوية | مع خالد النجار 🎤',
            description:' عَنْ أَنَسِ بْنِ مَالِكٍ رَضِيَ اللهُ عَنْهُ قَالَ: سَمِعْت رَسُولَ اللَّهِ صلى الله عليه و سلم يَقُولُ: قَالَ اللَّهُ تَعَالَى: يَا ابْنَ آدَمَ! إِنَّك َ مَا دَعَوْتنِي وَرَجَوْتنِي غَفَرْتُ لَك عَلَى مَا كَانَ مِنْك وَلَا أُبَالِي، يَا ابْنَ آدَمَ! لَوْ بَلَغَتْ ذُنُوبُك عَنَانَ السَّمَاءِ ثُمَّ اسْتَغْفَرْتنِي غَفَرْتُ لَك، يَا ابْنَ آدَمَ! إنَّك لَوْ أتَيْتنِي بِقُرَابِ الْأَرْضِ خَطَايَا ثُمَّ لَقِيتنِي لَا تُشْرِكُ بِي شَيْئًا لَأَتَيْتُك بِقُرَابِهَا مَغْفِرَةً . رَوَاهُ التِّرْمِذِيُّ وَقَالَ: حَدِيثٌ حَسَنٌ صَحِيحٌ. ',
            link:"https://www.youtube.com/embed/jtJ0TwGQQj0?list=PL0ABfBaCkAn3NBuQ2tdw5Bu9oY5E-sCn7",
            category: 'hadith',
        },    
        {
            id:21,
            title: 'حسن الخلق ( الأخلاق في الإسلام ) | فيديو تعليمي !!',
            description:'فيديو تعليمي عن الأخلاق الحميدة في الإسلام ',
            link:"https://www.youtube.com/embed/r54-Ybflym4",
            category: 'akhlaq',
        },
        {
            id:22,
            title: 'آداب الطعام | تعليم الأطفال | برنامج عمر وإخوته | كرتون إسلامي',
            description:'فيديو تعليمي للاطفال عن اداب الطعام ',
            link:"https://www.youtube.com/embed/1wclOy6fo08",
            category: 'akhlaq',
        },    
    ],
        en: [
            {
                id: 1,
                title: 'Basics of Islamic Creed',
                description: 'Explanation of the most important principles of Islamic creed for beginners',
                link: "https://www.youtube.com/embed/2bmwco4Ugfs",
                category: 'aqeedah'
            },
            {
                id: 2,
                title: 'An Unexpected Journey: A European Discovers Islam Online and His Life Turns Upside Down',
                description: 'From online curiosity to converting to Islam... the story of a European man who changed his life completely',
                link:"https://www.youtube.com/embed/6WcsHia1VoQ",
                category: 'aqeedah'
            },
            {
                id: 3,
                title: 'Why do we study Tawheed? | Shaykh Haytham Sarhan (',
                description: 'The importance of studying monotheism and why we study it',
                link: "https://www.youtube.com/embed/f8PTOQFl4f4?list=PLBFEt29we81SMpAHBNdD5v1F3Wp2gzxnn" ,
                category: 'aqeedah'
            },
            {
                id: 4,
                title: 'Concise Explanation of Kitab At Tawheed | Shaykh Haytham Sarhan',
                description: 'Explanation of the Book of Monotheism in detail',
                link: "https://www.youtube.com/embed/XPOX5QedkGo?list=PLBFEt29we81RV9tEGDnhI8JB2rWDwgBGT" ,
                category: 'aqeedah'
            },
            {
                id: 5,
                title: 'Fiqh - Semester 1',
                description: ' Introduction | Shaykh Assim Al-Hakeem | Zad Academy English',
                link:"https://www.youtube.com/embed/V0tOuxRXgW8?list=PLDOc9rkFwfwD4Yxk6qCwcfnUIXiA6iIeU" ,
                category: 'fiqh'
            },
            {
                id: 6,
                title: 'Fiqh - Semester 1 ',
                description: 'Lecture 1 | Shaykh Assim Al-Hakeem | Zad Academy English',
                link:"https://www.youtube.com/embed/Zxl94-DFGx4?list=PLDOc9rkFwfwD4Yxk6qCwcfnUIXiA6iIeU" ,
                category: 'fiqh'
            },
            {
                id: 7,
                title: 'Description of ablution',
                description: 'How to perform ablution correctly',
                link: "https://www.youtube.com/embed/Ilmo9467cBU",
                category: 'fiqh'
            },
            {
                id: 8,
                title: 'Nullifiers of ablution',
                description: 'Explain what are the Nullifiers acts of ablution?',
                link:"https://www.youtube.com/embed/UK94ne7RrIM" ,
                category: 'fiqh'
            },
            {
                id: 9,
                title: 'Surah Al-Faatiha (The Opening) ',
                description: 'A complete interpretation of Surat Al-Fatihah',
                link:"https://www.youtube.com/embed/v0r76TgXL4E?list=PLYRXQljU5MiJ8Iz_VKgmatnx-H-leJ7st",
                category: 'tafseer'
            },
            {
                id: 10,
                title: 'Alif Laam Meem',
                description: 'Interpretation of the beginning of Surat Al-Baqarah',
                link:"https://www.youtube.com/embed/YMNEgAGqAIk?list=PLYRXQljU5MiJ8Iz_VKgmatnx-H-leJ7st",
                category: 'tafseer'
            },
            {
                id: 11,
                title: 'Islamic Lectures in English: The Miracles of Muhammad',
                description: 'Talking about the biography of Muhammad',
                link:"https://www.youtube.com/embed/izMcJqVRPlQ",
                category: 'seerah'
            },
            {
                id: 12,
                title: 'Arabia Before Islam ',
                description: 'Talking about how Arabs lived in the Arabian Peninsula before the advent of Islam',
                link:"https://www.youtube.com/embed/BcXSgvJLlYM?list=PLW7-5eCq8IySZOYczT-Z9-vFIBWNH5UMT",
                category: 'seerah'
            },
            {
                id: 13,
                title: 'Book 1: Revelation | English AudioBook',
                description: 'Explanation of a hadith from Sahih al-Bukhari',
                link:"https://www.youtube.com/embed/4w8VUspnVwM?list=PL7atYSa5SSm7XhiA_JyBaSd-eUSMAZ_yL",
                category: 'hadith'
            },
            {
                id: 14,
                title: 'Book 2: Revelation | English AudioBook',
                description: 'Explanation of a hadith from Sahih al-Bukhari',
                link:"https://www.youtube.com/embed/s5PSoCHPgB4?list=PL7atYSa5SSm7XhiA_JyBaSd-eUSMAZ_yL",
                category: 'hadith'
            },
            {
                id: 15,
                title: 'Morality in the Quran',
                description: 'A video in English, explaining how the Holy Quran encourages good morals in dealings, such as honesty, fulfilling trusts, generosity, controlling anger, and other good morals that Islam has commanded us to have.',
                link:"https://www.youtube.com/embed/60NLgmVQt3Y" ,
                category: 'akhlaq'
            },
            {
                id: 16,
                title: 'Good manners ',
                description: 'A clip explaining the importance of morality in Islam',
                link:"https://www.youtube.com/embed/CHyiIPTy5Ag" ,
                category: 'akhlaq'
            },  {
                id: 17,
                title: 'good behaviour in islam',
                description: 'A video clip in English, showing that good treatment is a manifestation of intellectual advancement and psychological purity, which Islam considers a fundamental pillar.',
                link:"https://www.youtube.com/embed/RFfvMheEnmc" ,
                category: 'akhlaq'
            },  {
                id: 18,
                title: 'Good Character',
                description: 'A short video about good morals that we remind each other of',
                link:"https://www.youtube.com/embed/XkJ6rDjtL_E"  ,
                category: 'akhlaq'
            },
        ],
        ur: [  
            {
                id: 1,
                title: "اسلام کی ضروری باتیں || علم دین سیکھنا ضروری کیوں",
                description: "اسلام کے بارے میں بنیادی امور پر بحث کرنے والا کلپ",
                link:"https://www.youtube.com/embed/IAtw3fPLcRc"   ,
                category: 'fiqh'
            },   {
                id: 2,
                title: "أنوار هدايت / قران کریم کے پاروں کا خلاصہ / آسان اور سہل انداز میں",
                description: "قرآن پاک کی تفسیر",
                link:"https://www.youtube.com/embed/w2MT7w9rbRM"  ,
                category: 'tafseer'
            },   {
                id: 3,
                title: "سیرت نبوی صلی اللہ علیہ وسلم",
                description: "سیرت النبی صلی اللہ علیہ وسلم کے بارے میں ایک کلپ، خدا ان پر رحم کرے",
                link:"https://www.youtube.com/embed/WkdD0TVYHOI"  ,
                category: 'seerah'
            },   {
                id: 4,
                title: "نبی ﷺ کا نسب نامہ ",
                description: "سلسلۂ نسب کے متعلق ایک کلپ",
                link:"https://www.youtube.com/embed/k3tC2IUafPc"  ,
                category: 'seerah'
            },   {
                id: 6,
                title: "نبی ﷺ کے والد کی شادی، وفات اور ترکہ",
                description: "نبی صلی اللہ علیہ وسلم کی سیرت اور آپ کے والد کی شادی کے بارے میں ایک کلپ",
                link:"https://www.youtube.com/embed/LBrisEsdCQ0"  ,
                category: 'seerah'
            },   {
                id: 7,
                title: "نبی ﷺ کی ولادت اور رضاعت",
                description: "سیرت نبوی محمد صلی اللہ علیہ وسلم",
                link:"https://www.youtube.com/embed/4YQkorWEMas"  ,
                category: 'seerah'
            },   {
                id: 8,
                title: "شقًٓ صدر کا واقعہ اور مہر نبوت کا تذکرہ",
                description: "سیرت نبوی محمد صلی اللہ علیہ وسلم",
                link:"https://www.youtube.com/embed/h5lLbqqZJfc"   ,
                category: 'seerah'
            },   
        ],
        fr: [
            {
                id: 1,
                title: "Cours 1: La croyance (Al Aquida)",
                description: "introduction de la Rissâla de Ibn Abi Zayd al-Qayrawân",
                link: "https://www.youtube.com/embed/m9cn-hkFcWQ",
                category: 'aqeedah'
            },
            {
                id: 2,
                title: "[1]Al `Aquîda Al-Wassitiya ",
                description: "Voici une explication du livre Al `Aquîda Al-Wassitiya (La Profession de Foi)",
                link:"https://www.youtube.com/embed/2tR3KHseAkg?list=PLRDM2C56WTKEqkajD2htFLxffjeXgfC2j",
                category: 'aqeedah'
            },   {
                id: 3,
                title: "[2] Al `Aquîda Al-Wassitiya",
                description: "Voici une explication du livre Al `Aquîda Al-Wassitiya (La Profession de Foi)",
                link:"https://www.youtube.com/embed/p_7cW82qxJQ?list=PLRDM2C56WTKEqkajD2htFLxffjeXgfC2j",
                category: 'aqeedah'
            },   {
                id: 4,
                title: "COMMENT RATTRAPER SES PRIÈRES. (fiqh mâliki) ",
                description: "Le clip explique comment rattraper ses prières.",
                link:"https://www.youtube.com/embed/Eev8eCFJB-8?list=PLiGphLNkyYRd9cKcyEU8TEUpQitmz-ZR7" ,
                category: 'fiqh'
            },   {
                id: 5,
                title: "COMMENT CORRIGER SA PRIÈRE (prosternations de l'oubli). ",
                description: "Le clip parle de la prière correcte et de la manière de corriger la prière si vous faites une erreur.",
                link:"https://www.youtube.com/embed/yvKnJTlxqFE?list=PLiGphLNkyYRd9cKcyEU8TEUpQitmz-ZR7",
                category: 'fiqh'
            },   {
                id: 6,
                title: "Tafsir Imam Sékou Sylla - Sourate Al Baqara Verset 183 à 184",
                description: "Sourate Al Baqara Verset 183 à 184",
                link:"https://www.youtube.com/embed/z3poKjmqa5Q?list=PLQQKxe64Xf055MOReJxVT8TRpZ7fj5gsf" ,
                category: 'tafseer'
            },   {
                id: 7,
                title: "Tafsir Imam Sékou Sylla - Sourate Adh-dhariyat Verset 38 à 51 ",
                description: "Tafsir en français du jeudi 28-12-2023 ",
                link:"https://www.youtube.com/embed/EXUmDwPalEU?list=PLQQKxe64Xf055MOReJxVT8TRpZ7fj5gsf",
                category: 'tafseer'
            },   {
                id: 8,
                title: "Tafsir Imam Sékou Sylla : Sourate An-Najm - Verset 33 à 46",
                description: "Interprétation de la sourate An-Najm en français",
                link:"https://www.youtube.com/embed/Ht5Qxv2WECQ?list=PLQQKxe64Xf055MOReJxVT8TRpZ7fj5gsf",
                category: 'tafseer'
            },   {
                id: 9,
                title: "La Sirah du Prophète Muhammad(SAW) EP 1",
                description: "Cheikh Yasir Qadhi donne une analyse détaillée de la vie du Prophète Muhammad (que la paix soit sur lui) à partir des sources originales.",
                link:"https://www.youtube.com/embed/H8dzFGR9aoY?list=PLYZxc42QNctXvxDw9LaQk02Nskb2iJTmd",
                category: 'seerah'
            },   {
                id: 10,
                title: "La Sirah du Prophète Muhammad(SAW) EP 2",
                description: "Cheikh Yasir Qadhi donne une analyse détaillée de la vie du Prophète Muhammad (que la paix soit sur lui) à partir des sources originales.",
                link:"https://www.youtube.com/embed/yIiOy1ajig4?list=PLYZxc42QNctXvxDw9LaQk02Nskb2iJTmd",
                category: 'seerah'
            },   {
                id: 11,
                title: "La Sirah du Prophète Muhammad(SAW) EP 3",
                description: "Cheikh Yasir Qadhi donne une analyse détaillée de la vie du Prophète Muhammad (que la paix soit sur lui) à partir des sources originales.",
                link:"https://www.youtube.com/embed/HMHxNd7MifE?list=PLYZxc42QNctXvxDw9LaQk02Nskb2iJTmd",
                category: 'seerah'
            },   {
                id: 12,
                title: "H1 - Les 40 Hadîth de Nawawi",
                description: "Un hadith sur l'intention",
                link:"https://www.youtube.com/embed/dCUvuXYu_9Y?list=PLxJLu-ZcLtGfTZCV9oLOgNcsAL0j88qWJ",
                category: 'hadith'
            },   {
                id: 13,
                title: "H2 - les 40 Hadîth de Nawawi ",
                description: "Un hadith sur l'intention",
                link:"https://www.youtube.com/embed/T76mNdKhsZ4?list=PLxJLu-ZcLtGfTZCV9oLOgNcsAL0j88qWJ",
                category: 'hadith'
            },   {
                id: 14,
                title: " Les 40 hadith de l'imam An-Nawawi (français)",
                description: "La foi (Iman) : Ce qui constitue la base de la croyance musulmane, les principes de l'unicité de Dieu et la place du prophète Muhammad (paix soit sur lui).",
                link:"https://www.youtube.com/embed/b2Uuq50Ur_Q",
                category: 'hadith'
            },   {
                id: 15,
                title: "Écoute et tu verras la vie autrement (Conférence) ",
                description: "Pour apprendre en famille ce qu’il incombe à tout musulman de connaître, nous avons développé pour vous la plateforme Dini.",
                link:"https://www.youtube.com/embed/oDrOxXHMv_4" ,
                category: 'hadith'
            },   {
                id: 16,
                title: "Science et éthique en islam / en français - Al-Mansour Al-Hudhaili",
                description: "Le clip parle de l’importance de la morale dans la religion islamique.",
                link:"https://www.youtube.com/embed/D7A7xiIi4G0" ,
                category: 'akhlaq'
            },   {
                id: 17,
                title: "Bonnes mœurs",
                description: "Les bonnes mœurs sont les valeurs et les normes qui définissent le comportement d’un individu et le guident dans ses relations avec les autres.",
                link:"https://www.youtube.com/embed/An2d2E44q2U",
                category: 'akhlaq'
            },
      
        ],
        tr: [
            {
                id: 1,
                title: "DHBT MBSTS ÖABT DKAB INANÇ ESASLARI - UNITE 1 - DIN VE INANÇ 🕋",
                description: "Klipte İslam inancının esasları anlatılıyor.",
                link:"https://www.youtube.com/embed/aqXM_hM20hI?list=PLTfYWRDOnXGkMUYA7kYE65D1-GoB2JpRL" ,
                category: 'aqeedah'
            },   {
                id: 2,
                title: "İSLAM İNANÇ ESASLARI - ÜNİTE 2 - İSLAM DİNİ ve İNANCI",
                description: "Klipte İslam inancının esasları anlatılıyor.",
                link:"https://www.youtube.com/embed/yFp6bI-hNQg?list=PLTfYWRDOnXGkMUYA7kYE65D1-GoB2JpRL",
                category: 'aqeedah'
            },   {
                id: 3,
                title: "1- Fıkıh ve İslam Hukuku | Fıkha Giriş | Yakup Özcan",
                description: "Klipte İslam fıkhından bahsediliyor.",
                link:"https://www.youtube.com/embed/1xRTiqXeMK0" ,
                category: 'fiqh'
            },   {
                id: 4,
                title: "2- İslam Hukuku'nun Oluşum Süreci | Fıkha Giriş | Yakup Özcan ",
                description: "Klipte İslam hukukunun doğuşu anlatılıyor.",
                link:"https://www.youtube.com/embed/Jz6o_xz_qJc",
                category: 'fiqh'
            },   {
                id: 5,
                title: "İslam’da Söz | Meâric Suresi Tefsiri 7 | Halis Bayancuk Hoca",
                description: "Şeyh, Mearic Suresi'ni açıklıyor",
                link:"https://www.youtube.com/embed/yL3ba9-UUoY" ,
                category: 'tafseer'
            },   {
                id: 6,
                title: "Hz Muhammed'in Hikmet Dolu 40 Sözü // 40 Hadis Hayatınıza Işık Tutacak Sözler",
                description: "Klipte Hz. Muhammed'in (s.a.v.) hadisleri anlatılıyor.",
                link:"https://www.youtube.com/embed/6Yc3IbxjaeA" ,
                category: 'hadith'
            },
            {
                id: 7,
                title: "Son Din İslam | Saadettin Acar | Konu: Ahlak",
                description: "Ben dersimi Yüce Allah'tan aldım.",
                link:"https://www.youtube.com/embed/iohNcClWNqk",
                category: 'akhlaq'
            },
            {
                id: 8,
                title: "Hz. Muhammed'in (asm) Hayatı - Neden Siyer Öğrenmeliyiz? - Bölüm 1",
                description: "Klipte Hz. Muhammed'in (s.a.v.) hayatı anlatılıyor.",
                link:"https://www.youtube.com/embed/DcrrhvlwJIY",
                category: 'seerah'
            },
        ],
        id: [
            {
                id: 1,
                title: "[Serial Aqidah] Eps. 1: Pondasi Iman - Ustadz Adi Hidayat",
                description: "Klip tersebut berbicara tentang dasar keimanan.",
                link:"https://www.youtube.com/embed/VYD_2fsylcM" ,
                category: 'aqeedah'
            },

            {
                id: 2,
                title: "[Serial Aqidah] Eps. 2: Pokok-Pokok Iman - Ustadz Adi Hidayat",
                description: "Klip tersebut berbicara tentang dasar keimanan.",
                link:"https://www.youtube.com/embed/VYD_2fsylcM" ,
                category: 'aqeedah'
            },
              {
                id: 3,
                title: "[Serial Fiqh Eps 1] Bab Pendahuluan Fiqh Sholat - Ustadz Adi Hidayat",
                description: "Klip tersebut membahas tentang yurisprudensi shalat.",
                link:"https://www.youtube.com/embed/_OWAc3cPerU?list=PL3iW_rlEoH5LiWstWEY6bZFIDb7oHXz4h"  ,
                category: 'fiqh'
            },  {
                id: 4,
                title: "[Serial Fiqh Eps 2] Tata Cara Sholat - Ustadz Adi Hidayat",
                description: "Situs tersebut membahas tentang tata cara shalat.",
                link:"https://www.youtube.com/embed/uUsJQutYuAU?list=PL3iW_rlEoH5LiWstWEY6bZFIDb7oHXz4h"  ,
                category: 'fiqh'
            },  {
                id: 5,
                title: "[Serial Fiqh Eps 3] Tata Cara Wudhu - Ustadz Adi Hidayat",
                description: "Klip tersebut berbicara tentang aturan wudhu.",
                link:"https://www.youtube.com/embed/h__PMrkx0Tc?list=PL3iW_rlEoH5LiWstWEY6bZFIDb7oHXz4h" ,
                category: 'fiqh'
            },  {
                id: 6,
                title: "Kajian Bakda Subuh Tafsir Al-Insyirah - Ustadz Adi Hidayat",
                description: "Klip ini membahas kajian tafsir berita setelah sahur - Profesor Adi Hidaya",
                link:"https://www.youtube.com/embed/L5Dt_BaG3kQ" ,
                category: 'tafseer'
            },  {
                id: 7,
                title: "Tafsir Surah Adh-Dhuha - Ustadz Adi Hidayat",
                description: "Klip ini berbicara tentang tafsir Surat Ad-Duha.",
                link:"https://www.youtube.com/embed/W7wZStf3iiE"   ,
                category: 'tafseer'
            },  {
                id: 8,
                title: "Sirah Nabawiyah #1 : Pengantar Sirah Nabawiyah - Khalid Basalamah",
                description: "Klip tersebut berbicara tentang biografi Nabi Muhammad.",
                link:"https://www.youtube.com/embed/BWgwRJjm3sc?list=PLlK0gGuioshBgZZf8VOC4IonQtFxPsifW"  ,
                category: 'seerah'
            },  {
                id: 9,
                title: "Sirah Nabawiyah Episode Two - History of Makkah Establishment",
                description: "Klip ini berbicara tentang sejarah Mekkah.",
                link:"https://www.youtube.com/embed/hHkxhDdkBWk?list=PLlK0gGuioshBgZZf8VOC4IonQtFxPsifW"  ,
                category: 'seerah'
            },
            {
                id: 10,
                title: "E1] Sirah Rasulullah ﷺ - Kelahiran Baginda Membawa Rahmat Kepada Sekalian Alam | Ustaz Wadi Annuar",
                description: "Klip ini berbicara tentang kelahiran Nabi Muhammad.",
                link:"https://www.youtube.com/embed/VYD_2fsylcM" ,
                category: 'seerah'
            },{
                id: 11,
                title: "Kisah Nabi Muhammad SAW dari Lahir Hingga Wafat | Ustadz Abdul Somad",
                description: "Klip ini bercerita tentang kisah hidup Nabi dari lahir hingga wafat.",
                link:"https://www.youtube.com/embed/pij8PGbhZwM" ,
                category: 'hadith'
            },{
                id: 12,
                title: "Perbedaan Adab Dan Akhlak - Ustadz Adi Hidayat",
                description: "Klip ini membahas tentang perbedaan moral dan etika - Profesor Adi Hidaya",
                link:"https://www.youtube.com/embed/PcntEfe6R_k"  ,
                category: 'akhlaq'
            },
            {
                id: 13,
                title: "Ustaz Amin - Maksud Akhlak Dalam Islam",
                description: "Klip tersebut berbicara tentang makna akhlak dalam Islam.",
                link:"https://www.youtube.com/embed/l8iACx2hG-U" ,
                category: 'akhlaq'
            },
    
        ],
        ru: [
            
           
              {
                id: 1,
                title: "Правильная АКЫДА! | Вероубеждения АХЛЮ СУННА валь джамаа | Юсуф Берхудар",
                description: "В клипе рассказывается о верованиях Ахль ас-Сунна валь-Джамаа.",
                link:"https://www.youtube.com/embed/HTnW5v0CUCA"  ,
                category: 'aqeedah'
            },   {
                id: 2,
                title: "Акида ( Вероубеждение ) ОЗВУЧКА - Шейх Ибн аль - Усаймин / напоминание братья и сёстры",
                description: "Клип об исламской вере",
                link:"https://www.youtube.com/embed/fKWI07hD0h4" ,
                category: 'aqeedah'
            },   {
                id: 3,
                title: "Ustaz Amin - Maksud Akhlak Dalam Islam",
                description: "Klip tersebut berbicara tentang makna akhlak dalam Islam.",
                link:"https://www.youtube.com/embed/l8iACx2hG-U" ,
                category: 'fiqh'
            },   {
                id: 4,
                title: "Введение в фикх. Что такое Шариат?",
                description: "Клип о законах шариата",
                link:"https://www.youtube.com/embed/Y2yIrM-JP8c"  ,
                category: 'fiqh'
            },   {
                id: 6,
                title: "удрость в Коране. Часть 1 из 7 | Нуман Али Хан",
                description: "Клип о мудрости в Священном Коране",
                link:"https://www.youtube.com/embed/znlevKeCXpE" ,
                category: 'tafseer'
            },   {
                id: 7,
                title: "Зависть как грех в исламе. Уроки из суры ан-Ниса | Нуман Али Хан (rus sub)",
                description: "Клип, в котором рассказывается об уроках из суры «Ан-Ниса»",
                link:"https://www.youtube.com/embed/vegaAvUs2Cw"  ,
                category: 'tafseer'
            },   {
                id: 8,
                title: "Сира Пророка Мухаммада ﷺ | Предисловие 1 из 29 | Муфтий Менк",
                description: "Клип о биографии Пророка Мухаммеда, да благословит его Аллах и приветствует.",
                link:"https://www.youtube.com/embed/6gpHSUKg9EA"  ,
                category: 'seerah'
            },   {
                id: 9,
                title: "Сира Пророка Мухаммада ﷺ | Времена язычества и Рождение 2 из 29 | Муфтий Менк",
                description: "История битвы началась 2 февраля 29 г.",
                link:"https://www.youtube.com/embed/AIy5D4DqAEY"  ,
                category: 'seerah'
            },
            {
                id: 10,
                title: "24 хадиса от Пророка, которые изменят вашу жизнь | Время покаяния",
                description: "Клип о 24 пророческих хадисах, которые изменят вашу жизнь.",
                link:"https://www.youtube.com/embed/vLgrsh51VTU" ,
                category: 'hadith'
            },
            {
                id: 11,
                title: "БЛАГОЙ НРАВ НА ДЕЛЕ | Одна из самых прекрасных лекций шейха Абдурраззак Аль Бадра",
                description: "Клип о хорошем человеке на работе",
                link:"https://www.youtube.com/embed/n-rcEGYshog" ,
                category: 'hadith'
            },
            
    
        ],
        hi: [
            {
                id: 1,
                title:`शीर्षक: "इस्लाम के बारे में आवश्यक बातें || धार्मिक ज्ञान सीखना क्यों ज़रूरी है",`,
                description:`इस्लाम के बारे में बुनियादी मुद्दों पर चर्चा करने वाली एक क्लिप।`,
                link:"https://www.youtube.com/embed/IAtw3fPLcRc"   ,
                category: 'fiqh'
            },   {
                id: 2,
                title: `अनवर हिदायत / पवित्र कुरान की आयतों का सारांश / सरल और आसान तरीके से`,
                description: `पवित्र कुरान की व्याख्या`,
                link:"https://www.youtube.com/embed/w2MT7w9rbRM"  ,
                category: 'tafseer'
            },   {
                id: 3,
                title: `पैगम्बर (सल्लल्लाहु अलैहि वसल्लम) की जीवनी`,
                description: `पैगंबर (शांति उन पर हो) की जीवनी के बारे में एक क्लिप, भगवान उन पर दया करें।`,
                link:"https://www.youtube.com/embed/WkdD0TVYHOI"  ,
                category: 'seerah'
            },   {
                id: 4,
                title: `पैगम्बर की वंशावली`,
                description: `वंशावली के बारे में एक क्लिप`,
                link:"https://www.youtube.com/embed/k3tC2IUafPc"  ,
                category: 'seerah'
            },   {
                id: 6,
                title: `पैगम्बर (स.) के पिता का विवाह, मृत्यु और विरासत`,
                description: `पैगम्बर (सल्लल्लाहू अलैहि वसल्लम) की जीवनी और आपके पिता की शादी के बारे में एक क्लिप।`,
                link:"https://www.youtube.com/embed/LBrisEsdCQ0"  ,
                category: 'seerah'
            },   {
                id: 7,
                title: `पैगम्बर (सल्लल्लाहु अलैहि व सल्लम) का जन्म और स्तनपान`,
                description: "पैगम्बर मुहम्मद (उन पर शांति हो) की जीवनी",
                link:"https://www.youtube.com/embed/4YQkorWEMas"  ,
                category: 'seerah'
            },   {
                id: 8,
                title: `सद्र की घटना और नबूवत की मुहर का उल्लेख`,
                description: "पैगंबर मुहम्मद (उन पर शांति हो) की जीवनी",
                link:"https://www.youtube.com/embed/h5lLbqqZJfc"   ,
                category: 'seerah'
            },   
    
        ],
        bn: [

            {
                id: 1,
                title: "1-ভূমিকা পর্ব: তিনটি মূলনীতির ধারাবাহিক ক্লাস।আলোচকঃ আব্দুর রব আফ্ফান,দ্বীরা সেন্টার রিয়াদ সৌদি আরব।",
                description: "তিনটি মৌলিক নীতির উপর ধারাবাহিক বক্তৃতা সম্পর্কে একটি ক্লিপ।",
                link:"https://www.youtube.com/embed/9TkZdhf51Po"  ,
                category: 'aqeedah'
            },   {
                id: 2,
                title: "আকীদা সংক্রান্ত ভুল-ত্রুটি পর্ব ১",
                description: "বাংলা পর্বে বিশ্বাসের ভুল",
                link:"https://www.youtube.com/embed/UrRrlCAScas"  ,
                category: 'aqeedah'
            },   {
                id: 3,
                title: "শেখ আব্দুল রাজ্জাকের বাংলায় ইসলামের পরিচয়ের একটি বক্তৃতা।",
                description: "ইসলামের ভূমিকা সম্পর্কে শেখ আব্দুল রাজ্জাকের একটি বক্তৃতা",
                link:"https://www.youtube.com/embed/LN3FGPSqxiQ" ,
                category: 'aqeedah'
            },   {
                id: 4,
                title: "ফিকহ পাঠ্যক্রম, দ্বিতীয় স্তর, পর্ব ১/১০, বাংলায়, প্রচারক মামুন আল-রশিদ, টিচ মি ইসলাম স্কুল",
                description: "ধর্মপ্রচারক মামুন আল-রশিদের আইনশাস্ত্রের পদ্ধতি",
                link:"https://www.youtube.com/embed/k3tC2IUafPc"  ,
                category: 'fiqh'
            },   {
                id: 6,
                title: "নামাজ পড়ার সঠিক পদ্ধতি",
                description: "প্রার্থনার সঠিক পদ্ধতি সম্পর্কে একটি ক্লিপ",
                link:"https://www.youtube.com/embed/XuTTXcd0-aY" ,
                category: 'fiqh'
            },   {
                id: 7,
                title: "যাকাতুল ফিতর (ফিতরা) | শায়েখ / মোহাম্মদ হুজাইফা ",
                description: "যাকাত আল ফিতর সম্পর্কে একটি ক্লিপ",
                link:"https://www.youtube.com/embed/jJhMPqbFV7o"  ,
                category: 'fiqh'
            },   {
                id: 8,
                title: "উপবাসের অংশগুলি",
                description: "উপবাসের প্রকারভেদ সম্পর্কে একটি ক্লিপ",
                link:"https://www.youtube.com/embed/RQ0BV_iBuCM"   ,
                category: 'fiqh'
            },   
            {
                id: 9,
                title: "পবিত্র কুরআনের ব্যাখ্যা",
                description: "বাংলায় পবিত্র কুরআনের তাফসির",
                link:"https://www.youtube.com/embed/21MWrFaYHzI"   ,
                category: 'tafseer'
            },
            {
                id: 10,
                title: "সূরা আল-কাওসারের ব্যাখ্যা",
                description: "সূরা কাওসার বাংলা অনুবাদ ক্লিপ",
                link:"https://www.youtube.com/embed/_3aE5GyghwQ"  ,
                category: 'tafseer'
            },
            {
                id: 11,
                title: "রমজান কাউন্সিল",
                description: "বাংলায় বক্তৃতা",
                link:"https://www.youtube.com/embed/PxE60JKK7Ks" ,
                category: 'seerah'
            },
            {
                id: 12,
                title: "নবীর জীবনী অধ্যয়ন",
                description: "নবীর জীবনী অধ্যয়নের গুরুত্ব সম্পর্কে আলোচনা করা একটি ক্লিপ",
                link:"https://www.youtube.com/embed/LH_VsQxk3Y4"  ,
                category: 'seerah'
            },
    
        ],
        zh: [

            {
                id: 1,
                title: "信仰简释",
                description: "中文信经摘要",
                link:"https://www.youtube.com/embed/A0FBuWy_d84"   ,
                category: 'aqeedah'
            },   {
                id: 2,
                title: "伊斯兰教的定义",
                description: "关于伊斯兰教",
                link:"https://www.youtube.com/embed/veptdUXYbpM"   ,
                category: 'aqeedah'
            },   {
                id: 3,
                title: "伊斯兰是什么-2",
                description: "关于伊斯兰教",
                link:"https://www.youtube.com/embed/u9ZIAO7fHT8" ,
                category: 'aqeedah'
            },   {
                id: 4,
                title: "如何祈祷",
                description: "关于如何祈祷的中文视频",
                link:"https://www.youtube.com/embed/MciGMMRDbLU"   ,
                category: 'fiqh'
            },   {
                id: 6,
                title: "卡里姆汗 - 朝觐中文版",
                description: "有关伊斯兰教朝觐的中文视频",
                link:"https://www.youtube.com/embed/km_gI7tugX4"  ,
                category: 'fiqh'
            },   {
                id: 7,
                title: "布哈里圣训 ",
                description: "有关《布哈里圣训》的中文片段",
                link:"https://www.youtube.com/embed/z830PPQkZOg"  ,
                category: 'hadith'
            },   {
                id: 8,
                title: "布哈里圣训实录 - 知识篇 - 第十二部分",
                description: "布哈里圣训片段",
                link:"https://www.youtube.com/embed/9jwU9h14wt8"   ,
                category: 'hadith'
            },   
            {
                id: 9,
                title: "布哈里圣训实录 - 知识篇 - 第十部分",
                description: "布哈里圣训片段",
                link:"https://www.youtube.com/embed/oZ0LjWHmVzE"    ,
                category: 'hadith'
            },
            {
                id: 10,
                title: "布哈里圣训实录 - 知识篇 - 第八部分",
                description: "布哈里圣训片段",
                link:"https://www.youtube.com/embed/mPEVlFMazFU"   ,
                category: 'hadith'
            },

            {
                id: 11,
                title: "先知及其同伴在斋月期间的状况",
                description: "一段关于先知和他的同伴在斋月期间的生活片段",
                link:"https://www.youtube.com/embed/o8koNdcRAC4"   ,
                category: 'hadith'
            },
    
        ],
        tl: [
            {
                id: 1,
                title: "Ano ang Islam?",
                description: "Isang clip na nagpapaliwanag kung ano ang Islam",
                link:"https://www.youtube.com/embed/eLKwjvCOMaw"    ,
                category: 'aqeedah'
            },   {
                id: 2,
                title: "Tuklasin ang Iyong Tunay na Relihiyon - Filipino",
                description: "Isang video na pang-edukasyon sa Filipino tungkol sa Islam.",
                link:"https://www.youtube.com/embed/QL6-il8LLkU"   ,
                category: 'aqeedah'
            },   {
                id: 3,
                title: "Muhammad ﷺ sa Torah at sa Bibliya",
                description: "Isang Filipino clip tungkol sa kung paano binanggit ang Propeta Muhammad sa parehong Torah at Bibliya.",
                link:"https://www.youtube.com/embed/6iWoHSfhkCc"  ,
                category: 'aqeedah'
            },   {
                id: 4,
                title: "Bakit tayo nilikha ng Diyos?",
                description: "Isang clip na nagsasabi tungkol sa isang tanong na nasa isip ng karamihan ng mga tao: Bakit tayo nilikha ng Diyos?",
                link:"https://www.youtube.com/embed/90oQt-iuCiY"   ,
                category: 'aqeedah'
            },   {
                id: 6,
                title: `Kahulugan ng "Walang Diyos kundi si Allah" - Filipino`,
                description: "Pagpapaliwanag ng kahulugan ng La ilaha illa Allah sa wikang Filipino",
                link:"https://www.youtube.com/embed/UY3LVFLF6wM"  ,
                category: 'aqeedah'
            },   {
                id: 7,
                title: "RELIHIYON NG MGA PROPETA",
                description: "Pinag-uusapan ang relihiyon ng mga propeta",
                link:"https://www.youtube.com/embed/6fnVoq3jT10"  ,
                category: 'aqeedah'
            },   {
                id: 8,
                title: "Ang Pamamaraan ng Wudhu at Salah",
                description: "Pagsasalita sa Filipino tungkol sa paghuhugas at pagdarasal",
                link:"https://www.youtube.com/embed/orBhUttvg0c"   ,
                category: 'fiqh'
            }, 
    
        ],
        fa: [

            {
                id: 1,
                title: "آیا اسلام دین جدیدی است؟",
                description: "شرح دین اسلام و صحبت در مورد آن",
                link:"https://www.youtube.com/embed/8ZSg3yQM56k"     ,
                category: 'aqeedah'
            },   {
                id: 2,
                title: "بینش در تماس",
                description: "صحبت از بصیرت در تبلیغ اسلامی",
                link:"https://www.youtube.com/embed/uAnDDfmsVgI"    ,
                category: 'aqeedah'
            },   {
                id: 3,
                title: "ایمان مسلمان",
                description: "کلیپی در مورد دین اسلام",
                link:"https://www.youtube.com/embed/MNY4zsXXT_w"   ,
                category: 'aqeedah'
            },   {
                id: 4,
                title: "شرح دعا",
                description: "صحبت در مورد چگونگی نماز خواندن",
                link:"https://www.youtube.com/embed/XuU8qLaOD1s"   ,
                category: 'fiqh'
            },   {
                id: 6,
                title: `شرح صحيح بخارى `,
                description: "کلیپی از حدیثی از صحیح بخاری",
                link:"https://www.youtube.com/embed/R1_MdEbSl1c"   ,
                category: 'hadith'
            },   {
                id: 7,
                title: "شرح صحيح بخارى 2",
                description: "کلیپی از حدیثی از صحیح بخاری",
                link:"https://www.youtube.com/embed/CVsB0GcZlXU"  ,
                category: 'hadith'
            },   {
                id: 8,
                title: "شرح صحيح بخارى 3",
                description: "کلیپی از حدیثی از صحیح بخاری",
                link:"https://www.youtube.com/embed/GakMWfCLLjo"    ,
                category: 'hadith'
            }, 
              
    
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
                            <li>
                                <a href="#" onClick={() => paginate(currentPage - 1)}>
                                    <FontAwesomeIcon icon={i18n.dir() === 'ltr' ? faChevronLeft : faChevronRight} />
                                </a>
                            </li>
                        )}
                        {pageNumbers.map(number => (
                            <li key={number}>
                                <a href="#" onClick={() => paginate(number)} className={currentPage === number ? 'active' : ''}>
                                    {number}
                                </a>
                            </li>
                        ))}
                        {currentPage < pageNumbers.length && (
                            <li>
                                <a href="#" onClick={() => paginate(currentPage + 1)}>
                                    <FontAwesomeIcon icon={i18n.dir() === 'ltr' ? faChevronRight : faChevronLeft} />
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Videos;