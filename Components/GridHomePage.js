"use client";
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { useState,useEffect } from "react";
import Link from "next/link";
import SearchBarCard from "./SearchBarCard";

export default function GridHomePage() {
   useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://hanzo.dxpshift.com/api/projects");
      const data = await res.json();
      setItems(data.data || []);
    };
    fetchData();
  }, []);
    const [items, setItems] = useState([])
    const [query, setQuery] = useState("");
    const filteredItems = items.filter((item) => {
    const title = item.title?.toLowerCase() || "";
    const desc = item.description?.toLowerCase() || "";
    const q = query.toLowerCase();

  return title.includes(q) || desc.includes(q);
});
    
const sectionRef = useRef(null);
const cardsRef   = useRef([]);

useEffect(() => {
  cardsRef.current.forEach((card) => {
    if (!card) return;

    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });
}, [filteredItems]);


    return (

        <div ref={sectionRef} className="bg-black">
           
            <div className="container mx-auto max-w-[1440px] px-4 md:px-60">
                 <SearchBarCard query={query} setQuery={setQuery} /> 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6 items-start">
                    {filteredItems.map((item, index) => (
                        <Link key={item.id} href={`/cardDetails/${item.id}`}>
                        <div ref={(el) => (cardsRef.current[index] = el)} className="bg-black cursor-pointer mb-5 h-auto overflow-clip">
                            <div className="w-full h-full overflow-hidden">
                            <img src={item.image} alt={item.title} className=" object-cover transform ease-in duration-300 hover:scale-125" />
                            </div>
                            <div className="py-4">
                        <h5 className="text-xl font-bold text-white">{item.title}</h5>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                </div>
                </Link>
            ))}
        </div>
        </div>
        </div>
    );
}
