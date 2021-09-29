var timerElement = document.querySelector('#timer-count');
var startButton = document.querySelector('#start-button');
var buttonDiv = document.querySelector('.btn');
var cardElement = document.querySelector('.card');
var cardHeader = document.querySelector('.card-header');
var cardContent = document.querySelector('.card-content')
var questionContent = document.querySelector('#question-content');
const originalState = cardElement.innerHTML
var playerPoints = 0

const questionOne = {
    question: "Inside of which HTML element do we put the JavaScript?",
    answers:[
            "<scripting>",
            "<script>",
            "<javascript>",
            "<js>"
            ],
    correctAnswer: "<script>"
}

const questionTwo = {
    question: "Where is the correct place to insert a JavaScript?",
    answers:[
            "The <head> section",
            "The <body> section",
            "Both",
            "Neither"
            ],
    correctAnswer: "The <body> section"
}

const questionThree = {
    question: "What is the correct syntax for referring to an external script called 'example.js'?",
    answers:[
            "<script src = 'example.js'>",
            "<script href = 'example.js'>",
            "<script name = 'example.js'>",
            "<script 'example.js'>",
            ],
    correctAnswer: "<script src = 'example.js>"            
}

const questionFour = {
    question: "How to write an IF statement for executing some code if i is NOT equal to 5?",
    answers:[
            "if <> 5",
            "if === 5",
            "if (i != 5)",
            "if (i <> 5)",
            ],       
    correctAnswer: "if (i != 5)"
}

const questionFive = {
    question: "How to write an IF statement in JavaScript?",
    answers:[
            "if i = 5",
            "if i == 5 then",
            "if (i == 5)",
            "if i = 5 then",
            ],
    correctAnswer: "if (i == 5)"
}

const results = {

    
}

var questionArray = [
    questionOne, questionTwo, questionThree, questionFour, questionFive
    ]

var currentQuestion = 0



function startQuiz() {
    startTimer();

    cardContent.textContent = "";
    buttonDiv.innerHTML = "";
    var questionListEl = document.createElement("ol");
    var li1= document.createElement("li");
    var li2= document.createElement("li");
    var li3= document.createElement("li");
    var li4= document.createElement("li");
    var listArray = [li1, li2, li3, li4];


    cardContent.appendChild(questionListEl)
    questionListEl.appendChild(li1)
    questionListEl.appendChild(li2)
    questionListEl.appendChild(li3)
    questionListEl.appendChild(li4)

   
    questionAnswerFill(currentQuestion);
    
    for (var i = 0; i < listArray.length; i++) {
        listArray[i].addEventListener('click', function (event) {
        
        console.log(questionArray[currentQuestion].correctAnswer)
        console.log(event.target.textContent)
        checkAnswer();
        nextQuestion();
     })
    }   


    function questionAnswerFill(currentQuestion) {  
        questionContent.textContent = questionArray[currentQuestion].question;
        li1.textContent = questionArray[currentQuestion].answers[0]
        li2.textContent = questionArray[currentQuestion].answers[1]
        li3.textContent = questionArray[currentQuestion].answers[2]
        li4.textContent = questionArray[currentQuestion].answers[3]
    }

    function nextQuestion() {
        if (currentQuestion < 4) {
            currentQuestion++;
            questionAnswerFill(currentQuestion); 
        } else {
            cardElement.innerHTML = "";
        }
    }

    function checkAnswer() {
        if (event.target.textContent === questionArray[currentQuestion].correctAnswer) {
        console.log(true)
        playerPoints += 100;
        console.log(playerPoints);
        } else {
            console.log(false);
            console.log(playerPoints);
            timerCount = timerCount - 10;
        }
    }

    var timer;
    var timerCount = 60;
    function startTimer() {
        timer = setInterval(function() {
            timerCount--;
            timerElement.textContent = timerCount;

            if (timerCount === 0) {
                clearInterval(timer)
            }

        }, 1000)
    } 
}
startButton.addEventListener('click', startQuiz)