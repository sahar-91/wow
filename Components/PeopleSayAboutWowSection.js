"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Mohammed Ramzan",
    role: "Founder, NAQUA",
  },
  {
    id: 2,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    name: "Omar Hassan",
    role: "Product Manager",
  },
  {
    id: 3,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    name: "Sara Ali",
    role: "Brand Consultant",
  },
  {
    id: 4,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
    name: "Nour Khalil",
    role: "Marketing Lead",
  },
  {
    id: 5,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit esse cillum dolore eu fugiat nulla pariatur.",
    name: "Imran Khan",
    role: "Director, FoodTech",
  },
  {
    id: 6,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor incididunt ut labore et dolore magna aliqua.",
    name: "Amir Khan",
    role: "Operations Manager",
  },
  {
    id: 7,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi ut aliquip ex ea commodo consequat.",
    name: "Owais Ahmed",
    role: "Executive Chef",
  },
  {
    id: 8,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    name: "Hana Ibrahim",
    role: "Customer Success",
  },
];

function TestimonialCard({ item, isActive }) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-[22px] border transition-all duration-500 ease-out",
        isActive
          ? "h-[250px] w-[260px] -translate-y-6 border-cyan-400 bg-[#062f3e] text-white md:h-[280px] md:w-[320px] lg:h-[310px] lg:w-[380px]"
          : "h-[210px] w-[190px] border-white/10 bg-[#0b0b0b] text-white/85 opacity-70 md:h-[235px] md:w-[240px] lg:h-[250px] lg:w-[300px]",
      ].join(" ")}
    >
      <div className="flex h-full flex-col p-5 md:p-6">
        <div className="text-sm leading-6 md:text-base md:leading-7">
          {item.quote}
        </div>

        <div className="mt-auto pt-6">
          <div className="text-sm font-semibold text-cyan-400 md:text-base">
            {item.name}
          </div>
          <div className="mt-1 text-[11px] text-white/60 md:text-sm">
            {item.role}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PeopleSayAboutWowSection() {
  const [index, setIndex] = useState(1);
  const total = testimonials.length;
  const progressPercent = total > 0 ? (index / total) * 100 : 0;

  const handleSlideChange = (swiper) => {
    setIndex(swiper.realIndex + 1);
  };

  return (
    <section className="overflow-hidden bg-black py-20 text-white">
      <div className="container mx-auto px-6 md:px-20">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold tracking-[0.25em] text-cyan-400 md:text-4xl">
            WHAT PEOPLE SAY ABOUT WOW
          </h2>
        </div>

        <div className="relative">
          <Swiper
            initialSlide={0}
            modules={[Navigation]}
            navigation={{
              nextEl: ".people-next",
              prevEl: ".people-prev",
            }}
            onSlideChange={handleSlideChange}
            centeredSlides={true}
            loop={false}
            grabCursor={true}
            slidesPerView="auto"
            spaceBetween={18}
            speed={650}
            slideToClickedSlide={true}
            watchSlidesProgress={true}
            className="!overflow-visible py-10"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="!w-auto transition-all duration-500">
                {({ isActive }) => (
                  <TestimonialCard item={item} isActive={isActive} />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-5">
          <button className="rounded-md bg-cyan-400 cursor-pointer px-7 py-3 text-sm font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:scale-105">
            VIEW ALL REVIEWS
          </button>

          <div className="flex items-center justify-center gap-4">
            <button className="people-prev cursor-pointer text-4xl leading-none text-cyan-400 md:text-5xl">
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

            <button className="people-next cursor-pointer text-4xl leading-none text-cyan-400 md:text-5xl">
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}