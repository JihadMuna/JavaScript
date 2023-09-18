let language= prompt("what language?");
let isisland = prompt("island? (true or false)") === "true" ? true : false;
let population=parseInt(prompt("number"));
let country= prompt("which country?")

let sarahlanguage= "English"
let sarahisland= false;
let sarahpopulation = 5000000;

if (!isisland && language === sarahlanguage &&
population<= sarahpopulation) {
    console.log("nice you can live in" `${country}`);
}
else {
    console.log(`${country} does not meet your criteria`);
}