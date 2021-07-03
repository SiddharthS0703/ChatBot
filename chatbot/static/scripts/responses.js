function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if (input == "how are you?") {
        return "I am fine how about you?";
    } else if (input == "I am fine") {
        return "thats great , can i help you with anything?";
    } else if (input == "yes i am facing an issue in my order, its not delivered to the correct address") {
        return "I apologize for the incovenience , let me connect you with our customer support executive!";
    } 
    else {
        return "Try asking something else!";
    }
}