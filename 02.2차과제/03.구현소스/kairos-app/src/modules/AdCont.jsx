// AddCont - 광고파트 모듈

// CSS
import "../css/adcont.css"



import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import $ from "jquery";
window.jQuery = $;
require("jquery-ui-dist/jquery-ui");
require("jquery-ui-touch-punch/jquery.ui.touch-punch");


export function AdCont(){



  
  return(
    <>
  

{/* <!-- 중간광고 --> */}

<section id="cont" className="mp">
                <div className="cont">
                    <div className="cont__box">
                        <div className="cont__content">
                            <div className="cont__title">
                                <span>
                                    202?년도 서울대 ‘인문 사회’
                                    <br />
                                </span>
                                <span>
                                    정시합격자 <br />
                                </span>
                                <span>
                                    44% 가 이과생!! <br />
                                </span>
                                <span>
                                    이제는 수학이 정답입니다. <br />
                                </span>
                                <span>
                                    (임시내용) <br />
                                </span>
                                <span>모듈 학원마다 내용 다르게</span>

                                {/* <div className="cont__btn">
                                    <button>보러가기</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    {/* <AdCont /> */}
                </div>
            </section>


    </>

);

} 