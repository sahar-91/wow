'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP, ScrollTrigger);
import Link from 'next/link';
import { useLanguage } from "../app/context/LanguageContext";

export default function ContactUsHero() {
  const { language } = useLanguage();
  const t = {
  EN: {
    title1: "we'd love ",
    title2: "to see your project ",
    title3: "added here",
    contact: "contact us",
  },
  AR: {
    title1:" نحب ان ",
    title2: " نرى مشروعك",
    title3: " مضاف هنا",
    contact: "اتصل بنا",
  }
};

const sectionRef   = useRef(null);
const titleRef     = useRef(null);
const redCircleRef = useRef(null);
const ringRef      = useRef(null);
const ctaRef       = useRef(null);

useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: { 
      trigger: sectionRef.current, 
      start: 'top 95%',
      toggleActions: 'play none none none', 
      once: true, 
    },
  });
  tl.from(titleRef.current,     { opacity: 0, y: 28, duration: 1, ease: 'power2.out' })
    .from(redCircleRef.current, { opacity: 0, rotation: -20, scale: 0.7, duration: 1.5, ease: 'power3.out', transformOrigin: 'center center' }, '-=0.4')
    .from(ringRef.current,      { opacity: 0, rotation: 15, scale: 0.8, duration: 1.5, ease: 'power3.out', transformOrigin: 'center center' }, '-=0.7')
    .from(ctaRef.current,       { opacity: 0, y: 16, duration: 0.9, ease: 'power2.out' }, '-=0.3');
}, { scope: sectionRef });
  return (

    <section ref={sectionRef} className="bg-black w-full min-h-[420px] flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 ">
        <h2 ref={titleRef} className="font-bold text-white text-2xl mb-15 pt-30 text-center"><span className="text-[#FF4046]">{t[language].title1}</span> {t[language].title2} <br />{t[language].title3}</h2>
        
      <div className=" flex items-center justify-center w-full max-w-[1440px] mx-auto p-10">
        
        <div className="relative flex items-center justify-center w-[300px] h-[240px] md:w-[400px] md:h-[340px]">
                    
          <div ref={redCircleRef} className="absolute w-[170px] h-[170px] md:w-[200px] md:h-[200px] -left-5 -top-5 bg-[#FF4046] rounded-full z-10" />
          
          
          <div ref={ringRef} className="absolute  left-25 w-[250px] h-[250px] md:w-[320px] md:h-[320px] rounded-full border-2 border-cyan-400 overflow-hidden z-0">
            
            <div className="absolute w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full bottom-0 inset-0 bg-[repeating-linear-gradient(225deg,#0f2a2a_0px,#0f2a2a_6px,transparent_6px,transparent_12px)] opacity-80" />
          </div>
          
          
          <div ref={ctaRef} className="absolute z-20 flex right-10">
            <Link href="/contact-us" className="text-white font-bold text-3xl">
              {t[language].contact}
            </Link>
          </div>
        </div>
        
      </div>
      </div>
    </section>
  );
}
