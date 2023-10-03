/**
 * 1. Create a webpage with one field and one button. -V
 * 2. The user can choose the number of smileys,
 * and I should make them appear on the screen
 * when the user click the button.
 * 
 * 2.1 get the value from the input. -V
 * 2.2 add the container to html - this will host the elements. -V
 * 2.3 get the container in js. -V
 * 2.4 attach event listener to the submit btn. -V
 * 2.5.1 write the function inside the event listener 
 * that takes the number from input 
 * 2.5.2 and create the same amount of elements.
 * -create img element. -V
 * -populate img to the
 */

const input = document.querySelector("input");
const smileyContainer = document.querySelector("#smileyContainer");
const button = document.querySelector("button");

let inputNum;

input.addEventListener("input",(event) =>{
inputNum = parseInt(event.target.value);
});

button.addEventListener("click", (event) => {
    smileyContainer.innerHTML = "";
    while (inputNum>0){
        //create element
        const img = document.createElement("img");
        img.src = "/smiley.png";
        smileyContainer.append(img);
        inputNum -= 1;
    }
});
