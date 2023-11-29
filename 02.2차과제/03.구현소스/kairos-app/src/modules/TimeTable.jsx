// TimeTable - 시간표 모듈

import { timeData } from "../data/time";

import React, { useRef, useState} from "react";
// CSS
import "../css/time_table.css";

import $ from "jquery";
window.jQuery = $;
require("jquery-ui-dist/jquery-ui");
require("jquery-ui-touch-punch/jquery.ui.touch-punch");



export function TimeTable({sts}) {
  //시간표 라디오 체크 안 된 버튼 두번체크 하지 않도록 설정
  React.useEffect(() => {
    let radioBtn = document.getElementById("d_radio");
    radioBtn.checked = true;
  }, []);








  let selData = timeData;
  //   console.log("timeData", selData);


 let site;

  
    let isH = sts;
    isH ? (site = selData["혁신관"]) : (site = selData["단계관"]);
   
   // isH ? (site = selData["혁신관"]) : (site = selData["단계관"]);
   
   // console.log("0,1에따른 지점", site);
   
   
  console.log('isH는?????',isH);


  
  let rtime = site.일반시간표;
  let stime = site.여름방학;
  let wtime = site.겨울방학;



  // if 체크가 일반시간표면 classEle 는 rtime.초등부 / 여름방학이면 stime.초등부
  // 클릭 ? 값 onchane?

  // 일단 일반시간표로 설정
  //  ( 여기에 값을 라디오 체크값에 따라stime / wtime 로 변경)
  const [time, setTime] = useState(rtime);

 

  const isSite = React.useMemo(()=>{

    return{
    
     }

    },[isH]); 
  


  const chgRdo = (e) => {
  
    let txt = $(e.target).val();
    console.log(e.target, txt);
   
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
            <thead></thead>
            <tbody>
          
          

              {Object.keys(time).map((tmv) => 
              <>
                <tr className="empty"></tr>


                <tr className="class-box">
                  
                  <td
                    className="class-name"
                    colSpan={tmv.반 == " " ? "2" : "1"}
                    rowSpan=""
                  >
                
                    {/* rowSpan 반복되는 갯수 or day의 갯수 */}
                    {tmv}
                  </td>
                </tr>
                {
                  time[tmv].map((v, i, arr) => (
                    <tr key={i}>
                      {
                        // 시간표 데이터가 배열이 아니면 반을 만들어라!
                        (!Array.isArray(v.시간) ||
                          (Array.isArray(v.시간) && v.시간[0])) && (
                          <td
                            className="class-part"
                       /*      rowSpan={
                              arr[i + 1]
                                ? Array.isArray(arr[i + 1].시간)
                                  ? 2
                                  : 1
                                : 1
                            } */
                          >
                            {v.반}
                          </td>
                        )
                      }
                      <td className="day">{v.요일}</td>
                      <td className="time">{v.시간}</td>
                    </tr>
                  ))
                }
                </>
              )}
            
            
           
          
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
