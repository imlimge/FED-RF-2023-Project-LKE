//모듈 불러오기////////////
//Dom함수 모듈
import dFn from "./dom.js";

const aTeacher = $('.about__teacher');
aTeacher.css({
  position:'fixed',
  top:'0',
  left:'0',
  width:'100vw',
  height: '100vh',
  zIdex: '9999'
}).hide();

$(window).scroll(()=>{
  let scTop = $(window).scrollTop();
  console.log(scTop);
  if(scTop>4700 && scTop<5000){
    aTeacher.eq(0).show();
  }
  else if(scTop>=5000&&scTop<5300){
    aTeacher.eq(1).show();
  }
  else if(scTop>5300){
    aTeacher.hide();
  }
  else{
    aTeacher.hide();
  }
})

/*------------------- 인트로 -  라운드 박스 ------------------ */
// 대상: .tg
const tg = dFn.qs(".small-round");
const tg2 = dFn.qsa(".small-round.round2");

// 애니시간(ms)
let TM = 1000;

// 회전함수 최초호출
rotFn();



tg2.forEach(ele => {
 rotFn2(ele);
  console.log(ele);
}); 


for(let ele of tg2){
  // rotFn2(ele);
  console.log(ele);
}

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



var swiper = new Swiper(".mySwiper",
{
  // 모바일일때 1로 변경하고 싶은데
  // 안돼서 css에서 전체폭 사이즈를 수정하는거로
  // 임시 설정
  
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
    200: {
      slidesPerView: 1.7, 
      spaceBetween: 10,
    },
    700: {
      slidesPerView: 2, 
      spaceBetween: 30,
    },
    1000: {
      slidesPerView: 2.2, 
      spaceBetween: 50,
    },

}

}

);