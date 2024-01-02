import { Fragment, useState } from "react";
import "../css/search_list.css";
import { shopData } from "../data/shop";

import { useLocation, useNavigate } from "react-router-dom";

export function SearchList(props) {

  // 검색결과 받아오는 데이터
  const selDataL = shopData.리빙;
  const selDataO = shopData.문구;
  const selDataK = shopData.키즈;

  const totalData = [...selDataL,...selDataO,...selDataK]

  console.log('searchList totalData',totalData)




const location = useLocation();
const { state } = location;

console.log('SearchList state',state)






let dataResult = totalData.filter((v) =>{ 
  return (v.name.indexOf(state))
}
  )


console.log('검색어에서 결과 뽑음',dataResult)




  // 후크상태변수 설정 : 아이템변경
  const [Item, setItem] = useState();

  
  // 아이템 디테일 이동함수
  const navigate = useNavigate(props);

  const goItemDetail = (e) => {
    console.log("main의 goItemDetail", e);
    setItem(e);
    navigate("/itemdetail", { state: e });
  };





  // 상품 전체 수
  let datacnt = dataResult.length;




  const makeItem = () => {
    let temp = [];

    if(datacnt != 0 ){

    selDataL.map((v, i) => {
      temp[i] = (
        <Fragment key={i}>
          <div className="shop__item" onClick={() => goItemDetail(v)}>
            <div className="shop__item__photo">
              <img src={v.isrc} alt="상품사진" />
            </div>
            <div className="shop__item__content">
              <span className="shop__item__content-name"> {v.name} </span>
              <span className="shop__item__content-cont">{v.cont}</span>
              <div className="shop__item__content-price"> 
             <span> {addComma(v.price)} </span>
                원
              </div>

              <span className="shop__item__content-review">
       
                리뷰 {v.review}
              </span>
            </div>
          </div>
        </Fragment>
      );
    });}


    else{
      <h2 style={{textAlign:'center'}}>
          검색결과가 없습니다
    </h2>
    }


    return temp;
  };

  //정규식함수(숫자 세자리마다 콤마해주는 기능)
  function addComma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
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
  );
}
