//Kairos - GnbArea 컴포넌트

export function GnbArea() {

  
  return (
    <>
      {/* <!-- 네비게이션 --> */}
      <header id="header">
        <div className="header">
          {/* <!-- 왼쪽 고정 네비게이션 박스 --> */}
          <nav className="gnb__box">
            <ul className="gnb__menu">
              <li className="vertical-lines">
                <a className="gnb__item on" href="#intro">
                  카이로스
                </a>
              </li>
              <li className="vertical-lines">
                <a className="gnb__item" href="#about">
                  강사소개
                </a>
              </li>
              <li className="vertical-lines">
                <a className="gnb__item" href="#facility">
                  학원시설
                </a>
              </li>
              <li className="vertical-lines">
                <a className="gnb__item" href="#time_table">
                  시간표
                </a>
              </li>
              <li className="vertical-lines">
                <a className="gnb__item" href="#notice">
                  공지사항
                </a>
              </li>
              <li className="vertical-lines">
                <a className="gnb__item" href="#contact">
                  컨택트
                </a>
              </li>
            </ul>
          </nav>

          {/* <!--모바일 네비게이션 --> */}
          <div className="m-header">
            <nav className="m-gnb__box">
              <ul className="m-gnb__menu">
                <li>
                  <a className="m-gnb__item on" href="#intro">
                    카이로스
                  </a>
                </li>
                <li>
                  <a className="m-gnb__item" href="#about">
                    강사소개
                  </a>
                </li>
                <li>
                  <a className="m-gnb__item" href="#facility">
                    학원시설
                  </a>
                </li>
                <li>
                  <a className="m-gnb__item" href="#time_table">
                    시간표
                  </a>
                </li>
                <li>
                  <a className="m-gnb__item" href="#notice">
                    공지사항
                  </a>
                </li>
                <li>
                  <a className="m-gnb__item" href="#contact">
                    컨택트
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
} //// GnbArea 컴포넌트 ////
