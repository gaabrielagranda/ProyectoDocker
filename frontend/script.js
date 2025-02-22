const board = document.getElementById("board");
let currentPlayer = "X";
let cells = ["", "", "", "", "", "", "", "", ""];

function renderBoard() {
    board.innerHTML = "";
    cells.forEach((value, index) => {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        if (value !== "") cell.classList.add("taken");
        cell.innerText = value;
        cell.addEventListener("click", () => makeMove(index));
        board.appendChild(cell);
    });
}

function makeMove(index) {
    if (cells[index] === "") {
        cells[index] = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        renderBoard();
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let combo of winningCombinations) {
        const [a, b, c] = combo;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            document.getElementById("winner-message").innerText = `¡${cells[a]} gana!`;
            board.innerHTML = "";
            return;
        }
    }
}

function resetGame() {
    cells = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    document.getElementById("winner-message").innerText = "";
    renderBoard();
}

renderBoard();