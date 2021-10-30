const finalScore = document.querySelector("#final-score");

finalScore.innerHTML = `${localStorage.getItem(
  "finalScore"
)} / ${totalQuestions}`;
