"use client";

import Lottie from "lottie-react";
import { useRef, useEffect } from "react";

export default function WhyChooseUs({ data }) {
  const features = data.details.list;

  function LottieCard({ item }) {
  const lottieRef = useRef(null);
  const containerRef = useRef(null);
  const hasPlayed = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayed.current) {
          hasPlayed.current = true;
          lottieRef.current?.goToAndPlay(0, true);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = () => {
    lottieRef.current?.goToAndPlay(0, true);
  };

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center text-center"
      onMouseEnter={handleMouseEnter}
    >
      <div className="relative w-[140px] h-[140px] mb-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <Lottie
            lottieRef={lottieRef}
            animationData={item.lottie}
            loop={false}
            autoplay={false}
            className="w-[110px] h-[110px]"
          />
        </div>
      </div>
      <h3 className="text-2xl text-[#242c84] mb-4">{item.title}</h3>
      <p className="text-[#4e4e73] leading-relaxed max-w-[320px] text-md">{item.subtitle}</p>
    </div>
  );
}

  return (
    <section className="w-full bg-white">
      <div className="container mx-auto py-20 px-6 md:px-20">
        
        <div className="text-center mb-20">
          <p className="uppercase tracking-[4px] text-[12px] text-[#8d8d8d] mb-4">
            {data.title}
          </p>
          <h2 className="text-3xl md:text-4xl text-[#242c84] leading-tight">
            {data.subtitle.replace(";;;", " ")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((item) => (
      <LottieCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}