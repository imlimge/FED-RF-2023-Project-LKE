// 스와이퍼 플러그인 컴포넌트

import React, { useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./css/swiper.css";

// 사용할 스와이퍼 모듈을 불러온다
import { Autoplay, Pagination } from "swiper/modules";

import { photoData } from "../data/photo";
import { ShowCont } from "./ShowCont";

import $ from "jquery";
window.jQuery = $;
require("jquery-ui-dist/jquery-ui");
require("jquery-ui-touch-punch/jquery.ui.touch-punch");

export function SwiperApp({ sts }) {
  const selData = photoData;

  let site = selData["혁신관"];
  let isH = sts;

  isH ? (site = selData["혁신관"]) : (site = selData["단계관"]);

  useEffect(() => {
    const photoItem = $(".photo__item");
    const showCont = $(".show_cont");


    photoItem.click((e) => {
      let tg = e.currentTarget;
      console.log($(tg).find('img').attr('src'))

      $(".show_cont img").attr('src',$(tg).find('img').attr('src'));

      showCont.show();


    });
  });


  // const photoFn = (isrc,tit)=>{

  //   console.log('isrc,tit',isrc,tit)

  // }



  // 리스트만들기 함수
  const makeList = () => {
    let temp = [];

    site.map((v, i) => {
      temp[i] = (
        <SwiperSlide key={i}>
          <div
            className="photo__item swiper-slide" /* onClick={photoFn(v.isrc,v.tit)} */
          >
            <img src={v.isrc} alt="학원사진" />
            <div className="photo__title">
              <h3>{v.tit}</h3>
            </div>
          </div>
        </SwiperSlide>
      );
    });

    //배열을 리턴
    return temp;
  }; ////for///

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        grabCursor={true}
        // loop={true}
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false,
        // }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 1.7,
            spaceBetween: 20,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          1000: {
            slidesPerView: 3.5,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {/*  <!-- 학원 사진 -->  */}

        {
          <div className="photo swiper mySwiper">
            <div className="photo__box swiper-wrapper">{makeList()}</div>
            <>
              {/* <!-- 중간광고 --> */}

              <div className="show_cont">
                <FontAwesomeIcon className="cbtn" icon={faXmark} />
                <div className="show_cont_box">
                  <h2>내용들어감</h2>
                  <img src="" alt="" />
                </div>
              </div>
            </>
          </div>
        }
      </Swiper>
    </>
  );
} /////////// SwiperApp 컴포넌트 ///////////

{
  /*     <div className="photo__item swiper-slide">
      <img src="../../public/images/facility/siteH/photo1.png" alt="학원사진" />
          <div className="photo__title">
          <h3>학원전경</h3>
        </div>
    </div>


    <div className="photo__item swiper-slide">
      <img src="../../public/images/facility/siteH/photo2.png" alt="학원사진" />
      <div className="photo__title">
        <h3>강의실</h3>
      </div>
    </div>
    <div className="photo__item swiper-slide">
      <img src="../../public/images/facility/siteH/photo3.png" alt="학원사진" />
      <div className="photo__title">
        <h3>강의실</h3>
      </div>
    </div>
    <div className="photo__item swiper-slide">
      <img src="../../public/images/facility/siteH/photo4.png" alt="학원사진" />
      <div className="photo__title">
        <h3>강의실</h3>
       
      </div>    
    </div>
    <div className="photo__item swiper-slide">
      <img src="../../public/images/facility/siteH/photo5.png" alt="학원사진" />
      <div className="photo__title">
        <h3>강의실</h3>
      </div>      
    </div>
    <div className="photo__item swiper-slide">
      <img src="../../public/images/facility/siteH/photo6.png" alt="학원사진" />
      <div className="photo__title">
        <h3>마지막 강의실</h3>
      </div>      
    </div> */
}
