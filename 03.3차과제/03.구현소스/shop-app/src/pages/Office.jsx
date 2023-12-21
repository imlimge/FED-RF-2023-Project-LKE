import { ItemList } from "../modules/ItemList";

import "../css/item_list.css";
import "../css/sell.css";

import { categoryData } from "../data/category";
import { shopData } from "../data/shop";

export function Office() {
  const selCat = categoryData.문구;
  const selData = shopData.문구;

  const makeList = () => {
    let temp = [];

    selCat.map((v, i) => {
      temp[i] = (
        <>
          <li>
            {v}
            <input type="checkbox" id={"check" + i} />
            <label htmlFor={"check" + i}></label>
          </li>
        </>
      );
    });

    return temp;
  };

  const makeItem = () => {
    let temp = [];

    selData.map((v, i) => {
      temp[i] = (
        <div className="shop__item">
          <div className="shop__item__photo">
            <img src={v.isrc} alt="상품사진" />
          </div>
          <div className="shop__item__content">
            <span className="shop__item__content-name"> {v.name} </span>
            <span className="shop__item__content-cont">{v.cont}</span>
            <span className="shop__item__content-price"> {v.price} </span>

            <span className="shop__item__content-review"> 리뷰 </span>
          </div>
        </div>
      );
    });
    return temp;
  };

  return (
    <>
      <div className="shop inbox">
      <div className="shop__box">
        <div className="shop__list__left">
          <h2>문구</h2>

          <ol>{makeList()}</ol>
        </div>

        <div className="shop__item__right">
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
          <div className="shop__item__list">{makeItem()}</div>
        </div>
        </div>
      </div>
    </>
  );
}
