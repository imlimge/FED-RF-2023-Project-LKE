//모듈 불러오기////////////
//Dom함수 모듈
import dFn from "./dom.js";





/*------------------- 인트로 -  라운드 박스 ------------------ */
// 대상: .tg
const tg = dFn.qs(".small-round");

// 애니시간(ms)
let TM = 700;

// 회전함수 최초호출

rotFn();

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
