function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== "") {
        var messageContainer = document.getElementById('message-container');

        // Display the user's message
        var userMessage = document.createElement('div');
        userMessage.classList.add('user-message');
        userMessage.textContent = "You: " + userInput;
        messageContainer.appendChild(userMessage);

        // Simulate bot response
        var botResponse = document.createElement('div');
        botResponse.classList.add('bot-response');
        botResponse.textContent = "Bot: I received your message - " + userInput;
        messageContainer.appendChild(botResponse);

        // Clear the input field
        document.getElementById('user-input').value = "";
    }
}
