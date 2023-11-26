//Kairos - Layout 컴포넌트

import React from "react";


import { GnbArea } from "./GnbArea";
import { MainArea } from "./MainArea";
import { FooterArea } from "./FooterArea";
import { TopArea } from "./TopArea";

import $ from "jquery";
window.jQuery = $;
require("jquery-ui-dist/jquery-ui");
require("jquery-ui-touch-punch/jquery.ui.touch-punch");





export function Layout() {


      
   React.useEffect(()=>{
    /************************************************************
     *  기능 : 토글 버튼 누르면 버튼 모양 변경 및 섹션 색상 변경
     ***********************************************************/
    const transBtnBox = $(".trans_btn__box");
    const mBtn = $(".btn.m_btn");

    // 클래스 dark 시 검은색으로 변해야 하는 파트
    const dark = $(
     ".tit,.back__line,.intro,.intro_op,.facility,.time_table,.contact,.time__table__radio input,.contact__box_title,.image__logo,.footer,.contact__time,.marquee"
    );

    // 클래스 dark 시  밝은 색으로 변해야 하는 파트
    const bright = $(
        ".notice, .accordion h3,.notice__title,.tit2,.notice_content"
    );

    transBtnBox.click(function () {
        dark.toggleClass("dark");
        bright.toggleClass("bright");

        transBtnBox.toggleClass("dark");

        // 토글버튼 on off 변경
        if (transBtnBox.hasClass("dark")) {
            mBtn.css({
                left: "73px",
                color: "var(--dark-color)",
                backgroundColor: "var(--point-color)",
                border: "1px solid var(--bright-color)",
            }).text("단계관");
        } else {
            mBtn.css({
                left: "0px",
                color: "var(--dark-color)",
                backgroundColor: "var(--point-color)",
                border: "1px solid var(--dark-color)",
            }).text("혁신관");
        }
    });




/***************************************************************
 *
 *  기능 : 네비게이션 항목 해당 페이지 위치되면 on 변경
 *
 ***************************************************************/

const gnbMenu = $(".gnb__menu");
const mGnbMenu = $(".m-gnb__menu");
//console.log(gnbMenu);

const introP = $("#intro").offset().top;
const aboutP = $("#about").offset().top;
const facilityP = $("#facility").offset().top;
const timeTableP = $("#time_table").offset().top;
const noticeP = $("#notice").offset().top;
const contactP = $("#contact").offset().top;

//console.log(introP,'/', aboutP,'/', facilityP,'/', timeTableP,'/', noticeP,'/', contactP);

const bumwee = [
  [introP, aboutP],
  [aboutP, facilityP],
  [facilityP, timeTableP],
  [timeTableP, noticeP],
  [noticeP, contactP],
  [contactP, contactP+1000],
];




const addOn = (seq, scTop, start, end) => {
  if (scTop > start -1 && scTop < end) {
    gnbMenu
      .find(".gnb__item").eq(seq)
      .addClass("on")
      .parent()
      .siblings()
      .find("a")
      .removeClass("on");

    mGnbMenu
      .find(".m-gnb__item").eq(seq)
      .addClass("on")
      .parent()
      .siblings()
      .find("a")
      .removeClass("on");

      
  }
};


// 슬라이드 대상 박스  >> 모듈화 해야함
const slideBox1 = $('.box1');
const slideBox2 = $('.box2');
const slideBox3 = $('.box3');
const slideBox4 = $('.box4');



/*------------------------- 스크롤 액션 ------------------------- */
// 윈도우 높이값
let winH = window.innerHeight;
// 문서 전체 높이값
let docH =  document.body.clientHeight;
// 스크롤 한계값 : 전체 document 높이 - 윈도우 높이값
let scLimit = docH - winH;




  /*********************************************  
   * 슬라이드 파트 스크롤 시 좌 우 이동
  *********************************************/
  // 슬라이드 % 시작값 설정
  let i = -30;


$(window).scroll(() => {
  let scTop = $(window).scrollTop();
  let scTop2 = winH*scTop/scLimit;

 

  const height = $(document).height() - $(window).height();
  const percentY = Math.floor(scTop / height * 100);

  i += 1 ;
  if(i > 0) i = -30;


  console.log(scTop,percentY,i)

  /*********************************************  
   * 파트마다 네비게이션 파트에 on
  *********************************************/
  for (let x = 0; x < 6; x++) 
  addOn(x, scTop, bumwee[x][0], bumwee[x][1]);

 
 
  /*********************************************  
   * 슬라이드 파트 스크롤 시 좌 우 이동
  *********************************************/

    //왼쪽
    slideBox1.css({
        left : i +'%'
       })
       
       //오른쪽
       slideBox2.css({
         left :-30 -i +'%'
       })
       slideBox3.css({
         left :i +'%'
       })
       slideBox4.css({
         left :i +'%'
       })
   


});






});



    return (
        <>
            <TopArea />
            <GnbArea />
            <MainArea />
            <FooterArea />
        </>
    );
}
