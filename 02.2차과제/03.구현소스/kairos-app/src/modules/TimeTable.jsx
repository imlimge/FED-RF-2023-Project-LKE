// TimeTable - 시간표 모듈

// CSS
import "../css/timetable.css"

export function TimeTable(){


  return(
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

                <label><input type="radio" name="time" value="일반시간표" checked="checked" /> 일반시간표</label>
                <label><input type="radio" name="time" value="여름방학" /> 여름방학</label>
                <label><input type="radio" name="time" value="겨울방학" /> 겨울방학</label>
          </div>

          {/* <!-- 시간표 테이블 --> */}
    <table className="time_table_content" >
      <thead></thead>
      <tbody>
          {/* <!-- 초등부 --> */}
          <tr className="elementary">
            <td className="class-name" colspan="2">초등부</td>
          
            <td className="day">월수금</td>
            <td className="time">2:30~4:00</td>
          </tr>
     
          {/* <!-- 테이블 공백 --> */}
          <tr className="empty"></tr>

      {/* <!-- 중등부 --> */}
 
          <tr className="middle">
          
              <td className="class-name" rowSpan="4">중등부</td>
              <td className="class-part">1반</td>
              <td className="day">월수금</td>
              <td className="time">4:00~5:30</td>
            </tr>
            <tr>
              <td className="class-part">2반</td>
              <td className="day">월수금</td>
              <td className="time">5:30~7:00</td>
            </tr>
            <tr>
              <td className="class-part" rowSpan="2">3반</td>
              <td className="day up">화목</td>
              <td className="time up">2:00~3:30</td>
            </tr>
            <tr>
              
              <td className="day down">월</td>
              <td className="time down">4:00~5:30</td>
            </tr>


       {/* <!-- 테이블 공백 --> */}
            <tr className="empty"></tr>

          {/* <!-- 고등부 --> */}
      
          <tr className="high">
              <td className="class-name" rowSpan="5">고등부</td>
              <td className="class-part" rowSpan="2">예비고1</td>
              
              <td className="day up">화목</td>
              <td className="time up">4:00~6:00</td>
            </tr>
            <tr>
              <td className="day down">토</td>
              <td className="time down">2:00~4:00</td>
            </tr>

            <tr>
              <td className="class-part" rowSpan="2">예비고2</td>
              <td className="day up">월수금</td>
              <td className="time up">12:00~2:00</td>
            </tr>
            <tr>
              <td className="day down">월수금</td>
              <td className="time down">7:00~9:00</td>
            </tr>
            <tr>
              <td className="class-part" >기하</td>
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