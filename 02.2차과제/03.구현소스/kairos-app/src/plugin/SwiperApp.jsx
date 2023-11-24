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
     centeredSlides={true}
    modules={[Pagination]}
   
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
       },
      
      }}
           
     className="mySwiper"
      >

     {/*  <!-- 학원 사진 -->  */}

    {<div className="photo swiper mySwiper">
        <div className="photo__box swiper-wrapper">
              <div className="photo__item swiper-slide">
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
              </div>
         </div>
      </div>
          }




        </Swiper>
    </>



  );

} /////////// SwiperApp 컴포넌트 ///////////