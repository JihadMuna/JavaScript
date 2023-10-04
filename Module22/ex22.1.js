/**
 * 1- Create a webpage that has a form -V
 * 2- (asks the user for its:
 * -name, -V
 * -age, -V
 * -and email address) -V
 * 3- when the user clicks submit, V / 2
 * 4- open text window that writes all the information 
 * and asks for his confirmation. 
 * 5- If he clicks on the confirm button,
 *  tell him “congratulations you successfully sent this form” 
 * 6- if he clicks on change information,
 *  give him the possibility to change the information,
 * 7- and ask again for his confirmation.
 */
const formData = {};


const submitForm = document.querySelector('form');

submitForm.addEventListener("input", (e) => {
   
    if (e.target.name === "userName"){
        formData.name = e.target.value;
}
    if (e.target.name === "userAge"){
        formData.age = e.target.value;
}
    if (e.target.name === "userEmail"){
        formData.email = e.target.value;
}
})

// sad you are 22 and your email is sad@await.com

submitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // if all fields full
    if (formData.name && formData.age && formData.email) {
        // create a msg 
        const message = ` Your name is: ${formData.name}, your age is: ${formData.age} years, and your email is: ${formData.email} are you confirm ?`;
        // make confirm, window 

        const isConfirm = confirm(message);

        if (isConfirm){
            alert("congratulations! you successfully sent this form.");
        }
    }
submitForm.reset();
})


