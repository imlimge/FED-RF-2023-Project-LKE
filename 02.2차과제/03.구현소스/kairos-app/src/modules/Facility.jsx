// Facility - 광고파트 모듈

import { SwiperApp } from "../plugin/SwiperApp";

// CSS
import "../css/facility.css"

export function Facility(){


  return(
      <>
     

{/*   <!-- 학원시설 --> */}
  <section id="facility">
    <div className="facility mp">
      <h2 className="tit">학원시설</h2>



     {/*  <!-- 학원 사진 -->  */}
       <div className="photo swiper mySwiper">
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
    </div>
  </section>

      </>

  );

} 