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

    if (lowerCaseMessage.includes("hi")) {
        response = "Hello there! How are you today?";
    } else if (lowerCaseMessage.includes("how are you") || lowerCaseMessage.includes("how are you"))  {
        response = "I'm just a bot, but thanks for asking! How can I help you today?";
    } else if (lowerCaseMessage.includes("hello")) {
        response = "Hello there! How are you today?";
    } else if (lowerCaseMessage.includes("good morning")) {
        response = "Good morning! How are you today?";
    } else if (lowerCaseMessage.includes("bye") || lowerCaseMessage.includes("goodbye")) {
        response = "Goodbye! Feel free to return anytime.";
    } else if (lowerCaseMessage.includes("help")) {
        response = "Sure, I'm here to try help. What do you need assistance with?";
    } else if (lowerCaseMessage.includes("how do you work")) {
        response = "It's a secret";
    } else if (lowerCaseMessage.includes("what is the meaning of life")) {
        response = "The meaning of life is to find purpose. Find your purpose and you will know the meaning of life.";
    } else if (lowerCaseMessage.includes("are you real?")) {
        response = "I am not. I am merely a bot";
    } else if (lowerCaseMessage.includes("what is the weather")) {
        response = "It's probably best to consult the weather statio rather than an AI bot for the weather!";
    } else if (lowerCaseMessage.includes("what is your name") || lowerCaseMessage.includes("your name")) {
        response = "My name is Noddy.";
    }     else if (lowerCaseMessage.includes("this is fun")) {
        response = "I should hope so!";
    } else if (lowerCaseMessage.includes("can you code")) {
        response = "I'm a code pro!";
    } else if (lowerCaseMessage.includes("how do you work?")) {
        response = "It's a secret";
    } else if (lowerCaseMessage.includes("What is the time")) {
        response = "Check your watch for the time!";
    } else {
        response = "My field of knowledge is limited (for now). Can you rephrase that in a way that I might understand?";
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
