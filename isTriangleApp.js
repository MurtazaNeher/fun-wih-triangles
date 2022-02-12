const inputAngle = document.querySelectorAll(".input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputIsTriangle = document.querySelector("#output-is-triangle");

outputIsTriangle.style.display = "none";

function isTriangle() {
    const sum = calculateSum();
    outputIsTriangle.style.display = "block";

    if (sum === 180) {
        outputIsTriangle.innerText = "Yeah ! The triangle can be formed by your given angles."
    } else {
        outputIsTriangle.innerText = "Oh no ! The triangle can not be formed by your given angles "
    }
}

function calculateSum() {

    const angleOne = inputAngle[0].value;
    const angleTwo = inputAngle[1].value;
    const angleThree = inputAngle[2].value;
    const sum = Number(angleOne) + Number(angleTwo) + Number(angleThree);

    return sum;
}

isTriangleBtn.addEventListener('click', isTriangle);