//모듈 불러오기////////////
//Dom함수 모듈
import dFn from "./dom.js";



/***************************************************************
 * 
 *  기능 : 특정 섹션 스크롤 시 상단에 스무스하게 위치
 *  대상 : 인트로 1~4 / 각 섹션
 *  
 ***************************************************************/







/*------------------------- 네비게이션 ------------------------- */

/***************************************************************
 *
 *  기능 : 네비게이션 항목 해당 페이지 위치되면 on 변경
 *
 ***************************************************************/

// 네비게이션 아이템들 (on)
/* const gnbItem = dFn.qsa('.gnb__item');
console.log(gnbItem);

var winY = window.scrollY;


 const introP = dFn.qs('#intro').offsetTop;
const aboutP = dFn.qs('#about').offsetTop;
const facilityP = dFn.qs('#facility').offsetTop;
const timeTableP = dFn.qs('#time_table').offsetTop;
const noticeP = dFn.qs('#notice').offsetTop;
const contactP = dFn.qs('#contact').offsetTop;

 
console.log(introP,aboutP,facilityP,timeTableP,noticeP,contactP)

if(winY>aboutP){
  gnbItem.addClass('on');
}  */

// 제이쿼리로 시도
const gnbMenu = $(".gnb__menu");
const mGnbMenu = $(".m-gnb__menu");
console.log(gnbMenu);

const introP = $("#intro").offset().top;
const aboutP = $("#about").offset().top;
const facilityP = $("#facility").offset().top;
const timeTableP = $("#time_table").offset().top;
const noticeP = $("#notice").offset().top;
const contactP = $("#contact").offset().top;

console.log(introP,'/', aboutP,'/', facilityP,'/', timeTableP,'/', noticeP,'/', contactP);

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


// 슬라이드 파트 
const slideBox1 = $('.box1');
const slideBox2 = $('.box2');
const slideBox3 = $('.box3');
const slideBox4 = $('.box4');
const imgLogo = $('.image__logo img');



$(window).scroll(() => {
  let scTop = $(window).scrollTop();
  let scTop2 = scTop;
   console.log(scTop);

  // 네비게이션 아이템 위치마다 on
  for (let x = 0; x < 6; x++) 
  addOn(x, scTop, bumwee[x][0], bumwee[x][1]);

  // // intro4의배경 .intro_bg 
  // if (scTop2 > 3000 & scTop2 < 3800 ) introBg.addClass("on");
  // else introBg.removeClass("on");



  /*********************************************  
   * 슬라이드 파트 스크롤 시 좌 우 이동
  *********************************************/
  slideBox1.css({
    left : `${-scTop2 * 0.2}px`
  })
  slideBox2.css({
    left : `${-1000 + scTop2/5 * 0.7}px`
  })
  slideBox3.css({
    left : `${-scTop2/7 * 0.7}px`
  })
  slideBox4.css({
    left : `${-1000 + scTop2/7 * 0.7}px`
  })
  imgLogo.css({
    left : `${1500+ -scTop2/13 * 2.2}px`
  })

  /*********************************************  
   * 강사소개 파트 스크롤 시 약력 
   * transform: scaleX(100%); 0에서 100으로
   * .about__history
   * .about__history part2
   * 각각 따로 .line 순번대로 100 되기
  *********************************************/






});

/*------------------------- 상단 영역 ------------------------- */

/***************************************************************
 *
 *  기능 : 토글 버튼 누르면 버튼 모양 변경 및 섹션 색상 변경
 * 
 ***************************************************************/
const transBtnBox = $('.trans_btn__box');
const mBtn = $('.btn.m_btn');
const bBtn1 = $('.btn.b_btn1');
const bBtn2 = $('.btn.b_btn2');

const black = $('.intro,.facility,.time_table,.notice,.contact,.tit,.time__table__radio input,.contact__box_title,.intro__logo,.image__logo,.footer,.contact__time');
console.log(black)
console.log(transBtnBox,mBtn,bBtn1,bBtn2)

transBtnBox.click(function(){
 transBtnBox.toggleClass("black");
 black.toggleClass("black");



  if(transBtnBox.hasClass('black')){
 
    mBtn.css({left:'73px',color:'var(--bright-color)',backgroundColor:'var(--dark-color)',border: '1px solid var(--bright-color)'}).text('단계관');

}
else{
  mBtn.css({left:'0px',color:'var(--dark-color)',backgroundColor:'var(--bright-color)',border: '1px solid var(--dark-color)',
  }).text('혁신관');

}

}
)



/*------------------------------- 인트로 ------------------------------- */
/***************************************************************
 * 
 *  기능 : 인트로 스크롤시 바로 보이기
 *  
 * 
 ***************************************************************/






/***************************************************************
 *
 *  기능 : 인트로 라운드 박스 원형에 작은 원형 회전 애니메이션
 *
 ***************************************************************/

// 대상: .tg
const tg = dFn.qs(".small-round");
const tg2 = dFn.qsa(".small-round.round2");

// 애니시간(ms)
let TM = 1000;

// 회전함수 최초호출
rotFn();

tg2.forEach((ele) => {
  rotFn2(ele);
  // console.log(ele);
});

function rotFn() {
  setTimeout(() => {
    tg.style.top = "0";
    tg.style.left = "50%";
    tg.style.transition = `top ${TM}ms ease-out, left ${TM}ms ease-in`;
  }, 0);
  setTimeout(() => {
    tg.style.top = "50%";
    tg.style.left = "100%";
    tg.style.transition = `top ${TM}ms ease-in, left ${TM}ms ease-out`;
  }, TM);
  setTimeout(() => {
    tg.style.top = "100%";
    tg.style.left = "150%";
    tg.style.transition = `top ${TM}ms ease-out, left ${TM}ms ease-in`;
  }, TM * 2);
  setTimeout(() => {
    tg.style.top = "50%";
    tg.style.left = "200%";
    tg.style.transition = `top ${TM}ms ease-in, left ${TM}ms ease-out`;
  }, TM * 3);
  setTimeout(() => {
    tg.style.top = "0%";
    tg.style.left = "150%";
    tg.style.transition = `top ${TM}ms ease-out, left ${TM}ms ease-in`;
  }, TM * 4);
  setTimeout(() => {
    tg.style.top = "0%";
    tg.style.left = "150%";
    tg.style.transition = `top ${TM}ms ease-out, left ${TM}ms ease-in`;
  }, TM * 4);
  setTimeout(() => {
    tg.style.top = "50%";
    tg.style.left = "100%";
    tg.style.transition = `top ${TM}ms ease-in, left ${TM}ms ease-out`;
  }, TM * 5);

  setTimeout(() => {
    tg.style.top = "100%";
    tg.style.left = "50%";
    tg.style.transition = `top ${TM}ms ease-out, left ${TM}ms ease-in`;
  }, TM * 6);

  setTimeout(() => {
    tg.style.top = "50%";
    tg.style.left = "0%";
    tg.style.transition = `top ${TM}ms ease-in, left ${TM}ms ease-out`;
  }, TM * 7);

  setTimeout(rotFn, TM * 8);
} //////rotFn 함수/////

function rotFn2(ele) {
  setTimeout(() => {
    ele.style.top = "0";
    ele.style.left = "50%";
    ele.style.transition = `top ${TM}ms ease-out, left ${TM}ms ease-in`;
  }, 0);
  setTimeout(() => {
    ele.style.top = "50%";
    ele.style.left = "100%";
    ele.style.transition = `top ${TM}ms ease-in, left ${TM}ms ease-out`;
  }, TM);
  setTimeout(() => {
    ele.style.top = "100%";
    ele.style.left = "50%";
    ele.style.transition = `top ${TM}ms ease-out, left ${TM}ms ease-in`;
  }, TM * 2);

  setTimeout(() => {
    ele.style.top = "50%";
    ele.style.left = "0%";
    ele.style.transition = `top ${TM}ms ease-in, left ${TM}ms ease-out`;
  }, TM * 3);

  setTimeout(() => rotFn2(ele), TM * 4);
} ////// rotFn2 함수 ///////

window.addEventListener("resize", function () {
  // window resize시 처리
  let winW = window.innerWidth;
});

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
  },
});

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },

  breakpoints: {
    300: {
      slidesPerView: 1.3,
      spaceBetween: 1,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
  },
});

/* _____________________  강사소개  _________________________ */
/***************************************************************
 *
 *  기능 : 상사소개 약력 아래 라인 스크롤 시 순번대로 길어짐
 *  
 ***************************************************************/






/* _____________________  공지사항  _________________________ */
// 제이쿼리 아코디언
$(function () {
  $(".accordion").accordion();
});


