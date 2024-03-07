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
        response = "Hello there! How can I help you?";
    } else if (lowerCaseMessage.includes("how are you")) {
        response = "I'm just a bot, but thanks for asking!";
    } else if (lowerCaseMessage.includes("hello")) {
        response = "Hello there! How can I help you?";
    } else if (lowerCaseMessage.includes("good morning")) {
        response = "Good morning! What can I do for you?";
    } else if (lowerCaseMessage.includes("bye") || lowerCaseMessage.includes("goodbye")) {
        response = "Goodbye! Feel free to return anytime.";
    } else if (lowerCaseMessage.includes("help")) {
        response = "Sure, I'm here to help. What do you need assistance with?";
    } else if (lowerCaseMessage.includes("how do you work")) {
        response = "It's a secret";
    } else if (lowerCaseMessage.includes("how do you work?")) {
        response = "It's a secret";
    } else if (lowerCaseMessage.includes("how do this work?")) {
        response = "It's a secret";
    } else {
        response = "I'm sorry, I didn't understand that. Can you please rephrase?";
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
