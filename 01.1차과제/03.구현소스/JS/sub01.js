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
          <figcaption><p>${bData[i-1]}</p></figcaption>
      </figure>
      </li>
      `
      ;
      }
    
    hcode += '</ul>';

    //console.log(hcode);

    burger.innerHTML = hcode;








/**************************************  
  서브페이지 - 메뉴리스트 슬라이드 구현
**************************************/
// 이벤트 대상
const mbtn = dFn.qsa('.abtn');

// 변경 대상
const mList = dFn.qs('.menu-list');

console.log(mbtn,mList);


mbtn.forEach(ele=>dFn.addEvt(ele,'click',bMove));



function bMove(){

   

  let isRight = this.classList.contains('ab2');
 
  console.log(this,isRight);

 if(isRight){
   
   mList.style.right = '25%';
   
   }

   else{
     mList.style.right = '0%';
   }


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

