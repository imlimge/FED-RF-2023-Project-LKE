/* 버거킹 : 서브 JS - sub01.js */

//모듈 불러오기////////////
//Dom함수 모듈
import dFn from "./dom.js";

/**************************************  
  서브페이지 - 메뉴
  -> 메뉴리스트

**************************************/

// 메뉴 대상 요소 : .burger
const burger = dFn.qs(".burger");
//console.log(burger);
const menuFolder = {
  "스페셜&할인팩":"01.whats-new",
  "신제품(NEW)":"02.breakfast",
}

// bData.forEach(val,idx)

// 최초 메뉴리스트 만들기 함수 호출
changeMenu("스페셜&할인팩");


//// 메뉴리스트 변경 함수 /////////
function changeMenu(menu){
  const selData = mData.메뉴소개[menu];
  const CNT_SEL = selData.length;
  console.log(selData);
  
  let hcode = "<ul>";
  
  for (let i = 1; i <= CNT_SEL; i++) {
    hcode += `<li>
        <figure>
            <img src="./images/04-1.sub01-menu/01.whats-new/menulist/menu_new${i}.png" alt="${
      bData[i - 1]
    }">
            <figcaption><p>${selData[i]}</p></figcaption>
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

//// 메뉴 클릭 설정만들기 ///////////
const mListItem = dFn.qsa('.menu-list-item');

mListItem.forEach(ele=>{
  ele.onclick = ()=>{
    // 하위 h4요소 글자 읽기
    let txt = dFn.qsEl(ele,'h4').innerText;
    console.log(txt);
    changeMenu(txt);
  }
})


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


mList.style.transition = '2s';

console.log(mbtn, mList);

mbtn.forEach((ele) => dFn.addEvt(ele, "click", bMove));

function bMove() {
  let isRight = this.classList.contains("ab2");

  console.log(this, isRight);

  if (isRight) {
    seqNum++;
    if(seqNum>5)seqNum=5;
  } else {
    seqNum--;
    if(seqNum<0)seqNum=0;
  }
  mList.style.right = seqNum * 15 + "%";
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
