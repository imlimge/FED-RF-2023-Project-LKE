/* 버거킹 : 서브 JS - sub01.js */



  //모듈 불러오기////////////
  //Dom함수 모듈
  import dFn from './dom.js';






/**************************************  
  서브페이지 - 메뉴
  -> 메뉴리스트

**************************************/


  // 메뉴 대상 요소 : .burger
  const burger = dFn.qs(".burger");
  //console.log(burger);

 
  // bData.forEach(val,idx)
  

  
      let hcode = '<ul>';

      for(let i=1; i<=18; i++){

      hcode +=
      `<li>
      <figure>
          <img src="./images/04-1.sub01-menu/01.whats-new/menulist/menu_new${i}.png" alt="${bData[i-1]}">
          <figcaption>${bData[i-1]}</figcaption>
      </figure>
      </li>
      `
      ;
      }
    
    hcode += '</ul>';

   console.log(hcode);

    burger.innerHTML = hcode;







