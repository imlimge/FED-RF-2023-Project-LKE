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

    console.log('레이아웃',pgName)

  
    // 페이지변경 상태변수 업데이트 함수
    const chgPgName = (txt) => {
      setPgName(txt);
      console.log(txt)
    }; ///////// chgPgName 함수 //////
  
  
  


  return (
    <>
    <sCon.Provider value={{pgName}}>
      <TopArea chgPgName3={chgPgName}/>
      <MainArea />
      <FooterArea />
    </sCon.Provider>
    </>
  );
}
