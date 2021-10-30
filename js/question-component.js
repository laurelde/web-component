const template = document.createElement("template");

template.innerHTML = `
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous" />
<link rel="stylesheet" href="./styles/style.css" />
<div id="question"></div>`;

class Question extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ["question-number", "show-feedback"];
  }

  connectedCallback() {
    this.buildQuestion(this);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "question-number":
        this.buildQuestion(this);
        break;
      case "show-feedback":
        this.showFeedback(this);
        break;
    }
  }

  buildQuestion(elem) {
    const shadow = elem.shadowRoot;
    let questionNumber = elem.getAttribute("question-number");

    if (questionNumber >= totalQuestions) {
      return;
    }

    // Find the correct question number
    let question = data["questions"][questionNumber]["question"];
    let answers = data["questions"][questionNumber]["answers"];

    // Reset Question Root HTML
    shadow.querySelector("#question").innerHTML = null;
    let questionText = "";

    // Display the question
    questionText += `<h2 class="gr-h2 mb-2">${++questionNumber}. ${question}</h2>`;

    // Add each answer
    for (let answer of answers) {
      questionText += `
       <div class="option ${answer["result"]} no-result">
        <input type="radio" class="btn-check"  name="question" id="${answer["answer"]}" autocomplete="off" >
        <label class="btn btn-outline-primary option-label shadow-none" for="${answer["answer"]}">
        ${answer["answer"]}
        </label>
      </div>`;
    }

    questionText += `<div id="feedback"></div>`;
    shadow.querySelector("#question").innerHTML = questionText;
  }

  showFeedback(elem) {
    this.disableQuestions(elem);
    const shadow = elem.shadowRoot;
    let selectedOption = shadow.querySelector("input:checked");
    let feedbackDiv = shadow.querySelector("#feedback");

    if (selectedOption == null) {
      return;
    }

    // Update total correct answers
    let result = "incorrect";
    if (selectedOption.parentElement.classList.contains("correct")) {
      result = "correct";
      correctAnswers++;
      localStorage.setItem("finalScore", correctAnswers);

      // display feedback
      selectedOption.nextElementSibling.classList.remove("btn-outline-primary");
      selectedOption.nextElementSibling.classList.add("btn-outline-success");
      feedbackDiv.innerText = "Correct! Great job.";
      feedbackDiv.classList.add("positive-feedback");
    } else {
      selectedOption.nextElementSibling.classList.remove("btn-outline-primary");
      selectedOption.nextElementSibling.classList.add("btn-outline-danger");
      feedbackDiv.innerText = "Sorry, that's not correct.";
      feedbackDiv.classList.add("negative-feedback");
    }
  }

  disableQuestions(elem) {
    const shadow = elem.shadowRoot;
    let options = shadow.querySelectorAll("input");

    for (let option of options) {
      option.disabled = true;
    }
  }
}

window.customElements.define("question-template", Question);
