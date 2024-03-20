    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
    
        // While there are elements remaining to shuffle
        while (currentIndex !== 0) {
    
        // Pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // Swap it with the current element
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
    
        return array;
    }
const questions = [
    { question: "Núi nào mà bị chặt ra từng khúc?"  , choices: ["Núi Ngũ Hành Sơn", "Núi Phú Sĩ", "Dãy Himalaya", "Thái Sơn"], answer: 3 },
    { question: "Từ nào mà có 12 chữ “M”?", choices: ["Mùi mồ hôi", "Tám", "Mẹ mua mắm", "Mùa xuân muôn hoa"], answer: 1 },
    { question: "Hai cô nằm nghỉ hai phòng. Ngày thì mở cửa ra trông, đêm thì đóng cửa lấp trong ra ngoài. Đó là gì?", choices: ["Đôi Mắt", "Cửa sổ", "Hộp diêm", "Bóng đèn"], answer: 0 },
    { question: "Chữ gì mất đầu là hỏi, mất đuôi trả lời?", choices: ["Vậy", "Tai", "Bao", "Này"], answer: 1 },
    { question: "Sữa gì khi uống không được đứng yên 1 chỗ?", choices: ["Sữa mẹ", "Sữa Chua", "Trà Sữa", "Sữa lắc"], answer: 3 },
    { question: "Một xương sống, một đống xương sườn là cái gì?", choices: ["Cái quạt", "Cái cưa", "Cái Lược", "Áo Mưa"], answer: 2 },
    { question: "Nắng lửa mưa dầu tôi đâu bỏ bạn. Tối lửa tắt đèn sao bạn lại bỏ tôi. Đó là cái gì?", choices: ["Cái Bóng", "Cái ô", "Người bạn", "Con chó"], answer: 0 },
    // Add more questions here
];

shuffle(questions);

let currentQuestion = 0;
let last=currentQuestion;
let score = 0;
let isWin = false;


const introContainer = document.getElementById("intro-container");
const quizContainer = document.getElementById("quiz-container");
const winContainer = document.getElementById("win-container");
const loseContainer = document.getElementById("lose-container");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");
const replayButton = document.getElementById("replay-button"); // New button for replay
const secretMessageElement = document.getElementById("secret-message");
const checking=document.getElementById("checking");
const sumpoint = document.getElementById("sumpoint");
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", () => {
    introContainer.style.display = "none";
    quizContainer.style.display = "block";
    sumpoint.style.display = "block";
    displayQuestion();
});

replayButton.addEventListener("click", resetQuiz); // Event listener for replay button





function displayQuestion() {
    if(currentQuestion-last>1){//stupid 
        currentQuestion = last+1;
    }
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    choicesElement.innerHTML = ""; // Clear previous choices
    const termixquestions=[];
    question.choices.forEach((choice, index) => {
        termixquestions.push({question:choice,answer:index});
    });
    shuffle(termixquestions);

    termixquestions.forEach((questionss) => {
        const li = document.createElement("li");
        li.textContent = questionss.question;
        li.addEventListener("click", () => handleAnswer(questionss.answer));
        choicesElement.appendChild(li);
    });
}

function handleAnswer(userAnswer) {
    const correctAnswer = questions[currentQuestion].answer;
    const isCorrect = userAnswer === correctAnswer;

    if (isCorrect) {
        feedbackElement.textContent = "Chính Xác!";
        feedbackElement.classList.add("correct");
        score++;
    } else {
        feedbackElement.textContent = `Sai Rồi :((` //The correct answer is ${questions[currentQuestion].choices[correctAnswer]};
        feedbackElement.classList.add("wrong");
    }
  

    if (currentQuestion === 5-1) {
        
        if(score == 3) {
            isWin=true;
        }else{
            isWin=false;
        }
        showResults(); // New function to handle results and replay
    }
    else{showNextButton();}

    // Check if all questions answered
}

function showNextButton() {
    sumpoint.textContent= "Điểm:"+score+"/5";
    last=currentQuestion;
    nextButton.style.display = "inline-block";
    choicesElement.classList.add("disabled"); // Disable choices after answer

    nextButton.addEventListener("click", () => {
    nextButton.removeEventListener("click", showNextButton); // Remove previous click event

        if (isWin) {
            displayWinScreen();
        } else {
            currentQuestion++;
            feedbackElement.textContent = "";
            feedbackElement.classList.remove("correct", "wrong");
            choicesElement.classList.remove("disabled");
            nextButton.style.display = "none";
            displayQuestion();
        }
    });
}

function showResults() {
    feedbackElement.classList.remove("correct", "wrong");
    if (isWin) {
        displayWinScreen();
    } else {
        displayLoseScreen();
        replayButton.style.display = "inline-block";
        replayButton.addEventListener("click", resetQuiz); // Event listener for replay button
    }
}

function resetQuiz() {
    loseContainer.style.display = "none";
    currentQuestion = 0;
    score = 0;
    isWin = false;
    sumpoint.textContent="Điểm:"+0+"/5";
    replayButton.style.display = "none"; // Hide replay button after reset
    feedbackElement.textContent = "";
    introContainer.style.display = "none";
    quizContainer.style.display = "block";
    sumpoint.style.display = "block";
    displayQuestion();
    // Reattach event listeners to choices
}


function displayWinScreen() {
    quizContainer.style.display = "none";
    winContainer.style.display = "block";
    sumpoint.textContent="Điểm:"+score+"/5";
}
function displayLoseScreen() {
    quizContainer.style.display = "none";
    loseContainer.style.display = "block";
}
