
    let colorSample = null;
    let answers = [];
    let correctColorCode = null;
    let score = 0;
    let total = 0;
    let currentQuestion = 0;

    window.onload = function () {
      colorSample = document.getElementById("colorSample");

      answers.push(document.getElementById("a"));
      answers.push(document.getElementById("b"));

      for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", function () {
          markIt(this);
        });
      }

      loadNewQuestion();
    };

    function markIt(elem) {
      let gotItRight = false;
      total++;

      if (elem.innerHTML == correctColorCode) {
        score++;
        gotItRight = true;
      }

      document.getElementById("score").innerHTML = score + " / " + total;

      window.setTimeout(function () {
        if (gotItRight) {
          colorSample.innerHTML = "Correct!";
        } else {
          colorSample.innerHTML = "Incorrect :(";
        }
      }, 100);

      window.setTimeout(function () {
        if (total == 10) {
          displayLightBox(); // Show the lightbox if the total is 10
        } else {
          loadNewQuestion();
        }
      }, 1300);
    }

    function displayLightBox() {
      let message = "Your score was: " + score + "/" + total;
      document.getElementById("message").innerHTML = message;
      document.getElementById("lightbox").style.display = "block";
    }

    function closeLightBox() {
      document.getElementById("lightbox").style.display = "none";
    }

    // Event listener for the play-again button
    document.getElementById("play-again-button").addEventListener("click", function () {
      total = 0;
      score = 0;
      closeLightBox();
      loadNewQuestion();
    });

    function loadNewQuestion() {
      let colorCode = getRandomHexCode();
      colorSample.innerHTML = "";
      colorSample.style.backgroundColor = colorCode;

      let solution = Math.floor(Math.random() * 4);
      for (let i = 0; i < answers.length; i++) {
        if (i == solution) {
          answers[i].innerHTML = colorCode;
        } else {
          answers[i].innerHTML = getRandomHexCode();
        }
      }

      correctColorCode = colorCode;

      if (currentQuestion == 0) {
        closeLightBox();
      }
    }

    function getRandomHexCode() {
      let result = [];
      let hexRef = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
      ];

      result.push("#");

      for (let n = 0; n < 6; n++) {
        result.push(hexRef[Math.floor(Math.random() * 16)]);
      }

      return result.join("");
    }



//home button
  function home(){ 
    window.location.href='normal.html'
  }
