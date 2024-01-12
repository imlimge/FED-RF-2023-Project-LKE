import { useLocation, useNavigate } from "react-router-dom";
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import "../css/cart.css";


import $ from "jquery";
import { sCon } from "../modules/shopContext";
window.jQuery = $;


export function Cart() {

 
  const myCon = useContext(sCon);
     
  //정규식함수(숫자 세자리마다 콤마해주는 기능) //////////////
  function addComma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }  



  // 아이템 디테일 이동함수 //////////////
  const navigate = useNavigate();
    const goItemDetail = (e) => {
      console.log( 'cart의 goItemDetail',e)
    navigate("/itemdetail", {state: e});
  };



  const itemData = useRef(null);
  console.log('itemData',itemData)
 


// 총 배열
let totalList = [];



// 로컬스에서 데이터 가져오기
let shopCart = JSON.parse(localStorage.getItem("shop_cart"));
const [aShopCart, setAShopCart] = useState(shopCart);

// console.log('샵카트 최초 aShopCart',aShopCart)


// 로컬스 데이터가 있다면 totalList에 넣기
if(shopCart){ 
  totalList = [...shopCart];
  // console.log(' 로컬스 데이터가 있다면 totalList에 shopCart넣기 totalList',totalList)
}




// 배송비 초기셋팅
const [dPrice, setDPrice] = useState(3000)
const [tPrice, setTPrice] = useState()



useEffect(()=>{
// .cart_item_total_Price 클래스를 가진 요소들의 텍스트 값을 가져와서 합계 계산 *** 
let itemtotalprice = 0;
$('.cart_item_total_Price').each(function() {
  const itemPriceText = $(this).text().replace(",", ""); // 콤마 제거
  const itemPrice = parseInt(itemPriceText);

  itemtotalprice += itemPrice;
});
console.log('총합계:', itemtotalprice);
// ***

// itemtotalprice 총 합계가 5만원 이상이면 배송비 0원
if(Number(itemtotalprice)>50000) setDPrice(0);

// 상품 총합계 최종 
let totalPrice = Number(dPrice) + Number(itemtotalprice);

setTPrice(totalPrice)


})
  



  // 리랜더링 강제적용 상태변수
  const [force, setForce] = useState(null);
  // setForce(Math.random());


const clearCart = () => {
  myCon.setForce(Math.random());
  console.log('장바구니 비우기')
  

  localStorage.removeItem("shop_cart");

}



const checkItem = (i,v) => {

  console.log('아이템 체크',i,v)
 

}


const deleteItem = (i,v) => {

  console.log('아이템 선택 삭제',i,v)
 

}








const makeList = () => {
  
  if(shopCart !== undefined  && shopCart !== null){
 

  console.log('장바구니 shopCart 있음')


    return(
      // console.log(v,i)
      totalList.map((v,i)=>
      <Fragment key={i}>
      
            <tr>
              <td>
              <input type="checkbox" className="itemcheck" value={i} onClick={()=>checkItem(i,v)} defaultChecked="on"/>
              </td>
              <td>
                <img
                  src={v.addList.isrc}
                  alt="item"
                />
              </td>
              {/* goItemDetail(v.addList) 개별 아이템 객체 보내기 */}
              <td className="go_item" onClick={()=>goItemDetail(v.addList)}>{v.addList.name}</td>
              <td>{v.itemCnt}</td>
              {/* 개별가격 */}
              <td><span>{addComma(Number(v.addList.price))}</span>원</td>
              {/* 총합계 - 금액 데이터 가져오기 위한 클래스  */}
              <td><span className="cart_item_total_Price">{addComma(Number(v.addList.price)*Number(v.itemCnt))}</span>원</td>
              <td>
                <button className="cfn" onClick={()=>deleteItem(i,v)} >
                  ×
                </button>
              </td>
            </tr>

          
      </Fragment>
      ))
   
  }
  else{ 
    console.log('장바구니 null')
  return ( <>
        <tr>
          <td colSpan="8">장바구니가 비었습니다</td>
        </tr>
      </>)
    

}
} /// else ///






  return (
    <>
      <section id="cart">
        
          <div className="cart__title">
            <h1>장바구니</h1>
            <span>장바구니는 최대 2주간 보관됩니다.</span>
          </div>
          <div className="cart__select">
          <input type="checkbox" id="wholecheck" defaultChecked="on"/>
           <label htmlFor="wholecheck">전체선택/해제</label>
          <button>선택삭제</button>
          </div>
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


            {/* <tr>
            <td className="cart_list_total" colSpan="6">
                선택상품 합계 : 
              </td>
               <td>
                <span>{addComma(Number(tPrice))}</span>원
              </td>
            </tr> */}
            <tr>
              <td className="cart_list_total" colSpan="3">
                배송비 (5만원 이상 배송비 0원) : 
              </td>
              <td>
                <span>{addComma(dPrice)}</span>원
              </td>
    
              <td className="cart_list_total" colSpan="2">
                총합계(배송비 포함) :
              </td>
              <td>
                <span>{addComma(Number(tPrice))}</span>원
              </td>
            </tr>
       
          </tbody>
        </table>
        <div className="cart__bottom__button">
          <button>주문하기</button>
          <button onClick={()=>clearCart()}>장바구니 비우기</button>
        </div>
      </section>
    </>
  );
}
