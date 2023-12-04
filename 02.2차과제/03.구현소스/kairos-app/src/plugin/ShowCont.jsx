// AddCont - 광고파트 모듈

// CSS
import "./css/show_cont.css";

import React, { useEffect } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
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
      
    const showCont = $(".show_cont");
    const cBtn = $(".cbtn");
        cBtn.click(() => {
            showCont.hide();
        });

        showCont.click(() => {
            showCont.hide();
        });








    });


    return (
        <>
            {/* <!-- 중간광고 --> */}

            <div className="show_cont">
                <FontAwesomeIcon
                    className="cbtn"
                    icon={faXmark} />
                <div className="show_cont_box">
                <img src="" alt="" />
                <h2>제목들어감</h2>
                </div>    
            </div>
        </>
    );
}
