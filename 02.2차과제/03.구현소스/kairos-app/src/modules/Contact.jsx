// Contact - 컨택트 모듈

// CSS
import "../css/contact.css"

import { contactData } from "../data/contact";


export function Contact({ sts }) {
 
 let selData = contactData;
 
//  console.log(selData['혁신관'])
 

  let site;
  let isH = sts;
  isH ? site = selData['혁신관'] : site = selData['단계관'];
  



  return (


    <>
      <section id="contact" className="contact mp">
        <h2 className="tit">컨택트</h2>

        <div className="contact__box">
          <div className="contact__wrap wrap1">
            <div className="contact__map">
              <iframe
                src={site.mapsrc}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="contact__wrap wrap2">
            <div className="contact__time">
              <h4 className="contact__box_title">운영시간</h4>

              <span>월 ~ 금</span>
              <p>{site.운영시간['월~금']}</p>
              <span>토</span>
              <p>{site.운영시간['토']}</p>
              <span>일</span>
              <p>{site.운영시간['일']}</p>
            </div>
            <div className="contact__wrap wrap3">
              <div className="contact__address">
                <h4 className="contact__box_title">오시는 길</h4>
                <p>
                  <span>{isH?'혁신관':'단계관'}</span>
                 {site["오시는 길"]}
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
