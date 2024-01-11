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

import { shopGnbData } from "../data/shop_gnb";
import { useEffect, useState } from "react";



import $ from "jquery";
import { sCon } from "../modules/shopContext";
window.jQuery = $;
require("jquery-ui-dist/jquery-ui");
require("jquery-ui-touch-punch/jquery.ui.touch-punch");

export function TopArea(props) {

  // 페이지변경 상태변수 업데이트 함수
  const chgPgName2 = (txt) => {
    props.chgPgName3(txt);
    //  console.log(txt)
  }; ///////// chgPgName 함수 //////


  // 상단 카테고리 데이터
  const selCat = shopGnbData;
  // 로컬스에서 데이터 가져오기
  let shopCart = JSON.parse(localStorage.getItem("shop_cart"));
  // 배열 생성
  let totalList = [];
  // 배열에 데이터 추가
  totalList.push(shopCart);



  // 리랜더링 강제적용 상태변수
  const [force, setForce] = useState(null);
  // setForce(Math.random());


  // 장바구니 아이콘 숫자 state
  const [cartListNumT, setCartListNumT] = useState(null);


  // 장바구니 아이콘에 배열 있는만큼 숫자 useState셋팅
  useEffect(() => {
    if (shopCart !== undefined && shopCart !== null) {
      // setForce(Math.random());
      // props.cntNum(shopCart.length);
      setCartListNumT(shopCart.length)

      console.log("topArea shop-cart 로컬스,갯수", shopCart, shopCart.length);
    }
  },[]);



  // 카트에 아이템 있으면 숫자 넣기
  const makeCartNum = () => {
    if (shopCart !== undefined && shopCart !== null) {
      return (
        <div className="cart_state">
          <span id="cart_state_num">{cartListNumT}</span>
        </div>
      );
    } ///if ///
    else {
      return <></>;
    }
  };



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


  // cart.jsx에 null일때 state값이 필요해서 임의 생성
  // topArea에서 바로 장바구니 아이콘을 누를 때 필요함
  let state = {
    idx: null,
    isrc: null,
    name: null,
    cont: null,
    price: null,
    category: null,
    review: null,
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
                  <FontAwesomeIcon icon={faCartShopping} />
                  {makeCartNum()}
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
