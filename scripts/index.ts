import rain from "./rain.js";

const main = document.querySelector("#main") as HTMLElement;
function finishFn() {
  //   main.style.display = "block";
  main.style.transition = "opacity 2s ease-in-out";
  main.style.opacity = "1";
}

const canvas = document.querySelector("#rain") as HTMLCanvasElement;
rain(canvas, finishFn);
