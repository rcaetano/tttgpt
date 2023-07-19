# TicTacToe Generated by ChatGPT

**Prompt: I would like to build the game tic-tac-toe to run in a web browser. can you write the code for me using javascript**

Sure, I can provide you with a basic version of the tic-tac-toe game using HTML, CSS and Javascript.

This version will be played directly in the browser and won't include advanced features such as AI for computer players or online multiplayer.

This is the HTML for the game board:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="styles.css" />
  </head>
  <body>
    <h1>Tic Tac Toe</h1>
    <div id="tic-tac-toe-board">
      <div class="row">
        <div class="cell" onclick="makeMove(0, 0)"></div>
        <div class="cell" onclick="makeMove(0, 1)"></div>
        <div class="cell" onclick="makeMove(0, 2)"></div>
      </div>
      <div class="row">
        <div class="cell" onclick="makeMove(1, 0)"></div>
        <div class="cell" onclick="makeMove(1, 1)"></div>
        <div class="cell" onclick="makeMove(1, 2)"></div>
      </div>
      <div class="row">
        <div class="cell" onclick="makeMove(2, 0)"></div>
        <div class="cell" onclick="makeMove(2, 1)"></div>
        <div class="cell" onclick="makeMove(2, 2)"></div>
      </div>
    </div>
    <button onclick="resetBoard()">Reset</button>
    <script src="tictactoe.js"></script>
  </body>
</html>
```

Here is some simple CSS to make the game board look a bit nicer:

```css
/* styles.css */

#tic-tac-toe-board {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.row {
  display: flex;
}

.cell {
  border: 1px solid black;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.cell::before {
  content: "";
  font-size: 2em;
}
```

And here is the Javascript for the game logic:

```javascript
// tictactoe.js

let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let currentPlayer = "X";

function makeMove(row, column) {
  if (board[row][column] !== "") {
    // Cell is already filled.
    return;
  }
  board[row][column] = currentPlayer;
  document.getElementById("tic-tac-toe-board").children[row].children[
    column
  ].textContent = currentPlayer;
  if (checkWinner()) {
    alert(currentPlayer + " is the winner!");
    return;
  }
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWinner() {
  const winningCombinations = [
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];
  for (const combination of winningCombinations) {
    if (
      board[combination[0][0]][combination[0][1]] === currentPlayer &&
      board[combination[1][0]][combination[1][1]] === currentPlayer &&
      board[combination[2][0]][combination[2][1]] === currentPlayer
    ) {
      return true;
    }
  }
  return false;
}

function resetBoard() {
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  currentPlayer = "X";
  const cells = document.getElementsByClassName("cell");
  for (const cell of cells) {
    cell.textContent = "";
  }
}
```

This game can be played by two players taking turns directly in the browser. The game announces the winner and can be reset to play again. The check for a draw is missing in this version. If you want to add more functionality, like the draw-check, an AI opponent, or anything else, you will need to add to this code.

**Prompt: add a team score**

Sure, you can add a score tracking system for each player. You can update the score every time a player wins and display the current score on your webpage.

First, modify your HTML to include elements for the scores:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="styles.css" />
  </head>
  <body>
    <h1>Tic Tac Toe</h1>
    <h3 id="scores">X: 0 - O: 0</h3>
    <div id="tic-tac-toe-board">
      <!-- rest of your HTML... -->
    </div>
    <button onclick="resetBoard()">Reset</button>
    <script src="tictactoe.js"></script>
  </body>
</html>
```

Then, in your Javascript, add variables for the scores and update them and the display when a player wins:

```javascript
// tictactoe.js

// add scores
let scoreX = 0;
let scoreO = 0;

let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let currentPlayer = "X";

function makeMove(row, column) {
  if (board[row][column] !== "") {
    // Cell is already filled.
    return;
  }
  board[row][column] = currentPlayer;
  document.getElementById("tic-tac-toe-board").children[row].children[
    column
  ].textContent = currentPlayer;
  if (checkWinner()) {
    // update and display scores
    if (currentPlayer === "X") {
      scoreX++;
    } else {
      scoreO++;
    }
    updateScores();
    alert(currentPlayer + " is the winner!");
    return;
  }
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function updateScores() {
  document.getElementById("scores").textContent = `X: ${scoreX} - O: ${scoreO}`;
}

// rest of your Javascript...
```

With this, every time a player wins a game, their score will be increased by one and the new scores will be displayed. The scores will persist across games until the page is refreshed. If you want to be able to reset the scores without refreshing the page, you can add a button to do that and a corresponding function in your Javascript.

**Prompt: can you make it pretty, with colors and nice fonts**
Absolutely, CSS is used for this exact purpose. Here's an example of how you could style the game:

```css
/* styles.css */

body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  color: #333;
}

h3 {
  color: #777;
}

#tic-tac-toe-board {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
}

.row {
  display: flex;
}

.cell {
  border: 3px solid #333;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 2em;
  background-color: #fff;
}

.cell::before {
  content: "";
}

button {
  padding: 10px 20px;
  border: none;
  background-color: #333;
  color: #fff;
  font-size: 1em;
  cursor: pointer;
}

button:hover {
  background-color: #777;
}
```

In this CSS, I've changed the background color of the whole page to a light grey (#f4f4f4) and centered the game board both vertically and horizontally. I've also increased the size of the cells and added some styling to the reset button.

I've used a simple sans-serif font (Arial), but you can use any font you like. If you want to use a custom font, you can import it from a service like Google Fonts.

Keep in mind that the colors, sizes and fonts used here are just examples, you should adjust them to suit your preferences.

As of my knowledge cutoff in September 2021, there are also libraries like Bootstrap or Material-UI that can help you style your page in an easier way with pre-built components. They can also help ensure that your game looks good on different devices and screen sizes.

**Prompt: give it a rainbow theme**
Sure, here's an example of a rainbow-themed CSS:

```css
/* styles.css */

body {
  font-family: Arial, sans-serif;
  background-color: #3498db;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  color: #ffffff;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
}

h3 {
  color: #f1c40f;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
}

#tic-tac-toe-board {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
}

.row {
  display: flex;
}

.cell {
  border: 3px solid #f39c12;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 2em;
  background-color: #2ecc71;
  color: #e74c3c;
  transition: background-color 0.3s ease;
}

.cell:hover {
  background-color: #1abc9c;
}

button {
  padding: 10px 20px;
  border: none;
  background-color: #9b59b6;
  color: #ffffff;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #8e44ad;
}
```

In this stylesheet, I've used various colors to create a rainbow theme. The `transition` property added to the `.cell` and `button` classes will make the color change smoothly when these elements are hovered over.

Please note that the colors used are just examples. Feel free to modify them to get the exact look you want.
