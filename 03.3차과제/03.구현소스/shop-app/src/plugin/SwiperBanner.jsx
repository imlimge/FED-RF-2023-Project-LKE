// 스와이퍼 플러그인 컴포넌트

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// 사용할 스와이퍼 모듈
import { Autoplay, Pagination, Keyboard, Navigation  } from "swiper/modules";
import { bannerData } from "../data/banner";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";


import "./css/swiper_banner.css";


import $ from "jquery";
window.jQuery = $;



export function SwiperBanner() {
  const selData = bannerData.main;



  return (
    <>
    
      <Swiper 

        // observer= {true}
        // observeParents= {true}
        // watchSlidesVisibility={true}
        // watchSlidesProgress={true}
        // initialSlide={0}

        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}

        loop={true}
        // loopSlides={1}
        navigation={true}
        pagination={true}
        keyboard={true}
        breakpoints= {{

          850:{
            slidesPerView: 2.5,
            spaceBetween: 30
          },
          450: {
            slidesPerView: 1.5,
            spaceBetween: 20
          }
        }}

        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
        // }}

     
        modules={[Pagination, Autoplay, Keyboard, Navigation]}
        className="swiper-container"
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
