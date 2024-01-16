//shop - Layout 컴포넌트

import React, { useState , useRef, useEffect } from "react";

import { MainArea } from "./MainArea";
import { FooterArea } from "./FooterArea";
import { TopArea } from "./TopArea";

import { sCon } from "../modules/shopContext";


import $ from "jquery";

window.jQuery = $;
require("jquery-ui-dist/jquery-ui");
require("jquery-ui-touch-punch/jquery.ui.touch-punch");

export function Layout() {


  // 후크상태변수 설정 : 페이지변경
  const [pgName, setPgName] = useState('리빙');

  
  // 리랜더링 강제적용 상태변수
  const [force, setForce] = useState(null);
  // setForce(Math.random());

  
  //////////////// Shop 상태변수 //////////////////////////////////
  // 모듈 shop 초기 페이지 번호 셋팅 1로 시작
  const [currentPage, setCurrentPage] = useState(1);




  // 로컬스에서 데이터 가져오기
  let shopCart = JSON.parse(localStorage.getItem("shop_cart"));
  // 배열 생성
  let totalList = [];
  // 배열에 데이터 추가
  totalList.push(shopCart);


  // 장바구니 아이콘 숫자 state
  const [cartListNumL, setCartListNumL] = useState(null);

  // 장바구니 아이콘에 배열 있는만큼 숫자 useState셋팅
  useEffect(() => {
    if (shopCart !== undefined && shopCart !== null) {
      // setForce(Math.random());

      // 현재페이지에서 상태변수 변경 중
      setCartListNumL(shopCart.length)

      // console.log("Layout shop-cart 로컬스,갯수", shopCart, shopCart.length);
    }
  },[]);

  

  // 페이지변경 상태변수 업데이트 함수
    const chgPgName = (txt) => {
      setPgName(txt);
      // console.log(txt)
      setCurrentPage(1);
  }; ///////// chgPgName 함수 //////
  

  


  return (
    <>
    <sCon.Provider value={{pgName, currentPage, setCurrentPage ,setCartListNumL,cartListNumL,setForce }}>
      <TopArea chgPgName3={chgPgName} cartListNumL={cartListNumL}/>
      <MainArea />
      <FooterArea />
    </sCon.Provider>
    </>
  );
}
