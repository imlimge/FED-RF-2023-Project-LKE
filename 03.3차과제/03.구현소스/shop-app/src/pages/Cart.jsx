import { useLocation } from "react-router-dom";
import "../css/cart.css";
import { Fragment, useRef } from "react";



export function Cart() {



const location = useLocation();
const { state } = location;
console.log('장바구니 state',state.state,state.itemCnt)

let itemData = state.state;



const makeList = () => {
  let temp = [];
if(itemData.length === 0){
  
  <tr>
  장바구니가 비었습니다
  </tr>

}


  itemData.map((v, i) => {
    temp[i] = (
      <Fragment key={i}>
        <tr>
              <th></th>
              <th>상품정보</th>
              <th>수량</th>
              <th>가격</th>
              <th>배송비</th>
              <th>삭제</th>
            </tr>

            <tr>
              <td>
              <input type="checkbox" id="itemcheck" />
              </td>
              <td>
                <img
                  src={v.isrc}
                  alt="item"
                />
              </td>

              <td>{v.name}</td>
              <td>1</td>
              <td>2,000원</td>
              <td>2,500원</td>
              <td>
                <button className="cfn" >
                  ×
                </button>
              </td>
            </tr>

            <tr>
              <td className="cart_list_total" colSpan="6">
                총합계 :
              </td>
              <td>4,500원</td>
              <td></td>
            </tr>
      </Fragment>
      )

  })
  return temp;
}



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

       
        {makeList}
         
       
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
