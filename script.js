let userInput = document.getElementById("userInput");
let userSubmit = document.getElementById("userSubmit");

// Keywords to replace
let replacementKeywords = {
    "you": " me",
    "yourself": " myself",
    "i": " you",
    "me": " you",
    "your": "my"
}

// Possible questions
let questions = [
    {
        question: "can you",
        answers: ["No, I can't", "Yes, I can"]
    },
    {
        question: "can i",
        answers: ["No, you can't", "Yes, you can"]
    },
    {
        question: "are you",
        answers: ["Yes, I'm", "No, I'm not"]
    },
    {
        question: "am i",
        answers: ["No, you're not", "Yes, you're"]
    }
]

// Array for storing last options
let previousAnwers = [];
for(let i = 0; i < questions.length; i++) {
    previousAnwers[i] = Math.round(Math.random(0, 1));
}

function userSubmitClick() {
    // Variables
    let firstPart = "";
    let secondPart = "";

    // Saving the input from the userInput
    let input = userInput.value.toLowerCase().replace("?", "");

    // Resetting the text in the userInput field
    userInput.value = "";

    let answerFound = false;
    for (let q = 0; q < questions.length; q++) {
        if (input.startsWith(questions[q].question)) {
            // Which kind of answer to use. 0 = no, 1 = yes
            let selectedOption = +!previousAnwers[q];

            firstPart = questions[q].answers[selectedOption];
            previousAnwers[q] = selectedOption;

            secondPart = input.slice(questions[q].question.length+1, input.length).split(" ");

            answerFound = true;
            break;
        }
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
    let response = "";
    if (!answerFound) {
        response = "Sorry, I don't understand what you're trying to say.";
    } else {
        response = firstPart + " " + secondPart.join(" ");
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