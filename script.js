const diceResultElement = document.getElementById("diceResult");
const rollButton = document.getElementById("rollButton");

function rollDice() {
    const diceRoll = Math.floor(Math.random() * 6) + 1; // ১ থেকে ৬ এর মধ্যে র্যান্ডম সংখ্যা
    diceResultElement.textContent = `ডাইসের ফলাফল: ${diceRoll}`;
}

// বোতাম ক্লিক করার সময় ডাইস রোল করা
rollButton.onclick = rollDice;

// ২৫টি ঘর তৈরি করা
const board = document.querySelector(".board");
for (let i = 0; i < 25; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.textContent = i + 1; // ঘরের নম্বর দেখানো
    board.appendChild(cell);
}
