// 스와이퍼 플러그인 컴포넌트

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// 사용할 스와이퍼 모듈
import { Autoplay, Pagination } from "swiper/modules";


// Import Swiper styles
import "swiper/css";

import "./css/swiper_banner.css"

export function SwiperBanner() {

  return(
    <>
  <Swiper
     spaceBetween={0}
     centeredSlides={true}
     loop={true}
      autoplay={{
          delay: 2000,
          disableOnInteraction: false}}

          modules={[Pagination, Autoplay]}
      
        className="mySwiper"
        >
        
        <div className="swiper-wrapper ">
              <div className="swiper-slide ">
                <img src="./images/banner1.png" alt="배너사진" />
              </div>
              <div className="swiper-slide">
                <img src="./images/banner1.png" alt="배너사진" />
              </div>
              <div className="swiper-slide">
                <img src="./images/banner1.png" alt="배너사진" />
              </div>
              <div className="swiper-slide">
                <img src="./images/banner1.png" alt="배너사진" />
              </div>
</div>
<div className="swiper-pagination"></div>
        </Swiper>
    </>
  );


}