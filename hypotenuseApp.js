const sideOne = document.querySelector("#side-one");
const sideTwo = document.querySelector("#side-two");
const calculateHypotenuseBtn = document.querySelector("#calculate-hypotenuse-btn");
const outputHypotenuse = document.querySelector("#output-hypotenuse");
const outputHypotenuseMssg = document.querySelector("#output-hypotenuse-mssg");
const clearBtn = document.querySelector("#clear-btn");


outputHypotenuse.style.display = "none";
outputHypotenuseMssg.style.display = "block";



function calculateSumOfSquares(a, b) {


    const sum = a * a + b * b;

    return sum;

}

function calculateHypotenuse() {

    outputHypotenuseMssg.style.display = "none";

    outputHypotenuse.style.display = "block";
    if (sideOne.value > 0 && sideTwo.value>0) {
        const sumOfSquares = calculateSumOfSquares(Number(sideOne.value), Number(sideTwo.value));
        const hypotenuse = Math.sqrt(sumOfSquares).toFixed(2);

        outputHypotenuse.innerText = "The lenght of hypotenuse is : \n" + hypotenuse + " unit";
    } else {
        outputHypotenuse.innerText = "Please fill all the fields with positive number"
    }
}

function clear() {
    outputHypotenuse.style.display = "none";
    outputHypotenuseMssg.style.display = "block";
    sideOne.value = "";
    sideTwo.value = "";
}
calculateHypotenuseBtn.addEventListener('click', calculateHypotenuse);
clearBtn.addEventListener('click', clear);