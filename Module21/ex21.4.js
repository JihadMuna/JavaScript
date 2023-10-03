// 1.Create a webpage that has an image of a lightbulb.
// 2. When the user clicks the lightbulb,
//3. it should be turned
//4. on, clicking it again will turn it off.

const p = document.querySelector("p");

const lightbulb = document.querySelector("#lightbulb");
let isLightOn = false;

// Add a click event listener to the light bulb
lightbulb.addEventListener("click", () =>{
if (isLightOn) {
    // If the light is currently on, turn it off
lightbulb.src = "pic_bulboff.gif";
}else {
    // If the light is currently off, turn it on
    lightbulb.src = "pic_bulbon.gif";
}
isLightOn = !isLightOn;

});