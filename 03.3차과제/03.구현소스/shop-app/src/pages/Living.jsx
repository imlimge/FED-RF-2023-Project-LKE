import { ItemList } from "../modules/ItemList";


import "../css/sell.css";
import"../css/item_list.css"

import { categoryData } from "../data/category";

export function Living() {


  const selData = categoryData.리빙;

  const makeList = () => {
    let temp = [];

    selData.map((v, i) => {
      temp[i] = (
        <>
          <li>
            {v}
            <input type="checkbox" id={"check"+i} />
            <label htmlFor={"check"+i} ></label>
          </li>
        </>
      );
    });

    return temp;
  };


  const makeItem = ()=> {

    
  }



  return (
    <>
      <div className="shop sell inbox">
        <div className="shop__list__left">
          <h2>리빙</h2>

          <ol>{makeList()}</ol>
        </div>

        <div className="shop__item">
          {/* <!-- 상품아이템 상단탭 --> */}
          <div className="shop__item__top">
            <div className="shop__item__order">
              <div className="shop__item__count">
                <span>00</span>
                <span>개의 상품이 있습니다.</span>
              </div>
              <div className="shop__item__orderlist">
                <span className="orderlist on">인기순</span>
                <span className="orderlist">신상품순</span>
                <span className="orderlist">추천리뷰순</span>
                <span className="orderlist">낮은가격순</span>
                <span className="orderlist">높은가격순</span>
              </div>
            </div>
          </div>
          {/* <!-- shop__item__top --> */}

          <ItemList />
          <ItemList />
        </div>
      </div>
    </>
  );
}
