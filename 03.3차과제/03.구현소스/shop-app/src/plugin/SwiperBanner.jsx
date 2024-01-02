// 스와이퍼 플러그인 컴포넌트

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";



import "./css/swiper_banner.css";

// 사용할 스와이퍼 모듈
import { Autoplay, Pagination, Keyboard, Navigation  } from "swiper/modules";
import { bannerData } from "../data/banner";

export function SwiperBanner() {
  const selData = bannerData.main;



  return (
    <>
      <Swiper

        spaceBetween={30}
        slidesPerView={2}
        centeredSlides={true}
        loop={true}
        navigation={true}
        pagination={true}
        keyboard={true}

        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay, Keyboard, Navigation]}
        className="mySwiper"
      >
        {selData.map((v, i) => (
          <SwiperSlide key={i}>
            <div className="banner__tit">

            <p>{v.sub}</p>
            <h2>{v.tit}</h2>
            <span>{v.cont}</span>
            
            </div>
            <img src={v.isrc} alt="배너사진" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
