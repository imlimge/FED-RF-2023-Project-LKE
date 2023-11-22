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


// 스크롤 이동 파트 리스트
// (인트로)
// .intro__item .intro2 .m-intro
// .intro__item .intro3 .m-intro
// .intro__item .intro4 .m-intro
// (강사소개)
// .about__teacher .part1
// .about__teacher .part2
// (각 섹션파트)
// .intro, .facility, .time_table, .notice, .contact 



  /*********************************************  
   * 강사소개 파트 스크롤 시 약력 
   * transform: scaleX(100%); 0에서 100으로
   * .about__history
   * .about__history part2
   * 각각 .line 요소들의 순번대로 0 -> 100 되기
  *********************************************/

/* window.addEventListener("resize", function () {
  const teacherP = $('.about__teacher').height();
  console.log(teacherP)
 

  let teacherPc = teacherP/100
  console.log(teacherPc);

  높이에서 100 나누어서 스크롤 할 때마다 teacherPc

});
 */



/*------------------------- 휠 이벤트 ------------------------- */

/* window.addEventListener('wheel',wheelFn);

 const wheelFn(e){

 } */

/*------------------------- 스크롤 액션 ------------------------- */
// 윈도우 높이값
let winH = window.innerHeight;
// 문서 전체 높이값
let docH =  document.body.clientHeight;
// 스크롤 한계값 : 전체 document 높이 - 윈도우 높이값
let scLimit = docH - winH;

let i = -30;



$(window).scroll(() => {
  let scTop = $(window).scrollTop();

  const height = $(document).height() - $(window).height();
  const percentY = Math.floor(scTop / height * 100);


 i += 1 ;
 if(i > 0) i = -30;



// 1에서 99까지는 했는데 99에서 다시 1로 가는 법 


console.log(scTop,percentY,i)
 

  /*********************************************  
   * 파트마다 네비게이션 파트에 on
  *********************************************/
  for (let x = 0; x < 6; x++) 
  addOn(x, scTop, bumwee[x][0], bumwee[x][1]);

  // // intro4의배경 .intro_bg 
  // if (scTop2 > 3000 & scTop2 < 3800 ) introBg.addClass("on");
  // else introBg.removeClass("on");





  /*********************************************  
   * 슬라이드 파트 스크롤 시 좌 우 이동
  *********************************************/

    //왼쪽이동
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



    imgLogo.css({
      left : i +'%'
    })



  /****************************************
   * 
   *  기능 : 인트로 스크롤 시 바로 보이기
   * 
   **************************************/



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
console.log(transBtnBox,mBtn,bBtn1,bBtn2)


// 클래스 dark 시 검은색으로 변해야 하는 파트
const dark = $('.tit,.back__line,.intro,.intro_op,.facility,.time_table,.contact,.time__table__radio input,.contact__box_title,.image__logo,.footer,.contact__time');

console.log('dark',dark)

// 클래스 dark 시  밝은 색으로 변해야 하는 파트
const bright = $('.notice, .accordion h3,.notice__title,.tit2,.notice_content');



transBtnBox.click(function(){
  
  dark.toggleClass("dark");
  bright.toggleClass("bright");
  
  

  transBtnBox.toggleClass("dark");

// 토글버튼 on off 변경
  if(transBtnBox.hasClass('dark')){
 
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
      spaceBetween: 20,
    },
  },
});

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
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






/* _____________________  반소소개  _________________________ */
/***************************************************************
 *
 *  기능 : 각 반 위에 마우스 오버 시 정보보임
 *  
 ***************************************************************/






/* _____________________  공지사항  _________________________ */
// 제이쿼리 아코디언
$(function () {
  $(".accordion").accordion();
});


