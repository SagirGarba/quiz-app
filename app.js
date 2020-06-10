const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
let countRightAnswers = 0;

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion();
});



function startGame() {
    resetState();
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide");
    setNextQuestion();
    countRightAnswers = 0;
};

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
};


function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
       
    }
    
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button)
    })
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "Restart";
        startButton.classList.remove("hide")
       
       
    }

   if(selectedButton.dataset = correct) {
       countRightAnswers = countRightAnswers + 2;
   };

   document.getElementById('result').innerHTML = countRightAnswers;
};

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

const questions = [
    {
        question: " Add 2 + 2",
        answers: [
            {text: '4', correct: true},
            {text: '22', correct: false},
            {text: '4', correct: false},
            {text: '22', correct: false}
        ]
    },

    {
        question: "Reactjs is an open source ........... library",
        answers: [
            {text: 'Python', correct: false},
            {text: 'Ruby', correct: false},
            {text: 'JavaScript', correct: true},
            {text: 'Pascal', correct: false}
        ]
    },

    {
        question: "Reactjs is used for creating .........",
        answers: [
            {text: 'Backend', correct: false},
            {text: 'User interface', correct: true},
            {text: 'Database', correct: false},
            {text: 'Algorithm', correct: false}
        ]
    },

    {
        question: "Reactjs is owned and managed by .........",
        answers: [
            {text: 'Facebook', correct: true},
            {text: 'Watsapp', correct: false},
            {text: 'Instagram', correct: false},
            {text: 'Twitter', correct: false}
        ]
    },

    {
        question: "'True' is which datatype in JavaScript",
        answers: [
            
            {text: 'boolean', correct: true},
            {text: "null", correct: false},
            {text: 'undefine', correct: false},
            {text: 'String', correct: false},
        ]
    },

    {
        question: "the part of computer that you can see, feel, and touch is called",
        answers: [
            
            {text: 'operating system', correct: false},
            {text: "PeopleWare", correct: false},
            {text: 'Software', correct: false},
            {text: 'Hardware', correct: true},
        ]
    },

    {
        question: "The law of universal gravitation was founded by",
        answers: [
            
            {text: 'Faraday', correct: false},
            {text: 'Newton', correct: true},
            {text: "Ohm's", correct: false},
            {text: 'Einstein', correct: false},
            
        ]
    },

    {
        question: "The escape velocity from Eath's surface is",
        answers: [
            {text: '11,186m/s', correct: true},
            {text: '10,567m/s', correct: false},
            {text: "13,390m/s", correct: false},
            {text: '12,436m/s', correct: false},
            
        ]
    },
]