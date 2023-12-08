// AddCont - 광고파트 모듈

// CSS
import "./css/show_cont.css";

import { photoData } from "../data/photo";

import React, { useEffect } from "react";

import {
  faXmark,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import $ from "jquery";
window.jQuery = $;
require("jquery-ui-dist/jquery-ui");
require("jquery-ui-touch-punch/jquery.ui.touch-punch");

export function ShowCont({ sts }) {
  /*********************************************
   * 광고파트 버튼 누르면 보이고 닫기
   *********************************************/
  const selData = photoData;

  let site = selData["혁신관"]
  let isH = sts;

  isH ? (site = selData["혁신관"]) : (site = selData["단계관"]);

// console.log(site.length)

// console.log(site)


  useEffect(() => {
    /************************************
     *  방향키 누르면 이미지 변경
     ************************************/

    // 방향키
    const lBtn = $(".left");
    const rBtn = $(".right");

    
    let num = $(".show_cont-idx").text();


    // console.log(num);
    

    // 왼쪽버튼 누름
    lBtn.click(() => {
        // console.log('왼쪽')
      // console.log(num);
      num--;

      if(num < 1) num = site.length;

    });


    // 오른쪽버튼 누름
    rBtn.click(() => {
    // console.log('오른쪽')
    //   console.log(num);

      num++;
      if(num > site.length ) num = 1;

    });
  });





  return (
    <>
      {/* <!-- 중간광고 --> */}

      <div className="show_cont">
        <div className="show_cont_box">
          <div className="show_cont-idx"></div>
          <FontAwesomeIcon className="cbtn" icon={faXmark} />
          <h2>학원</h2>
          <p>사진을 누르면 홈으로 돌아갑니다</p>

          {/* <FontAwesomeIcon icon={faChevronLeft} className="nbtn left" /> */}
          <img src="" alt="" />
          {/* <FontAwesomeIcon icon={faChevronRight} className="nbtn right" />  */}
        </div>
      </div>
    </>
  );
}
