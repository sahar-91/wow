'use client';
import { useState,useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from "../app/context/LanguageContext";


export default function NavBar() {
  const [active, setActive] = useState(false);
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();

  const linkUndeline = (path) => 
    `hover:text-white transition-colors ${ pathname === path ? "border-b border-teal-400 text-white" : "text-gray-400" }`;

  useEffect(() => {
  document.documentElement.dir = language === "AR" ? "rtl" : "ltr";
  document.documentElement.lang = language.toLowerCase();
}, [language]);

  const t = {
  EN: {
    about: "about us",
    news: "latest news",
    work: "our work",
    clients: "our clients",
    team: "our team",
    contact: "contact us",
  },
  AR: {
    about: "من نحن",
    news: "آخر الأخبار",
    work: "أعمالنا",
    clients: "عملاؤنا",
    team: "فريقنا",
    contact: "اتصل بنا",
  },
};

  return (
    
    <div className="sticky top-0 z-50 bg-black">
     
      <div 
       className={`container max-w-[1440px] mx-auto p-6 md:px-30 md:pt-15 md:pb-2 border-b-4 border-teal-500 md:border-b-0 
transition-[max-height] duration-700 ease-in-out md:overflow-visible overflow-hidden
${active ? 'max-h-[1000px]' : 'max-h-24'} md:max-h-full h-auto`}>
        <header className="flex items-center justify-between w-full h-12">
          <div className="flex items-center">
            <div className="w-10 h-10 md:w-20 md:h-20 rounded-full border-2 border-gray-400 text-white font-bold text-[10px] md:text-lg text-center flex items-center justify-center leading-tight">
              <Link href="/">wow<br />studio</Link>
            </div>
          </div>

         
          <nav className="hidden md:block">
            <ul className="flex items-center list-none font-bold gap-7">
              <li className={linkUndeline("/about")}><Link href="/about">{t[language].about}</Link></li>
              <li className={linkUndeline("/latest-news")}><Link href="/latest-news">{t[language].news}</Link></li>
              <li className={linkUndeline("/work")}><Link href="/work">{t[language].work}</Link></li>
              <li className={linkUndeline("/clients")}><Link href="/clients">{t[language].clients}</Link></li>
              <li className={linkUndeline("/team")}><Link href="/team">{t[language].team}</Link></li>
              <li className={linkUndeline("/contact")}><Link href="/contact">{t[language].contact}</Link></li>
              <LanguageToggle language={language} setLanguage={setLanguage} />
            </ul>
          </nav>

          
          <button 
            onClick={() => setActive(!active)} 
            className="flex flex-col cursor-pointer md:hidden z-50 gap-2"
          >
            <span className={`block w-8 h-1 bg-gray-400 transition-all duration-300 ${active ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-1 bg-gray-400 transition-all duration-300 ${active ? '-rotate-45 -translate-y-1 w-8' : 'w-5'}`} />
          </button> 
        </header>

       
        <nav className={`md:hidden flex flex-col items-center pt-16 pb-10 transition-opacity duration-700 ${active ? 'opacity-100' : 'opacity-0'}`}>
          <ul className="flex flex-col items-center list-none font-bold text-4xl text-gray-400 gap-8">
            <li className={`${linkUndeline("/")} ${active ? 'p-4':''}`}><Link href="/" onClick={() => setActive(false)}>about us</Link></li>
            <li className={`${linkUndeline("/job")} ${active ? 'p-4':''}`}><Link href="/job" onClick={() => setActive(false)}>our work</Link></li>
            <li className={`${linkUndeline("/client")} ${active ? 'p-4':''}`}><Link href="/clients" onClick={() => setActive(false)}>our clients</Link></li>
            <li className={`${linkUndeline("/team")} ${active ? 'p-4':''}`}><Link href="/team" onClick={() => setActive(false)}>our team</Link></li>
            <li className={`${linkUndeline("/contact")} ${active ? 'p-4':''}`}><Link href="/contact" onClick={() => setActive(false)}>contact us</Link></li>
            <div className="pt-4">
               <LanguageToggle language={language} setLanguage={setLanguage} />
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
}

function LanguageToggle({ language, setLanguage }) {
  return (
    <div onClick={() => setLanguage(language === 'EN' ? 'AR' : 'EN')} className="relative w-14 h-7 bg-transparent border border-white rounded-full flex items-center cursor-pointer p-1 transition-all duration-300">
      <div className={`absolute w-6 h-6 bg-white rounded-full transition-all duration-300 ease-in-out ${language === 'EN' ? 'translate-x-6' : 'translate-x-0'}`} />
      <div className="relative w-full flex justify-around items-center font-bold text-[10px] z-10 select-none">
        <span className={language === 'AR' ? 'text-black' : 'text-white'}>AR</span>
        <span className={language === 'EN' ? 'text-black' : 'text-white'}>EN</span>
      </div>
    </div>
  );
}
