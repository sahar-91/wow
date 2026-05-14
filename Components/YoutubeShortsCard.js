"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function getYoutubeId(url) {
  if (!url) return "";

  const shortMatch = url.match(/youtube\.com\/shorts\/([^?&/]+)/);
  if (shortMatch?.[1]) return shortMatch[1];

  const watchMatch = url.match(/[?&]v=([^?&/]+)/);
  if (watchMatch?.[1]) return watchMatch[1];

  const embedMatch = url.match(/youtube\.com\/embed\/([^?&/]+)/);
  if (embedMatch?.[1]) return embedMatch[1];

  return "";
}

function ShortCard({ short, isActive }) {
  const [play, setPlay] = useState(false);

  const videoId = getYoutubeId(short.link);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  useEffect(() => {
    if (!isActive && play) {
      setPlay(false);
    }
  }, [isActive, play]);

  return (
    <div
      className={[
        "relative overflow-hidden rounded-[22px] bg-[#050505] transition-all duration-500",
        isActive
          ? "h-[380px] w-full scale-110 -translate-y-8 md:h-[520px] md:-translate-y-12 lg:h-[410px] lg:-translate-y-18"
          : "h-[300px] w-full opacity-70 md:h-[380px] lg:h-[350px]",
      ].join(" ")}
    >
      {!play ? (
        <button
          type="button"
          onClick={() => setPlay(true)}
          className="group relative h-full w-full overflow-hidden"
        >
          <img
            src={thumbnail}
            alt="YouTube Short thumbnail"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/35" />

          <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 text-[16px] text-black shadow-md transition-transform duration-300 group-hover:scale-110">
            ▶
          </div>
        </button>
      ) : (
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&playsinline=1`}
          title="YouTube Short"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}

export default function YoutubeShortsCard({ shorts, setIndex }) {
  const handleSlideChange = (swiper) => {
    setIndex(swiper.realIndex + 1);
  };

  return (
    <div className="relative w-full min-w-0">
      <Swiper
        initialSlide={0}
        modules={[Navigation]}
        navigation={{
          nextEl: ".shorts-next",
          prevEl: ".shorts-prev",
        }}
        onSlideChange={handleSlideChange}
        centeredSlides={true}
        
        grabCursor={true}
        slidesPerView={3.5}
        spaceBetween={30}
        speed={650}
        slideToClickedSlide={true}
        watchSlidesProgress={true}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 14,
          },
          1200: {
            slidesPerView: 2.7,
            spaceBetween: 14,
          },
        }}
        className="!overflow-visible py-14"
      >
        {shorts.map((short) => (
          <SwiperSlide key={short.id} className="transition-transform duration-500">
            {({ isActive }) => <ShortCard short={short} isActive={isActive} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}