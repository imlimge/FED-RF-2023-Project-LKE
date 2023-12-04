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







  function moveSlide(){


    
    // const limitT = document.querySelector("#facility")
    // const lTop = limitT.getBoundingClientRect().top;

    // tpg.style.height = lTop+"px"

    


  /*  스티키 박스 싸고있는 부모박스 */
  const tpg = document.querySelector('.cont');
  /* 실제로 가로이동할 박스 */
  const target = document.querySelector('.cont__content');

   let scTop = window.scrollY;
  
    // 1. 스티키 부모박스 바운딩 top값
  
    let bTop = tpg.getBoundingClientRect().top;
      console.log('나야나',bTop);
  
  
   // 2. 바운딩값으로 대상 left위치 변경하기
   // 움직일대상: 스티키박스 -> .sldiePg>ul
   // 움직이기시작은 바운딩값이 0이하일때부터
   
  
   //윗쪽 (0초과)일때 처음 위치 재설정
   if(bTop > 0){
    target.style.left = '0px';
  }
  
  
   else if(bTop<=0  && bTop >= -3000){
    target.style.left = bTop + 'px';
   }////if///
  
  
  else{
    target.style.left = '-3000px';
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
                  202?년도 서울대 ‘인문 사회’
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
          {/* <AdCont /> */}
        </div>
      </section>
    </>
  );
}
