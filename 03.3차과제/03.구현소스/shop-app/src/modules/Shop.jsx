import { ItemList } from "./ItemList";
import "../css/item_list.css";
import "../css/sell.css";

import { categoryData } from "../data/category";
import { shopData } from "../data/shop";

import { Fragment, useEffect, useState } from "react";
import { useContext } from "react";

import { sCon } from "../modules/shopContext";
import { useNavigate } from "react-router-dom";

import $ from "jquery";
window.jQuery = $;

export function Shop() {




  const myCon = useContext(sCon);
  let cat = myCon.pgName;

  // 상품 카테고리
  const selCat = categoryData[cat];
  // 상품데이터
  
  let selData = shopData[cat];


  // console.log("selData", selData);


  // 상품 전체 수
  let datacnt = selData.length;

  const [cnt, setCnt] = useState(datacnt);

  // 한 페이지당 갯수 
  const itemsPerPage = 4;
  // 초기 페이지 번호 셋팅 1로 시작
  const [currentPage, setCurrentPage] = useState(1);

  // 처음 시작 번호는 1-1 > 0*20 = 0부터 시작 / 2-1*20 = 20번부터 시작
  const startIndex = (currentPage - 1) * itemsPerPage;
  // 끝 번호는 1*20= 20까지  / 2*20 = 40까지
  const endIndex = currentPage * itemsPerPage;

  // 기본으로 원본 셀데이타를 가져가지만 setSelDataList에서 배열이 바뀌면 아래
  // 페이지 네이션 슬라이스 하려는 데이터를 바꾸려고..
  const [selDataList, setSelDataList] = useState(selData)
    

  // 시작,끝(startIndex, endIndex) 숫자만큼 데이터를 slice로 잘라서 paginatedData 에 다시 담음   (selDataList 원래는 selData)
  //맵돌리는 중
  const paginatedData = selDataList.slice(startIndex, endIndex);

  // 전체 데이터 갯수 / 20개로 나누면 페이지갯수(소수점 이하 올림)
  const totalPages = Math.ceil(selDataList.length / itemsPerPage);


  // 이전 명칭 paginatedList 심지어 페이지네이션과 관련하려고 셋팅한건데 
  // 전혀 관련이 없는 전선택 상태변수가 됨
  const [lastLastList, setLastLastList] = useState(paginatedData)



  // useState로 셋팅된 값을 바꿔줌
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  // 아이템 디테일 이동함수
  const navigate = useNavigate();

  const goItemDetail = () => {
    navigate("/itemdetail");
  };


  ////////////////////////
  // 체크박스검색 함수 ////
  ////////////////////////



   const chkSearch = (e) => {

    setCurrentPage(1);

    const cid = e.target.id;

    // 2. 체크박스 체크여부 : checked (true/false)
    const chked = e.target.checked;
    console.log("아이디:", cid, chked);

    // temp는 temp = 현재카테의 셀데이타
    let temp = selData;
    console.log("temp = 현재카테의 셀데이타", temp);


  // 함수 외부에서 lastList 선언 **
  let lastList = [];


    // 4.체크박스 체크개수세기 : 1개초과시 배열합치기!
    let num = $(".checkbtn:checked").length;
    console.log("체크개수:", num);

    if (chked) {
      // 현재데이터 변수에 담기
      const selList = selData.filter((v) => {
        if (v.category === cid) return true;
      }); /////////// filter //////////

      // 체크개수가 1초과일때 배열합치기
      if(num>1){ // 스프레드 연산자(...)사용! 
        // ** lastList가 계속 업데이트가 안돼서 paginatedList 이게 계속 전에 선택한 내용이 들어가길래.. 넣었더니 합쳐진다..........
        lastList = [...lastLastList, ...selList];
        console.log('selList 현재선택',selList,cid)
        console.log('lastList 하나이상 이전전택',lastList)

        
        
      } //// if /////

      else if(num === 1){ // 하나일때
        lastList = selList;
        console.log('selList 하나',lastList,cid)
 
      }
      

    }
     else{

      // ㅠ... 이해해보기**
      lastList = lastLastList.filter((v) => v.category !== cid);
  

      if(num<1){
        lastList = temp;
      }

      
        
      console.log('다해제된상태 temp넣기',lastList)

    } /// else ////


    
    //왜 전 선택 배열이 들어있는지 모르겟네
    setLastLastList(lastList);
    console.log('setPaginatedList(lastList) / paginatedList',setLastLastList)
    setCnt(lastList.length);

    //맵돌리는 배열 > 슬라이스 배열도 여기로 담음
    setSelDataList(lastList);
    console.log('lastList 최종',lastList,)



  };






  const makeList = () => {
    let temp = [];

    selCat.map((v, i) => {
      temp[i] = (
        <Fragment key={i}>
          <li>
            {v}
            <input
              className="checkbtn"
              type="checkbox"
              id={v}
              onChange={chkSearch}
            />
            <label htmlFor={v}></label>
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
          <div className="shop__item" onClick={() => goItemDetail()}>
            <div className="shop__item__photo">
              <img src={v.isrc} alt="상품사진" />
            </div>
            <div className="shop__item__content">
              <span className="shop__item__content-name"> {v.name} </span>
              <span className="shop__item__content-cont">{v.cont}</span>
              <span className="shop__item__content-price"> {v.price} </span>

              <span className="shop__item__content-review">
                리뷰 {v.review}
              </span>
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
                  <span>{cnt}</span>
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
                    className={pageNumber === currentPage ? "active" : ""}
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
