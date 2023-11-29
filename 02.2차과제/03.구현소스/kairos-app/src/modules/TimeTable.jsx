// TimeTable - 시간표 모듈

import { timeData } from "../data/time";

import React, { version } from "react";
// CSS
import "../css/time_table.css";


import $ from "jquery";
window.jQuery = $;
require("jquery-ui-dist/jquery-ui");
require("jquery-ui-touch-punch/jquery.ui.touch-punch");





export function TimeTable() {
  //시간표 라디오 체크 안 된 버튼 두번체크 하지 않도록 설정
  React.useEffect(() => {
    let radioBtn = document.getElementById("d_radio");
    radioBtn.checked = true;
  }, []);


  let selData = timeData;
//   console.log("timeData", selData);


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
//  ( 여기에 값을 라디오 체크값에 따라stime / wtime 로 변경)
 let time = rtime;

 
  // 일반시간표
  let classEle = time.초등부;
  let classMid = time.중등부;
  let classHigh = time.고등부;


  // 1-혁신 / 0-단계
  console.log("변동시간표 time", time);


 // 1-혁신 / 0-단계에 따라서
  console.log("초등부", classEle);
  console.log("중등부", classMid);
  console.log("고등부", classHigh);


  console.log('중딩반 0/',classMid[0].반);




  // 테이블 라디오 버튼 값 불러오기
    $('input').click((e)=>{
      
      console.log(e.currentTarget)
      
      let radioV = e.currentTarget
      
      
    })




    // 리스트만들기 함수
    const makeList = () => {
 
        let temp = [];
     

        classMid.map((v, i) => {
            temp[i] = (

                <>
                <td className="class-part">{v.반}</td>
                <td className="day">{v.요일}</td>
                <td className="time">{v.시간}</td>
                 </> 
               
                 );

             }); 
     
             //배열을 리턴
        return temp;
     
     
       }; ////for///

 



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
                <td className="class-name" 
                colSpan={classEle[0].반 == " "? "2":'1'}  
                rowSpan="">
                  초등부
                </td>

                {/* 반값이 0이면 class-part 없음 */}
                
                <td className="day">{classEle[0].요일}</td>
                <td className="time">{classEle[0].시간}</td>


              </tr>



              {/* <!-- 테이블 공백 --> */}
              <tr className="empty"></tr>





              {/* <!-- 중등부 --> */}
                {/*class-name 아래 day의 갯수만큼 rowSpan 갯수 */}
                {/*class-part 아래 day의 갯수 1이면 없음 2이상이면 rowSpan="데이 갯수"
                처음 데이/타임에 클래스 up / 마지막 데이/타임에 클래스 down */}
              
          
              <tr className="middle">
                <td className="class-name" 
                colSpan={classMid[0].반 == " "? "2":'1'} 
                rowSpan="4">  
                   {/* rowSpan 반복되는 갯수 or day의 갯수 */}

                  중등부
                </td>

                {/* {makeList()}  */}
        
 
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

                <td className="class-part" rowSpan="2">{classMid[0].반}</td>
                <td className="day up">{classMid[0].요일[0]}</td>
                <td className="time up">{classMid[0].시간[0]}</td>
              </tr>

              <tr>

                <td className="day down">{classMid[0].요일[1]}</td>
                <td className="time down">{classMid[0].시간[1]}</td> 
                </tr>

              <tr> 


              </tr>
              



              {/* <!-- 테이블 공백 --> */}
              <tr className="empty"></tr>




              {/* <!-- 고등부 --> */}

              <tr className="high">

                <td className="class-name" 
                colSpan={classHigh[0].반 == " "? "2" :'1'} 
                rowSpan="5">
                  고등부
                </td>
                
                <td className="class-part" rowSpan="2">
                {classHigh[0].반}
                </td>

                <td className="day up"> {classHigh[0].요일[0]}</td>
                <td className="time up">{classHigh[0].시간[0]}</td>
              </tr>

              <tr>
                <td className="day down">{classHigh[0].요일[1]}</td>
                <td className="time down">{classHigh[0].시간[1]}</td>
              </tr>

              <tr>
                <td className="class-part" rowSpan="2">
                {classHigh[1].반}
                </td>
                <td className="day up">{classHigh[1].요일[0]}</td>
                <td className="time up">{classHigh[1].시간[0]}</td>
              </tr>
              <tr>
                <td className="day down">{classHigh[1].요일[1]}</td>
                <td className="time down">{classHigh[1].시간[1]}</td>
              </tr>
              <tr>
                <td className="class-part"> {classHigh[0].반}</td>
                <td className="day">{classHigh[0].요일}</td>
                <td className="time">{classHigh[0].시간}</td>
              </tr>


            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
