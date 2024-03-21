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
    { question: "Khẩu hiệu nào của Đoàn Thanh niên Việt Nam thể hiện tinh thần chuyển đổi số?" , choices: ["Tuổi trẻ Việt Nam dũng cảm, sáng tạo", "Thanh niên xung phong, tình nguyện vì cuộc sống cộng đồng", "Học tập và làm theo lời Bác", "Chuyển đổi số - Thanh niên tiên phong"], answer: 3 },
    { question: "Ứng dụng nào của Đoàn Thanh niên Việt Nam được sử dụng phổ biến nhất hiện nay?" , choices: ["Zalo", "Facebook", "VssID", "ViettelPay"], answer: 2 },
    { question: "Sáng kiến nào của Đoàn Thanh niên Việt Nam góp phần thúc đẩy chuyển đổi số trong thanh niên?" , choices: ["Cuộc thi 'Tìm kiếm tài năng lập trình viên trẻ'", "Chương trình 'Tuổi trẻ sáng tạo'", "'Ngày hội thanh niên với khởi nghiệp và đổi mới sáng tạo'", "Tất cả các ý trên"], answer: 3 },
    { question: "Theo bạn, lợi ích nào lớn nhất mà chuyển đổi số mang lại cho Đoàn Thanh niên Việt Nam?" , choices: ["Nâng cao hiệu quả hoạt động", "Mở rộng kết nối với thanh niên", "Tăng cường tính minh bạch", "Tất cả các ý trên"], answer: 3 },
    { question: "Nền tảng trực tuyến nào của Đoàn Thanh niên Việt Nam hỗ trợ thanh niên tìm kiếm việc làm?" , choices: ["VssID", "Cổng thông tin điện tử của Đoàn Thanh niên Việt Nam", "Hệ thống thông tin quản lý đoàn viên", "'Thanh niên Việt Nam'"], answer: 2 },
    { question: "Kênh truyền thông nào của Đoàn Thanh niên Việt Nam thu hút nhiều người theo dõi nhất hiện nay?" , choices: ["Báo Thanh Niên", "Fanpage Facebook của Đoàn Thanh niên Việt Nam", "Kênh Youtube của Đoàn Thanh niên Việt Nam", "Tiktok của Đoàn Thanh niên Việt Nam"], answer: 1 },
    { question: "Theo bạn, thách thức nào lớn nhất mà Đoàn Thanh niên Việt Nam đối mặt trong quá trình chuyển đổi số?" , choices: ["Nâng cao năng lực sử dụng công nghệ số cho cán bộ, đoàn viên thanh niên.", "Xây dựng hệ thống hạ tầng công nghệ thông tin đồng bộ, hiện đại.", "Đảm bảo an ninh mạng, an toàn thông tin.", "Tạo nguồn nội dung phong phú, hấp dẫn trên môi trường số."], answer: 0 },
    { question: "Biểu tượng chuyển đổi số của Đoàn TN là gì?" , choices: ["Logo truyền thống", "Cánh tay robot", "Smartphone", "Cờ Đoàn"], answer: 2 },
    { question: "Khẩu hiệu nào thể hiện tinh thần chuyển đổi số của Đoàn?" , choices: ["Dũng cảm, sáng tạo", "Xung phong, tình nguyện", "Học tập Bác Hồ", "Chuyển đổi số - Thanh niên tiên phong"], answer: 3 },
    { question: "Ứng dụng nào phổ biến nhất của Đoàn?" , choices: ["Zalo", "Facebook", "VssID", "ViettelPay"], answer: 2 },
    { question: "Sáng kiến nào thúc đẩy chuyển đổi số trong thanh niên?" , choices: ["Lập trình viên trẻ", "Tuổi trẻ sáng tạo", "Khởi nghiệp đổi mới sáng tạo", "Tất cả"], answer: 3 },
    { question: "Lợi ích lớn nhất của chuyển đổi số cho Đoàn?" , choices: ["Hiệu quả hoạt động", "Kết nối thanh niên", "Minh bạch", "Tất cả"], answer: 3 },
    { question: "Đoàn đã triển khai hoạt động nào để thúc đẩy chuyển đổi số?" , choices: ["Tập huấn cán bộ, đoàn viên", "Phát triển ứng dụng di động", "Tuyên truyền kiến thức", "Tất cả"], answer: 3 },
    { question: "Nền tảng trực tuyến nào hỗ trợ thanh niên tìm kiếm việc làm?" , choices: ["VssID", "Cổng thông tin Đoàn", "Hệ thống quản lý đoàn viên", "'Thanh niên Việt Nam'"], answer: 0 },
    { question: "Kênh truyền thông nào thu hút nhiều người theo dõi nhất?" , choices: ["Báo Thanh Niên", "Fanpage Facebook Đoàn", "Youtube Đoàn", "Tiktok Đoàn"], answer: 1 },
    { question: "Thách thức lớn nhất trong chuyển đổi số của Đoàn?" , choices: ["Năng lực công nghệ", "Hạ tầng công nghệ", "An ninh mạng", "Nội dung số"], answer: 0 },
    { question: "Giải pháp nào tập trung thúc đẩy chuyển đổi số?" , choices: ["Nhận thức cán bộ, đoàn viên", "Đầu tư hạ tầng", "Đào tạo kỹ năng", "Môi trường số thân thiện"], answer: 3 },
    { question: "Con gì ăn no thì nằm, ăn đói thì đi?" , choices: ["Con chó", "Con mèo", "Con ma", "Con người"], answer: 2 },
    { question: "Cái gì đen khi mua, đỏ khi dùng, trắng khi bỏ đi?" , choices: ["Than", "Táo", "Nước mắm", "Cà rốt"], answer: 2 },
    { question: "Cái gì Adam có hai mà Eva chỉ có một?" , choices: ["Chữ A", "Chữ E", "Chữ I", "Chữ O"], answer: 1 },
    { question: "Cái gì càng to càng nhỏ?" , choices: ["Cái bóng", "Cái miệng", "Cái bụng", "Cái nhà"], answer: 0 },
    { question: "Cái gì càng đi càng ngắn?" , choices: ["Cái nến", "Cái thước", "Cái bút", "Cái đường"], answer: 3 },
    { question: "Cái gì không có đầu, không có chân mà đi nhanh hơn con ngựa?" , choices: ["Bức thư", "Cái bóng", "Tia chớp", "Con gió"], answer: 2 },
    { question: "Cái gì con gái có mà con trai không có?" , choices: ["Mẹ", "Chị", "Em", "Tất cả"], answer: 3 },
    { question: "Cái gì con trai có mà con gái không có?" , choices: ["Bố", "Anh", "Em", "Tất cả"], answer: 3 },
    { question: "Cái gì con gái và con trai đều có?" , choices: ["Mẹ", "Chị", "Em", "Tất cả"], answer: 3 },
    { question: "Cái gì có một mà không có hai, có hai mà không có ba?" , choices: ["Cái số 1", "Cái số 2", "Cái số 3", "Cái số 4"], answer: 1 },
    { question: "Con gì đẻ ra con nhưng không phải là mẹ?" , choices: ["Con gà", "Con mèo", "Con chó", "Con ma"], answer: 0 },
    { question: "Con gì không có chân mà vẫn đi được?" , choices: ["Con ốc", "Con sên", "Con rắn", "Con ma"], answer: 3 },
    { question: "Con gì càng to càng nhẹ?" , choices: ["Con voi", "Con bò", "Con ngựa", "Cái bong bóng"], answer: 3 },
    { question: "Con gì càng nhỏ càng nặng?" , choices: ["Hạt cát", "Hạt bụi", "Hạt gạo", "Hòn đá"], answer: 0 },
    { question: "Con gì không có cánh mà bay được?" , choices: ["Con chim", "Con dơi", "Con muỗi", "Con ma"], answer: 3 }


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
    const nowquestion =currentQuestion+1;
    questionElement.textContent ="Câu "+nowquestion+": " + question.question;
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
  

    if (currentQuestion === 10-1) {
        
        if(score >= 7) {
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
    sumpoint.textContent= "Điểm:"+score+"/10";
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
    sumpoint.textContent="Điểm:"+0+"/10";
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
    sumpoint.textContent="Điểm:"+score+"/10";
}
function displayLoseScreen() {
    quizContainer.style.display = "none";
    loseContainer.style.display = "block";
}
