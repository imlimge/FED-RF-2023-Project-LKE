// Contact - 컨택트 모듈

// CSS
import "../css/contact.css"


export function Contact() {
  return (
    <>
      {/* <!-- 컨택트 --> */}
      <section id="contact" className="contact mp">
        <h2 className="tit">컨택트</h2>

        <div className="contact__box">
          <div className="contact__wrap wrap1">
            <div className="contact__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1121.7457918428909!2d127.97776334915255!3d37.32412802235737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sko!2skr!4v1700103825073!5m2!1sko!2skr"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="contact__wrap wrap2">
            <div className="contact__time">
              <h4 className="contact__box_title">운영시간</h4>

              <span>월 ~ 금</span>
              <p>15:00 - 23:00</p>
              <span>토</span>
              <p>13:00 - 18:00</p>
              <span>일</span>
              <p>정기휴무 (매주 일요일)</p>
            </div>
            <div className="contact__wrap wrap3">
              <div className="contact__address">
                <h4 className="contact__box_title">오시는 길</h4>
                <p>
                  <span>혁신관</span>
                  강원 원주시 혁신로 35 4층 카이로스수학학원 혁신관
                </p>
              </div>
              <div className="contact__number">
                <h4 className="contact__box_title">전화번호</h4>
                <p> 0507-1357-4174</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
