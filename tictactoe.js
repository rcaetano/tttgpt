// tictactoe.js

let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let currentPlayer = 'X';

function makeMove(row, column) {
    if (board[row][column] !== '') {
        // Cell is already filled.
        return;
    }
    board[row][column] = currentPlayer;
    document.getElementById('tic-tac-toe-board').children[row].children[column].textContent = currentPlayer;
    if (checkWinner()) {
        alert(currentPlayer + ' is the winner!');
        return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
    const winningCombinations = [
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
    ];
    for (const combination of winningCombinations) {
        if (board[combination[0][0]][combination[0][1]] === currentPlayer &&
            board[combination[1][0]][combination[1][1]] === currentPlayer &&
            board[combination[2][0]][combination[2][1]] === currentPlayer) {
            return true;
        }
    }
    return false;
}

function resetBoard() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    currentPlayer = 'X';
    const cells = document.getElementsByClassName('cell');
    for (const cell of cells) {
        cell.textContent = '';
    }
}
