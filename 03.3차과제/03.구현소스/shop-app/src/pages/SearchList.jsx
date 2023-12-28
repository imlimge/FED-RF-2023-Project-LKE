

import { Fragment } from "react";
import "../css/search_list.css"
import { shopData } from "../data/shop";
import { ItemList } from "../modules/ItemList"
import { useNavigate } from "react-router-dom";


export function SearchList() {



 // 아이템 디테일 이동함수
 const navigate = useNavigate();

 const goItemDetail = () => {

   navigate('/itemdetail');
 
 };


  // 검색결과 받아오는 데이터
  const selData = shopData.리빙;

  // 상품 전체 수
  let datacnt = selData.length;


  const makeItem = () => {
    let temp = [];

    selData.map((v, i) => {
      temp[i] = (
        <Fragment key={i}>
        <div className="shop__item" onClick={()=>goItemDetail()}>
          <div className="shop__item__photo">
            <img src={v.isrc} alt="상품사진" />
          </div>
          <div className="shop__item__content">
            <span className="shop__item__content-name"> {v.name} </span>
            <span className="shop__item__content-cont">{v.cont}</span>
            <span className="shop__item__content-price"> {v.price} </span>

            <span className="shop__item__content-review"> 리뷰 {v.review} </span>
          </div>
        </div>
      </Fragment>
      );
    });
    return temp;
  };





  return(
    <>
    <section id="search__list">
    <div className="search__list">

    <h2> 검색결과 </h2>

      <div className="search__list__count">
                 <span>{datacnt}</span>
      <span>개의 상품이 있습니다.</span>
      </div>

      <div className="shop__item__list">{makeItem()}</div>
        

    </div>

</section>
    </>
  )
  }