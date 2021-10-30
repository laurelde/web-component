// Document Elements
const submitButton = document.querySelector("#submit-button");
const nextButton = document.querySelector("#next-button");
const questionRoot = document.querySelector("question-template");
const progressBar = document.querySelector("progress-bar");
const feedback = document.querySelector("#feedback");

// Event Listeners
submitButton.addEventListener("click", submitQuestion);
nextButton.addEventListener("click", nextQuestion);

function submitQuestion() {
  questionRoot.setAttribute("show-feedback", true);
  nextButton.hidden = false;
  submitButton.hidden = true;
}

function nextQuestion() {
  currentQuestionNumber++;
  questionRoot.setAttribute("question-number", currentQuestionNumber);

  if (currentQuestionNumber >= totalQuestions) {
    window.location.href = "./summary.html";
  } else {
    nextButton.hidden = true;
    submitButton.hidden = false;
    updateProgress();
  }
}

function updateProgress() {
  progressBar.setAttribute("question-number", currentQuestionNumber);
}
