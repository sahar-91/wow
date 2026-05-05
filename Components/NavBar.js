'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const [active, setActive] = useState(false);
  const [language, setLanguage] = useState('EN');
  const pathname = usePathname(); 
  const linkUndeline = (path) =>
    `hover:text-white ${
      pathname === path ? "border-b border-teal-400 text-white" : ""
    }`;

  return (
    <div className="sticky top-0 z-50  bg-black">
    <div className="container max-w-[1440px] mx-auto md:px-10">
    <header className="flex items-center justify-between px-5 py-6 border-b-4 border-teal-500 md:border-b-0">
      <div className="flex items-center gap-1">
        <div className="w-9 h-9 md:w-25 md:h-25 rounded-full p-6 border-2 border-gray-400 text-white font-bold text-xs md:text-xl text-center flex items-center justify-center">
          <Link href="/">wow<br />studio</Link>
        </div>
      </div>

      
      <button
        onClick={() => setActive(!active)}
        className="flex flex-col cursor-pointer md:hidden z-50 gap-2"
        aria-label="Toggle menu"
      >
        
        <span className={`block w-8 h-1 bg-gray-400 transition-all duration-300 ${active ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block h-1 bg-gray-400 transition-all duration-300 ${active ? '-rotate-45 -translate-y-1 w-8' : 'w-5'}`} />
      </button>

       <nav className={`${
    active 
      ? "absolute top-[calc(100%+4px)] h-auto left-0 w-full bg-black flex flex-col items-center py-8 gap-6 overflow-hidden transition-all duration-1000 ease-in-out transform" 
      : "hidden"
    } md:flex md:static md:bg-transparent md:flex-row md:gap-7 md:py-0`}
  >
    
        <ul className={`flex flex-col md:flex-row items-center list-none font-bold  ${active ? "text-4xl text-white gap-20":"text-gray-400 gap-7"} `}>
          <li className={linkUndeline("/")}><Link href="/">about us</Link></li>
          <li className={`hover:text-white ${linkUndeline("/job")}`}><Link href="/job">our work</Link></li>
          <li className={`hover:text-white ${linkUndeline("/aboutus")}`}><Link href="/aboutus">our clients</Link></li>
          <li className={`hover:text-white ${linkUndeline("/contact")}`}><Link href="/contact">our team</Link></li>
          <li className={`hover:text-white ${linkUndeline("/contact")}`}><Link href="/contact">contact us</Link></li>
          <div onClick={() => setLanguage(language === 'EN' ? 'FR' : 'EN')} className="relative w-15 h-8 bg-transparent border-1 border-white rounded-full flex items-center cursor-pointer p-1 transition-all duration-300">
  
  <div className={`absolute w-8 h-8 bg-white rounded-full transition-all duration-300 ease-in-out ${
    language === 'EN' ? 'translate-x-6' : '-translate-x-2'
  }`} />

  
      <div className="relative w-full flex justify-around items-center font-bold text-[10px] z-10 select-none">
        <span className={language === 'FR' ? 'text-black' : 'text-white'}>FR</span>
        <span className={language === 'EN' ? 'text-black' : 'text-white'}>EN</span>
      </div>
  </div>
        </ul>
        
      </nav>
    </header>
    </div>
    </div>
  );
}
