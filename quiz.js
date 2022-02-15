const quizForm = document.querySelector('.quiz-form');
const submitAnswerBtn = document.querySelector("#submit-ans-btn");
const output = document.querySelector("#output");

output.style.display = "none";

const correctAns = [
    "1",
    "Hypotenuse",
    "30°",
    "acute-angled",
    "30°",
    "45°",
    "no"

];

function calculateScore() {
    let score = 0;
    let index = 0;

    const formResults = new FormData(quizForm);

    for (let value of formResults.values()) {

        if (value === correctAns[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    output.style.display = "block";
    output.innerText = "Your score is : " + score;
}

submitAnswerBtn.addEventListener('click', calculateScore);