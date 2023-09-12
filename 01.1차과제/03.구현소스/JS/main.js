/* 버거킹 : 메인 JS - main.js */



window.addEventListener('DOMContentLoaded', loadFn);

//DOM선택함수
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

// addEvent 함수
// ele - 요소, evt - 이벤트, fn - 함수
const addEvt = 
(ele, evt, fn) => ele.addEventListener(evt, fn);


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
// 이벤트대상: .abtn
const abtn = qsa('.abtn');

// 변경대상 .slide-img
const slideImg = qs('.slide-img');
const slideImgItem = qsa('.slide-img-item');

console.log('대상들',abtn,slideImg,slideImgItem);


// 스크롤 퍼센트 확장을 위해 순번속성 만들기
slideImg.querySelectorAll('li').forEach(
  (ele,idx)=>{ele.setAttribute('data-seq',idx)}
);///forEach///




abtn.forEach(ele=>addEvt(ele,'click',goSlide));

function goSlide(){
  let isRight = this.classList.contains('ab2');



  if(isRight){

    rightSlide();

  }///if/////

  else{



  }///else///
  





}///goSlide함수///////



function rightSlide(){
  slideImgItem.style.left = '-100%';

}///rightSlide 함수 /////





    

} ///////loadFn 함수//////////////////













/* 
                    var docWidth = document.documentElement.offsetWidth;

                    [].forEach.call(
                      document.querySelectorAll('*'),
                      function(el) {
                        if (el.offsetWidth > docWidth) {
                          console.log(el);
                        }
                      }
                    ); */



// 변경대상 : banner_burgerImg
// var burgerImg = document.querySelector('.banner_burgerImg');

// console.log("배너버거이미지",burgerImg);


// var hcode = '';


// for(var i=0;i<9;i++){
//   hcode += `
//    <img src="./images/03.main/01.banner/burger_img (${i+1}).png" alt="배너버거이미지${i+1}">


//   `;

// }////// for //////

// burgerImg.innerHTML = hcode;


