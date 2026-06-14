const questions = [

    {
        question: "Which language is used for web development?",
        options: ["Python", "HTML", "Java", "C++"],
        answer: "HTML"
    },

    {
        question: "Which company developed JavaScript?",
        options: ["Google", "Microsoft", "Netscape", "Apple"],
        answer: "Netscape"
    },

    {
        question: "Which tag is used for images in HTML?",
        options: ["<img>", "<image>", "<pic>", "<src>"],
        answer: "<img>"
    },

    {
        question: "Which CSS property changes text color?",
        options: ["font-color", "text-color", "color", "background"],
        answer: "color"
    },

    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "##", "<!-- -->", "**"],
        answer: "//"
    }

];

// DOM Elements

const question = document.getElementById("question");

const options = document.getElementById("options");

const nextBtn = document.getElementById("nextBtn");

const restartBtn = document.getElementById("restartBtn");

const scoreBox = document.getElementById("score-box");

// Variables

let currentQuestion = 0;

let score = 0;

// Load Question

function loadQuestion(){

    resetState();

    let current = questions[currentQuestion];

    question.innerText = current.question;

    current.options.forEach(option => {

        const button = document.createElement("button");

        button.innerText = option;

        button.classList.add("option-btn");

        options.appendChild(button);

        button.addEventListener("click", () => {

            selectAnswer(button,current.answer);

        });

    });

}

// Reset Options

function resetState(){

    nextBtn.style.display = "none";

    options.innerHTML = "";
}

// Select Answer

function selectAnswer(button,answer){

    const buttons = document.querySelectorAll(".option-btn");

    buttons.forEach(btn => {

        btn.disabled = true;

        if(btn.innerText === answer){

            btn.classList.add("correct");
        }

    });

    if(button.innerText === answer){

        score++;
    }

    else{

        button.classList.add("wrong");
    }

    nextBtn.style.display = "block";
}

// Next Question

nextBtn.addEventListener("click", () => {

    currentQuestion++;

    if(currentQuestion < questions.length){

        loadQuestion();
    }

    else{

        showScore();
    }

});

// Show Final Score

function showScore(){

    resetState();

    question.innerText = "Quiz Completed 🎉";

    scoreBox.innerHTML = `
        Your Score:
        ${score} / ${questions.length}
    `;
}

// Restart Quiz

restartBtn.addEventListener("click", () => {

    currentQuestion = 0;

    score = 0;

    scoreBox.innerHTML = "";

    loadQuestion();
});

// Start Quiz

loadQuestion();