import { useLocation } from "react-router-dom";
import "../css/item_detail.css";
import { useEffect, useState } from "react";

import $ from "jquery";
window.jQuery = $;




export function ItemDetail() {

    useEffect(()=>{
      window.scrollTo(0, 0);
    },[])

const location = useLocation();
const { state } = location;

// console.log('item-detail페이지 state',state)
// console.log('item-detail페이지 state',state.idx)
// console.log('item-detail페이지 state',state.name)

  //정규식함수(숫자 세자리마다 콤마해주는 기능)
  function addComma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }



const [num,setNum] = useState(1)





useEffect(()=>{
    //금액 출력
    const price1 = $(".itemdetail__price span").text();
    $(".itemdetail__price").text(addComma(price1));
   
    $(".total-price span").text(addComma(price1));
 


    console.log(price1)

 
    const sum = $("#sum");
    const sumVal = $("#sum").text();
    const cBtn = $(".count__button");

    let cnt = Number(sumVal);

    // console.log(sum,sumVal,cBtn)
    


  
  


    cBtn.on('click',(e)=>{
        
        let isUP = $(e.currentTarget).hasClass('sb_up')
        // console.log(e.currentTarget)
        // console.log(isUP)


        // 숫자 증가 버튼
        if(isUP){
            cnt++;
            console.log('i',cnt);
                
        }

        // 숫자 감소 버튼
        else {
            
            if(cnt>1){
            cnt--;
            console.log('i',cnt)}
            else if(cnt<1)
            cnt = 1;
        }

        $("#sum").text(cnt);

        let price2 = cnt * price1
        $(".total-price span").text(addComma(price2));
        
    });
    


},[]);






    return (
        <>
       

            <section id="itemdetail">
                <div className="itemdetail inbox">
                    <div className="itemdetail-top-area">
                        <div className="main_photo">
                            <img src= {state.isrc} alt={state.name} />
                        </div>

                        <div className="itemdetail__info">
                            <div className="itemdetail__title__box">
                                <h2 className="itemdetail__title">
                                {state.name}
                                </h2>
                                <p className="itemdetail__cont">
                                   {state.cont}
                                </p>
                                <div className="itemdetail__price">
                                <span>{state.price}</span>원
                                </div>
                            </div>

                            <div className="itemdetail__notice__box">
                                <div className="itemdetail__notice__left">
                                  <span>배송안내</span>
                                </div>
                                <div className="itemdetail__notice__right">
                                <span>5만원 이상 구매시 무료배송 ( 미만시 배송비 3,000원 )</span>
                                <span>평일 오후 13:00 이전 결제시 당일 발송</span>
                                <span>( 단, 주문량 증가 시 달라질 수 있습니다. )</span>
                                </div>
                            </div>
                            <div className="itemdetail__sell__box">
                                <span className="itemdetail__sell__title">
                                {state.name}
                                </span>
                                <div className="sell__button__box">
                                <button className="count__button sb_down">－</button>
                                {/* <input type="text" id="sum" defaultValue="1" />
                    <b className="chg_num sb_total"></b> */}
                                <div id="sum" className="chg_num sb_total ">1</div>
                                <button className="count__button sb_up">＋</button>
                                </div>
                                <div className="itemdetail__sell__price total-price">
                                <span></span>원
                                </div>
                            </div>
                            <div className="itemdetail__total__box">
                                <span className="itemdetail__total__left">
                                총 상품 금액
                                </span>
                                <div className="itemdetail__total__price total-price">
                                <span></span>원
                                </div>
                            </div>
                            <div className="itemdetail__button__box">
                                <button className="itemdetail__button ib_cart">
                                  장바구니 담기
                                </button>
                                <button className="itemdetail__button ib_buy">
                                  바로 구매하기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
