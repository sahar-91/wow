"use client";

import LatestNewsCard from "@/Components/LatestNewsCard";

export default function LatestNews({ data }) {
  return (
    <section className="min-h-screen overflow-hidden bg-black py-20 text-white">
      <div className="container mx-auto px-6 md:px-20">
        
        <div className="mb-8 text-center">
          <h2 className="text-md md:text-3xl">
            LATEST NEWS
          </h2>
        </div>

        <LatestNewsCard data={data} />

        <div className="mt-16 flex items-center justify-center gap-5">
          
          <button className="news-prev cursor-pointer text-[60px] leading-none text-[#00d9ff]">
            ‹
          </button>

          <h1 className="text-[50px] text-blue-950">
            01
          </h1>

          <div className="relative h-[2px] w-[420px] overflow-hidden bg-white/20">
            <div className="absolute left-0 top-0 h-full w-1/3 bg-[#00d9ff]" />
          </div>

          <h1 className="text-[50px] text-blue-950">
            04
          </h1>

          <button className="news-next cursor-pointer text-[60px] leading-none text-[#00d9ff]">
            ›
          </button>

        </div>
      </div>
    </section>
  );
}