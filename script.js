let count = 0;

const counterButton = document.getElementById("counterButton");
const countDisplay = document.getElementById("countDisplay");

function test() {
    count += 1;
    countDisplay.textContent = count;
}

counterButton.addEventListener('click', test);