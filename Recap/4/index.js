// Get references to the form and input elements
const userForm = document.getElementById("userForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
// check username validation
    if (usernameInput.value.length < 3) {
        showError(usernameInput, "Username must be at least 3 characters long.");
        isValid = false;

    } else {
        clearError(usernameInput);
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   
    if (!emailRegex.test(emailInput.value)) {
        console.log(emailRegex.test(emailInput.value));
        showError(emailInput, "Please enter a valid email.");
        isValid = false;
    } else {
        clearError(emailInput);
    }

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(passwordInput.value)) {
        showError(passwordInput, "Password must be at least 8 characters long, containing lowercase, uppercase letters, numbers, and a special character.");
        isValid = false;
    } else {
        clearError(passwordInput);
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        showError(confirmPasswordInput, "Passwords do not match.");
        isValid = false;
    } else {
        clearError(confirmPasswordInput);
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
});

function showError(input, message) {
    const errorElement = document.getElementById(input.id + "Error");
    errorElement.textContent = message;
    input.classList.add("error");
}

function clearError(input) {
    const errorElement = document.getElementById(input.id + "Error");
    errorElement.textContent = "";
    input.classList.remove("error");
}


const inputFields = [usernameInput, emailInput, passwordInput, confirmPasswordInput];

inputFields.forEach((input) => {
    input.addEventListener("input", function () {
        clearError(input);
    });
});