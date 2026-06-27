var questions = [
    { q: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Mars" },
    { q: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
    { q: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific" },
    { q: "How many bones are in an adult human body?", options: ["206", "305", "150", "210"], answer: "206" },
    { q: "Which element has the chemical symbol 'O'?", options: ["Gold", "Oxygen", "Osmium", "Zinc"], answer: "Oxygen" },
    { q: "What is the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi"], answer: "Mitochondria" },
    { q: "Which year did the Titanic sink?", options: ["1912", "1905", "1920", "1898"], answer: "1912" },
    { q: "What is the fastest land animal?", options: ["Lion", "Cheetah", "Leopard", "Antelope"], answer: "Cheetah" },
    { q: "Who painted the Mona Lisa?", options: ["Van Gogh", "Picasso", "Da Vinci", "Monet"], answer: "Da Vinci" },
    { q: "Which language runs natively inside web browsers?", options: ["Python", "Java", "C++", "JavaScript"], answer: "JavaScript" }
];

var currentIndex = 0;

function loadQuestion() {
    var card = document.getElementById("flashcard");
    var cardBack = document.getElementById("card-back");
    
    card.classList.remove("flipped");
    cardBack.className = "card-face card-back"; 

    var currentQuestion = questions[currentIndex];
    
    document.getElementById("q-num").innerText = "Question " + (currentIndex + 1) + "/10";
    document.getElementById("q-text").innerText = currentQuestion.q;
    
    var container = document.getElementById("options-container");
    container.innerHTML = "";

    var opt0 = currentQuestion.options[0];
    var opt1 = currentQuestion.options[1];
    var opt2 = currentQuestion.options[2];
    var opt3 = currentQuestion.options[3];

    container.innerHTML += "<button class='option-btn' onclick='checkAnswer(\"" + opt0 + "\")'>" + opt0 + "</button>";
    container.innerHTML += "<button class='option-btn' onclick='checkAnswer(\"" + opt1 + "\")'>" + opt1 + "</button>";
    container.innerHTML += "<button class='option-btn' onclick='checkAnswer(\"" + opt2 + "\")'>" + opt2 + "</button>";
    container.innerHTML += "<button class='option-btn' onclick='checkAnswer(\"" + opt3 + "\")'>" + opt3 + "</button>";
}

function checkAnswer(selected) {
    var card = document.getElementById("flashcard");
    var cardBack = document.getElementById("card-back");
    var correctAnswer = questions[currentIndex].answer;

    if (selected == correctAnswer) {
        cardBack.classList.add("correct");
        document.getElementById("result-icon").innerText = "✓";
        document.getElementById("feedback-title").innerText = "Correct!";
        document.getElementById("feedback-text").innerText = "Awesome work, keep it up!";
    } else {
        cardBack.classList.add("wrong");
        document.getElementById("result-icon").innerText = "✗";
        document.getElementById("feedback-title").innerText = "Incorrect";
        document.getElementById("feedback-text").innerText = "The correct answer was: " + correctAnswer;
    }
    
    card.classList.add("flipped");
}

function nextQuestion() {
    currentIndex = currentIndex + 1;
    if (currentIndex == 10) {
        currentIndex = 0;
    }
    loadQuestion();
}

function showTeam() {
    document.getElementById("team-modal").classList.add("active");
}

function hideTeam() {
    document.getElementById("team-modal").classList.remove("active");
}

document.getElementById("next-btn").onclick = nextQuestion;
document.getElementById("team-toggle").onclick = showTeam;
document.getElementById("modal-close").onclick = hideTeam;

loadQuestion();