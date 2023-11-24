// Notice - 공지사항 모듈

// CSS
import "../css/notice.css"

import $ from 'jquery';
window.jQuery = $;
require('jquery-ui-dist/jquery-ui');
require('jquery-ui-touch-punch/jquery.ui.touch-punch');




export function Notice(){


  return(
      <>
    
  {/* <!-- 공지사항 --> */}
  <section id="notice" className="notice mp">
    <h2 className="tit tit2">공지사항</h2>
    <div className="notice__box">
  
       
<div className="accordion">
  <h3 className="notice__title">카이로스 중학교 3학년 시간표</h3>
  <div className="notice_content">
    <p>
    카이로스 중학교 3학년 시간표 <br/> <br/>
    중학교 3학년 시간표 (개학 방학 동일) 월수금 6:00 - 7:30 (차량운행x)<br/>
    </p>
  </div>
  <h3 className="notice__title">2023 추석일정 - 휴무</h3>
  <div className="notice_content">
    <p>
      휴강시간 <br/><br/>
    초등부: ㅇㄹㄴㅇㄹㄴㅇ <br/>
    중등부: ㅇㄹㄴㅇㄹㄴㅇ<br/>
    중등부: ㅇㄹㄴㅇㄹㄴㅇ<br/>
  
    </p>
  </div>

  <h3 className="notice__title">2023 7월 학원 일정</h3>
  <div className="notice_content">
    <p>
      휴강시간 <br/><br/>
      초등부: ㅇㄹㄴㅇㄹㄴㅇ <br/>
      중등부: ㅇㄹㄴㅇㄹㄴㅇ<br/>
      중등부: ㅇㄹㄴㅇㄹㄴㅇ<br/>
    
    </p>
    <ul>
      <li>List item one</li>
      <li>List item two</li>
      <li>List item three</li>
    </ul>
  </div>

  <h3 className="notice__title">2023 6월 방학 초등부 일정</h3>
  <div className="notice_content">
    <p>
    Cras dictum. Pellentesque habitant morbi tristique senectus et netus
    et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in
    faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia
    mauris vel est.
    </p>
    <p>
    Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus.
    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
    inceptos himenaeos.
    </p>
  </div>
  <h3 className="notice__title">2023 6월 방학 초등부 일정</h3>
  <div className="notice_content">
    <p>
    Cras dictum. Pellentesque habitant morbi tristique senectus et netus
    et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in
    faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia
    mauris vel est.
    </p>
    <p>
    Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus.
    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
    inceptos himenaeos.
    </p>
  </div>


      </div>


      
    </div>
  </section>
      </>

  );

} 