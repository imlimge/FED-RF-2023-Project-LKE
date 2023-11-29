//Kairos - FooterArea 컴포넌트



export function FooterArea({sts}) {


  let isH = sts;
  // 1 혁신 , 0 단계


  return (
    <>
      {/* <!-- 푸터 --> */}
      <footer id="footer">
        <div className="footer">
          <div className="footer__logo">
            <img
              className="img"
              src="./images/logo_kairos_w1000.png"
              alt="푸터로고"
            />
          </div>

          <div className="footer__content">
            <p>
              <b>카이로스 수학학원</b>
            </p>
            <address>
              
              {isH? 
              '강원 원주시 혁신로 35 4층 카이로스수학학원 혁신관':
              '강원 원주시 평원초교길 8 3층 카이로스수학학원 단계관'
              }


            </address>
            <p> {isH? 
              '0507-1357-4174':
              '033-744-7134'
              } | kairos@naver.com</p>
            <br />
            <p>
              Copyright 2023. KAIROS All pictures cannot be copied without
              permission.
            </p>
          </div>
        </div>
  
        {/*자동 움직이는 글자 */}
      <div className="marquee">
        <div>
          <span>Students are proud of KAIROS</span>
          <span>Students are proud of KAIROS</span>
      
        </div>
      </div>

      </footer>
    </>
  );

} //// FooterArea 컴포넌트 ////
