/**1- Create a webpage that has part of the application
process for a job. -V
2- This page should have:
a text area -V
field -V
and a button. -V
3- Your user must enter at least 100
characters before clicking the button.
 If he didn’t, please
give him the appropriate message. (using alert is
forbidden) **/


const minCharacters = 100;

const section = document.querySelector("section");
const h5 = document.querySelector("h5");
section.append(h5);
const input = document.querySelector("input");
section.append(input);
const button = document.querySelector("button");
section.append(button);

input.addEventListener("click", () => {
    while (input>=100) {
        
   
})