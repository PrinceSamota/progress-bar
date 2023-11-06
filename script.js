const progress = document.querySelector(".progress-done");
const input = document.querySelector(".input");

let finalValue = 0;

function changewidth() {
  progress.style.width = `${finalValue * 1}%`;
  progress.innerText = `${Math.ceil(finalValue * 1)}%`;
}

input.addEventListener("keyup", function () {
  finalValue = parseInt(input.value, 10);
  changewidth();
  console.log("finalValue", finalValue);
});
