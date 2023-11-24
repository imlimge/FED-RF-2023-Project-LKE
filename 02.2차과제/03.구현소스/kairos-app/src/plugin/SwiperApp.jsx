// 스와이퍼 플러그인 컴포넌트


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

import "./css/swiper.css";


// 사용할 스와이퍼 모듈을 불러온다
import { Pagination,Navigation,Autoplay } from "swiper/modules";

export function SwiperApp() {
 
 



  return (
    <>
      <Swiper 
     slidesPerView= {3}
     spaceBetween= {30}
     centeredSlides={ true}
     pagination= {{
       el: ".swiper-pagination",
       clickable: true,
     }}
     modules={[Pagination]}
     className="mySwiper"
     breakpoints= {{
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
       }}
     }     
       
      />
    </>
  );
} /////////// SwiperApp 컴포넌트 ///////////