// Notice - 공지사항 모듈

// CSS
import { Fragment } from "react";
import "../css/notice.css";




import { noticeData } from "../data/notice";


import $ from "jquery";
window.jQuery = $;
require("jquery-ui-dist/jquery-ui");
require("jquery-ui-touch-punch/jquery.ui.touch-punch");

/* 
    "idx":"게시물 순번"
    "nTit":"공지사항 타이틀",
    "nCont":"공지사항 내용",
  */

export function Notice({ sts }) {
    $(function () {
        $(".accordion").accordion();
    });


    let selData = noticeData;
    
    let site = selData['혁신관'] 
    let isH = sts;

    isH ? site = selData['혁신관'] : site = selData['단계관'];
    
    

 



    // 리스트만들기 함수
  const makeList = () => {
 
   let temp = [];

   site.map((v, i) => {
            temp[i] = (
              <Fragment key={i}>
              <h3 className="notice__title">{v.nTit}</h3>
              <div className="notice_content">
                <p>
                {v.nCont}
                </p>
              </div>
            </Fragment>
            );
        }); 

        //배열을 리턴
   return temp;


  }; ////for///

    return (
        <>
            {/* <!-- 공지사항 --> */}
            <section id="notice" className="notice mp">
                <h2 className="tit2">공지사항</h2>
                <div className="notice__box">
                    <div className="accordion">
                      {makeList()}
                      </div>
                </div>
            </section>
        </>
    );
}
