const base = document.querySelector("#base");
const height = document.querySelector("#height");
const calculateAreaBtn = document.querySelector("#calculate-area-btn");
outputAreaMssg = document.querySelector("#output-area-mssg");
outputArea = document.querySelector("#output-area");
const clearBtn = document.querySelector("#clear-btn");

outputArea.style.display = "none";
outputAreaMssg.style.display = "block";


function calculateArea() {
    if (base.value && height.value) {

        const sum = Number(base.value) * Number(height.value);
        const area = (sum * 0.5).toFixed(2);
        outputArea.style.display = "block";
        outputAreaMssg.style.display = "none";
        outputArea.innerText = "Area of triangle is : " + area + " sq. unit.";
    } else {
        outputArea.style.display = "block";
        outputAreaMssg.style.display = "none";
        outputArea.innerText = "Please fill both the fields";
    }
}

function clear() {
    base.value = "";
    height.value = "";
    outputArea.style.display = "none";
    outputAreaMssg.style.display = "block";
}

calculateAreaBtn.addEventListener('click', calculateArea);
clearBtn.addEventListener('click', clear);