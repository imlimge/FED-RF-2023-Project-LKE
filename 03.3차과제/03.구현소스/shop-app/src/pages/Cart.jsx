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
    price: 0,
    category: null,
    review:null
}  



  const location = useLocation();  
  const { state } = location;
  console.log('장바구니 state',state.state,state.itemCnt)
  

  // const itemData = useRef(null)
 
  const [itemData, setItemData] = useState(nullState);
  console.log('itemData',itemData)


  
const [itemState, setItemState] = useState(state);

const [ calPrice, setCalPrice ] = useState();



useEffect(() => {
  if (state.idx !== null ) {
    let stateState = state.state
    setItemData(stateState);
    console.log('useEffect후 itemData',itemData,stateState);
  }
  console.log('useEffect후 itemData2',itemData);
}, [itemState]);



// 총 배열
let totalList = [];

// 배송비
const dPrice = 3000;
// 개별 상품 총합계
let itemtotalprice;
// 상품 총합계
let totalPrice = Number(dPrice) + Number(itemtotalprice);




const makeList = () => {
  
  if(itemData.idx !== null ){
  // itemData.current = state.state
  // let itemData = state.state
  // setItemData(state.state);
    


  
  //아이템 배열에 넣기
  totalList.push(itemData);
  console.log('아이템 배열에 넣기',totalList)



   console.log('장바구니 state있음')

    itemtotalprice = Number(itemData.price) * Number(state.itemCnt);

    return(
      <Fragment key={itemData.name}>
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
                  src={itemData.isrc}
                  alt="item"
                />
              </td>

              <td className="go_item" onClick={()=>goItemDetail(itemData)}>{itemData.name}</td>
              <td>{state.itemCnt}</td>
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
