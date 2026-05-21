"use client";

import { useState } from "react";

export default function ServicesImageColumns({ leftImages, rightImages }) {
  const [paused, setPaused] = useState(false);

  const doubledLeft = [...leftImages, ...leftImages];
  const doubledRight = [...rightImages, ...rightImages];

  const Card = ({ item }) => (
    <div className="relative rounded-xl overflow-hidden group flex-shrink-0 w-[75%] md:w-full cursor-pointer">
      <div className="relative h-[220px] md:h-[500px] w-full md:w">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e6e]/90 to-transparent pointer-events-none" />
        <p className="absolute bottom-4 left-4 text-white text-base font-semibold pointer-events-none">
          {item.title}
        </p>
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes goDown {
          from { transform: translateY(-50%); }
          to { transform: translateY(0%); }
        }

        @keyframes goUp {
          from { transform: translateY(0%); }
          to { transform: translateY(-50%); }
        }

        @keyframes goLeft {
          from { transform: translateX(0%); }
          to { transform: translateX(-50%); }
        }

        @keyframes goRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(0%); }
        }

        @media (max-width: 768px) {
          .left-track {
            animation: goLeft 14s linear infinite !important;
          }
          .right-track {
            animation: goRight 14s linear infinite !important;
          }
        }
      `}</style>

      <div
        className="flex flex-col md:flex-row gap-4 w-full h-full overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >

        
        <div className="flex-1 overflow-hidden ">
          <div
            className="flex gap-4 md:block space-y-2 left-track"
            style={{
              animation: "goDown 14s linear infinite",
              animationPlayState: paused ? "paused" : "running",
            }}
          >
            {doubledLeft.map((item, i) => (
              <Card key={`l-${i}`} item={item} />
            ))}
          </div>
        </div>

        
        <div className="flex-1 overflow-hidden">
          <div
            className="flex gap-4 md:block space-y-4 right-track"
            style={{
              animation: "goUp 14s linear infinite",
              animationPlayState: paused ? "paused" : "running",
            }}
          >
            {doubledRight.map((item, i) => (
              <Card key={`r-${i}`} item={item} />
            ))}
          </div>
        </div>

      </div>
    </>
  );
}