"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

const Testimonial = () => {
  const Slides = 9;
  return (
    <div className="py-16 bg-[#dedede3b] px-2">
      <h2 className="text-3xl font-bold text-center text-[#153563]">
        " What our customers say "
      </h2>
      <div className="keen-slider">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            280: {
              slidesPerView: 1,
              spaceBetween: 10,
              pagination: false,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
              pagination: false,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {Array.from({ length: Slides }).map((_, index) => (
            <SwiperSlide key={index}>
              <div className="mt-8 mb-14">
                <ReviewCard />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;

const ReviewCard = () => {
  return (
    <div className="review__card">
      <div className="border-b-2 border-gray p-2" >
      <p>
        As a business owner, it's crucial to have access to a diverse range of
        high-quality vehicles. That's why I chose Revvit. This platform offers
        an extensive selection of options, making it easy to find the right fit
        for your customers.
      </p></div>
      <h2 className="text-right font-semibold my-2">William Berkley</h2>
    </div>
  );
};
