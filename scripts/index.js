import rain from "./rain.js";
const main = document.querySelector("#main");
function finishFn() {
    //   main.style.display = "block";
    main.style.transition = "opacity 2s ease-in-out";
    main.style.opacity = "1";
}
const canvas = document.querySelector("#rain");
rain(canvas, finishFn);
