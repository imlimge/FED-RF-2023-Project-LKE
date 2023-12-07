// AddCont - 광고파트 모듈

// CSS
import "../css/adcont.css";

import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import $ from "jquery";
window.jQuery = $;
require("jquery-ui-dist/jquery-ui");
require("jquery-ui-touch-punch/jquery.ui.touch-punch");

export function AdCont() {



  React.useEffect(() => {
  /*********************************************
   * 모바일 광고 글자 부드럽게 등장
   *********************************************/


   // 출력대상
   const adCont = document.querySelector(".m-cont__title");
   // 글자요소 span들
   const sTxt = document.querySelectorAll(".m-cont__title span");


   let hcode = "";
   // 순번증가변수
   let seqNum = 0;

   // span들 추출
   for (let x of sTxt) {
       hcode += `<span style=" transition-delay: ${seqNum * 0.3}s;">${
           x.innerText
       }</span><br />`;
       seqNum++;
      
   }

   adCont.innerHTML = hcode;

   setTimeout(() => {
    adCont.classList.add("on");
   }, 500);


  const winW = window.innerHeight / 4*3;


  window.addEventListener("scroll",()=>{

      if(adCont.getBoundingClientRect().top < winW)adCont.classList.add("on");
      else adCont.classList.remove("on");


})

  })






  function moveSlide(){

  /*  스티키 박스 싸고있는 부모박스 */
  const tpg = document.querySelector('.cont');
  /* 실제로 가로이동할 박스 */
  const target = document.querySelector('.cont__content');

   let scTop = window.scrollY;
  
    // 1. 스티키 부모박스 바운딩 top값
  
    let bTop = tpg.getBoundingClientRect().top;
    //   console.log('나야나',bTop);
  

 
   //윗쪽 (0초과)일때 처음 위치 재설정
   if(bTop > 0){
    target.style.left = '0px';
  }
  
     else if(bTop<=0  && bTop >= -2600){
    target.style.left = bTop + 'px';
   }////if///
  
  
  else{
    target.style.left = '-2600px';
  }
  
  }///moveSlide함수////////////
  


  window.addEventListener('scroll',moveSlide)







  return (
    <>
      {/* <!-- 중간광고 --> */}

      <section id="cont" className="mp">
        <div className="cont">
          <div className="cont__box">

            <div className="cont__content">

              <div className="cont__title">
                <span>
                  2022년도 서울대 ‘인문 사회’
                  <br />
                </span>
              </div>
          
              <div className="cont__title">
                <span>
                  정시합격자 <br />
                </span>
              </div>
          
              <div className="cont__title">
                <span>
                  44% 가 이과생!! <br />
                </span>
              </div>
          
              <div className="cont__title">
                <span>
                  이제는 수학이 정답입니다. <br />
                </span>
              </div>
            </div>
          </div>
         </div>
      </section>

    {/* 모바일 광고 */}
      <section id="m-cont">
        <div className="m-cont">
          <div className="m-cont__box">

            <div className="m-cont__content">

              <div className="m-cont__title">
                <span>
                  2022년도 서울대 ‘인문 사회’
                  <br />
                </span>
           
                <span>
                  정시합격자 <br />
                </span>
           
                <span>
                  44% 가 이과생!! <br />
                </span>
            
                <span>
                  이제는 수학이 정답입니다. <br />
                </span>
              </div>
            </div>
          </div>
         </div>
      </section>
      
    </>
  );
}
