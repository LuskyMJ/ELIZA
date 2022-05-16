let userInput = document.getElementById("userInput");
let userSubmit = document.getElementById("userSubmit");
let input = "";
let response = "";

// Keywords to determine different kind of sentences
let keyWords = [
    "can you",
    "can i ",
    "are you",
    "am i"
]

// Keywords to get 
let replacementKeywords = {
    " you ": " me",
    " yourself ": " myself",
    " i ": " you",
    " me ": " you"
}

let userSubmitClick = () => {
    input = userInput.value.toLowerCase() + " ";
    userInput.value = "";

    // Keywords for different kind of questions
    if (input.includes(keyWords[0])) 
    {
        response = "I can " + input.slice(8, input.length);
    } 
    
    else if (response.includes(keyWords[1]))
    {
        response = "You can " + input.slice(8, input.length);
    } 
    
    else if (response.includes(keyWords[2])) 
    {
        response = "";
    }

    else
    {
        response = "Sorry, I don't understand what you're trying to say.";
    }

    // Replacing keywords
    for (const [key, value] of Object.entries(replacementKeywords))
    {
        if (response.replace(key, value) != response)
        {
            response = response.replace(key, value);
            break;
        }
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