import { useLocation, useNavigate } from "react-router-dom";
import "../css/cart.css";
import { Fragment, useEffect, useRef, useState } from "react";



export function Cart() {

 
     
  //정규식함수(숫자 세자리마다 콤마해주는 기능) //////////////
  function addComma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }  




  // 아이템 디테일 이동함수 //////////////
  const navigate = useNavigate();

  const goItemDetail = (e) => {
    console.log( 'shop의 goItemDetail',e)
    // setItem(e);
    navigate("/itemdetail", {state: e});
  };


  let nullState = {
    idx: null,
    isrc: null,
    name: null,
    cont: null,
    price: null,
    category: null,
    review:null
}  



  const location = useLocation();  
  const { state } = location;
  console.log('장바구니 state',state.state,state.itemCnt)
  
  
  // const [itemData, setItemData] = useState(nullState);
  const itemData = useRef(null);
  console.log('itemData',itemData)
 
  let shopCart = JSON.parse(localStorage.getItem("shop_cart"))
  console.log('shopCart',shopCart)

  console.log('shopCart',shopCart)
  // console.log('shopCart.addList',shopCart[0].addList)




  // 2. 변경 데이터 변수 : 전달된 데이터로 초기셋팅
  const [cartData, setCartData] = useState(shopCart);
  
//  const itemCntState = useRef(1);
//  itemCntState.current = state.itemCnt;

const [itemCntState, setItemCntState] = useState(state.itemCnt);
console.log('cart itemState',itemCntState,cartData)


const [ calPrice, setCalPrice ] = useState();



useEffect(() => {
  if (shopCart !== undefined && shopCart !== null) {
    // let stateState = state.state
    // setItemData(cartData);

    console.log('useEffect후 itemData',cartData);
  }
  console.log('useEffect후 itemData2',cartData);
}, [cartData]);



// 총 배열
let totalList = [];

// 배송비
const dPrice = 3000;
// 개별 상품 총합계
let itemtotalprice;
// 상품 총합계
let totalPrice = Number(dPrice) + Number(itemtotalprice);




const makeList = () => {
  
  if(shopCart !== undefined  && shopCart !== null){
  // itemData.current = state.state
  // let itemData = state.state
  // setItemData(state.state);
    

  //아이템 배열에 넣기
  totalList.push(itemData);
  console.log('아이템 배열에 넣기',totalList)


  
   console.log('장바구니 state있음')
    console.log(cartData[0].addList)

    itemtotalprice = Number(cartData.price) * Number(itemCntState);

    return(
     
      <Fragment key={cartData.name}>
        <tr>
              <th></th>
              <th></th>
              <th>상품정보</th>
              <th>수량</th>
              <th>배송비</th>
              <th>가격</th>
              <th>삭제</th>
            </tr>

            <tr>
              <td>
              <input type="checkbox" id="itemcheck" />
              </td>
              <td>
                <img
                  src={cartData.isrc}
                  alt="item"
                />
              </td>

              <td className="go_item" onClick={()=>goItemDetail(cartData)}>{cartData.name}</td>
              <td>{itemCntState}</td>
              <td><span>{addComma(dPrice)}</span>원</td>
              <td><span>{addComma(itemtotalprice)}</span>원</td>
              <td>
                <button className="cfn" >
                  ×
                </button>
              </td>
            </tr>

          
      </Fragment>)
   
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

       
            {makeList()}


            <tr>
              <td className="cart_list_total" colSpan="6">
                총합계 :
              </td>
              <td><span>{addComma(totalPrice)}</span>원</td>
              <td></td>
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
