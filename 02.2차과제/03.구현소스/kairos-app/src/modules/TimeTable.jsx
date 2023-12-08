// TimeTable - 시간표 모듈

import { timeData } from "../data/time";

import React, { Fragment, useEffect, useRef, useState } from "react";
// CSS
import "../css/time_table.css";

import $ from "jquery";
window.jQuery = $;
require("jquery-ui-dist/jquery-ui");
require("jquery-ui-touch-punch/jquery.ui.touch-punch");

export function TimeTable({ sts }) {
  //시간표 라디오 체크 안 된 버튼 두번체크 하지 않도록 설정
  React.useEffect(() => {
    let radioBtn = document.getElementById("d_radio");
    radioBtn.checked = true;
  }, []);




  let selData = timeData;

  let site;

  
  let isH = sts;
  // console.log("isH는?????", isH);


  isH ? (site = selData["혁신관"]) : (site = selData["단계관"]);



  let rtime = site.일반시간표;
  let stime = site.여름방학;
  let wtime = site.겨울방학;

  useEffect(()=>{

    setTime(rtime);

    let radioBtn = document.getElementById("d_radio");
    radioBtn.checked = true;
    

  },[isH]);



  //  ( 라디오 체크값에 따라stime / wtime 로 변경)
  const [time, setTime] = useState(rtime);


  const chgRdo = (e) => {
    let txt = $(e.target).val();
    // console.log(e.target, txt);

    if (txt === "여름방학") setTime(stime);
    if (txt === "일반시간표") setTime(rtime);
    if (txt === "겨울방학") setTime(wtime);
  };






  return (
    <>
      {/*  <!-- 시간표 --> */}
      <section id="time_table" className="time_table mp">
        <h2 className="tit">시간표</h2>

        <div className="time_table__text">
          <span>"STUDENTS ARE PROUD OF KAIROS"</span>
        </div>

        {/* <!-- 시간표 테이블 박스--> */}
        <div className="time_table__box">
          {/* <!-- 시간표 라디오 --> */}
          <div className="time__table__radio">
            <label>
              <input
                id="d_radio"
                type="radio"
                name="time"
                value="일반시간표"
                onChange={chgRdo}
              />
              일반시간표
            </label>
            <label>
              <input
                type="radio"
                name="time"
                value="여름방학"
                onChange={chgRdo}
              />
              여름방학
            </label>
            <label>
              <input
                type="radio"
                name="time"
                value="겨울방학"
                onChange={chgRdo}
              />
              겨울방학
            </label>
          </div>

          {/* <!-- 시간표 테이블 --> */}
          <table className="time_table_content">
            <tbody>
              {Object.keys(time).map((tmv,i) => (
                <Fragment key={i}>
                  <tr className="empty"></tr>

                  <tr className="class-box">
                    <td className="class-name" colSpan="2" rowSpan="1">
                      {tmv}
                    </td>
                  </tr>

                  {time[tmv].map((v, i, arr) => (
                    <tr key={i}>
                      {(!Array.isArray(v.요일) && (
                        <td className="class-part">{v.반}</td>
                      )) ||
                        (Array.isArray(v.요일) && (
                          <td className="class-part" colSpan={1}>
                            {v.반}
                          </td>
                        ))}

                      {
                        <>
                          <td className="day">
                            {v.요일.split("^").map((v,i) => (
                              <p key={i}>{v}</p>
                            ))}
                          </td>
                          <td className="time">
                            {v.시간.split("^").map((v,i) => (
                              <p key={i}>{v}</p>
                            ))}
                          </td>
                        </>
                      }
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
