'use client';
import Link from 'next/link';

export default function ContactUsHero() {
  return (
    <section className="bg-black w-full min-h-[420px] flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 ">
        <h2 className="font-bold text-white text-2xl mb-15 pt-30 text-center"><span className="text-[#FF4046]">we'd love</span> to see your project <br />added here</h2>
        
      <div className=" flex items-center justify-center w-full max-w-[1440px] mx-auto p-10">
        
        <div className="relative flex items-center justify-center w-[300px] h-[240px] md:w-[400px] md:h-[340px]">
          
          
          <div className="absolute w-[170px] h-[170px] md:w-[200px] md:h-[200px] -left-5 -top-5 bg-[#FF4046] rounded-full z-10" />
          
          
          <div className="absolute  left-25 w-[250px] h-[250px] md:w-[320px] md:h-[320px] rounded-full border-2 border-cyan-400 overflow-hidden z-0">
            
            <div className="absolute w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full bottom-0 inset-0 bg-[repeating-linear-gradient(225deg,#0f2a2a_0px,#0f2a2a_6px,transparent_6px,transparent_12px)] opacity-80" />
          </div>
          
          
          <div className="absolute z-20 flex right-10">
            <Link href="/contact-us" className="text-white font-bold text-3xl">
              contact us
            </Link>
          </div>
        </div>
        
      </div>
      </div>
    </section>
  );
}
