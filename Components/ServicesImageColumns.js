"use client";

import { useState } from "react";

export default function ServicesImageColumns({ leftImages, rightImages }) {
  const [paused, setPaused] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  const doubledLeft = [...leftImages, ...leftImages];
  const doubledRight = [...rightImages, ...rightImages];

  const Card = ({ item, id }) => (
    <div
      key={id}
      className="mb-3 relative overflow-hidden rounded-xl cursor-pointer"
      style={{
        transform: hoveredId === id ? "scale(1.04)" : "scale(1)",
        transition: "transform 0.4s ease",
      }}
      onMouseEnter={() => setHoveredId(id)}
    >
      <div className="relative h-[500px] w-full">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover transition duration-300 hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e6e]/90 to-transparent" />
        <p className="absolute bottom-4 left-4 text-white text-base font-semibold">{item.title}</p>
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
      `}</style>

      <div
        className="flex gap-4 h-full w-full overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => { setPaused(false); setHoveredId(null); }}
      >
        <div className="flex-1 overflow-hidden">
          <div style={{ animation: "goDown 14s linear infinite", animationPlayState: paused ? "paused" : "running" }}>
            {doubledLeft.map((item, i) => (
              <Card key={`l-${item.id}-${i}`} item={item} id={`l-${item.id}-${i}`} />
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-hidden">
          <div style={{ animation: "goUp 14s linear infinite", animationPlayState: paused ? "paused" : "running" }}>
            {doubledRight.map((item, i) => (
              <Card key={`r-${item.id}-${i}`} item={item} id={`r-${item.id}-${i}`} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}