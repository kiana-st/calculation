let displayBox = document.querySelector('.display');
let listButton = document.querySelectorAll('.show-display');



document.querySelector('.calculate').addEventListener('click', calculate);
document.querySelector('.all-clear').addEventListener('click', allClear);
document.querySelector('.clear-last').addEventListener('click', clear);


listButton.forEach(i => {
    i.addEventListener("click", showDisplay)
})


function showDisplay(e) {
    const x = e.target.innerText;
    console.log(x)
    if (displayBox.innerText == 0) {
        return displayBox.innerText = x;
    } else {
        return displayBox.innerText += x;
    }
}



function calculate() {
    let result = displayBox.innerText;
    displayBox.innerText = eval(result)
}


function allClear() {
    displayBox.innerHTML = 0;
}


function clear() {
    let text = displayBox.innerText;
    if (text.length == 1) {
        displayBox.innerText = 0;
    } else {
        displayBox.innerText = text.substring(0, text.length - 1)
    }
}

