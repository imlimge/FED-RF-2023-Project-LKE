// AboutTeacher -  강사소개 모듈

// import { SwiperApp } from "../plugin/SwiperVertical";

// CSS
import "../css/about_teacher.css"


export function AboutTeacher(){

    
    
return(

 <>
     
  {/* <!-- 강사소개 part1 --> */}
  <div id="about" className="about__teacher part1 on">
      {/* <!-- 플렉스박스 --> */}
      <div className="about__box">
          {/* <!-- 원형 --> */}
          <div className="about__round">
              <div className="round">
                  <div className="small-round round2"></div>
                  <div className="round__content">
                      <h4>수학</h4>
                      <span>수학전공</span>
                  </div>
              </div>
          </div>
          {/* <!-- 내용 --> */}
          <div className="about__content part1 mp">
              <div className="about__title">
                  <h3>수학 전공</h3>
                  <h4>원장 임현준</h4>
              </div>
              <div className="about__history">
                  <span>건국대학교(본교) 수학과 전공</span>
                  <div className="line"></div>
                  <span>
                      광진구 중곡동 대원외고 앞 학원에서 13년 강의
                  </span>
                  <div className="line"></div>
                  <span>
                      특목고, 자사고(대원외고, 한영외고, 서울외고,
                      동성고 등), 일반고(대원고, 대원여고, 동대부여고,
                      건대부고 혜원여고 등) 대상으로 수업 진행
                  </span>
                  <div className="line"></div>
                  <span>
                      구) 온스터디 보습학원 구) 더상승 플러스 대표강사
                      8년 현) 카이로스 수학학원 원장
                  </span>
              </div>
          </div>
      </div>
      {/* <!-- 플렉스박스 --> */}
  </div>
  {/* <!-- 강사소개 part1 --> */}

  <div className="about__teacher part2 on mp">
      {/* <!-- 플렉스박스 --> */}
      <div className="about__box part2">
          {/*   <!-- 내용 --> */}
          <div className="about__content part2">
              <div className="about__title part2">
                  <h3>심리 전공</h3>
                  <h4>원장 최건</h4>
              </div>
              <div className="about__history part2">
                  <span>건국대학교(본교) 수학과 전공</span>
                  <div className="line"></div>
                  <span>
                      광진구 중곡동 대원외고 앞 학원에서 13년 강의
                  </span>
                  <div className="line"></div>
                  <span>
                      특목고, 자사고(대원외고, 한영외고, 서울외고,
                      동성고 등), 일반고(대원고, 대원여고, 동대부여고,
                      건대부고 혜원여고 등) 대상으로 수업 진행
                  </span>
                  <div className="line"></div>
                  <span>
                      구) 온스터디 보습학원 구) 더상승 플러스 대표강사
                      8년 현) 카이로스 수학학원 원장
                  </span>
              </div>
          </div>

          {/*   <!-- 원형 --> */}
          <div className="about__round part2">
              <div className="round part2">
                  <div className="small-round round2"></div>
                  <div className="round__content">
                      <h4>심리</h4>
                      <span>심리전공</span>
                  </div>
              </div>
          </div>
          {/* <!-- 플렉스박스 --> */}
      </div>
      {/* <!-- 강사소개 part2 --> */}
  </div>


    
     
     </>
);

}
