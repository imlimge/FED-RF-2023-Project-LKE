//shop - Main 컴포넌트

import { SwiperBanner } from "../plugin/SwiperBanner";



export function Main() {



  return (
    <>
     <div id="main">
      <div className="main">
        <div className="banner">
          {/* <SwiperBanner /> */}

        </div>

        <div className="shop inbox">






          {/* <!-- 상품아이템 상단탭 --> */}
          <div className="shop__item__top">
   
              <div className="shop__item__title">
                오늘의 상품
              </div>

              <div className="shop__item__category">
                <span className="item__category on">카테1</span>
                <span className="item__category">카테카테2</span>
                <span className="item__category">카카테3</span>
              </div>
              <div className="shop__item__order">
                <div className="shop__item__count">
                 <span>00</span>
                 <span>개의 상품이 있습니다.</span>
                </div>
                <div className="shop__item__listup">
                <span>인기순</span>
                <span>신상품순</span>
                <span>추천리뷰순</span>
                <span>낮은가격순</span>
                <span>높은가격순</span>
                </div>
              </div>

          </div>{/* <!-- shop__item__top --> */}
   

            <div className="shop__item__list">
              <div className="shop__item">
                <div className="shop__item__photo">
                  <img src="./images/photo1.jpg" alt="상품사진" />
                </div>
                <div className="shop__item__content">
                  <span className="shop__item__content-name"> 상품명 </span>
                  <span className="shop__item__content-cont">
                    이거이거상품설명
                  </span>
                  <span className="shop__item__content-price"> 1,000원 </span>
                 
                  <span className="shop__item__content-review"> 리뷰 </span>
                </div>
              </div>
              <div className="shop__item"></div>
              <div className="shop__item"></div>
              <div className="shop__item"></div>
              
            </div>{/* <!-- shop__item__list --> */}

            <div className="shop__item__list">
              <div className="shop__item">
                <div className="shop__item__photo">
                  <img src="./images/photo1.jpg" alt="상품사진" />
                </div>
                <div className="shop__item__content">
                  <span className="shop__item__content-name"> 상품명 </span>
                  <span className="shop__item__content-cont">
                    이거이거상품설명
                  </span>
                  <span className="shop__item__content-price"> 1,000원 </span>
                 
                  <span className="shop__item__content-review"> 리뷰 </span>
                </div>
              </div>
              <div className="shop__item"></div>
              <div className="shop__item"></div>
              <div className="shop__item"></div>
              
            </div>{/* <!-- shop__item__list --> */}


          </div>
        </div>
       {/*  <!-- shop --> */}
      </div>
   

    </>
    
  );

} //// Main 컴포넌트 ////
