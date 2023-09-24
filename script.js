const quizData = [
  {
      question: "Question 1?",
      choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
      correct: "Choice 1"
  },
  // Add more questions here
];

const quiz = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const submitButton = document.getElementById("submit");
const resultsElement = document.getElementById("results");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const current = quizData[currentQuestion];
  questionElement.textContent = current.question;
  choicesElement.innerHTML = "";
  current.choices.forEach(choice => {
      const li = document.createElement("li");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "choice";
      input.value = choice;
      li.appendChild(input);
      li.appendChild(document.createTextNode(choice));
      choicesElement.appendChild(li);
  });
}

function checkAnswer() {
  const selected = document.querySelector('input[name="choice"]:checked');
  if (!selected) return;
  const userChoice = selected.value;
  const current = quizData[currentQuestion];
  if (userChoice === current.correct) {
      score++;
  }
  currentQuestion++;
  selected.checked = false;
  if (currentQuestion < quizData.length) {
      loadQuestion();
  } else {
      showResults();
  }
}

function showResults() {
  quiz.style.display = "none";
  resultsElement.textContent = `You scored ${score} out of ${quizData.length}`;
}

loadQuestion();

submitButton.addEventListener("click", checkAnswer);
