/* 버거킹 : 서브 JS - sub01.js */

//모듈 불러오기////////////
//Dom함수 모듈
import dFn from "./dom.js";



const menuFolder = {
  "스페셜&할인팩":"01.whats-new",
  "맥모닝":"02.new",
  "와퍼&주니어":"03.whopper",
  "치킨&슈림프버거":"04.chicken",
  "올데이킹&킹모닝":"05.allday",
   사이드:"06.side",
  "음료&디저트":"07.drink",
  
}


const menuIntro = {
  "스페셜&할인팩":"버거킹의 새로운 메뉴를 소개합니다! <br>스페셜한 새로운 메뉴와 할인된 세트 메뉴",
  "맥모닝":"하루를 맥모닝으로 시작하세요",
  "와퍼&주니어":"버거킹의 진수는 순수 소고기 패티를 직화로 구운 패티입니다!",
  "치킨&슈림프버거":"바삭한 치킨 패티와 풍부한 맛의 새우패티를 만나보세요",
  "올데이킹&킹모닝":"올데이 매일매일 즐거운 버거킹 <br> 메일 버거킹과 함께입니다 ",
  사이드:"신선하고 좋은 감자로 만든 감자튀김과<br> 바삭하고 부드러운 치킨너겟",
  "음료&디저트":"청량한 음료와 버거킹만의 스페셜한 커피",
}





//// 메뉴 클릭 설정만들기 ///////////
const mListItem = dFn.qsa('.menu-list-item');

mListItem.forEach(ele=>{
  ele.onclick = ()=>{
    // 하위 h4요소 글자 읽기
    let txt = dFn.qsEl(ele,'h4').innerText;
    changeMenu(txt);
    
    changeTopImg(txt);
    
    changeTop(txt);
    
    changeMTop(txt);
    
    //console.log('txt',txt);
    
    

  }
})






/**************************************  
  서브페이지 - 메뉴 상단
  -> 메뉴소개

**************************************/


const menuTop = dFn.qs(".menu-top");
const mobileMenuTop = dFn.qs(".m-menu-top");


changeTopImg("스페셜&할인팩");

changeTop("스페셜&할인팩");

changeMTop("스페셜&할인팩");




function changeTopImg(menu){
  //console.log(menu);

  menuTop.style.background = `url('./images/04-1.sub01-menu/${menuFolder[menu]}/desktop-topBanner.png') no-repeat center/cover`;
  mobileMenuTop.style.background = `url('./images/04-1.sub01-menu/${menuFolder[menu]}/mobile-topBanner.png') no-repeat center/cover`;

};
  
//console.log('메뉴메뉴',menuTop);

function changeTop(aa){
 
  mData[aa];
  let zcode = 
  `   

  <div class="menu-content">
  <h2 class="menu-title">
  <span class="h-underline-last-line">${aa}</span></h2>
  <p class="article">${menuIntro[aa]} </p>
  
  </div>
  
  `;
  menuTop.innerHTML = zcode;
  
  //console.log('changeTop',zcode,'aa',aa);
  
};

//console.log(menuTop,mobileMenuTop);




function changeMTop(menu){


  mData[menu];
  
  let ycode = 
  `   


  <div class="m-menu-content">
      <img src="./images/04.sub-top/${menu}.png" alt="메뉴소개 모바일 대표 버거이미지">
      <h2 class="m-menu-title">
          <span class="h-underline-last-line">${menu}</span></h2>
          <p class="article">${menuIntro[menu]} </p>

  </div>

  `;

  //console.log(ycode,menu);
  mobileMenuTop.innerHTML = ycode;

  
};






  const m = dFn.qs(".menu");
  //console.log(m);

  
/**************************************  
  서브페이지 - 메뉴
  -> 메뉴리스트

**************************************/

// 메뉴 대상 요소 : .burger
const burger = dFn.qs(".burger");
//console.log(burger);



// 최초 메뉴리스트 만들기 함수 호출
changeMenu("스페셜&할인팩");



//// 메뉴리스트 변경 함수 /////////
function changeMenu(menu){
  const selData = mData.메뉴소개[menu];
  const CNT_SEL = selData.length;
  //console.log(selData);
  
  let hcode = "<ul>";
  
  for (let i = 1; i <= CNT_SEL; i++) {
    hcode += `<li>
        <figure>
            <img src="./images/04-1.sub01-menu/${menuFolder[menu]}/menulist/menu${i}.png" alt="${
              selData[i-1]
    }">
            <figcaption><p>${selData[i-1]}</p></figcaption>
        </figure>
        </li>
        `;


    // hcode += `<li>
    //     <figure>
    //         <img src="./images/04-1.sub01-menu/${menuFolder[menu]}/menulist/menu_new${i}.png" alt="${
    //   bData[i - 1]
    // }">
    //         <figcaption><p>${selData[i]}</p></figcaption>
    //     </figure>
    //     </li>
    //     `;


  }
  
  hcode += "</ul>";
  
  //console.log(hcode);
  
  burger.innerHTML = hcode;

} ///////// changeMenu 함수 ///////////












/*    bData[i-1] */

/**************************************  
  서브페이지 - 메뉴리스트 슬라이드 구현
**************************************/
// 이벤트 대상
const mbtn = dFn.qsa(".abtn");

// 변경 대상
const mList = dFn.qs(".menu-list");
// 이동순번
let seqNum = 0;


mList.style.transition = '.5s';

//console.log(mbtn, mList);

mbtn.forEach((ele) => dFn.addEvt(ele, "click", bMove));

function bMove() {
  let isRight = this.classList.contains("ab2");

  //console.log(this, isRight);

  if (isRight) {
    seqNum++;
    if(seqNum>3)seqNum=3;
  } else {
    seqNum--;
    if(seqNum<0)seqNum=0;
  }
  mList.style.right = seqNum * 25 + "%";
}

/* 
function bMove(){

  for (let i = 25; i<100; i += 25){
        
            let isRight = this.classList.contains('ab2');
          
            console.log(this,isRight);
      
          if(isRight){
            
                      
            mList.style.right = i+'%';
            console.log(i);
                      
          

            }

            else{
              mList.style.right = -i+'%';
            }
      }  
}
 */
