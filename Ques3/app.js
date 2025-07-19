const readline = require('readline-sync');
const { getResponse } = require('./chatbot/studentBot');

console.log("Welcome to the Student Helpdesk Chatbot!");
console.log("Type your question or type 'exit' to quit.\n");

while (true) {
    const userInput = readline.question("You: ");
    if (userInput.toLowerCase() === 'exit') {
        console.log("👋 Goodbye!");
        break;
    }

    const response = getResponse(userInput);
    console.log("Bot:", response);
    console.log(); 
}
