"use client";

import Lottie from "lottie-react";
import { useRef, useEffect, useState } from "react";

function parseTitle(title) {
  if (!title) return null;
  const parts = title.split(/(::.*?::)/g);
  return parts.map((part, i) => {
    if (part.startsWith("::") && part.endsWith("::")) {
      const inner = part.slice(2, -2);
      if (inner === "") return <br key={i} />;
      return <span key={i} className="text-[#4fa3e0]">{inner}</span>;
    }
    return part.split(";;;").map((segment, j, arr) => (
      <span key={`${i}-${j}`}>
        {segment}
        {j < arr.length - 1 && <br />}
      </span>
    ));
  });
}

export default function PinnedScroll({ data }) {
  if (!data?.details?.list) return null;

  const items = data.details.list;
  const containerRef = useRef(null);
  const lottieRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const scrollable = container.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollable));
      const index = Math.min(items.length - 1, Math.floor(progress * items.length));
      setActiveIndex(index);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items.length]);

  useEffect(() => {
    lottieRefs.current[activeIndex]?.goToAndPlay(0, true);
  }, [activeIndex]);

  return (
    <section
      ref={containerRef}
      style={{ height: `${items.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen bg-white flex items-center overflow-hidden">

        {items.map((item, i) => (
          <div
            key={item.id}
            className={`
              absolute inset-0 flex items-center px-6 md:px-20
              transition-all duration-700 ease-in-out
              ${i === activeIndex
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : i < activeIndex
                  ? "opacity-0 -translate-y-10 pointer-events-none"
                  : "opacity-0 translate-y-10 pointer-events-none"
              }
            `}
          >
            <div className="flex flex-col md:flex-row items-center gap-16 w-full max-w-6xl mx-auto">

              <div className={`w-[260px] h-[260px] md:w-[380px] md:h-[380px] flex-shrink-0 transition-opacity duration-1000 ease-in-out ${i === activeIndex ? "opacity-100" : "opacity-0"}`}>
                {item.lottie ? (
                  <Lottie
                    lottieRef={(el) => (lottieRefs.current[i] = el)}
                    animationData={item.lottie}
                    loop={i == 2}
                    autoplay={i == 2}
                    className="w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-[#f0f4ff] animate-pulse" />
                )}
              </div>

              <div className="flex flex-col gap-5">
                <h2 className={`text-3xl md:text-4xl text-[#242c84] leading-tight font-light transition-opacity duration-1000 ease-in-out ${i === activeIndex ? "opacity-100" : "opacity-0"}`}>
                  {parseTitle(item.title)}
                </h2>
                {item.text && (
                  <div
                    className={`text-[#4e4e73] leading-relaxed max-w-[500px] text-base md:text-lg transition-opacity duration-1000 ease-in-out ${i === activeIndex ? "opacity-100" : "opacity-0"}`}
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                )}
              </div>

            </div>
          </div>
        ))}

        <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
          {items.map((_, i) => (
            <div
              key={i}
              className={`w-[3px] rounded-full transition-all duration-500 ${
                i === activeIndex ? "h-10 bg-[#4fa3e0]" : "h-1 bg-[#242c84]/20"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}