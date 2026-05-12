"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function LatestNewsCard({ data }) {

  const news = [...data.sections].sort((a, b) => a.order - b.order);

  return (
    <div className="relative">
      
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".news-next",
          prevEl: ".news-prev",
        }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1.2,
          },
          900: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {news.map((item) => (
          <SwiperSlide key={item.id}>
            
            <div className="flex h-[600px] flex-col overflow-hidden bg-[#080808]">

              <div className="h-[200px] w-full overflow-hidden">
                <img
                  src={item.details.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col px-6 py-7">

                <h3 className="mb-5 text-lg font-semibold  text-white">
                  {item.title}
                </h3>

                <p className="mb-6 text-sm text-[#9ca3af]">
                  {item.details.cta_text}
                </p>

                {item.details.text && (
                  <div
                    className="mb-8 text-sm leading-8 text-[#d1d5db]"
                    dangerouslySetInnerHTML={{
                      __html: item.details.text,
                    }}
                  />
                )}

                <a
                  href={item.details.cta_link}
                  target="_blank"
                  className="mt-auto inline-flex items-center gap-2 text-[18px] font-medium text-[#00d9ff]"
                >
                  Read more →
                </a>

              </div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}