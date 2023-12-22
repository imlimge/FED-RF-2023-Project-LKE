import { ItemList } from "./ItemList";
import "../css/item_list.css";
import "../css/sell.css";

import { categoryData } from "../data/category";
import { shopData } from "../data/shop";

import { Fragment, useEffect, useState } from "react";
import { useContext } from "react";

import { sCon } from "../modules/shopContext";


export function Shop() {

  
  const myCon = useContext(sCon);
  let cat = myCon.pgName
  

  // 상품 카테고리
  const selCat = categoryData[cat];
  // 상품데이터
  const selData = shopData[cat];


  // 상품 전체 수
  let datacnt = selData.length;



  // 한 페이지당 갯수
  const itemsPerPage = 20;
  // 초기 페이지 번호 셋팅 1로 시작
  const [currentPage, setCurrentPage] = useState(1);

  // 처음 시작 번호는 1-1 > 0*20 = 0부터 시작 / 2-1*20 = 20번부터 시작
  const startIndex = (currentPage - 1) * itemsPerPage;
  // 끝 번호는 1*20= 20까지  / 2*20 = 40까지
  const endIndex = currentPage * itemsPerPage;
  // 시작,끝(startIndex, endIndex) 숫자만큼 데이터를 slice로 잘라서 paginatedData 에 다시 담음
  const paginatedData = selData.slice(startIndex, endIndex);
  // 전체 데이터 갯수 / 20개로 나누면 페이지갯수(소수점 이하 올림)
  const totalPages = Math.ceil(selData.length / itemsPerPage);

  // useState로 셋팅된 값을 바꿔줌
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };







  const makeList = () => {                                              
    let temp = [];

    selCat.map((v, i) => {
      temp[i] = (
        <Fragment key={i}>
          <li>
            {v}
            <input type="checkbox" id={"check" + i} />
            <label htmlFor={"check" + i}></label>
          </li>
        </Fragment>
      );
    });

    return temp;
  };

  const makeItem = () => {
    let temp = [];

    paginatedData.map((v, i) => {
      temp[i] = (
        <Fragment key={i}>
        <div className="shop__item">
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



  return (
    <>
      <div className="shop inbox">
      <div className="shop__box">
        <div className="shop__list__left">
          <h2>{cat}</h2>

          <ol>{makeList()}</ol>
        </div>

        <div className="shop__item__right">
          {/* <!-- 상품아이템 상단탭 --> */}
          <div className="shop__item__top">
            <div className="shop__item__order">
              <div className="shop__item__count">
                <span>{datacnt}</span>
                <span>개의 상품이 있습니다.</span>
              </div>
              <div className="shop__item__orderlist">
                <span className="orderlist on">인기순</span>
                <span className="orderlist">추천리뷰순</span>
                <span className="orderlist">낮은가격순</span>
                <span className="orderlist">높은가격순</span>
              </div>
            </div>
          </div>
          {/* <!-- shop__item__top --> */}
          <div className="shop__item__list">{makeItem()}</div>
        
          <div className="pagination">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (pageNumber) => (
                  <span
                    key={pageNumber}
                    className={pageNumber === currentPage ? 'active' : ''}
                    onClick={() => handlePageChange(pageNumber)}
                  >
                    {pageNumber}
                  </span>
                )
              )}
            </div>
        
        </div>
        </div>
      </div>
    </>
  );
}
