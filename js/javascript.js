
const startButton = document.querySelector("#start-button");
let player1Name = document.querySelector("#player-1");
let player2Name = document.querySelector("#player-2");
let inputPanel = document.querySelector(".input-screen");

let gameBoardDom = document.querySelector(".game-board");
let gameBoardArray = [[null, null, null], [null, null, null], [null, null, null]];

let game;

function storeGameBoard() {
    let i = 0;
    let j = 0;
    Array.from(gameBoardDom.children).forEach(child => {
        gameBoardArray[i][j] = child;
        i++;
        if (i > 2) {
            i = 0;
            j++;
        }
    });
    console.log(gameBoardArray)
}

storeGameBoard();


let TicTacToe = (function(player1, player1Symbol, player2, player2Symbol) {
    let gameBoard = [[null, null, null], [null, null, null], [null, null, null]];
    let currentTurn = Math.random() < .5 ? player1 : player2;
    let currentSymbol = currentTurn == player1 ? player1Symbol : player2Symbol;
    let winner = null;
    let gameState = "ongoing";

    // add event listeners
    for (let i = 0; i < 9; i++) {
        let row = Math.trunc(i/3);
        let column = i % 3;
        // console.log(gameBoardArray)
        gameBoardArray[column][row].addEventListener("click", () => {
            game.makeMove(row, column);
        })
    }

    console.log("starting game");
    console.log(`${currentTurn}'s turn:`)

    inputPanel.remove();

    function makeMove(row, column) {
        if (gameState != "ongoing") {
            console.log(`Game is over, ${winner} wins!`)
            return;
        }
        if (gameBoard[row][column]) {
            console.clear();
            console.log(`Row ${row}, column ${column} is occupied`);
            console.log(`${currentTurn}'s turn:`);
            logGameBoard();
        }
        else {
            console.clear();
            console.log(`${currentTurn} is placing ${currentSymbol} at row ${row}, column ${column}`);
            gameBoardArray[column][row].textContent = currentSymbol;
            gameBoard[row][column] = currentSymbol;
            logGameBoard();
            if (checkGameBoard()) {
                winner = checkGameBoard() == player1Symbol ? player1 : player2;
                console.log(`${winner} wins!`)
                gameState = `${winner} wins`;
            }
            else {
                switchTurns();
            }
        }
    }

    function switchTurns() {
        currentTurn = currentTurn == player1 ? player2 : player1;
        currentSymbol = currentTurn == player1 ? player1Symbol : player2Symbol;
        console.log(`${currentTurn}'s turn:`)
    }

    function logGameBoard() {
        console.log("Current board:");
        console.log(gameBoard[0]);
        console.log(gameBoard[1]);
        console.log(gameBoard[2]);
    }

    function checkGameBoard() {
        // Check columns
        for (let j = 0; j < 3; j++) {
            if (gameBoard[j][0] == gameBoard[j][1] && gameBoard[j][1] == gameBoard[j][2] && !gameBoard[j].includes(null)) {
                return gameBoard[j][0];
            }
        }
        

        // Check rows
        for (let j = 0; j < 3; j++) {
            if (
                gameBoard[0][j] == gameBoard[1][j] &&
                gameBoard[1][j] == gameBoard[2][j] &&
                gameBoard[0][j] != null && gameBoard[1][j] != null && gameBoard[2][j] != null
            ) {
                return gameBoard[0][j];
            }
        }

        // Check Diagonal
        if (
            gameBoard[0][0] == gameBoard[1][1] &&
            gameBoard[1][1] == gameBoard[2][2] &&
            gameBoard[0][0] != null && gameBoard[1][1] != null && gameBoard[2][2] != null
        ) {
            return gameBoard[0][0];
        }

        if (
            gameBoard[0][2] == gameBoard[1][1] &&
            gameBoard[1][1] == gameBoard[2][0] &&
            gameBoard[0][2] != null && gameBoard[1][1] != null && gameBoard[2][0] != null
        ) {
            return gameBoard[0][2];
        }
        
    }

    function reset() {
        console.clear();
        gameBoard = [[null, null, null], [null, null, null], [null, null, null]];
        if (winner != null) {
            console.log(`${winner} won last game and gets to go first!`)
        }
        else {
            currentTurn = Math.random() < .5 ? player1 : player2;
            currentSymbol = currentTurn == player1 ? player1Symbol : player2Symbol;
        }
        winner = null;
        gameState = "ongoing";

        console.log(`${currentTurn} makes the first move:`);
        logGameBoard();
    }

    return {
        makeMove,
        reset,
    }
});


function startGame(player1, player2) {
    game = TicTacToe(player1, "X", player2, "O");
}

// startGame("Dylan", "Sarah");

startButton.addEventListener("click", () => {
    startGame(player1Name.value, player2Name.value)
});