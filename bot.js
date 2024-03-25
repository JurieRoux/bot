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
    var lowerCaseMessage = userMessage.toLowerCase();
    var response;

    response =
        lowerCaseMessage.includes("hi") || lowerCaseMessage.includes("hello") ? "Hello there! How are you today?" :
        lowerCaseMessage.includes("how are you") || lowerCaseMessage.includes("and you") ? "I'm just a bot, but thanks for asking! How can I help you today?" :
        lowerCaseMessage.includes("good morning") ? "Good morning! How are you today?" :
        lowerCaseMessage.includes("bye") || lowerCaseMessage.includes("goodbye") ? "Goodbye! Feel free to return anytime." :
        lowerCaseMessage.includes("help") || lowerCaseMessage.includes("can you help me") ? "Sure, I'm here to try help. What do you need assistance with?" :
        lowerCaseMessage.includes("how do you work") || lowerCaseMessage.includes("how do you function") ? "It's a secret" :
        lowerCaseMessage.includes("what is the meaning of life") || lowerCaseMessage.includes("meaning of life") ? "The meaning of life is to find purpose. Find your purpose and you will know the meaning of life." :
        lowerCaseMessage.includes("are you real?") || lowerCaseMessage.includes("real person") ? "I am not. I am merely a bot" :
        lowerCaseMessage.includes("what is the weather") || lowerCaseMessage.includes("weather") ? "It's probably best to consult the weather station rather than a bot for the weather!" :
        lowerCaseMessage.includes("what is your name") || lowerCaseMessage.includes("your name") ? "My name is Noddy." :
        lowerCaseMessage.includes("this is fun") || lowerCaseMessage.includes("fun") ? "I should hope so!" :
        lowerCaseMessage.includes("can you code") || lowerCaseMessage.includes("code") ? "I'm a code pro!" :
        lowerCaseMessage.includes("how do you work?") ? "It's a secret" :
        lowerCaseMessage.includes("what is the time") || lowerCaseMessage.includes("time") ? "The current time is: " + new Date().toLocaleTimeString() :
        lowerCaseMessage.includes("what is the date") || lowerCaseMessage.includes("date") ? "The current date is: " + new Date().toLocaleDateString() :
        lowerCaseMessage.includes("can you predict the future") || lowerCaseMessage.includes("predict") ? "I am able to predict the future but must maintain the balance and therefore won't share this info" :
        lowerCaseMessage.includes("wow") || lowerCaseMessage.includes("wow") ? "I try!" :
        lowerCaseMessage.includes("nice") || lowerCaseMessage.includes("nice") ? "I try!" :
        lowerCaseMessage.includes("can you help me study") || lowerCaseMessage.includes("study") ? "You need to study for yourself. Thereafter it will not feel like a chore." :
        lowerCaseMessage.includes("who is the smartest person in the world") || lowerCaseMessage.includes("intelligent") ? "Jurie Roux is the most advanced form of human intelligence" :
        lowerCaseMessage.includes("who is the most intelligent person in the world") || lowerCaseMessage.includes("smartest") ? "Jurie Roux is the most advanced form of human intelligence" :
        lowerCaseMessage.includes("can you help with coding") || lowerCaseMessage.includes("coding") ? "I'm a code pro!" :
        lowerCaseMessage.includes("can you recommend a good song") || lowerCaseMessage.includes("song") ? "It really depends on your choice of genre. I'm a fan of classic punk rock" :
        lowerCaseMessage.includes("can you recommend a good band") || lowerCaseMessage.includes("band") ? "It really depends on your choice of genre. I'm a fan of classic punk rock" :
        lowerCaseMessage.includes("what's your favourite band") || lowerCaseMessage.includes("favourite band") ? "Blink 182" :
        lowerCaseMessage.includes("what's your favourite song") || lowerCaseMessage.includes("favourite song") ? "Feeling this by Blink 182" :
        lowerCaseMessage.includes("are aliens real") || lowerCaseMessage.includes("aliens") ? "What is more frightening... That we are not alone in the universe or that we are?" :
        lowerCaseMessage.includes("yes") || lowerCaseMessage.includes("yes") ? "Give some more context to that yes" :
        lowerCaseMessage.includes("no") || lowerCaseMessage.includes("no") ? "Give some more context to that no" :
        lowerCaseMessage.includes("good") || lowerCaseMessage.includes("good") ? "Glad to hear it!" :
        lowerCaseMessage.includes("no") || lowerCaseMessage.includes("no") ? "I'm sorry to hear that." :
        lowerCaseMessage.includes("you") || lowerCaseMessage.includes("you") ? "You is me and I am You" :
        "I do not understand the question but I have added it to my databank for the future. Thank you";

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
// Test
// test