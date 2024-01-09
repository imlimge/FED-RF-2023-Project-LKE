//shop - TopArea 컴포넌트
import { Link, useNavigate } from "react-router-dom";

// 폰트어썸 불러오기
import {
  faCartShopping,
  faMagnifyingGlass,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import $ from "jquery";
import { shopGnbData } from "../data/shop_gnb";
import { useState } from "react";
import { shopData } from "../data/shop";
window.jQuery = $;
require("jquery-ui-dist/jquery-ui");
require("jquery-ui-touch-punch/jquery.ui.touch-punch");

export function TopArea(props) {
  // 페이지변경 상태변수 업데이트 함수
  const chgPgName2 = (txt) => {
    props.chgPgName3(txt);
    //  console.log(txt)
  }; ///////// chgPgName 함수 //////


  const selCat = shopGnbData;

  

  // 검색 시 엔터키 작동
  const enterKey = (e) => {
    // console.log('topArea 검색',e.target);
    if (e.key === "Enter") {
      // 입력창의 입력값 읽어오기 : val() 사용!
      let txt = $(e.target).val().trim();
      console.log(txt);

      goSearch(txt);
    } ///////// if ///////
  };


  // 검색 시 마우스 클릭 작동
  const clickKey = () => {
    let txt = $("#schInput").val().trim();
    console.log("이거뭐야", txt);

    goSearch(txt);

    // let txt = $(e.target).val().trim();
    // console.log(txt);
    // goSearch(txt);
  };



  // 아이템 결과 이동함수
  const navigate = useNavigate(props);

  const goSearch = (txt) => {
    // txt - 검색어
    console.log("검색페이지 이동 txt", txt);

    // 라우터 이동함수로 이동하기 : 컨텍스트 API 사용

    navigate("/searchlist", { state: txt });
    let deltxt = $("#schInput");
    deltxt.val("");
  }; //////////// goSearch 함수 /////////////




  /// 상단 Gnb 생성
  const makeShopGnb = () => {
    let temp = [];

    selCat.map((v, i) => {
      temp[i] = (
        <li key={i}>
          <Link to={v.link} onClick={() => chgPgName2(v.cat)}>
            {v.cat}
          </Link>
        </li>
      );
    });

    return temp;
  };



  let state = {
    idx: null,
    isrc: null,
    name: null,
    cont: null,
    price: null,
    category: null,
    review:null
}  



  return (
    <>
      <header id="top-area">
        <div className="header inbox">
          <div className="header-box">
            <div className="logo">
              <Link to="/">ShopLogo</Link>
            </div>

            <nav className="gnb">
              <ul>{makeShopGnb()}</ul>
            </nav>

            <div className="login-box">
              <div className="searchingGnb">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="schbtnBtb"
                  title="Open search"
                  onClick={() => clickKey()}
                />

                <input
                  id="schInput"
                  type="text"
                  placeholder="상품 검색"
                  onKeyUp={enterKey}
                />
              </div>

                
              <Link to="/cart" state={state}>
                <div className="cart__logo">
                  <FontAwesomeIcon icon={faCartShopping}/>
                    <div className="cart_state">
                      <span id="cart_state_num">1</span>
                    </div>
                </div>
              </Link>

              <Link to="/login">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
} //// TopArea 컴포넌트 ////
