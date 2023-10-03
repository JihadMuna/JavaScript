
// Clicking the ‘+’ button should increase the text’s font-size
// and clicking the ‘-‘ should decrease it.
// Limit the font size to be between 6px and 100px. 
const MAX_SIZE = 100;
const MIN_SIZE = 6;

const h1 = document.querySelector("h1");

const button1 = document.querySelector("#btn1");

const button2 = document.querySelector("#btn2");

button1.addEventListener("click", () => {
    let currentSize = Number.parseInt(getComputedStyle(h1).fontSize);
    let newSize = Math.min(MAX_SIZE, currentSize - 10);
    h1.style.fontSize = newSize + "px";
     });

button2.addEventListener("click", () => {
    let currentSize = Number.parseInt(getComputedStyle(h1).fontSize);
    let newSize = Math.max(MIN_SIZE, currentSize + 10);
    h1.style.fontSize = newSize + "px";
});

