let flashcards = [];
let currentQuestionIndex = 0;
let score = 0;
function addFlashcard() {
    const question =
    document.getElementById("questionInput").Value;
    const answer =
    document.getElementById("answerInput").Value; 
    if (question && answer) {
        flashcards.push({ question, answer });
        alert("Flashcard added!");
        document.getElementById("questionInput").Value ="";
        document.getElementById("answerInput").Value ="";
    } else {
        alert("please fill both fields.");
    }
}
function startQuiz() {
    if (flashcards.length === 0) {
        alert("No flashcards available.");
        return;
    }
    currentQuestionIndex = 0;
    score = 0;
}
function showQuestion() {
    document.getElementById("quizArea").style.display = "block";
    showQuestion();
}
function showQuestion() {
    document.getElementById("quizQuestion").innerText =
    flashcards[currentQuestionIndex].question;
    document.getElementById("useranswer").Value = "";
}
function checkAnswer() {
    const userAns =
    document.getElementById("userAnswer").Value.trim().toLowerCase();
    const correctAns =
    flashcards[currentQuestionIndex].answer.trim().toLowerCase();
    if (userAns === correctAns) {
        score++;
        alert("correct!");
    } else {
        alert("Wrong! Correct answer: " + 
            flashcards[currentQuestionIndex].answer);
    }
    currentQuestionIndex++;
    if (currentQuestionIndex <
        flashcards.length) {
            showQuestion();
        } else {
            document.getElementById("quizQuestion").innerText = "Quiz Finished!";
            document.getElementById("score").innerText = "your Score: " + score + "/" + 
            flashcards.length;
            document.getElementById("userAnswer").style.display = "none";
        }
    }