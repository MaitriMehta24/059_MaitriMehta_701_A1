function getResponse(userInput) {
    const input = userInput.toLowerCase();

    if (input.includes("semester")) {
        return "There are 8 semesters in total. Each lasts 6 months.";
    } else if (input.includes("course")) {
        return "You can check the course details on the student portal.";
    } else if (input.includes("exam")) {
        return "Exams are held at the end of each semester.";
    } else if (input.includes("result")) {
        return "Results are declared within a month after exams.";
    } else if (input.includes("help")) {
        return "You can ask about semester, course, exam, or result.";
    } else {
        return "Sorry, I don't understand. Type 'help' to see what you can ask.";
    }
}

module.exports = { getResponse };