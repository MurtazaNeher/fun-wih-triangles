const inputAngle = document.querySelectorAll(".input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputIsTriangle = document.querySelector("#output-is-triangle");
const outputIsTriangleMssg = document.querySelector("#output-is-triangle-mssg");
const clearBtn = document.querySelector("#clear-btn");


outputIsTriangle.style.display = "none";
outputIsTriangleMssg.style.display = "block";


function isTriangle() {
    const sum = calculateSum();
    outputIsTriangleMssg.style.display = "none";

    outputIsTriangle.style.display = "block";

    if (inputAngle[0].value && inputAngle[1].value && inputAngle[2].value) {
        if (sum === 180) {
            outputIsTriangle.innerText = "Yeah ! The triangle can be formed by your given angles."
        } else {
            outputIsTriangle.innerText = "Oh no ! The triangle can not be formed by your given angles "
        }
    } else {
        outputIsTriangle.innerText = "Please fill all the fields"
    }
}

function calculateSum() {

    const angleOne = inputAngle[0].value;
    const angleTwo = inputAngle[1].value;
    const angleThree = inputAngle[2].value;
    const sum = Number(angleOne) + Number(angleTwo) + Number(angleThree);

    return sum;
}

function clear() {
    inputAngle[0].value = "";
    inputAngle[1].value = "";
    inputAngle[2].value = "";

    outputIsTriangleMssg.style.display = "block";
    outputIsTriangle.style.display = "none";


}
isTriangleBtn.addEventListener('click', isTriangle);
clearBtn.addEventListener('click', clear);