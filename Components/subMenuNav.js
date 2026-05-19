"use client";

import { useEffect, useState } from "react";

const sections = [
  {
    id: "about",
    label: "ABOUT",
  },
  {
    id: "sustainability",
    label: "SUSTAINABILITY",
  },
  {
    id: "partners",
    label: "PARTNERS",
  },
];

export default function subMenuNav() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);

        if (!element) return;

        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (!element) return;

    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: "smooth",
    });
  };

  return (
    <div className="sticky top-0 z-50 bg-[#edf2f4] border-b border-gray-200">
       <div className="container mx-auto px-6 md:px-20">
        <div className="flex items-center gap-10 h-[70px]">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`text-sm font-semibold cursor-pointer tracking-wide transition-all duration-300 pb-2 border-b-2 ${
                activeSection === section.id
                  ? "text-cyan-500 border-cyan-500"
                  : "text-gray-600 border-transparent hover:text-black"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}