const progressTemplate = document.createElement("template");

progressTemplate.innerHTML = `
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous" />
<link rel="stylesheet" href="./styles/style.css" />
<div class="container" style="padding-bottom: 0">
  <div class="header">
    <div id="progress-header">
      <h1 class="gr-h1">Quiz Progress</h1>
    </div>
    <div class="progress" style="height: 20px; width: 100%">
        <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" id="progress-bar"></div>
    </div>
  </div>
</div>`;

class Progress extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(progressTemplate.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ["question-number"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "question-number":
        this.updateProgress(this);
        break;
    }
  }

  updateProgress(elem) {
    const shadow = elem.shadowRoot;
    let questionNumber = elem.getAttribute("question-number");
    let progress = (questionNumber / totalQuestions) * 100;
    let progressBar = shadow.querySelector("#progress-bar");
    progressBar.style.width = `${progress}%`;

    progressBar.setAttribute("aria-valuenow", progress);
  }
}

window.customElements.define("progress-bar", Progress);
