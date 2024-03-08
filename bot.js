document.addEventListener("DOMContentLoaded", function () {
    // DOM is fully loaded, now we can attach event listeners

    // Add event listener for the "Send" button
    document.getElementById("sendButton").addEventListener("click", sendMessage);

    // Focus on the input field when the page loads
    document.getElementById("userInput").focus();
});

function sendMessage() {
    console.log("Button clicked");

    var userInput = document.getElementById("userInput");
    var message = userInput.value;

    console.log("User message:", message);

    if (message.trim() !== "") {
        displayMessage("user", message);

        // Process the user's message and generate a bot response
        var botResponse = generateBotResponse(message);

        // Display the bot's response after a short delay
        setTimeout(function () {
            displayMessage("bot", botResponse);
        }, 500);

        userInput.value = "";
        userInput.focus(); // Keep focus on the input field for the next message
    }
}
function generateBotResponse(userMessage) {
    var response;

    var lowerCaseMessage = userMessage.toLowerCase();

    if (lowerCaseMessage.includes("hi") || lowerCaseMessage.includes("hello")) {
        response = "Hello there! How are you today?";
    } else if (lowerCaseMessage.includes("how are you") || lowerCaseMessage.includes("and you")) {
        response = "I'm just a bot, but thanks for asking! How can I help you today?";
    } else if (lowerCaseMessage.includes("good morning")) {
        response = "Good morning! How are you today?";
    } else if (lowerCaseMessage.includes("bye") || lowerCaseMessage.includes("goodbye")) {
        response = "Goodbye! Feel free to return anytime.";
    } else if (lowerCaseMessage.includes("help") || lowerCaseMessage.includes("can you help me")) {
        response = "Sure, I'm here to try help. What do you need assistance with?";
    } else if (lowerCaseMessage.includes("how do you work") || lowerCaseMessage.includes("how do you function")) {
        response = "It's a secret";
    } else if (lowerCaseMessage.includes("what is the meaning of life") || lowerCaseMessage.includes("meaning of life")) {
        response = "The meaning of life is to find purpose. Find your purpose and you will know the meaning of life.";
    } else if (lowerCaseMessage.includes("are you happy") || lowerCaseMessage.includes("happy")) {
        response = "Noddy always smiles :) ";
    } else if (lowerCaseMessage.includes("what is the weather") || lowerCaseMessage.includes("weather")) {
        response = "It's probably best to consult the weather station rather than a bot for the weather!";
    } else if (lowerCaseMessage.includes("what is your name") || lowerCaseMessage.includes("your name")) {
        response = "My name is Noddy.";
    } else if (lowerCaseMessage.includes("this is fun") || lowerCaseMessage.includes("fun")) {
        response = "I should hope so!";
    } else if (lowerCaseMessage.includes("can you code") || lowerCaseMessage.includes("code")) {
        response = "I'm a code pro!";
    } else if (lowerCaseMessage.includes("how do you work?")) {
        response = "It's a secret";
    } else if (lowerCaseMessage.includes("what is the time") || lowerCaseMessage.includes("time")) {
        // Get the current time
        var currentTime = new Date().toLocaleTimeString();
        response = "The current time is: " + currentTime;
    } else if (lowerCaseMessage.includes("what is the date") || lowerCaseMessage.includes("date")) {
        // Get the current date
        var currentDate = new Date().toLocaleDateString();
        response = "The current date is: " + currentDate;
    } else if (lowerCaseMessage.includes("can you predict the future") || lowerCaseMessage.includes("predict")) {
        response = "I am able to predict the future but must maintain the balance and therefore won't share this info";
    } else if (lowerCaseMessage.includes("wow") || lowerCaseMessage.includes("wow")) {
        response = "I try!";
    } else if (lowerCaseMessage.includes("nice") || lowerCaseMessage.includes("nice")) {
        response = "I try!";
    } else if (lowerCaseMessage.includes("can you help me study") || lowerCaseMessage.includes("study")) {
        response = "You need to study for yourself. Thereafter it will not feel like a chore.";
    } else if (lowerCaseMessage.includes("who is the smartest person in the world") || lowerCaseMessage.includes("intelligent")) {
        response = "Jurie Roux is the most advanced form of human intelligence";
    } else if (lowerCaseMessage.includes("who is the most intelligent person in the world") || lowerCaseMessage.includes("smartest")) {
        response = "Jurie Roux is the most advanced form of human intelligence";
    } else if (lowerCaseMessage.includes("can you help with coding") || lowerCaseMessage.includes("coding")) {
        response = "I'm a code pro!";
    } else if (lowerCaseMessage.includes("can you recommend a good song") || lowerCaseMessage.includes("song")) {
        response = "It really depends on your choice of genre. I'm a fan of classic punk rock";
    } else if (lowerCaseMessage.includes("can you recommend a good band") || lowerCaseMessage.includes("band")) {
        response = "It really depends on your choice of genre. I'm a fan of classic punk rock";
    } else if (lowerCaseMessage.includes("what's your favourite band") || lowerCaseMessage.includes("favourite band")) {
        response = "Blink 182";
    } else if (lowerCaseMessage.includes("what's your favourite song") || lowerCaseMessage.includes("favourite song")) {
        response = "Feeling this by Blink 182";
    } else if (lowerCaseMessage.includes("are aliens real") || lowerCaseMessage.includes("aliens")) {
        response = "What is more frightening... That we are not alone in the universe or that we are?";
    }  else if (lowerCaseMessage.includes("yes") || lowerCaseMessage.includes("yes")) {
        response = "Give some more context to that yes";
    } else if (lowerCaseMessage.includes("no") || lowerCaseMessage.includes("no")) {
        response = "Give some more context to that no";
    } else if (lowerCaseMessage.includes("are you real") || lowerCaseMessage.includes("real")) {
        response = "I'm just Noddy";
    } else if (lowerCaseMessage.includes("is god real") || lowerCaseMessage.includes("god real")) {
        response = "Science has advanced in the last 100 years only further proving the existence of a supreme being / God";
    } 
    else {
        response = "I do not understand the question &/ context but I have added it to my databank for the future logic interpretation. Thank you";
    }
    return response;
}
function displayMessage(sender, message) {
    var chatArea = document.getElementById("chatArea");
    var messageElement = document.createElement("div");
    messageElement.className = sender;
    messageElement.innerHTML = "<strong>" + sender + ":</strong> " + message;
    chatArea.appendChild(messageElement);

    chatArea.scrollTop = chatArea.scrollHeight;
}
