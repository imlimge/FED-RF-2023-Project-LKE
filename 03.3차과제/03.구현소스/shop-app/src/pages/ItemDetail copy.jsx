import { Navigate, useLocation, useNavigate } from "react-router-dom";
import "../css/item_detail.css";
import { useContext, useEffect, useRef, useState } from "react";
import { sCon } from "../modules/shopContext";

import $ from "jquery";
import { faL } from "@fortawesome/free-solid-svg-icons";
window.jQuery = $;

export function ItemDetail() {
  const myCon = useContext(sCon);

  // 상단으로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 아이템 누를 때 state값 가져오기
  const location = useLocation();
  const { state } = location;

  console.log("ItemDetail state", state);

  // 총 배열 (데이터 담을)
  let totalList = [];

  // 로컬스에서 데이터 가져오기
  let shopCart = JSON.parse(localStorage.getItem("shop_cart"));
  // console.log("샵카트 최초 aShopCart", shopCart);

  // addList 함수 리랜더링을 위한 상태변수
  // const [aShopCart, setAShopCart] = useState(shopCart);

  // 로컬스 데이터가 있다면 totalList에 넣기
  if (shopCart) {
    totalList = [...shopCart];
    // console.log(' 로컬스 데이터가 있다면 totalList에 shopCart넣기 totalList',totalList)
  }



  // 상품 배열 false/true 위한 flag
  const flag = useRef(false)
  // let flag = false;
  const [flag2, setFlag2] = useState(flag);


  // 상품만 추가 화면 유지 //////////////////
  const addList = (e) => {
    //   console.log("addList 함수 호출됨");
    // 현재 상품 정보 e = addList, itemCnt
    let addList = e;
    // 비교를 위해 배열로 만들어 줌
    let addArr = [];
    addArr.push({ addList, itemCnt });

    console.log("addArr", addArr);

    // 장바구니담기 클릭 시 totalList 배열에 해당 addList 넣기
    // 같은 값이 있다면 메시지와 함께 넣지 않기.
    // 같은 값은 addList에 idx , cat 두가지 확인 &&
    console.log('addArr',addArr[0].addList.idx ,addArr[0].addList.category);



    // 배열 비교
    const result = totalList.filter((v) => {
      // totalList 배열안에 같은 상품이 있으면 true / 없으면 false
      if (addArr[0].addList.idx === v.addList.idx &&
        addArr[0].addList.category === v.addList.category) {
        // flag = true;
        flag.current = true;
        // setFlag(true);
        console.log('result true',flag.current)
      } else {
        // flag  = false;
        flag.current = false;
        // setFlag(false);
        console.log('result false',flag.current)
      }

      return flag.current;
    });



    
    console.log("result/flag",result, flag.current);

    // 같은 상품 있으면 알람 후 카운트만 변경
    if (flag.current) {
      setFlag2(flag)
      console.log("상품있어", flag2);
      alert('장바구니에 상품이 있습니다 \n(추후 수량만 업데이트 기능 구현 예정)')




    }

    //상품 없으면 상태값 넣기
    else{
      // setFlag2(flag.current)
      console.log("상품 없어서 추가", flag2);
      // 배열에 현재 상품 없으면 상태값 넣기
      totalList.push({ addList, itemCnt });
      
    }
    
    setFlag2(flag.current)

    console.log(
      "ItemDetail의 장바구니담기 addList = e",
      addList,
      "아이템수",
      itemCnt,
      "\ntotalList = {addList, itemCnt2}",
      totalList
    );

    // 바뀐 totalList 다시 로컬스에 저장
    localStorage.setItem("shop_cart", JSON.stringify(totalList));
    let shopCart = JSON.parse(localStorage.getItem("shop_cart"));
    // shopCart state에 셋팅
    // setAShopCart(shopCart);

    // 레이아웃에 상태변수 있음
    myCon.setCartListNumL(shopCart.length);

    // 아이템 카운트 초기화 _ 작동 안 함
    setItemCnt(1);

    let price2 = itemCnt * price1;
    // .total-price 출력 2군데 클래스 있음
    $(".total-price span").text(addComma(price2));
  };








  //   console.log(
  //     "addList후 최종",
  //     "\ntotalList",
  //     totalList,
  //     "\naShopCart",
  //     aShopCart
  //   );

  // 카트로 가기위한 navigate
  const navigate = useNavigate();

  // 상품 추가 + 장바구니 바로가기 ////////////
  const goCart = () => {
    console.log("goCart 함수 호출됨");

    navigate("/cart", { state: { state: state, itemCnt: itemCnt } });

    // totalList.push(state);
    console.log("ItemDetail의 바로구매", state, itemCnt, totalList);
    // localStorage.setItem('shop_cart',JSON.stringify(state))

    addList(state);
  };

  // console.log('item-detail페이지 state',state)
  // console.log('item-detail페이지 state',state.idx)
  // console.log('item-detail페이지 state',state.name)

  //정규식함수(숫자 세자리마다 콤마해주는 기능)
  function addComma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // 상품 수량 기본 셋팅 및 증감에 따른 셋팅
  const [itemCnt, setItemCnt] = useState(1);
  // console.log("물건갯수 itemCnt", itemCnt);

  // 최초 가격 불러오기
  let price1 = state.price;

  useEffect(() => {
    // 제품 총 합계
    $(".itemdetail__price").text(addComma(price1));
    // 총 합계
    $(".total-price span").text(addComma(price1));
  }, []);

  // useEffect(()=>{
  //   setItemCnt(1);
  // });

  // 상품 수량 증감 버튼 셋팅 //////////

  const chgNum = (e) => {
    //금액 출력
    price1 = state.price;
    // console.log("price1", price1);

    const sumVal = $("#sum").text();
    let cnt = Number(sumVal);
    let isUP = $(e.currentTarget).hasClass("sb_up");
    // console.log(e.currentTarget)
    // console.log(isUP)

    // 숫자 증가 버튼
    if (isUP) {
      cnt++;
      // console.log('i',cnt);
    }

    // 숫자 감소 버튼
    else {
      if (cnt > 1) {
        cnt--;
        // console.log('i',cnt)
      } else if (cnt < 1) cnt = 1;
    }

    $("#sum").text(cnt);

    let price2 = cnt * price1;
    // 제품 총 합계
    $(".total-price span").text(addComma(price2));

    // 현재 갯수 itemCnt에 담기
    setItemCnt(cnt);

    // console.log('물건갯수 cnt,itemCnt',cnt,itemCnt)
  }; //////////// chgNum함수 ////////////

  return (
    <>
      <section id="itemdetail">
        <div className="itemdetail inbox">
          <div className="itemdetail-top-area">
            <div className="main_photo">
              <img src={state.isrc} alt={state.name} />
            </div>

            <div className="itemdetail__info">
              <div className="itemdetail__title__box">
                <h2 className="itemdetail__title">{state.name}</h2>
                <p className="itemdetail__cont">{state.cont}</p>
                <div className="itemdetail__price">
                  <span>{state.price}</span>원
                </div>
              </div>

              <div className="itemdetail__notice__box">
                <div className="itemdetail__notice__left">
                  <span>배송안내</span>
                </div>
                <div className="itemdetail__notice__right">
                  <span>
                    5만원 이상 구매시 무료배송 ( 미만시 배송비 3,000원 )
                  </span>
                  <span>평일 오후 13:00 이전 결제시 당일 발송</span>
                  <span>( 단, 주문량 증가 시 달라질 수 있습니다. )</span>
                </div>
              </div>
              <div className="itemdetail__sell__box">
                <span className="itemdetail__sell__title">수량</span>
                <div className="sell__button__box">
                  <button className="count__button sb_down" onClick={chgNum}>
                    －
                  </button>
                  {/* <input type="text" id="sum" defaultValue="1" />
                    <b className="chg_num sb_total"></b> */}
                  <div id="sum" className="chg_num sb_total ">
                    {itemCnt}
                  </div>
                  <button className="count__button sb_up" onClick={chgNum}>
                    ＋
                  </button>
                </div>
                <div className="itemdetail__sell__price total-price">
                  <span></span>원
                </div>
              </div>
              <div className="itemdetail__total__box">
                <span className="itemdetail__total__left">총 상품 금액</span>
                <div className="itemdetail__total__price total-price">
                  <span></span>원
                </div>
              </div>
              <div className="itemdetail__button__box">
                <button
                  className="itemdetail__button ib_cart"
                  onClick={() => addList(state)}
                >
                  장바구니 담기
                </button>
                <button
                  className="itemdetail__button ib_buy"
                  onClick={() => goCart()}
                >
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
