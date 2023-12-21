//shop - Main 컴포넌트

import { ItemList } from "../modules/ItemList";
import { SwiperBanner } from "../plugin/SwiperBanner";

export function Main() {



  


  return (
    <>
      <div id="main">
        <div className="main">
          <div className="banner">
            <SwiperBanner />
            </div>

          <div className="shop inbox">
            {/* <!-- 상품아이템 상단탭 --> */}
            <div className="shop__item__top">
              <div className="shop__item__title">오늘의 상품</div>

              <div className="shop__item__category">
                <span className="item__category on">리빙</span>
                <span className="item__category">문구</span>
                <span className="item__category">키즈</span>
              </div>

              <ItemList />

            </div>
          </div>
        </div>
      </div>
    </>
  );
} //// Main 컴포넌트 ////
