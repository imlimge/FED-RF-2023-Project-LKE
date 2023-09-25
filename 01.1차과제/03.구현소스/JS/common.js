/* 버거킹 : 공통 JS - common.js */

//모듈 불러오기////////////
//Dom함수 모듈
import dFn from "./dom.js";

// 전역변수구역/////////////////
// 1. 광클금지상태변수 - 0은 허용, 1은 불허용

let clickSts = 0;

// 2. 슬라이드 이동시간 : 상수로 설정
const TIME_SLIDE = 200;

/********************************************
 [ 서브메뉴 코드 구성하여 html에 넣기 
  + 배열 가져오기 ]
********************************************/

// 1.대상선정: .sub-menu-list
const snbList = dFn.qs(".sub-menu-list");

// 2.코드만들기
let hcode = "";

for (let x in mData) {
  hcode += `
 <ul>
  <li>
     <!-- 서브메뉴 타이틀 -->
     <a href="${snbLink[x]}"><span class="sub-menu-title">${x}</span></a>
     <!-- 서브메뉴 리스트 열기 버튼 -->
     <div class="sub-menu-open-btn">
     <img src="./images/01.top-navigation/icon_r.png" alt="서브메뉴 열기 버튼">                                       
     
     <!-- 서브메뉴 리스트 : 열기상태 -->
     <div class="sub-menu-open">
         <ol>
             <!-- 서브메뉴 리스트 -->
             ${makeCode(mData[x])}
         </ol>
     </div>
     </div>
 </li>
</ul>


`;
  //console.log('링링링링',hcode);

  /*  구조화 연습
ul>li>(a[href='#']>span.sub-menu-title)+div.sub-menu-open-btn+div.sub-menu-open>ol>li>a[href='#'] */

  // console.log('x',x,'/mData[x]',mData[x]);
} ///forin///////////////////////////////

// console.log('코드',hcode);

function makeCode(obj) {
  //console.log('서브메뉴',obj);

  let hcode = "";

  for (let x in obj) {
    hcode += `
      <li>
        <a href="./sub01.html"> 
        <span class="sub-menu-open-list">
        ${x}
        </span>
        </a>
      </li>
      `;
  } ////forin////////
  return hcode;
} ///////////makeCode함수 //////////

// ul>li>(a[href='#']>span.sub-menu-title)+div.sub-menu-open-btn+div.sub-menu-open>ol>li>a[href='#']

//메뉴 생성하기
snbList.innerHTML = hcode;

/**********************************************  
    [ 서브메뉴 버튼 누르면 내용 보이기]
    이벤트 대상: .sub-menu-open-btn
    변경 대상: .sub-menu-open

**********************************************/

//이벤트 대상
dFn.qsa(".sub-menu-open-btn");
//변경대상
dFn.qsa(".sub-menu-open");

/********************************************
 [모바일 서브메뉴박스 열기]
  1. 이벤트 종류 : click
  2. 이벤트 대상 : .sub-menu-open-btn
  3. 움직일 대상 : .sub-menu-open
  4. 기능설계 : 버튼을 누르면 .on을 추가한다
********************************************/

const subOpen = dFn.qs(".m-hamburger>a");
const subClose = dFn.qs(".sub-menu-close");
const snbBox = dFn.qs(".m-snb-box");
const snbMenu = dFn.qs(".sub-menu");
const body = document.getElementsByTagName("body")[0];

subOpen.addEventListener("click", open);

function open() {
  snbBox.classList.add("on");
  snbMenu.classList.add("on");
  body.classList.add("scrollLock");
}

subClose.addEventListener("click", close);

function close() {
  snbBox.classList.remove("on");
  snbMenu.classList.remove("on");
  body.classList.remove("scrollLock");
}

/********************************************
 [모바일 서브메뉴]
  1. 이벤트 종류 : click
  2. 이벤트 대상 : .sub-menu-open-btn
  3. 움직일 대상 : .sub-menu-open
  4. 기능설계 : 버튼을 누르면 .on을 추가한다
********************************************/
// 이벤트 대상
const snbBtn = dFn.qsa(".sub-menu-open-btn");

//console.log(snbBtn);

// 이벤트 설정
snbBtn.forEach((ele) => {
  dFn.addEvt(ele, "click", showSub);
});

// 함수 설정
function showSub() {
  // console.log("나야나", this);

  let isBtn = this;

  if (isBtn) {
    // 2. 서브메뉴 내부 ol박스 높이값 읽기
    let hv = dFn.qsEl(isBtn, "ol").clientHeight;

    dFn.qsEl(isBtn, ".sub-menu-open").style.height =
      (isBtn.clientHeight == 0 ? hv : 0) + "px";

    isBtn.classList.toggle("on");

    snbBtn.forEach((ele) => {
      let result = ele.isSameNode(this);

      let target = dFn.qsEl(ele, ".sub-menu-open");

      console.log("같니", result, target);

      // 현재 노드와 같은 li는 처리하지 않음

      if (!result) {
        // false일때만 들어옴

        // 하위에 .sub-menu-open가 없으면 처리안함

        target.style.height = "0px";
        ele.classList.remove("on");
      }
      //  else{
      //   isBtn.classList.add("on");
      // }
    }); /////forEach///////////
  } ///if////////////
} ///showSub/////
