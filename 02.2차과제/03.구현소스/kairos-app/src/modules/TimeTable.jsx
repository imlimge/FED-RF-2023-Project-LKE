// TimeTable - 시간표 모듈

import { timeData } from "../data/time";

import React from "react";
// CSS
import "../css/timetable.css";

export function TimeTable() {
  //시간표 라디오 체크 안 된 버튼 두번체크 하지 않도록 설정
  React.useEffect(() => {
    let radioBtn = document.getElementById("d_radio");
    radioBtn.checked = true;
  }, []);


  



  let selData = timeData;

  console.log("timeData", selData);
  let site = selData["혁신관"];
  let isH = 1;

  isH ? (site = selData["혁신관"]) : (site = selData["단계관"]);

  console.log("0,1에따른 지점", site);

  let rtime = site.일반시간표;
  let stime = site.여름방학;
  let wtime = site.겨울방학;

 // if 체크가 일반시간표면 classEle 는 rtime.초등부 / 여름방학이면 stime.초등부
 // 클릭 ? 값 onchane?


 // 일단 일반시간표로 설정
 let checkedR = rtime;


  let classEle = rtime.초등부;
  let classMid = rtime.중등부;
  let classHigh = rtime.고등부;

  console.log("일반시간표", rtime);


  console.log("초등부", classEle);
  console.log("중등부", classMid);
  console.log("고등부", classHigh);

  console.log(classMid[0].반);
  console.log(classMid[0].시간);
  console.log(classMid[0].요일);

  console.log(classMid[1].반);

  console.log(classMid[2].요일[0]);
  console.log(classMid[2].요일[1]);



  return (
    <>
      {/*  <!-- 시간표 --> */}
      <section id="time_table" className="time_table mp">
        <h2 className="tit">시간표</h2>

        <div className="time_table__text">
          <span>"STUDENTS ARE PROUD OF KAIROS"</span>
        </div>

        {/* <!-- 시간표 왼쪽 이미지 --> */}
        {/* <!-- <img src="./images/logo_letter_w4000.png" alt=""> --> */}

        {/* <!-- 시간표 테이블 박스--> */}
        <div className="time_table__box">
          {/* <!-- 시간표 라디오 --> */}
          <div className="time__table__radio">
            <label>
              <input id="d_radio" type="radio" name="time" value="일반시간표" />
              일반시간표
            </label>
            <label>
              <input type="radio" name="time" value="여름방학" />
              여름방학
            </label>
            <label>
              <input type="radio" name="time" value="겨울방학" />
              겨울방학
            </label>
          </div>

          {/* <!-- 시간표 테이블 --> */}
          <table className="time_table_content">
            <thead></thead>
            <tbody>
              {/* <!-- 초등부 --> */}
              <tr className="elementary">
                {/* colSpan="2" 만약 반값이 0이면 colSpan="2" 반값 있으면 공백 */}
                {/* rowSpan day 가 하나면 빈값 */}
                <td className="class-name" colSpan="2">
                  초등부
                </td>

                <td className="day">월수금</td>
                <td className="time">2:30~4:00</td>
              </tr>



              {/* <!-- 테이블 공백 --> */}
              <tr className="empty"></tr>





              {/* <!-- 중등부 --> */}
                {/* day의 갯수만큼 rowSpan 갯수 */}
              <tr className="middle">
                <td className="class-name" rowSpan="4">
                  중등부
                </td>


                <td className="class-part">{classMid[0].반}</td>
                <td className="day">{classMid[0].요일}</td>
                <td className="time">{classMid[0].시간}</td>
              </tr>
              <tr>
                <td className="class-part">{classMid[1].반}</td>
                <td className="day">{classMid[1].요일}</td>
                <td className="time">{classMid[1].시간}</td>
              </tr>
              <tr>
                
                <td className="class-part" rowSpan="2">
                  {classMid[2].반}
                </td>
                <td className="day up">{classMid[2].요일[0]}</td>
                <td className="time up">{classMid[2].시간[0]}</td>
              </tr>
              <tr>
                <td className="day down">{classMid[2].요일[1]}</td>
                <td className="time down">{classMid[2].시간[1]}</td>
              </tr>





              {/* <!-- 테이블 공백 --> */}
              <tr className="empty"></tr>




              {/* <!-- 고등부 --> */}

              <tr className="high">
                <td className="class-name" rowSpan="5">
                  고등부
                </td>
                <td className="class-part" rowSpan="2">
                  예비고1
                </td>

                <td className="day up">화목</td>
                <td className="time up">4:00~6:00</td>
              </tr>
              <tr>
                <td className="day down">토</td>
                <td className="time down">2:00~4:00</td>
              </tr>

              <tr>
                <td className="class-part" rowSpan="2">
                  예비고2
                </td>
                <td className="day up">월수금</td>
                <td className="time up">12:00~2:00</td>
              </tr>
              <tr>
                <td className="day down">월수금</td>
                <td className="time down">7:00~9:00</td>
              </tr>
              <tr>
                <td className="class-part">기하</td>
                <td className="day">토</td>
                <td className="time">(am)10:30~1:30</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
