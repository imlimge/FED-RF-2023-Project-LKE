import { useLocation, useNavigate } from "react-router-dom";
import { Fragment, useEffect, useRef, useState } from "react";
import "../css/cart.css";



export function Cart() {

 
     
  //정규식함수(숫자 세자리마다 콤마해주는 기능) //////////////
  function addComma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }  



  // 아이템 디테일 이동함수 //////////////
  const navigate = useNavigate();
    const goItemDetail = (e) => {
      
    navigate("/itemdetail", {state: e});
    console.log( 'shop의 goItemDetail',e)
  };



  // navigate로 보내준 state값 받기
  const location = useLocation();  
  const { state } = location;
  console.log('장바구니 state',state.state,state.itemCnt)
  
  
  // const [itemData, setItemData] = useState(nullState);
  const itemData = useRef(null);
  console.log('itemData',itemData)
 


// 총 배열
let totalList = [];



// 로컬스에서 데이터 가져오기
let shopCart = JSON.parse(localStorage.getItem("shop_cart"));
const [aShopCart, setAShopCart] = useState(shopCart);

console.log('샵카트 최초 aShopCart',aShopCart)


// 로컬스 데이터가 있다면 totalList에 넣기
if(shopCart){ 
  totalList = [...shopCart];
  // console.log(' 로컬스 데이터가 있다면 totalList에 shopCart넣기 totalList',totalList)
}

// 상품 상세페이지에서 보내준 item수량 state.itemCnt
const [itemCntState, setItemCntState] = useState(state.itemCnt);


console.log('cart itemState',itemCntState)


  
// 배송비
const dPrice = 3000;
// 개별 상품 총합계
let itemtotalprice;
// 상품 총합계
let totalPrice = Number(dPrice) + Number(itemtotalprice);




const makeList = () => {
  
  if(shopCart !== undefined  && shopCart !== null){
 
  console.log('장바구니 shopCart 있음')

  

    return(
      // console.log(v,i)
      totalList.map((v,i)=>
      <Fragment key={i}>
      
            <tr>
              <td>
              <input type="checkbox" id="itemcheck" />
              </td>
              <td>
                <img
                  src={v.addList.isrc}
                  alt="item"
                />
              </td>

              <td className="go_item" onClick={()=>goItemDetail(e)}>{v.addList.name}</td>
              <td>{v.itemCnt}</td>
              <td><span>{addComma(Number(v.addList.price))}</span>원</td>
              <td><span>{addComma(Number(v.addList.price)*Number(v.itemCnt))}</span>원</td>
              <td>
                <button className="cfn" >
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
          <input type="checkbox" id="wholecheck" />
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


            <tr>
              <td className="cart_list_total" colSpan="3">
                배송비 (5만원 이상 배송비 0원) : 
              </td>
              <td>
                <span>{addComma(dPrice)}</span>원
              </td>
           
              <td className="cart_list_total" colSpan="2">
                총합계 :
              </td>
              <td>
                <span>{addComma(totalPrice)}</span>원
              </td>
            </tr>
       
          </tbody>
        </table>
        <div className="cart__bottom__button">
          <button>주문하기</button>
          <button>장바구니 비우기</button>
        </div>
      </section>
    </>
  );
}
