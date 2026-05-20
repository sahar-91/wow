"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import ServicesImageColumns from "./ServicesImageColumns";

function Counter({ target, duration = 1200 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = Date.now();
        const tick = () => {
          const elapsed = Date.now() - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Services({ textSection, statSection, leftImages, rightImages }) {
  const [visible, setVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.2 });
    if (textRef.current) observer.observe(textRef.current);
    return () => observer.disconnect();
  }, []);

  const statValue = parseInt(
    statSection?.details?.text?.replace(/<[^>]*>/g, "").replace("+", "").trim()
  ) || 30;

  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-20">
      <div className="flex flex-col md:flex-row gap-20">


        <div
          ref={textRef}
          className="w-[60%] flex items-start px-8 md:px-16 py-20"
        >
          <div className="flex flex-col gap-6">

            <p
              className={`uppercase tracking-[4px] text-[12px] text-[#8d8d8d] transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              {textSection?.title}
            </p>

            <h2
              className={`text-3xl md:text-4xl text-[#242c84] leading-tight transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              {textSection?.details?.subtitle}
            </h2>

            <div
              className={`text-[#4e4e73] leading-relaxed max-w-[400px] transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              dangerouslySetInnerHTML={{ __html: textSection?.details?.text }}
            />

            <div
              className={`rounded-lg bg-blue-300/10 p-6 w-fit transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <p className="text-4xl text-[#242c84] font-light">
                {visible ? <Counter target={statValue} /> : "0"}+
              </p>
              <p className="text-[#8d8d8d] text-sm mt-1">{statSection?.title}</p>
            </div>

            {textSection?.details?.cta_text && (
              <Link
                href={`/${textSection.details.cta_page_alias}`}
                className={`border border-[#242c84] rounded-full text-[#242c84] px-6 py-3 text-sm tracking-widest w-fit hover:bg-[#242c84] hover:text-white transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                {textSection.details.cta_text} →
              </Link>
            )}

          </div>
        </div>


        <div className="w-full md:w-[55%] h-[600px] md:h-auto">
          <ServicesImageColumns leftImages={leftImages} rightImages={rightImages} />
        </div>

      </div>
      </div>
    </section>
  );
}