let slider = document.querySelector(".slide");
let sliderValue = document.querySelector(".value");
let display = document.querySelector("#passbox");
let lowerCase = document.querySelector("#lowercase");
let upperCase  = document.querySelector("#uppercase");
let numbers = document.querySelector("#numbers");
let symbols = document.querySelector("#symbols");
let genBtn = document.querySelector(".btn");
let copyBtn = document.querySelector(".copybtn");

slider.addEventListener('input',()=> {
    sliderValue.innerHTML = slider.value;
});

genBtn.addEventListener("click",() => {
    console.log("function called")
    display.value = generatePassword();
    copyBtn.style.display = "block";
    copyBtn.className = "fa-solid fa-copy";
})

let lowrcase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "!@#$%^&*{}[]\/";

function generatePassword() {
    let genPassword = "";
    let allChars = "";

    allChars += lowerCase.checked ? lowrcase : "";
    allChars += upperCase.checked ? uppercase : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";

    if(allChars === 0 || allChars.length === 0) {
        return genPassword;
    }

    let i = 1;

    while(i<=slider.value) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }
    
    return genPassword;
}

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(display.value);
    copyBtn.className = 'fa-solid fa-check';
})