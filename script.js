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

let userSubmitClick = () => {

    // Variables
    let firstPart = "";
    let secondPart = "";

    // Saving the input from the userInput
    input = userInput.value.toLowerCase().replace("?", "");

    // Restting the text in the userInput field
    userInput.value = "";

    console.log(Math.round(Math.random(0, 1)));

    // Keywords for different kind of questions
    if (input.startsWith("can you")) 
    {
        firstPart = "Yes, I can";
        secondPart = input.slice(8, input.length).split(" ");
    } 
    
    else if (input.startsWith("can i"))
    {
        firstPart = "Yes, You can";
        secondPart = input.slice(5, input.length).split(" ");
    } 
    
    else if (input.startsWith("are you")) 
    {
        firstPart = "Yes, I'm";
        secondPart = input.slice(7, input.length).split(" ");
    }

    else if (input.startsWith("am i"))
    {
        firstPart = "Yes, you're";
        secondPart = input.slice(5, input.length).split(" ");
    }

    // Unkown sentence structure. Tell the user
    else
    {
        response = null;
    } 

    // Replacing keywords in second string
    for (let i = 0; i < secondPart.length; i++)
    {
        for (const [key, value] of Object.entries(replacementKeywords))
        {
            if (secondPart[i] == key)
            {
                console.log("Thing");
                secondPart[i] = value;
                break;
            }
        }
    }

    // Creating the final response
    if (response == null)
    {
        response = "Sorry, I don't understand what you're trying to say.";
    }

    else 
    {
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