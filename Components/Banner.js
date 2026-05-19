'use client'
import { useRef} from 'react';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { useLanguage } from "../app/context/LanguageContext";




export default function Banner() {

  const sectionRef = useRef(null);
  const circleRef  = useRef(null);
  const line1Ref   = useRef(null);
  const line2Ref   = useRef(null);
  const accentRef  = useRef(null);

  useGSAP(() => {
  gsap.from(circleRef.current, {
    scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
    opacity: 0, rotation: -18, scale: 0.88,
    duration: 1.5, ease: 'power3.out', transformOrigin: 'center center',
  });
  const tl = gsap.timeline({
    scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
    delay: 0.3,
  });
  tl.from(line1Ref.current,  { opacity: 0, y: 28, duration: 1, ease: 'power2.out' })
    .from(line2Ref.current,  { opacity: 0, y: 28, duration: 1, ease: 'power2.out' }, '-=0.5')
    .from(accentRef.current, { opacity: 0, y: 20, duration: 0.65, ease: 'power2.out' }, '-=0.45');
}, { scope: sectionRef });


  const { language } = useLanguage();
  const t = {
  EN: {
    line1: "here's a teeny-weeny glimpse of our work.",
    line2: "what's coming later is",
    highlight: "even",
    highlight2:"greater",

  },
  AR: {
    line1: "هذه لمحة صغيرGة عن أعمالنا.",
    line2: "ما سيأتي لاحقًا هو",
    highlight:"بكثير",
    highlight2:"أعظم",
  }
};
  return (
    <div  ref={sectionRef} className="relative bg-black flex flex-col h-150 items-center justify-center overflow-hidden pt-20">

      <div className="container mx-auto px-6">
      
      <div ref={circleRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px]" >

        
        <div className="absolute inset-0 rounded-full border border-teal-400" />

        
        <div className="absolute w-[85%] h-[85%] top-[20%] right-[18%] rounded-full opacity-70 bg-[repeating-linear-gradient(45deg,rgba(0,255,255,0.18)_0px,rgba(0,255,255,0.18)_5px,transparent_5px,transparent_16px)]"/>
      </div>

      
  <div className={`relative ${language === "AR" ? "text-right" : "text-left"} z-10 text-center px-6 max-w-[90vw] md:max-w-[70%] mx-auto`}>
 
  <p ref={line1Ref} className="text-[7vw] md:text-7xl text-white mb-2 leading-tight text-balance">
    {t[language].line1}
  </p>

  <p ref={line2Ref} className="text-[7vw] md:text-7xl text-white mb-6 text-balance">
    {t[language].line2}
  </p>

  <div className="flex items-center justify-center gap-4">
    <span className="w-10 h-0.5 bg-red-500" />
    <h1 className="text-4xl md:text-7xl font-extrabold whitespace-nowrap">
      <span className="text-red-500">{t[language].highlight}</span>{' '}
      <span className="text-white">{t[language].highlight2}</span>
    </h1>
    <span className="w-10 h-0.5 bg-red-500" />
  </div>
</div>
      </div>
      </div>
      
    
  )
}