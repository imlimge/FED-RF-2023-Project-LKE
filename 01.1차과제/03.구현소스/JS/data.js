// 서브메뉴 데이터 JS - mdata.js ///////



//로딩구역 호출설정
window.addEventListener('DOMContentLoaded', loadFn);



// DOM 함수 객체 //////////////
const domFn = {
  // 요소선택함수 ////////
  qs: (x) => document.querySelector(x),
  qsEl: (el, x) => el.querySelector(x),
  qsa: (x) => document.querySelectorAll(x),
  qsaEl: (el, x) => el.querySelectorAll(x),

  // 이벤트셋팅함수
  addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
}; /////// domFn 객체 /////////////


// 서브메뉴 데이터
const mData = {
  메뉴소개: {
    "스페셜&할인팩": [
      "트머와팩(2인)",
      "트머와 콤비팩(2인)",
      "트머와 트리플팩(3인)",
      "트머와 올인팩(3인)",
    ],
    "신제품(NEW)": [
      "더블트러플머쉬룸와퍼",
      "트러플머쉬룸와퍼",
      "트러플머쉬룸와퍼주니어",
      "오리지널스 페퍼잭 더블",
      "오리지널스 페퍼잭 싱글",
      "더블비프불고기버거",
    ],
    "와퍼&주니어": [
      "갈릭불고기와퍼",
      "치즈와퍼",
      "콰트로치즈와퍼",
      "와퍼",
      "불고기와퍼",
      "통새우와퍼주니어",
      "콰트로치즈와퍼주니어",
      "치즈와퍼주니어",
      "와퍼주니어",
      "불고기와퍼주니어",
    ],
    "치킨&슈림프버거": [
      "치킨킹BLT",
      "치킨킹",
      "비프&슈림프버거",
      "통새우슈림프버거",
      "슈림프버거",
      "롱치킨버거",
      "바비큐치킨버거",
      "치킨버거],",
    ],
    "올데이킹&킹모닝": [
      "BLT오믈렛킹모닝",
      "오믈렛킹모닝",
      "더블비프불고기버거세트",
      "롱치킨버거세트",
      "더블오리지널치즈버거 세트",
      "통새우와퍼주니어 세트",
      "콰트로치즈와퍼주니어 세트",
      "비프불고기버거",
      "치즈버거",
    ],
    사이드: [
      "트러플치즈프라이",
      "해쉬브라운",
      "너겟킹 8조각",
      "너겟킹",
      "21치즈스틱",
      "어니언링",
      "바삭킹",
      "바삭킹8조각+소스",
      "쉐이킹프라이",
    ],

    "음료&디저트": [
      "망고 선데",
      "컵 망고 아이스크림",
      "Dole 후룻컵",
      "아메리카노",
      "핫초코",
      "아이스초코",
      "코카콜라",
      "코카콜라 제로",
      "스프라이트],",
    ],
  },

  매장소개: { 매장찾기: ["가까운매장", "매장명검색", "지역검색"] },
  이벤트: {
    이벤트: ["전체", "진행중", "종료"],
    신규매장: ["신규매장"],
  },

  "브랜드 스토리": {
    BRAND: ["BRAND philosophy", "SMART QSR"],
    WHOPPER: ["Real Whopper", "FLAME GRILLED", "신선한 재료", "Trust in Taste"],
    "COMM.": ["광고(TV/Digital", "수상내역", "신제품", "ESG"],
  },

  고객센터 : {
    고객센터 :[
    "공지사항",
    "버거킹앱 이용안내",
    "FAQ",
    "문의",
    "가맹점모집",
    "인재채용"],
  },
}; ///////////// mData ///////////////////





const snbLink = {
  메뉴소개: "./sub01.html",
  매장소개: "./sub01.html",
  이벤트: "./sub01.html",
  브랜드스토리: "./sub01.html",
  고객센터: "./sub01.html",
  딜리버리: "./sub01.html",

  }; /////////////snbLink ///////////////



function loadFn(){
  // console.log('로딩완료2');



  // 1.대상선정: .sub-menu-list
  const snbList = domFn.qs('.sub-menu-list');
  

  

  // 2.코드만들기
  let hcode = '';

 for(let x in mData){
  
  hcode +=
  `
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


`
//console.log('링링링링',hcode);
;

/*  구조화 연습
ul>li>(a[href='#']>span.sub-menu-title)+div.sub-menu-open-btn+div.sub-menu-open>ol>li>a[href='#'] */

// console.log('x',x,'/mData[x]',mData[x]);

} ///forin///////////////////////////////


// console.log('코드',hcode);




function makeCode(obj){

      //console.log('서브메뉴',obj);

      let hcode ='';

      for(let x in obj){
      hcode += 
      `
      <li>
        <a href="#"> 
        <span class="sub-menu-open-list">
        ${x}
        </span>
        </a>
      </li>
      `;
    }////forin////////
    return hcode;

} ///////////makeCode함수 //////////



//메뉴 생성하기
snbList.innerHTML = hcode;



/**********************************************  
    [ 서브메뉴 버튼 누르면 내용 보이기]
    이벤트 대상: .sub-menu-open-btn
    변경 대상: .sub-menu-open

**********************************************/

//이벤트 대상
domFn.qsa('.sub-menu-open-btn');
//변경대상
domFn.qsa('.sub-menu-open');




};///////////loadFn////////////



// ul>li>(a[href='#']>span.sub-menu-title)+div.sub-menu-open-btn+div.sub-menu-open>ol>li>a[href='#']