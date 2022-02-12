const sideOne = document.querySelector("#side-one");
const sideTwo = document.querySelector("#side-two");
const calculateHypotenuseBtn = document.querySelector("#calculate-hypotenuse-btn");
const outputHypotenuse = document.querySelector("#output-hypotenuse");

outputHypotenuse.style.display = "none";


function calculateSumOfSquares(a, b) {


    const sum = a * a + b * b;

    return sum;

}

function calculateHypotenuse() {

    const sumOfSquares = calculateSumOfSquares(Number(sideOne.value), Number(sideTwo.value));

    const hypotenuse = Math.sqrt(sumOfSquares);

    outputHypotenuse.style.display = "block";

    outputHypotenuse.innerText = "The lenght of hypotenuse is : \n" + hypotenuse;
}

calculateHypotenuseBtn.addEventListener('click', calculateHypotenuse);