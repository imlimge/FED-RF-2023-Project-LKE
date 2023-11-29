//Kairos - TopArea 컴포넌트

import $ from "jquery";

window.jQuery = $;
require("jquery-ui-dist/jquery-ui");
require("jquery-ui-touch-punch/jquery.ui.touch-punch");

export function TopArea({ chgThis }) {
  const transBtn = (e) => {
    let tg = $(e.currentTarget).find(".m_btn");
    let txt = tg.text();

    if (txt === "혁신관") {
      tg.css({
        left: "73px",
        color: "var(--dark-color)",
        backgroundColor: "var(--point-color)",
        border: "1px solid var(--bright-color)",
      }).text("단계관");
      chgThis(0);
    } else {
      tg.css({
          left: "0px",
          color: "var(--dark-color)",
          backgroundColor: "var(--point-color)",
          border: "1px solid var(--dark-color)",
        })
        .text("혁신관");
        chgThis(1)
    }

    $(e.currentTarget).toggleClass("dark");

    // 클래스 dark 시 검은색으로 변해야 하는 파트
    const dark = $(
      ".logo,.tit,.back__line,.intro,.intro_op,.facility,.time_table,.contact,.time__table__radio input,.contact__box_title,.image__logo,.footer,.contact__time,.marquee"
    );

    // 클래스 dark 시  밝은 색으로 변해야 하는 파트
    const bright = $(
      ".notice, .accordion h3,.notice__title,.tit2,.notice_content"
    );

    dark.toggleClass("dark");
    bright.toggleClass("bright");

    

    // transBtnBox.toggleClass("dark");

    // 토글버튼 on off 변경
    // if (transBtnBox.hasClass("dark")) {
    //     mBtn.css({
    //         left: "73px",
    //         color: "var(--dark-color)",
    //         backgroundColor: "var(--point-color)",
    //         border: "1px solid var(--bright-color)",
    //     }).text("단계관")
    //     siteNum = 0;
    //     console.log('단계관',siteNum)
    //     ;
    // } else {
    //     mBtn.css({
    //         left: "0px",
    //         color: "var(--dark-color)",
    //         backgroundColor: "var(--point-color)",
    //         border: "1px solid var(--dark-color)",
    //     }).text("혁신관");
    //     siteNum = 1;
    //     console.log('혁신관',siteNum)
    // }

    // console.log('이거뭐야',siteNum)
  };

  return (
    <>
      {/* <!-- 상단 영역 --> */}
      <div className="top-area" style={{ zIndex: "9999" }}>
        <a href="#">
          <div className="logo">
            <img
              className="img"
              src="./images/logo_letter_text_w4000.png"
              alt="메인 로고"
            />
            <img
              className="img"
              src="./images/logo_letter_book_w4000.png"
              alt="메인 로고"
            />
          </div>
        </a>

        {/* <!-- 학원 전환 버튼 --> */}
        <div className="trans_btn__box" onClick={transBtn}>
          <div className="trans_btn">
            <div className="btn b_btn1">
              <span>혁신관</span>
            </div>
            <div className="btn b_btn2">
              <span>단계관</span>
            </div>
            {/* 움직이는 토글 버튼 */}
            <div className="btn m_btn">
              <span>혁신관</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} //// TopArea 컴포넌트 ////
