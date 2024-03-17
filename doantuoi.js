const inputElement = document.getElementById("nhaptuoi");
const resultElement = document.getElementById("result");
const buttonElement = document.getElementById("submit");
const morewordsElement = document.getElementById("morewords");

let lolTimeouts = [];

function isNumericString(str) {
    return /^\d+$/.test(str);
}

function dotdotdot() {
    for (let i = 1; i <= 3; i++) {
        lolTimeouts.push(setTimeout(() => {
            resultElement.textContent = ".".repeat(i);
        }, i * 500));
    }
}

function getRandomMessage() {
  const messages = [
    "scanning brain waves",
    "predicting quantum propabilities",
    "choosing quantum propabilities",
    "asking bing for answers",
    "doctor strange is strange"
  ];
  // Randomly pick a message index between 0 and messages.length - 1 (inclusive)
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

function lol() {
    dotdotdot();
    for (let i = 0; i < 5; i++) { // Call lol 5 times to print 5 random messages
        lolTimeouts.push(setTimeout(() => {
            resultElement.textContent = getRandomMessage();
        }, (i + 1) * 2000));
    }
}

function printResult() {
    resultElement.textContent = "";
    morewordsElement.textContent = "";
    lolTimeouts.forEach(clearTimeout);
    lolTimeouts = [];
    const inputValue = inputElement.value;
    if (isNumericString(inputValue) && (Number(inputValue) >= 123 || Number(inputValue) < 0)) {
        dotdotdot();
        lolTimeouts.push(setTimeout(() => {
            resultElement.textContent = "có gì đó lạ lắm , hãy thử lại sau";
        }, 2000));
    } else if (isNumericString(inputValue)) {
        lol();
        lolTimeouts.push(setTimeout(() => {
            resultElement.textContent = "số tuổi của bạn là : " + inputValue;
        }, 12000));
        lolTimeouts.push(setTimeout(() => {
            morewordsElement.textContent = "Cho một tràng vổ tay ";
        }, 16000));
    } else {
        dotdotdot();
        lolTimeouts.push(setTimeout(() => {
            resultElement.textContent = "hình như có gì đó sai sai , hãy thử lại sau";
        }, 2000));
    }
}

buttonElement.addEventListener("click", printResult);
inputElement.addEventListener("keyup", event => {
    if (event.key === "Enter") {
        event.preventDefault();
        printResult();
    }
});