// Create an array of 40 people names
var people = ["Quỳnh Anh", "Gia Bảo", "Thanh Bình", "Anh Bình", "Đức Hiếu", "Trung Hiếu", "Phương Hiếu", "Quách Hữu", "Quỳnh Hương", "Khánh Hương", "Xuân Huy", "Ngọc Huyền", "Lâm", "Ly", "Linh", "Thảo Nhi", "Yến Nhi", "Ngân", "Như Ngọc", "Ngọc Thảo",
    "Phương Thảo", "Đông Thuật", "Đông Thục", "Huyền Thục", "Trâm", "Thường", "Thi", "Anh Kim", "Thắng", "Toàn",
    "Trang", "Trường", "Uyên", "Trân", "Hoàng Oanh", "Tú Oanh", "Thu Hằng", "Khánh Hương", "Thảo Trinh",
    "Lê Anh Thư", "Phạm Anh Thư"
];
//flags
var isRunning = false;

//funny responds :
var responds = ["Chấp nhận sự thật ik","Đời mà","hên xui thôi","random là random"]

// Get the button element from the HTML document
var button = document.getElementById("generate");

// Get the result element from the HTML document
var result = document.getElementById("result");

//adding functions ( brainstorming)
const vietnameseAlphabet = 'aăâbcdđeêghiklmnoôơpqrstuưvxy';
function getRandomString() {
    let stringLength = Math.floor(Math.random() * (10 - 3 + 1)) + 3;
    let randomString = '';
    for (let i=0; i<stringLength; i++) {
      randomString += vietnameseAlphabet[Math.floor(Math.random() * vietnameseAlphabet.length)];
    }
    return randomString;
}
//audio stuffs
var currentAudio = null;

function playAudio(src) {
    if (currentAudio) {
        currentAudio.pause();
    }
    currentAudio = new Audio(src);
    currentAudio.play();
}

//acutally the main function
function writeRandomLine(name) {
    let duration = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    let intervalId = setInterval(() => { 
        //if (Math.random() < 0.5) {
        //    result.textContent = getRandomString() + '\n';
        //    playAudio('resource/computer click sound v3.wav');
        //} else {
            result.textContent = people[Math.floor(Math.random() * people.length)] + '\n';
            playAudio('resource/computer click sound v3.wav');
        //}
        duration -= 0.1;
        if(duration <= 0) {
          clearInterval(intervalId);
          result.textContent = name;
          playAudio('resource/short-success-sound.wav');
        if (name == "Đông Thuật") {
            thuatvid();
        }
          chapnhansuthat();
          isRunning = false;
        }
     }, 100);
}
//////////////////

/////////////////

var thuatvidTimeout;
var chapnhansuthatTimeout;

function thuatvid() {
    thuatvidTimeout = setTimeout(function() {
        var rickroll = document.getElementById("rickroll");
        rickroll.src = "resource/yt1s.com - Rick Astley  Never Gonna Give You Up Official Music Video.mp4";
        rickroll.width = 64*2;
        rickroll.height = 36*2;
        rickroll.controls = false;
        rickroll.autoplay = true;
        rickroll.style.display = "block";
        rickroll.style.float="center";
    }, 10000);
}

function chapnhansuthat() {
    chapnhansuthatTimeout = setTimeout(function() {
        var indexx = Math.floor(Math.random() * responds.length);
        acceptit.textContent = responds[indexx];
    }, 5000);
}

// Define a function that randomly selects one person from the array and displays it on the web page
function randomPerson() {
    if (isRunning){
        return;
    }
    isRunning=true;
    acceptit.textContent = "";
    var rickroll = document.getElementById("rickroll");
    rickroll.style.display = "none";
    rickroll.pause();

    // Cancel any previous timeouts
    clearTimeout(thuatvidTimeout);
    clearTimeout(chapnhansuthatTimeout);

    // Generate a random index between 0 and 39
    var index = Math.floor(Math.random() * people.length);

    // Get the name at that index
    var name = people[index];

    //name="Đông Thuật";

    // Display the name on the web page
    writeRandomLine(name);
}

// Add an event listener to the button element that calls the randomPerson function when clicked
button.addEventListener("click", randomPerson);
