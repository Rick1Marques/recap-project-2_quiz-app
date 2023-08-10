// phew… not a lot going on here. Please add some code!

// Bookmark button

const bookmarkButton = document.querySelector(".bookmark");

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

// Aswer button

const answerButton = document.querySelector(".card__button-answer");
const answerCard = document.querySelector(".card__answer");

function textAnswerButton(text) {
  if (text === "Show answer") {
    return "Hide answer";
  }
  return "Show answer";
}

answerButton.addEventListener("click", () => {
  answerCard.classList.toggle("card__answer--active");
  answerButton.innerHTML = textAnswerButton(answerButton.innerHTML);
});
