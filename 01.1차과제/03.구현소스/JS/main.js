/* 버거킹 : 메인 JS - main.js */



window.addEventListener('DOMContentLoaded', loadFn);

//DOM선택함수
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

// addEvent 함수
// ele - 요소, evt - 이벤트, fn - 함수
const addEvt = 
(ele, evt, fn) => ele.addEventListener(evt, fn);




// 전역변수구역/////////////////
// 1. 광클금지상태변수 - 0은 허용, 1은 불허용

let clickSts = 0;


// 2. 슬라이드 이동시간 : 상수로 설정
const TIME_SLIDE = 400;






function loadFn(){
   
/****************************************** 
  [무버 이동 정의]
  1. 이벤트 종류 : onmousemove
  2. 이벤트 대상 : .banner
  3. 움직일 대상 : .mover
  4. 기능설계 : 배너위에서 마우스를 따라 .mover가 움직이며 
  버거이미지 위에서 크기 및 투명도가 변한다.

******************************************/



    // 움직일 대상: .mover
    const mover = qs('.mover');

    // 이벤트 대상: .banner
    const banner = qs('.banner');

   
    let gap = mover.clientWidth/2;

    // 무버가 따라다니는 기능 구현
    banner.onmousemove = e => {

        let posx = e.pageX - gap;
        let posy = e.pageY - gap;
        mover.style.top = posy + 'px';
        mover.style.left = posx + 'px';

    };//onmousemove /////////


  // 이벤트 구역을 들어올때만 보이기 / 나가면 숨기기
  banner.onmouseenter = () =>{
    mover.style.opacity = 1;
    
  }; 
  banner.onmouseleave = () =>{
    mover.style.opacity = 0;
  }; 




  //버거이미지 오버시 원 크게 만들기
    const burger = qs('.banner-burgerImg');
    const moverLetter = qsa('.mover span');
 
    console.log(moverLetter);
    
    burger.onmouseenter = () => {
        mover.style.width = '140px';
        mover.style.height = '140px';
        moverLetter.forEach(ele=>ele.style.opacity = 1);
       
    };

    burger.onmouseleave = () => {
        mover.style.width = '20px';
        mover.style.height = '20px';
    
        moverLetter.forEach(ele=>ele.style.opacity = 0);
    };



 


/******************************************** 
    [슬라이드 이동 기능 정의]
    1. 이벤트 종류 : click
    2. 이벤트 대상 : .slide-img
    3. 변경대상 : slide-img
    4. 기능설계 : 
    
    (1)슬라이드 특정 시간마다 자동 이동
    (2)슬라이드 이미지 클릭하며 수동 이동
    (3)슬라이드 이미지 마지막 순번으로 갈 수록
    스크롤바의 빨간 게이지 바가 길어짐

********************************************/


// 대상
// 이벤트대상: .slide-img
// 변경대상: .slide-img
const slideImg = qs('.slide-img');
const slideImgItems = qsa('.slide-img-item');


console.log('슬라이드이미지',slideImg,slideImgItems);
console.log('슬라이드이미지 크기',slideImg.offsetWidth)




// 스크롤 퍼센트 확장을 위해 순번속성 만들기
slideImg.querySelectorAll('li').forEach(

  (ele,idx)=>{ele.setAttribute('data-seq',idx)}

);///forEach///





slideImg.addEventListener('click',rightSlide);

function rightSlide(){

  slideImg.style.left = '-900px';
  //트랜지션주기
  slideImg.style.transition = TIME_SLIDE+'ms ease-in-out';
  setTimeout(()=>{
    // 맨앞 li 맨뒤로 이동
    slideImg.appendChild(slideImg.querySelectorAll('li')[0]);
    // slideImg left값 0
    slideImg.style.left = '0';
    // 트랜지션 없애기
    slideImg.style.transition = 'none';
}, TIME_SLIDE);

//console.log('이거뭐야',slideImg.querySelectorAll('li')[0]);

clearAuto()

}///rightSlide 함수 /////




/**************************************  
  자동넘기기 기능구현
  -> 일정 시간 간격으로 이미지 클릭
  -> 사용 JS내장함수 : setInterVal()
  -> 버튼클릭 실행 메서드 : click()
**************************************/

//인터발변수
let autoI;

//타임아웃변수
let autoT;

//인터발호출 함수
function slideAuto(){
    autoI = setInterval(() => {
      rightSlide();
      

}, 3000);


}///slideAuto함수/////

slideAuto();
    



// 버튼을 클릭할 경우를 구분하여 자동넘김을 멈춰준다
// rightSlide 함수에 clearAuto() 호출

function clearAuto(){
  
 //1.인터발 지우기
 clearInterval(autoI);
 //2.타임아웃 지우기 (재실행호출 쓰나미 방지)
 clearTimeout(autoT);

 //일정시간 후 다시 인터발호출 셋팅하기
 autoT = setTimeout(slideAuto,2000);

}///clearAuto함수/////




/*********************************** 
  스크롤 퍼센트 이동
  -> 슬라이드 이동마다 스크롤 비율맞춰 이동
  -> 스크롤 잡고 이동
***********************************/

const scrollB = qs('.scroll');
const scrollM = qs('.scroll-move');


//전체 스크롤 가로값 scrollB.offsetWidth
let scrollBW = scrollB.offsetWidth;
//슬라이드이미지 갯수
let slideNum = slideImgItems.length;
//무브 스크롤 가로값 (전체스크롤/이미지갯수)
let scrollMW = scrollBW/slideNum;
//현재 보여지는 슬라이드 순번
let nowSeq = slideImg.querySelectorAll('li')[0].getAttribute('data-seq');



//슬라이드 이미지 갯수  lideImgItems.length => 5개
//console.log(slideImgItems.length);


//무브 스크롤 가로크기 CSS 설정 : width
scrollM.style.width = scrollMW +'px';
//무브 스크롤 위치 CSS 설정 : left
scrollM.style.left = scrollMW*nowSeq + 'px';


console.log('슬라이스현재순서',nowSeq);
console.log('스크롤배경 사이즈',scrollBW);
console.log('스크롤무브 사이즈',scrollMW);
console.log('계산중',scrollBW/scrollMW);





} ///////loadFn 함수//////////////////



