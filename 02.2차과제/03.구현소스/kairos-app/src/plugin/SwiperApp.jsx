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
    const showContImg = $(".show_cont img");


    
    // 닫기버튼
    const cBtn = $(".cbtn");
    // 방향키
    const nBtn = $(".nbtn");

    // 버튼 누르면 닫기 함수
    cBtn.click(() => {
      showCont.hide();
    });

    // 이미지 누르면 닫기 함수
    showContImg.click(() => {
      showCont.hide();
    });

  


/************************************
 * 스와이퍼 항목에서 사진 src 불러와서 
 * 상세보기박스에 보이기 
************************************/

    photoItem.click((e) => {
      let tg = e.currentTarget;
      // console.log(tg, $(tg).find(".photo__title-idx").text());


      $(".show_cont img").attr("src", $(tg).find("img").attr("src"));
      $(".show_cont_box h2").text($(tg).find("h3").text());
      $(".show_cont-idx").text($(tg).find(".photo__title-idx").text());

     
      showCont.show();

    });
    });

  



  // 리스트만들기 함수
  const makeList = (idx) => {
    let temp = [];

    site.map((v, i) => {
      temp[i] = (
        <SwiperSlide key={i}>
          <div className="photo__item swiper-slide">
            <img src={v.isrc} alt="학원사진" />
            <div className="photo__title">
              <div className="photo__title-idx">{v.idx}</div>
              <h3>{v.tit}</h3>
            </div>
          </div>
        </SwiperSlide>
      );
    });
    return temp;
  }; ////for///




  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        // grabCursor={true}
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
          </div>
        }
      </Swiper >
    </>
  );
} /////////// SwiperApp 컴포넌트 ///////////
