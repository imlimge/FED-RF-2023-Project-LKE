/* 버거킹 : 메인 JS - main.js */



window.addEventListener('DOMContentLoaded', loadFn);

//DOM선택함수
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);




function loadFn(){
   

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
        moverLetter.style.opacity = '100%';
       
    };

    burger.onmouseleave = () => {
        mover.style.width = '20px';
        mover.style.height = '20px';
    
        moverLetter.style.opacity = '0%';
    };



 





    

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


