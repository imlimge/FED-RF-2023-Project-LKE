// 메인 페이지 컨텐츠 컴포넌트

import React from "react";

import { AddCont } from "../modules/AddCont";
import { Facility } from "../modules/Facility";
import { Contact } from "../modules/Contact";
import { TimeTable } from "../modules/TimeTable";
import { Notice } from "../modules/Notice";
import { SlideText } from "../modules/SlideText";
import { SlideTextBlack } from "../modules/SlideTextBlack";



export function MainCont({sts}) {


  React.useEffect(()=>{

    /*********************************************
     * 메인 첫 인트로 텍스트 부드럽게 등장
     *********************************************/

    // 출력대상
    const introOP = document.querySelector(".intro_op");
    // 글자요소 span들
    const sTxt = document.querySelectorAll(".intro_op span");

    let hcode = "";
    // 순번증가변수
    let seqNum = 0;

    // span들 추출
    for (let x of sTxt) {
        hcode += `<span style=" transition-delay: ${seqNum * 0.2}s;">${
            x.innerText
        }</span>`;
        seqNum++;
        // console.log(x)
    }

    introOP.innerHTML = hcode;

    setTimeout(() => {
        introOP.classList.add("on");
    }, 500);

    // console.log(hcode)


    /*********************************************
     * 메인 첫 인트로 텍스트 부드럽게 등장
     *********************************************/

    // 출력대상
    const btl = document.querySelector(".bigtext__logo");
    // 글자요소 span들
    const btlTxt = 'kairos';

    let xcode = "";
    // 순번증가변수
    let seqNum2 = 0;

    // span들 추출
    for (let x of btlTxt) {
        xcode += `<span style=" transition-delay: ${seqNum2 * 0.2}s;">${x}</span>`;
        seqNum2++;
        // console.log(x)
    }


    btl.innerHTML = xcode;

    setTimeout(() => {
        btl.classList.add("on");
    }, 500);

    // console.log(hcode)





/***************************************************************
 *
 *  기능 : 인트로 라운드 박스 원형에 작은 원형 회전 애니메이션
 *
 ***************************************************************/

// 대상: .tg
const tg = document.querySelector(".small-round");
const tg2 = document.querySelectorAll(".small-round.round2");

// 애니시간(ms)
let TM = 1000;

// 회전함수 최초호출
rotFn();

tg2.forEach((ele) => {
  rotFn2(ele);
  // console.log(ele);
});

function rotFn() {
  setTimeout(() => {
    tg.style.top = "0";
    tg.style.left = "50%";
    tg.style.transition = `top ${TM}ms ease-out, left ${TM}ms ease-in`;
  }, 0);
  setTimeout(() => {
    tg.style.top = "50%";
    tg.style.left = "100%";
    tg.style.transition = `top ${TM}ms ease-in, left ${TM}ms ease-out`;
  }, TM);
  setTimeout(() => {
    tg.style.top = "100%";
    tg.style.left = "150%";
    tg.style.transition = `top ${TM}ms ease-out, left ${TM}ms ease-in`;
  }, TM * 2);
  setTimeout(() => {
    tg.style.top = "50%";
    tg.style.left = "200%";
    tg.style.transition = `top ${TM}ms ease-in, left ${TM}ms ease-out`;
  }, TM * 3);
  setTimeout(() => {
    tg.style.top = "0%";
    tg.style.left = "150%";
    tg.style.transition = `top ${TM}ms ease-out, left ${TM}ms ease-in`;
  }, TM * 4);
  setTimeout(() => {
    tg.style.top = "0%";
    tg.style.left = "150%";
    tg.style.transition = `top ${TM}ms ease-out, left ${TM}ms ease-in`;
  }, TM * 4);
  setTimeout(() => {
    tg.style.top = "50%";
    tg.style.left = "100%";
    tg.style.transition = `top ${TM}ms ease-in, left ${TM}ms ease-out`;
  }, TM * 5);

  setTimeout(() => {
    tg.style.top = "100%";
    tg.style.left = "50%";
    tg.style.transition = `top ${TM}ms ease-out, left ${TM}ms ease-in`;
  }, TM * 6);

  setTimeout(() => {
    tg.style.top = "50%";
    tg.style.left = "0%";
    tg.style.transition = `top ${TM}ms ease-in, left ${TM}ms ease-out`;
  }, TM * 7);

  setTimeout(rotFn, TM * 8);
} //////rotFn 함수/////

function rotFn2(ele) {
  setTimeout(() => {
    ele.style.top = "0";
    ele.style.left = "50%";
    ele.style.transition = `top ${TM}ms ease-out, left ${TM}ms ease-in`;
  }, 0);
  setTimeout(() => {
    ele.style.top = "50%";
    ele.style.left = "100%";
    ele.style.transition = `top ${TM}ms ease-in, left ${TM}ms ease-out`;
  }, TM);
  setTimeout(() => {
    ele.style.top = "100%";
    ele.style.left = "50%";
    ele.style.transition = `top ${TM}ms ease-out, left ${TM}ms ease-in`;
  }, TM * 2);

  setTimeout(() => {
    ele.style.top = "50%";
    ele.style.left = "0%";
    ele.style.transition = `top ${TM}ms ease-in, left ${TM}ms ease-out`;
  }, TM * 3);

  setTimeout(() => rotFn2(ele), TM * 4);
} ////// rotFn2 함수 ///////
















  },[]);



  





    return (
        <>
            {/* <!-- 학원소개 --> */}
            <section id="intro" className="intro">
    
                <div className="intro_op show-txt">
                    <span>Students</span>
                    <span>are</span>
                    <span>proud</span>
                    <span>of</span>
                    <span>KAIROS</span>
                </div>
                <div className="intro__content__warp">
                    <div className="intro__content">
                        <div className="intro__item intro1 "></div>
                        <div className="intro__item intro2 m-intro">
                            <h4>
                                초·중·고
                                <br />
                                입시전문
                            </h4>
                            <h3>
                                수학 학원
                                <br />
                                카이로스
                            </h3>
                        </div>
                        <div className="intro__item intro3 m-intro">
                            <h3>
                                입시전문
                                <br />
                                13년
                                <br />
                                강사진
                            </h3>
                            <article>
                                서울 광진구 중곡동 대원외고 앞 13년 동안
                                일반고(대원고, 대원여고, 동대부여고, 건대부고
                                혜원여고 등 ), 특목고, 자사고(대원외고,
                                한영외고, 서울외고, 동성고 등 ) 등을 대상으로
                                많은 고등학교의 학생들에게 수업을 진행했습니다.
                            </article>
                        </div>
                        <div className="intro__item intro4 m-intro ">
                            <div className="about">
                                <h3>
                                    실력에서
                                    <br />
                                    멘탈까지
                                </h3>

                                <div className="round__box">
                                    <div className="round__wrap">
                                        <div className="big-round">
                                            <div className="small-round"></div>
                                        </div>

                                        <div className="big-round bx2"></div>
                                    </div>
                                    {/* <!-- round__wrap --> */}
                                    <article>
                                        수학 전공 선생님으로 풍부한 경험
                                        <br />
                                        심리학 전공 선생님으로 명확한 코칭
                                    </article>
                                </div>
                                {/* <!-- round__box --> */}
                            </div>
                        </div>
                        {/*  <!-- intro4 --> */}
                    </div>
                    {/* <!-- intro__content --> */}
                </div>
                {/* <!-- intro__content__warp --> */}
            </section>

            {/* 슬라이드 꾸밈요소 모듈 */}
            <SlideText />

            {/* <!-- 강사소개 part1 --> */}
            <div id="about" className="about__teacher part1 on mp">
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
                    <div className="about__content part1">
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

            {/* 슬라이드 꾸밈요소 모듈 */}
            <SlideText />

            {/* (모듈) - 광고파트 (개별 구성 - 협의중) */}
            <AddCont />

            {/* 슬라이드 꾸밈요소 모듈 */}
            <SlideText />

            {/* (모듈) - 학원시설 (공모) */}
            <Facility sts={sts} />

            {/* <!-- 반소개 --> */}
            <section id="about__class" className="mp">
                <div className="about__class">
                    <div className="about__class__box class1">
                        <h2>초등부</h2>
                        <article>
                            아이들의 속도와 능력에 따라 <br />
                            개별 맞춤 수업을 합니다
                        </article>


                        <hr></hr>
                        <h3>초등반</h3>

                        <div className="class__name__box">
                            <div className="class__name">
                                <h4>중학교 대비 반</h4>
                                <p>
                                    초등학교 5,6학년 <br />
                                    아이들의 속도와 능력에 따라 개별 맞춤 수업을
                                    합니다
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="about__class__box  class2">
                        <h2>중등부</h2>
                        <article>
                            중1~고1 1학기 과정(수학 상) 까지의 과정을 개인별
                            능력에 따라 지도합니다. <br />
                            <br />
                            중등과정은 고등과정까지 연계되므로 고등 과정과
                            연계된 지도를 합니다.
                        </article>

                        <hr></hr>
                        <h3>중등반</h3>
                        <div className="class__name__box">
                            <div className="class__name">
                                <h4>기초반</h4>
                                <p>
                                    수학공부를 이제 <br />
                                    막 시작 하려고 하는 <br />
                                    친구들을 위한 반
                                </p>
                            </div>
                            <div className="class__name">
                                <h4>이유 있는 선행반</h4>
                                <p>
                                    이해도에 따라서 <br />
                                    고1 심화 과정까지 선행 (학생의 성실성과
                                    이해도를 종합적으로판단하여 부모님과 상담 후
                                    진행을 합니다)
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="about__class__box  class3">
                        <h2>고등부</h2>
                        <article>
                            각 학교의 진도에 맞게 과정 내에서 내신 유형문제부터
                            수능 기출 문제까지 수업을 진행 합니다.
                            <br />
                            <br />각 학교의 진도에 맞게 과정 내에서 내신
                            유형문제부터 수능 기출 문제까지 수업을 진행 합니다.
                        </article>

                        <hr></hr>

                        <h3>고등반</h3>

                        <div className="class__name__box">
                            <div className="class__name">
                                <h4>1학년 2학년</h4>
                                <p>
                                    학교 진도에 맞춰
                                    <br />
                                    내신관리 위주로 <br />
                                    수업을 진행합니다.
                                </p>
                            </div>

                            <div className="class__name">
                                <h4>3학년</h4>
                                <p>
                                    수능준비반 및 내신관리반으로 나눠서 수업을
                                    진행합니다.
                                </p>
                            </div>
                            <div className="class__name">
                                <h4>재수반</h4>
                                <p>
                                    인강을 병행하며 워크북 질의 응답 및 부족한
                                    개념을 보충설명 하며 관리 위주로 진행합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* (모듈) - 시간표 (공모) */}
            <TimeTable sts={sts} />
            {/*   <!-- 큰 로고 --> */}
            {/* <div className="image__logo">
                <img
                    className="img"
                    src="./images/logo_kairos_w2300.png"
                    alt=""
                />
            </div> */}


            <div className="bigtext__logo">
                <span>KAIROS</span>
            </div>

           

            {/* (모듈) - 공지사항 (공모) */}
            <Notice sts={sts} />

            
            {/* (모듈) - 컨택트 (공모) */}
            <Contact sts={sts} />
       
        </>
    );
}
