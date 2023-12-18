// 스와이퍼 플러그인 컴포넌트

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./css/swiper_banner.css";

// 사용할 스와이퍼 모듈
import { Autoplay, Pagination } from "swiper/modules";
import { bannerData } from "../data/banner";

export function SwiperBanner() {
  const selData = bannerData.main;



  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {selData.map((v, i) => (
          <SwiperSlide key={i}>
            <img src={v} alt="배너사진" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
