// Slide - 슬라이드 꾸밈요소 모듈

// CSS
import "../css/slide_text.css"



export function SlideText() {
  return (
    <>

      {/*    <!-- 움직임 효과 --> */}
      <div className="slide__wrap">
        <div className="slide_back"></div>

        <div className="slide">
          <div className="slide__box box1">
            <div className="slide__text">
              <span>Students are proud of KAIRO</span>
            </div>
            <div className="slide__logo">
              <img src="./images/logo_a_w100.png" alt="슬라이드 로고 이미지" />
            </div>
            <div className="slide__text">
              <span>Students are proud of KAIROS</span>
            </div>
            <div className="slide__logo">
              <img src="./images/logo_a_w100.png" alt="슬라이드 로고 이미지" />
            </div>
            <div className="slide__text">
              <span>Students are proud of KAIROS</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
