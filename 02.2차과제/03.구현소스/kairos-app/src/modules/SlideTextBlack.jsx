// Slide - 슬라이드 꾸밈요소 모듈

// CSS
import "../css/slide_text_black.css"


import $ from "jquery";
window.jQuery = $;
require("jquery-ui-dist/jquery-ui");
require("jquery-ui-touch-punch/jquery.ui.touch-punch");





export function SlideTextBlack() {



  




  return (
    <>

      {/*    <!-- 움직임 효과 --> */}

      <div className="slide__text_black">
        <div>
          <span>Students are proud of KAIROS</span>
          <span>Students are proud of KAIROS</span>
          <span>Students are proud of KAIROS</span>
          <span>Students are proud of KAIROS</span>
     
        </div>
      </div>
  
    </>
  );
}
