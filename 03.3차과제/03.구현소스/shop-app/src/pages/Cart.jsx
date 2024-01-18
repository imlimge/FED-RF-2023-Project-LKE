import { useLocation, useNavigate } from "react-router-dom";
import { Fragment, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import "../css/cart.css";

import $ from "jquery";
import { sCon } from "../modules/shopContext";
window.jQuery = $;

export function Cart() {
  const myCon = useContext(sCon);

  
 // 아이템 디테일 이동함수 ------------------------------------
  const navigate = useNavigate();
  const goItemDetail = (e) => {
    // console.log( 'cart의 goItemDetail',e)
    navigate("/itemdetail", { state: e });
  };


  //정규식함수(숫자 세자리마다 콤마해주는 기능) ------------
  function addComma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }



  /////////////////// [ 상태변수 셋팅 ] ///////////////////
  
  // 리랜더링 강제적용 상태변수
  const [force, setForce] = useState(null);
  // setForce(Math.random());

  // 아이템 총 배열
  let totalList = [];


  // 배열개수 초기셋팅
  const [ttListL, setTtListL] = useState();


  // 로컬스에서 데이터 가져오기
  let shopCart = JSON.parse(localStorage.getItem("shop_cart"));
  const [aShopCart, setAShopCart] = useState(shopCart);
  // console.log('샵카트 최초 aShopCart',aShopCart)


  // 배송비 초기셋팅 (3000원)
  // 선택 상품 합계 
  const [selPrice, setSelPrice] = useState(0);

  // 배송비
  const [dPrice, setDPrice] = useState(3000);
  // console.log(dPrice)
  

  // 개별 아이템 체크상태 상태변수 -> 상태변수로 해야 false/true 변화 보이고 전체 선택/해제를 업데이트 하기 위해 셋팅
  const [isChecked, setIsChecked] = useState(true);


  // 체크 리스트 배열 상태변수 (출력 전 체크 된 배열 담아놓는)
  const [checkedList, setCheckedList] = useState(shopCart);
  // console.log("checkedList", checkedList, "aShopCart", aShopCart);


  // 체크된 박스
  const [btnSList, setBtnSList] = useState([]);



 /////////////////////////////////////////////////////////

// 출력전에 배송비 먼저 셋팅
useLayoutEffect(()=>{

   if(Number(selPrice) >= 50000){setDPrice(0);}
 else{setDPrice(3000);}

})


// 체크리스트가 변경될때마다 선택 아이템 계산 함수 실행
useEffect(() => {
  calcList();
}, [checkedList]);



  // 렌더 후 한번 실행
  // 로컬스 데이터 있으면 셋팅  
  useEffect(() => {
    // 로컬스 데이터가 있다면 totalList에 넣기
    if (shopCart) {
      totalList = [...shopCart];
      // console.log(' 로컬스 데이터가 있다면 totalList에 shopCart넣기 totalList',totalList)

      // 현재 배열 갯수
      const totalListL = aShopCart.length;
      setTtListL(totalListL);

      if(totalListL === 0) localStorage.removeItem("shop_cart");

    } // if ///



  
    console.log("선택총액 selPrice", selPrice);
    console.log("배송비 dPrice", dPrice);
    console.log('checkedList222',checkedList,'\naShopCart',aShopCart)


  }, []);






  // 개별 아이템 전체 선택 여부에 따라 전체선택 체크박스 체크/해체
  useEffect(() => {
    // 체크된 체크박스 갯수
    let btnL = $("input:checkbox[id=itemcheck]:checked").length;


    // 전체선택 체크박스
    const wholecheck = $("#wholecheck");

    // 전체 배열갯수보다 체크된 체크박스 개수가 적으면 전체버튼 선택 해체
    if (btnL < ttListL) {
      wholecheck.prop("checked", false);
    } else {
      wholecheck.prop("checked", true);
    }

    ////// 아이템 선택 할 때마다 리스트 셋업 ///
    setBtnSList(btnSList);


    // 장바구니 리랜더링(레이아웃:setCartListNumL)
    if(shopCart) myCon.setCartListNumL(aShopCart.length);


    // 개별 아이템 체크 할 때마다 렌더링
  }, [isChecked, aShopCart]);




  // 아이템 계산 함수 ------------------------------------------------
  
  const calcList = () => {

   
    // 로컬스에 자료가 있어야 계산
    if (shopCart) {

    // 선택된 값 구하기 (reduce 사용)
    let calList = checkedList.reduce((a, b) => a + Number(b.addList.price), 0);
    setSelPrice(calList);
    console.log("선택된 값 calList함수 내부", calList);

    //----------------------------------------------------
    // 선택된 값 구하기 (forEach 사용 --  위와 같은 결과)
    // let calList = 0;
    // checkedList.forEach((v)=>{
    //   calList += Number(v.addList.price)
    // })
    // console.log('calList',calList)
    // setSelPrice(calList);
    //----------------------------------------------------


    // 장바구니 리랜더링(레이아웃:setCartListNumL)  
    myCon.setCartListNumL(aShopCart.length);

    }
        
  }




  // 장바구니 비우기 함수 ------------------------------------
  const clearCart = () => {
    myCon.setForce(Math.random());
    console.log("장바구니 비우기");
    localStorage.removeItem("shop_cart");
   
    setSelPrice(0)
    
  };




  // 아이템 체크 시 함수 ----------------------------------------------
  const checkItem = (e, v, i) => {


    console.log("아이템 체크", v, v.addList.idx, v.addList.category);
    let aitem = v;
    // console.log("aitem", aitem);

  
    // ++++++++++++++++++++++++++++++++++++++
    // 해당 체크박스 flase true 확인

    const isChecked = e.target.checked;
    console.log('isChecked', isChecked);
  



    // 비교할 현재 addList 기준 만들기
    let vAddList = v.addList;

    let result;


    // 체크가 되어있으면 (누르는 즉시 false됨) 배열 비교하여 제거
    if (!isChecked) {

      console.log('체크 되어있는거 클릭함',isChecked)
      result = checkedList.filter((v) => {
        // console.log("???", v.addList.idx,vAddList.idx,v.addList.category,vAddList.category);
        // 둘 중 하나라도 다르면 return (둘 다 맞는것. 체크한 항목 제외)
        return (
          v.addList.idx !== vAddList.idx ||
          v.addList.category !== vAddList.category
        );
      });

    }
    // 체크가 안 되어있으면 (누르는 즉시 true됨) 배열 비교하여 추가
    else {
      console.log('체크 안되어 있는거 클릭함ㅜㅜ',isChecked)
      // result.inset(aitem)
      // result.push(aitem)
      // result = [...result, aitem];

   
      result = [...checkedList, aitem];   

  
   
    }

    setIsChecked(isChecked);

    setCheckedList(result);
    console.log("result", result);



    
      
  };



  // console.log('checkItem 개별 아이템 체크 여부',isChecked)




  // 아이템 전체 선택 함수 ------------------------------------------------
  const wholeCheck = () => {
    console.log("아이템 전부 체크");

    // 해당 체크박스 true/false 확인
    // 전체체크
    const wholecheck = $(".wholecheck");
    // 개별 아이템 체크 클래스로 수집
    const checkbox = $(".itemcheck");
    // console.log(checkbox)
    // 전체 선택 true/false 확인
    const is_checked = wholecheck.prop("checked")
    console.log('is_checked',is_checked)

    // 전체선택 해제 시 모든 체크 해제
    if (!is_checked) {
      checkbox.each(function () {
        $(this).prop("checked", false);
      });
      setCheckedList([])

    }
    // 전체선택 선택 시 모든 체크 선택
    else {
      checkbox.each(function () {
        $(this).prop("checked", true);
      });
      setCheckedList(aShopCart)
      
    }

  };

  



  // 아이템 다중 선택 삭제 함수  ------------------------------------------------
  const deleteItems = () => {
    // 체크된 체크박스 갯수
    // console.log("아이템 다중 선택 삭제", btnSList);

    let result = aShopCart.filter((v) => {
      return (
        v.addList.idx !== checkedList.addList.idx ||
        v.addList.category !== checkedList.addList.category
      );
    });

    // 로컬스토리지에 셋팅
    localStorage.setItem("shop_cart", JSON.stringify(result));

    setAShopCart(result);
    console.log('result2222',result)
   
  };




  // 아이템 개별 삭제 함수  ------------------------------------------------
  const deleteAItem = (v, i) => {
    let selAItem = v.addList;
    let selAItemArr = [];
    selAItemArr = [selAItem];

    // console.log("아이템 개별 삭제", v, i);
    // console.log("result", v.addList.idx, v.addList.category, selAItemArr);
    // console.log("totalList", totalList);

    let result = aShopCart.filter((v) => {
      return (
        v.addList.idx !== selAItem.idx ||
        v.addList.category !== selAItem.category
      );
    });

    console.log("result2", result);

    // 로컬스토리지에 셋팅
    localStorage.setItem("shop_cart", JSON.stringify(result));

    setAShopCart(result);
    setCheckedList(result)
  
   
    calcList()


  
    const checkbox = $(".itemcheck, .wholecheck");
    console.log('checkbox',checkbox)
    checkbox.each(function () {
      $(this).prop("checked", true);
    });
    


  };



  // 상품 리스트 만들기 함수  ------------------------------------------------
  const makeList = () => {
    if (shopCart !== undefined && shopCart !== null) {
      // console.log('장바구니 shopCart 있음')

      return (
        // console.log(v,i)
        aShopCart.map((v, i) => (
          <Fragment key={i}>
            <tr>
              <td>
                <input
                  type="checkbox"
                  // id="itemcheck"
                  className="itemcheck is_itemcheck"
                  value={[v.addList.category, v.addList.idx]}
                  onClick={(e) => checkItem(e, v, i)}
                  defaultChecked="on"
                />
              </td>
              <td>
                <img src={v.addList.isrc} alt="item" />
              </td>
              {/* goItemDetail(v.addList) 개별 아이템 객체 보내기 */}
              <td className="go_item" onClick={() => goItemDetail(v.addList)}>
                {v.addList.name}
              </td>
              <td>{v.itemCnt}</td>
              {/* 개별가격 */}
              <td>
                <span>{addComma(Number(v.addList.price))}</span>원
              </td>
              {/* 총합계 - 금액 데이터 가져오기 위한 클래스  */}
              <td>
                <span className="cart_item_total_Price">
                  {addComma(Number(v.addList.price) * Number(v.itemCnt))}
                </span>
                원
              </td>
              <td>
                <button className="cfn" onClick={() => deleteAItem(v, i)}>
                  ×
                </button>
              </td>
            </tr>
          </Fragment>
        ))
      );
    } else {
      console.log("장바구니 null");
      return (
        <>
          <tr>
            <td colSpan="8">장바구니가 비었습니다</td>
          </tr>
        </>
      );
    }
  }; /// else ///

  return (
    <>
      <section id="cart" className="inbox">
        <div className="cart__title">
          <h1>장바구니</h1>
          <span>장바구니는 최대 2주간 보관됩니다.</span>
        </div>
        <div className="cart__select">
          <input
            type="checkbox"
            id="wholecheck"
            className="wholecheck is_itemcheck"
            defaultChecked="on"
            onClick={() => {
              wholeCheck();
            }}
          />
          <label htmlFor="wholecheck">전체선택/해제</label>
          <button onClick={() => deleteItems()}>선택삭제</button>
        </div>
        <div className="cart__table">
          <table>
            <tbody>
              <tr>
                <th></th>
                <th></th>
                <th>상품정보</th>
                <th>수량</th>
                <th>가격</th>
                <th>합계</th>
                <th>삭제</th>
              </tr>

              {makeList()}

              <tr>
                <td className="cart_list_total" colSpan="3">
                  배송비 (5만원 이상 배송비 0원) :
            
                  <span> {addComma(dPrice)}</span> 원
                </td>

                <td className="cart_list_total" colSpan="4">
                  선택항목 합계 :
                <span> {addComma(Number(selPrice))}</span> 원
                </td>
              </tr>
              <tr>
                <td className="cart_list_total total_Cnt" colSpan="7">
                  총합계(배송비 포함) : 
             
                  <span> {addComma(Number(dPrice+selPrice))}</span> 원
                </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div className="cart__bottom__button">
          <button>선택 주문하기</button>
          <button onClick={() => clearCart()}>장바구니 비우기</button>
        </div>
      </section>
    </>
  );
}
