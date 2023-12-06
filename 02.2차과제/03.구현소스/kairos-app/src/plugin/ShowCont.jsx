// AddCont - 광고파트 모듈

// CSS
import "./css/show_cont.css";

import React, { useEffect } from "react";
import { faXmark,faChevronRight,faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import $ from "jquery";
window.jQuery = $;
require("jquery-ui-dist/jquery-ui");
require("jquery-ui-touch-punch/jquery.ui.touch-punch");

export function ShowCont() {
    /*********************************************
     * 광고파트 버튼 누르면 보이고 닫기
     *********************************************/

  

    useEffect(() => {
    







    });


    return (
        <>
            {/* <!-- 중간광고 --> */}

            <div className="show_cont">
          
                <div className="show_cont_box">      
              
               <FontAwesomeIcon
                    className="cbtn"
                    icon={faXmark} />
                <h2>학원</h2>
                <p>사진을 누르면 홈으로 돌아갑니다</p>
                
                <FontAwesomeIcon icon={faChevronLeft} className="nbtn left" />
                <img src="" alt="" />
                <FontAwesomeIcon icon={faChevronRight} className="nbtn right" />
                </div>    
            </div>
        </>
    );
}
