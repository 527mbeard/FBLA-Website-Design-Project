const quiz = [
    {
        question: "Which of the following best describes opportunity cost?",
        choices: [
            "The price of producing a good",
            "The next best alternative given up when making a decision",
            "The total cost of producing goods and services",
            "The cost of labor used in production"
        ],
        correct: 1
    },
    {
        question: "If a country’s real GDP increases while its population stays the same, which of the following must be true?",
        choices: ["Real GDP per capita increase", "Inflation increases", "Unemployment increases", "Nominal GDP decreases"],
        correct: 1
    },
    {
        question: "Which of the following is included in the calculation of Gross Domestic Product (GDP)?",
        choices: ["Used goods sold in a garage sale", "Intermediate goods used in production", "Government spending on highways", "Transfer payments such as Social Security"],
        correct: 2
    },
    {
        question: "  If the Consumer Price Index (CPI) increases from 120 to 126, the inflation rate is approximately",
        choices: [
            "3%",
            "5%",
            "6%",
            "10%"
        ],
        correct: 1
    },
    {
        question: "Which type of unemployment occurs when workers are between jobs or searching for new employment?",
        choices: [
            "Structural unemployment",
            "Cyclical unemployment",
            "Frictional unemployment",
            "Seasonal unemployment"
        ],
        correct: 2
    },
    {
        question: "        If the economy enters a recession, which of the following is most likely to occur?",
        choices: [
            "Real GDP increases",
            "Unemployment decreases",
            "Consumer spending increases",
            "Real GDP decreases"
        ],
        correct: 3
    },
    {
        question: "An increase in government spending will most likely cause which of the following shifts in the Aggregate Demand (AD) curve?",
        choices: [
            "AD shifts left",
            "AD shifts right",
            "AD becomes vertical",
            "AD does not change"
        ],
        correct: 1
    },
    {
        question: "Which of the following would cause a decrease in aggregate supply?",
        choices: [
            "Lower business taxes",
            "Improved technology",
            "Higher input pricest",
            "Increased worker productivity"
        ],
        correct: 2
    },
    {
        question: "Which of the following would cause an increase in aggregate demand?",
        choices: [
            "Federal government spending",
            "Interest rates and money supply",
            "Income tax rates",
            "Government budget deficits"
        ],
        correct: 1
    },
    {
        question: "When the Federal Reserve buys government bonds, which of the following is most likely to occur?",
        choices: [
            "The money supply decreases",
            "Interest rates increase",
            "The money supply increases",
            "Bank reserves decrease"
        ],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById("questionText");
const choicesContainer = document.getElementById("choicesContainer");
const nextBtn = document.getElementById("nextBtn");
const questionNumber = document.getElementById("questionNumber");
const totalQuestions = document.getElementById("totalQuestions");
const resultSection = document.getElementById("resultSection");
const scoreText = document.getElementById("scoreText");

totalQuestions.textContent = quiz.length;

function loadQuestion() {
    nextBtn.disabled = true;
    choicesContainer.innerHTML = "";

    const q = quiz[currentQuestion];
    questionText.textContent = q.question;
    questionNumber.textContent = currentQuestion + 1;

    q.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.className = "btn btn-outline-dark choice-btn";
        button.textContent = choice;
        button.onclick = () => selectAnswer(button, index);
        choicesContainer.appendChild(button);
    });
}

function selectAnswer(button, index) {
    const correctIndex = quiz[currentQuestion].correct;
    const buttons = choicesContainer.querySelectorAll("button");

    buttons.forEach(btn => btn.disabled = true);

    if (index === correctIndex) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
        buttons[correctIndex].classList.add("correct");
    }

    nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < quiz.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    questionText.textContent = "Exam Complete!";
    choicesContainer.innerHTML = "";
    nextBtn.classList.add("d-none");
    resultSection.classList.remove("d-none");
    scoreText.textContent = score + " / " + quiz.length;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    nextBtn.classList.remove("d-none");
    resultSection.classList.add("d-none");
    loadQuestion();
}

loadQuestion();