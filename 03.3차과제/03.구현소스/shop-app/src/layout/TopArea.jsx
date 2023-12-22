//shop - TopArea 컴포넌트
import { Link } from "react-router-dom";

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
window.jQuery = $;
require("jquery-ui-dist/jquery-ui");
require("jquery-ui-touch-punch/jquery.ui.touch-punch");

export function TopArea(props) {


   // 페이지변경 상태변수 업데이트 함수
   const chgPgName2 = (txt) => {
    props.chgPgName3(txt);
    
  }; ///////// chgPgName 함수 //////


  const selCat = shopGnbData;


  const makeShopGnb = () => {
    let temp = [];

    selCat.map((v, i) => {
      temp[i] = (
        <li key={i}>
          <Link to={v.link}  onClick={()=>chgPgName2(v.cat)}>{v.cat}</Link>
        </li>
      );
    });

    return temp;
  };



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
                <Link to="/searchlist">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="schbtnBtb"
                    title="Open search"
                  />
                </Link>
                <input id="schinGnb" type="text" placeholder="상품 검색" />
              </div>

              <Link to="/cart">
                <FontAwesomeIcon icon={faCartShopping} />
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
