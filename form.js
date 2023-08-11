// form

// selectors

const form = document.querySelector(".form");
const list = document.querySelector("ul");
const questionBox = document.querySelector("#yourQuestion");
const answerBox = document.querySelector("#yourAnswer");
const remainQuestion = document.querySelector(".countQuestion");
const remainAnswer = document.querySelector(".countAnswer");

// function create card

function createCard(question, answer, tag) {
  const newCard = document.createElement("li");
  newCard.classList.add("card-list__item");
  newCard.innerHTML = `<article class="card">
    <h2 class="card__question">
      ${question}
    </h2>
    <button class="card__button-answer" type="button">
    Show answer
    </button>
    <p class="card__answer card__answer--active"> ${answer}   </p>
    <ul class="card__tag-list">
      <li class="card__tag-list-item">${tag}</li>
    </ul>
    <div class="card__button-bookmark">
      <button
        class="bookmark bookmark--active"
        aria-label="bookmark"
        type="button"
      >
        <svg
          class="bookmark__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewbox="0 0 24 24"
        >
          <path
            d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </button>
    </div>
  </article>`;
  list.appendChild(newCard);
}

// event listener for submit btn

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // getting data inputs
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  // call fuction
  createCard(data.yourQuestion, data.yourAnswer, data.tag);
});

// event listener for count question
questionBox.addEventListener("input", (event) => {
  const currentValue = event.target.value.length;
  remainQuestion.innerHTML = `${150 - currentValue} characters left`;
});

// event listener for count question
answerBox.addEventListener("input", (event) => {
  const currentValue = event.target.value.length;
  remainAnswer.innerHTML = `${150 - currentValue} characters left`;
});
