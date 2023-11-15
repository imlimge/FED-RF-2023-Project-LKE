//모듈 불러오기////////////
//Dom함수 모듈
import dFn from "./dom.js";




/*------------------------- 네비게이션 -  on ------------------------ */

/***************************************************************  
 * 
 *  기능 : 네비게이션 항목 해당 페이지 위치되면 on 변경
 *  
***************************************************************/









/*------------------------------- 인트로 ------------------------------- */
/***************************************************************  
 * 
 *  기능 : 인트로 로고 스크롤 시 회전하며 움직임
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



tg2.forEach(ele => {
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

  setTimeout(()=>rotFn2(ele), TM * 4);

} ////// rotFn2 함수 ///////


window.addEventListener("resize", function() {
  // window resize시 처리
  let winW = window.innerWidth;
  console.log(winW)
})




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
    
    }
    });


var swiper = new Swiper(".mySwiper",
{

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

}

}

);



/* _____________________  공지사항  _________________________ */
$( function() {
  $( ".accordion" ).accordion();
} );