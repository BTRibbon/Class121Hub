// Create an array of 40 people names
var people=["Quỳnh Anh", "Gia Bảo", "Thanh Bình", "Anh Bình", "Đức Hiếu", "Trung Hiếu", "Phương Hiếu", "Quách Hữu", "Quỳnh Hương", "Khánh Hương", "Xuân Huy", "Ngọc Huyền", "Lâm", "Ly", "Linh", "Thảo Nhi", "Yến Nhi", "Ngân", "Như Ngọc", "Ngọc Thảo", 
  "Phương Thảo","Đông Thuật","Đông Thục","Huyền Thục","Trâm","Thường","Thi","Anh Kim","Thắng","Toàn",
  "Trang","Trường","Uyên","Trân","Hoàng Oanh","Tú Oanh","Thu Hằng","Khánh Hương","Thảo Trinh",
  "Lê Anh Thư","Phạm Anh Thư"];

// Get the button element from the HTML document
var button = document.getElementById("generate");

// Get the result element from the HTML document
var result = document.getElementById("result");

// Define a function that randomly selects one person from the array and displays it on the web page
function randomPerson() {
    acceptit.textContent="";
   // Generate a random index between 0 and 39
   var index = Math.floor(Math.random() * people.length);

   // Get the name at that index
   var name = people[index];
   if (name=="Đông Thuật"){
    setTimeout(function() {
      var rickroll = document.getElementById("rickroll");
      rickroll.src = "yt1s.com - Rick Astley  Never Gonna Give You Up Official Music Video.mp4";
      rickroll.width = 302;
      rickroll.height = 320;
      rickroll.controls = false;
      rickroll.autoplay = true;
  }, 1000);
   }

   // Display the name on the web page
   result.textContent = name;

   setTimeout(function() {
      acceptit.textContent = "chấp nhận sự thật đi";
    }, 5000);

}

// Add an event listener to the button element that calls the randomPerson function when clicked
button.addEventListener("click", randomPerson);


