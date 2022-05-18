let userInput = document.getElementById("userInput");
let userSubmit = document.getElementById("userSubmit");
let input = "";
let response = "";

// Keywords to replace
let replacementKeywords = {
    "you": " me",
    "yourself": " myself",
    "i": " you",
    "me": " you"
}

// Array for storing last options
let previousAnwers = [null, null, null, null];

function userSubmitClick() {

    // Variables
    let firstPart = "";
    let secondPart = "";

    // Saving the input from the userInput
    input = userInput.value.toLowerCase().replace("?", "");

    // Restting the text in the userInput field
    userInput.value = "";

    // Select which kind of answer to use. 0 = no, 1 = yes
    let selectedOption = Math.round(Math.random(0, 1));

    // Keywords for different kind of questions
    if (input.startsWith("can you")) {
        // Array with yes/no answer
        let answerStrings = ["No, I can't", "Yes, I can"];

        // If the current answer is "no" and the last answer wasn't "no"
        if ( (selectedOption == 0) && (previousAnwers[0] != 0) ) {
            firstPart = answerStrings[0];
            previousAnwers[0] = 0;
        }

        // If the current answer is "yes" and the last answer wasn't "yes"
        else if ( (selectedOption == 1) && (previousAnwers[0] != 1)) {
            firstPart = answerStrings[1];
            previousAnwers[0] = 1;
        }

        // Answer same as last time. Choose other option
        else {
            firstPart = answerStrings[+!selectedOption];
            previousAnwers[0] = +!selectedOption;
        }

        secondPart = input.slice(8, input.length).split(" ");

        // Set other questions last answer to null
        previousAnwers[1], previousAnwers[2], previousAnwers[3] = null;
    } 
    
    else if (input.startsWith("can i")) {
        let answerStrings = ["No, you can't", "Yes, you can"];

        if ( (selectedOption == 0) && (previousAnwers[1] != 0) ) {
            firstPart = answerStrings[0];
            previousAnwers[1] = 0;
        }

        else if ( (selectedOption == 1) && (previousAnwers[1] != 1) ) {
            firstPart = answerStrings[1];
            previousAnwers[1] = 1;
        }

        else {
            firstPart = answerStrings[+!selectedOption];
            previousAnwers[1] = +!selectedOption;
        }

        secondPart = input.slice(5, input.length).split(" ");
        previousAnwers[0], previousAnwers[2], previousAnwers[3] = null;
    } 
    
    else if (input.startsWith("are you")) {
        let answerStrings = ["Yes, I'm", "No, I'm not"];

        if ( (selectedOption == 0) && (previousAnwers[2] != 0)) {
            firstPart = answerStrings[0];
            previousAnwers[2] = 0;
        }

        else if ( (selectedOption == 1) && (previousAnwers[2] != 1) ) {
            firstPart = answerStrings[1];
            previousAnwers[2] = 1;
        }

        else {
            firstPart = answerStrings[+!selectedOption];
            previousAnwers[2] = +!selectedOption;
        }

        secondPart = input.slice(7, input.length).split(" ");
        previousAnwers[0], previousAnwers[1], previousAnwers[3] = null;
    }

    else if (input.startsWith("am i")) {
        let answerStrings = ["No, you're not", "Yes, you're"];

        if ( (selectedOption == 0) && (previousAnwers[3] != 0) ) {
            firstPart = answerStrings[0];
            previousAnwers[3] = 0;
        }

        else if ( (selectedOptions == 1) && (previousAnwers[3] != 1) ) {
            firstPart = answerString[1];
            previousAnwers[3] = 1;
        }

        else {
            firstPart = answerString[+!selectedOption];
            previousAnwers[3] = +!selectedOption;
        }
        
        secondPart = input.slice(5, input.length).split(" ");
        previousAnwers[0], previousAnwers[1], previousAnwers[2] = null;
    }

    // Unkown sentence structure. Tell the user
    else {
        response = null;
    } 

    // Replacing keywords in second string
    for (let i = 0; i < secondPart.length; i++) {
        for (const [key, value] of Object.entries(replacementKeywords)) {
            if (secondPart[i] == key) {
                secondPart[i] = value;
                break;
            }
        }
    }

    // Creating the final response
    if (response == null) {
        response = "Sorry, I don't understand what you're trying to say.";
    }

    else {
        response = [firstPart, secondPart.join(" ")].join(" ");
    }

    document.querySelector("p").innerHTML = response;
}

userSubmit.addEventListener("click", userSubmitClick);

// Runs userSubmitClick if the enter key is pressed
userInput.addEventListener("keydown", (event) => {
    if (event.keyCode == 13) {
        userSubmitClick();
    }
});