//shop - Main 컴포넌트

import { useState } from "react";
import { categoryData } from "../data/category";

import { ItemList } from "../modules/ItemList";
import { SwiperBanner } from "../plugin/SwiperBanner";


import $ from "jquery";
import { shopData } from "../data/shop";
window.jQuery = $;


export function Main() {
  // 후크상태변수 설정 : 페이지변경
  const [todayItem, settodayItem] = useState("리빙");

  const selCat = categoryData.메인;

  const makeMainCat = () => {
    let temp = [];

    selCat.map((v, i) => {
      temp[i] = (
        <span key={i} className="item__category" onClick={() => chgName(v)}>
          {v}
        </span>
      );
    });

    return temp;
  };



  // 페이지변경 상태변수 업데이트 함수
  const chgName = (txt) => {
    settodayItem(txt);

 
  }; ///////// chgPgName 함수 //////


  console.log("카테변경", todayItem);

  // 상품데이터
  const selData = shopData[todayItem];
  const selDataPick = selData.slice(0, 4);
  console.log(selDataPick);


  
  const makeItem = () => {
    let temp = [];

    selDataPick.map((v, i) => {
      temp[i] = (
        <Fragment key={i}>
        <div className="shop__item">
          <div className="shop__item__photo">
            <img src={v.isrc} alt="상품사진" />
          </div>
          <div className="shop__item__content">
            <span className="shop__item__content-name"> {v.name} </span>
            <span className="shop__item__content-cont">{v.cont}</span>
            <span className="shop__item__content-price"> {v.price} </span>

            <span className="shop__item__content-review"> 리뷰 {v.review} </span>
          </div>
        </div>
      </Fragment>
      );
    });
    return temp;
  };



  return (
    <>
      <div id="main">
        <div className="main">
          <div className="banner">
            <SwiperBanner />
          </div>

          <div className="shop inbox">
            {/* <!-- 상품아이템 상단탭 --> */}
            <div className="shop__item__top">
              <div className="shop__item__title">오늘의 상품</div>

              <div className="shop__item__category">{makeMainCat()}</div>



          {makeItem()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
} //// Main 컴포넌트 ////
