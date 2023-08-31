/* 버거킹 : 메인 JS - main.js */


//DOM선택함수
// const qs = function(x){return document.querySelector(x)}; 아래의 원형
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);


            
/******************************** 
    추가기능: banner에 마우스무브시
    이미지 포인터 따라다니기
                
********************************/
                //1.대상선정
                //1-1.이벤트 대상: .wrap
                const wrap = qs(".wrap");
                //1-2.변경대상
                const moving = qs(".flying-poster");

                console.log("추가대상:", wrap, moving);

                //2.이벤트 함수 구현하기
                //2-1. .wrap박스 위에 마우스무브시 따라오기
                //이벤트 : mousemove
                wrap.onmousemove = (e) => {












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


