'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const [active, setActive] = useState(false);
  const [language, setLanguage] = useState('EN');
  const pathname = usePathname();

  const linkUndeline = (path) => 
    `hover:text-white transition-colors ${ pathname === path ? "border-b border-teal-400 text-white" : "text-gray-400" }`;

  return (
    <div className="sticky !md:fixed top-0 z-50 bg-black">
     
      <div 
       className={`container max-w-[1440px] mx-auto p-6 md:px-30 md:pt-15 md:pb-7 border-b-4 border-teal-500 md:border-b-0 
transition-[max-height] duration-700 ease-in-out md:overflow-visible overflow-hidden
${active ? 'max-h-[1000px]' : 'max-h-24'} md:max-h-full h-auto`}

      >
        <header className="flex items-center justify-between w-full h-12">
          <div className="flex items-center">
            <div className="w-10 h-10 md:w-25 md:h-25 rounded-full border-2 border-gray-400 text-white font-bold text-[10px] md:text-lg text-center flex items-center justify-center leading-tight">
              <Link href="/">wow<br />studio</Link>
            </div>
          </div>

         
          <nav className="hidden md:block">
            <ul className="flex items-center list-none font-bold gap-7">
              <li className={linkUndeline("/")}><Link href="/">about us</Link></li>
              <li className={linkUndeline("/job")}><Link href="/job">our work</Link></li>
              <li className={linkUndeline("/clients")}><Link href="/clients">our clients</Link></li>
              <li className={linkUndeline("/team")}><Link href="/team">our team</Link></li>
              <li className={linkUndeline("/contact")}><Link href="/contact">contact us</Link></li>
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
    <div onClick={() => setLanguage(language === 'EN' ? 'FR' : 'EN')} className="relative w-14 h-7 bg-transparent border border-white rounded-full flex items-center cursor-pointer p-1 transition-all duration-300">
      <div className={`absolute w-6 h-6 bg-white rounded-full transition-all duration-300 ease-in-out ${language === 'EN' ? 'translate-x-6' : 'translate-x-0'}`} />
      <div className="relative w-full flex justify-around items-center font-bold text-[10px] z-10 select-none">
        <span className={language === 'FR' ? 'text-black' : 'text-white'}>FR</span>
        <span className={language === 'EN' ? 'text-black' : 'text-white'}>EN</span>
      </div>
    </div>
  );
}
