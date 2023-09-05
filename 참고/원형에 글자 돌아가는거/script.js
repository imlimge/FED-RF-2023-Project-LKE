let circleOne = document.querySelector(".circle-one p");
// Splitted word to letters and rotated them taking an arc from the center of the circular path.
circleOne.innerHTML = circleOne.innerText.split("").map(
  (char, i) => `<span style="transform: rotate(${i * 10}deg)">${char}</span>`
).join("");

let circleTwo = document.querySelector(".circle-two p");
circleTwo.innerHTML = circleTwo.innerText.split("").map(
  (char, i) => `<span style="transform: rotate(${i * 2.75}deg)">${char}</span>`
).join("");
