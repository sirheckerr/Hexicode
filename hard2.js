let colorSample = null;
let answers = [];
let correctAnswerIndex = null;
let score = 0;
let total = 0;

window.onload = function () {
  colorSample = document.getElementById("colorSample");

  answers.push(document.getElementById("a"));
  answers.push(document.getElementById("b"));
  answers.push(document.getElementById("c"));
  answers.push(document.getElementById("d"));
  answers.push(document.getElementById("e"));
  answers.push(document.getElementById("f"));
  answers.push(document.getElementById("g"));
  answers.push(document.getElementById("h"));


  for (let i = 0; i < answers.length; i++) {
    answers[i].addEventListener("click", function () {
      markIt(this);
    });
  }

  loadNewQuestion();
};

function markIt(elem) {
  total++;

  if (elem.dataset.correct === "true") {
    score++;
  }

  document.getElementById("score").innerHTML = score + " / " + total;

  window.setTimeout(function () {
    if (elem.dataset.correct === "true") {
      colorSample.innerHTML = "Correct!";
    } else {
      colorSample.innerHTML = "Incorrect";
    }
  }, 100);

  window.setTimeout(function () {
    if (total === 10) {
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
  colorSample.innerHTML = colorCode;
  colorSample.style.backgroundColor = '';

  correctAnswerIndex = Math.floor(Math.random() * answers.length);

  for (let i = 0; i < answers.length; i++) {
    if (i === correctAnswerIndex) {
      answers[i].style.backgroundColor = colorCode;
      answers[i].dataset.correct = "true"; // Mark this answer as correct
    } else {
      let randomColor = getRandomHexCode();
      answers[i].style.backgroundColor = randomColor;
      answers[i].dataset.correct = "false"; // Mark other answers as incorrect
    }
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
