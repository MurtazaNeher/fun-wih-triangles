const quizForm = document.querySelector(".quiz-from");
const submitAnswerBtn = document.querySelector("#submit-ans-btn");
const output = document.querySelector("#output");

const correctAns = ["1", "Hypotenuse"];

function calculateScore() {
    let score = 0;
    let index = 0;

    const formResults = new FormData(quizForm);

    for (let value of formResults.value) {
        console.log(value);
    }
}

submitAnswerBtn.addEventListener('click', calculateScore);