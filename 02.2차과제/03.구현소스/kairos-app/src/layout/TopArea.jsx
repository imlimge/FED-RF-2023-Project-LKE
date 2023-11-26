//Kairos - TopArea 컴포넌트





export function TopArea() {



  
  return(
    <>
     {/* <!-- 상단 영역 --> */}
    <div className="top-area" style={{zIndex:'9999'}}>
      
        <a href="#">
          <div className="logo">
            <img className="img" src="./images/logo_letter_text_w4000.png" alt="메인 로고" />
            <img className="img" src="./images/logo_letter_book_w4000.png" alt="메인 로고" />
          </div>
        </a>


        {/* <!-- 학원 전환 버튼 --> */}
        <div className="trans_btn__box">
          <div className="trans_btn">
            <div className="btn b_btn1">
              <span>혁신관</span>
            </div>
            <div className="btn b_btn2">
              <span>단계관</span>
            </div>
            <div className="btn m_btn">
              <span>혁신관</span>
            </div>
          </div>
        </div>

    </div>
  </>
  
  );

} //// TopArea 컴포넌트 ////