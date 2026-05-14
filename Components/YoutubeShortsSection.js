"use client";

import { useState } from "react";
import YoutubeShortsCard from "./YoutubeShortsCard";

export default function YoutubeShortsSection() {
  const shorts = [
    { id: 1, link: "https://youtube.com/shorts/jIm1xYxBOmE?si=C7uSiHjG09RCAlyI" },
    { id: 2, link: "https://youtube.com/shorts/D8E_TThEKB4?si=B7e5DLMzKV-dUv7a" },
    { id: 3, link: "https://youtube.com/shorts/LC_bDFbbXI8?si=1ZNHnroh8j-65RcP" },
    { id: 4, link: "https://youtube.com/shorts/m3yWqsfstmg?si=sDiZGLfzNMT7qqIX" },
    { id: 5, link: "https://youtube.com/shorts/k9dcS5LqqoI?si=rnWaWqWWMoj_i3Gv" },
    { id: 6, link: "https://youtube.com/shorts/XuZIFHzSsSk?si=RWxLsgsxXjDapHHO" },
    { id: 7, link: "https://youtube.com/shorts/LC_bDFbbXI8?si=1ZNHnroh8j-65RcP" },
  ];

  const [index, setIndex] = useState(1);

  const total = shorts.length;
  const progressPercent = total > 0 ? (index / total) * 100 : 0;

  return (
    <section className="overflow-hidden bg-black py-20 text-white">
      <div className="container mx-auto px-6 md:px-20">
 

        <YoutubeShortsCard shorts={shorts} setIndex={setIndex} />

        <div className="mt-12 flex flex-col items-center justify-center gap-5">
          <button className="rounded-md bg-cyan-400 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-black transition-transform hover:scale-105">
            VIEW OUR MOVIES
          </button>

          <div className="flex items-center justify-center gap-4">
            <button className="shorts-prev cursor-pointer text-4xl leading-none text-cyan-400 md:text-5xl">
              ‹
            </button>

            <h1 className="tabular-nums text-3xl text-white md:text-5xl">
              {String(index).padStart(2, "0")}
            </h1>

            <div className="relative h-[2px] w-[180px] overflow-hidden bg-white/20 md:w-[420px]">
              <div
                className="absolute left-0 top-0 h-full bg-cyan-400 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <h1 className="tabular-nums text-3xl text-white md:text-5xl">
              {String(total).padStart(2, "0")}
            </h1>

            <button className="shorts-next cursor-pointer text-4xl leading-none text-cyan-400 md:text-5xl">
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}