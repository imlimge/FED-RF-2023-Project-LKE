// Facility - 광고파트 모듈


export function Facility(){


  return(
      <>
      
      <h6> (모듈) - 학원시설 (공모) </h6>
      

{/*   <!-- 학원시설 --> */}
  <section id="facility">
    <div class="facility mp">
      <h2 class="tit">학원시설</h2>
     {/*  <!-- 학원 사진 -->  */}
          <div class="photo swiper mySwiper2">
        <div class="photo__box swiper-wrapper">
              <div class="photo__item swiper-slide">
                <img src="./images/place/place1.png" alt="학원사진" />
                    <div class="photo__title">
                    <h3>학원전경</h3>
                  </div>
              </div>
              <div class="photo__item swiper-slide">
                <img src="./images/place/place2.png" alt="학원사진" />
                <div class="photo__title">
                  <h3>강의실</h3>
                </div>
              </div>
              <div class="photo__item swiper-slide">
                <img src="./images/place/place3.png" alt="학원사진" />
                <div class="photo__title">
                  <h3>강의실</h3>
                </div>
              </div>
              <div class="photo__item swiper-slide">
                <img src="./images/place/place4.png" alt="학원사진" />
                <div class="photo__title">
                  <h3>강의실</h3>
                 
                </div>    
              </div>
              <div class="photo__item swiper-slide">
                <img src="./images/place/place5.png" alt="학원사진" />
                <div class="photo__title">
                  <h3>강의실</h3>
                </div>      
              </div>
              <div class="photo__item swiper-slide">
                <img src="./images/place/place6.png" alt="학원사진" />
                <div class="photo__title">
                  <h3>마지막 강의실</h3>
                </div>      
              </div>
            
          <div class="swiper-scrollbar"></div>
      </div>
      </div>
    </div>
  </section>

      </>

  );

} 