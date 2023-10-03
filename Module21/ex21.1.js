// 3. If the user enters a number above 18,
//=> make the text “you can drink” appear

// 4- If the user enters a number below 18,
// =>make the text “you’re too young” appear.
const section = document.querySelector("section");

const button = document.querySelector("button");

const input = document.querySelector("input");

const p = document.createElement("p");
console.log(p);

section.appendChild(p);

button.addEventListener("click",() =>{
    if (input.value >= 18) {
        p.textContent="you can drink."
    }else{
        p.textContent="you're too young.";
    }
});

