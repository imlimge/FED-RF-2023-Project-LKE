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
  // 불러올 이미지 리스트
  const imgArr = [

  ];

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}  
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}      
        loop={true}
        navigation={true}
        /* 사용할 모듈을 여기에 적용시킨다 */
        modules={[Pagination,Navigation,Autoplay]}
        className="mySwiper"
      >
        {
            imgArr.map((v,i)=>
            <SwiperSlide key={i}>
                <img src={"./images/"+v+".jpg"} alt="list image" />
            </SwiperSlide>)
        }        
       
      </Swiper>
    </>
  );
} /////////// SwiperApp 컴포넌트 ///////////