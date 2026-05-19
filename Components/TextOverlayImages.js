'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP, ScrollTrigger);


export default function TextOverlayImages() {
  const sectionRef = useRef(null);
const titleRef   = useRef(null);
const cardsRef   = useRef([]);

useGSAP(() => {
  gsap.from(titleRef.current, {
    scrollTrigger: { trigger: titleRef.current, start: 'top 88%', toggleActions: 'play none none none' },
    opacity: 0, y: 24, duration: 0.7, ease: 'power2.out',
  });
  gsap.from(cardsRef.current, {
    scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' },
    opacity: 0, y: 36, duration: 0.65, stagger: 0.1, ease: 'power2.out',
  });
}, { scope: sectionRef });

  return (
    <div ref={sectionRef} className="bg-black py-20">
      <div className="container mx-auto px-6 md:px-20">
        <h2 ref={titleRef} className="mb-6 text-3xl text-white">
          Explore the Universe of Movies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:h-[500px]">  
                <div ref={el => cardsRef.current.push(el)} className="group relative overflow-hidden ">
                <img  className= "h-full w-full object-cover cursor-pointer rounded-lg overflow-clip" src="https://img.magnific.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg?semt=ais_hybrid&w=740&q=80" alt="space" />
                <div className="absolute bottom-0 w-full cursor-pointer bg-gradient-to-t from-black via-gray to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white text-xl font-semibold">Nebula View</h3>
                <p className="text-gray-200 text-sm">Deep space exploration</p>
                </div>
                </div>
                <div ref={el => cardsRef.current.push(el)} className="group relative overflow-hidden ">
                <img className= "h-full w-full object-cover cursor-pointer rounded-lg overflow-clip" src="https://img.magnific.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg?semt=ais_hybrid&w=740&q=80" alt="space" />
                <div className="absolute bottom-0 w-full cursor-pointer bg-gradient-to-t from-black via-gray to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white text-xl font-semibold">Nebula View</h3>
                <p className="text-gray-200 text-sm">Deep space exploration</p>
                </div>
                </div>
                <div ref={el => cardsRef.current.push(el)} className="group relative overflow-hidden md:row-span-2 ">
                <img src="https://png.pngtree.com/background/20250315/original/pngtree-simple-space-view-mobile-wallpaper-picture-image_15525419.jpg" alt="Description" className="cursor-pointer h-full w-full object-cover rounded-lg" />
                <div className="absolute bottom-0 w-full cursor-pointer bg-gradient-to-t from-black via-gray to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white text-xl font-semibold">Nebula View</h3>
                <p className="text-gray-200 text-sm">Deep space exploration</p>
                </div>
                </div>
                <div ref={el => cardsRef.current.push(el)} className="group relative overflow-hidden ">
                <img className= "h-full w-full object-cover cursor-pointer rounded-lg overflow-clip" src="https://img.magnific.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg?semt=ais_hybrid&w=740&q=80" alt="space" />
                <div className="absolute bottom-0 w-full cursor-pointer bg-gradient-to-t from-black via-gray to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white text-xl font-semibold">Nebula View</h3>
                <p className="text-gray-200 text-sm">Deep space exploration</p>
                </div>
                </div>
                <div ref={el => cardsRef.current.push(el)} className="group relative overflow-hidden ">
                <img className= "h-full w-full object-cover cursor-pointer rounded-lg overflow-clip" src="https://img.magnific.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg?semt=ais_hybrid&w=740&q=80" alt="space" />
                <div className="absolute bottom-0 w-full cursor-pointer bg-gradient-to-t from-black via-gray to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white text-xl font-semibold">Nebula View</h3>
                <p className="text-gray-200 text-sm">Deep space exploration</p>
                </div>
                </div>
        </div>
      </div>
    </div>
    );
}