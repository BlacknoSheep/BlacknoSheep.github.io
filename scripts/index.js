import rain from "./rain.js";
const main = document.querySelector("#main");
function finishFn() {
    //   main.style.display = "block";
    main.style.opacity = "1";
}
const canvas = document.querySelector("#rain");
rain(canvas, finishFn);
