//shop - Layout 컴포넌트

import React, { useState , useRef } from "react";

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

  
  //////////////// Shop 상태변수 //////////////////////////////////
  // 모듈 shop 초기 페이지 번호 셋팅 1로 시작
  const [currentPage, setCurrentPage] = useState(1);








  

  // 페이지변경 상태변수 업데이트 함수
    const chgPgName = (txt) => {
      setPgName(txt);
      // console.log(txt)
      setCurrentPage(1);
  }; ///////// chgPgName 함수 //////
  

  


  return (
    <>
    <sCon.Provider value={{pgName, currentPage, setCurrentPage}}>
      <TopArea chgPgName3={chgPgName}/>
      <MainArea />
      <FooterArea />
    </sCon.Provider>
    </>
  );
}
