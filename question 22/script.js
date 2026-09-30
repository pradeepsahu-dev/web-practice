let username = "";
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let uploadedData = null;

// Start Login
function startLogin() {
    username = document.getElementById("username").value;
    if (username.trim() === "") {
        alert("Please enter your name!");
        return;
    }
    document.getElementById("login-page").classList.add("hidden");
    document.getElementById("difficulty-page").classList.remove("hidden");
}

// File Upload Handler
document.getElementById("fileInput").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            uploadedData = JSON.parse(e.target.result);
            alert("✅ File uploaded successfully! Now choose a difficulty.");
        };
        reader.readAsText(file);
    }
});

// Start Quiz
function startQuiz(difficulty) {
    if (!uploadedData) {
        alert("⚠️ Please upload a questions file first!");
        return;
    }

    questions = uploadedData[difficulty];
    currentQuestionIndex = 0;
    score = 0;

    document.getElementById("difficulty-page").classList.add("hidden");
    document.getElementById("quiz-page").classList.remove("hidden");
    document.getElementById("welcome").textContent = `Welcome ${username} - ${difficulty} Quiz`;

    loadQuestion();
}

// Load Question
function loadQuestion() {
    const q = questions[currentQuestionIndex];
    document.getElementById("question").textContent = q.question;
    const optionsEl = document.getElementById("options");
    optionsEl.innerHTML = "";

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.className = "option-btn";
        btn.onclick = () => checkAnswer(option, q.answer);
        optionsEl.appendChild(btn);
    });

    document.getElementById("answer").textContent = "";
}

// Check Answer
function checkAnswer(selected, correct) {
    if (selected === correct) {
        score++;
        document.getElementById("answer").textContent = "✅ Correct!";
        document.getElementById("answer").style.color = "green";
    } else {
        document.getElementById("answer").textContent = `❌ Wrong! Correct: ${correct}`;
        document.getElementById("answer").style.color = "red";
    }
}

function showAnswer() {
    const q = questions[currentQuestionIndex];
    document.getElementById("answer").textContent = `Correct Answer: ${q.answer}`;
    document.getElementById("answer").style.color = "blue";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById("quiz-page").classList.add("hidden");
    document.getElementById("result-page").classList.remove("hidden");
    document.getElementById("final-score").textContent = `${username}, your score is ${score}/${questions.length}`;
}

function restart() {
    document.getElementById("result-page").classList.add("hidden");
    document.getElementById("login-page").classList.remove("hidden");
}
