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

const h5 = document.querySelector("h5");
const userInput = document.querySelector("#userInput");
const button = document.querySelector("button");
const errorMessage = document.querySelector("#errorMessage");


// Add an event listener to the submit button
button.addEventListener("click", () => {
   // Get the value from the text area
   const text = userInput.value;
          // Check if the text has at least 100 characters
          if (text.length < 100){
         errorMessage.textContent = "Please enter at least 100 characters.";
          } else {
            errorMessage.textContent = "";
          }
});
