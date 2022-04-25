let userInput = document.getElementById("userInput");
let userSubmit = document.getElementById("userSubmit");

console.log(userInput);
console.log(userSubmit);

let userSubmitClick = () => {
    console.log(userInput.value);
    userInput.value = "";
}

userSubmit.addEventListener("click", userSubmitClick);

userInput.addEventListener("keydown", (event) => {
    if (event.keyCode == 13) {
        userSubmitClick();
    }
});