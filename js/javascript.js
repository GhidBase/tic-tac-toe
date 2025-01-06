let TicTacToe = (function(player1, player1Symbol, player2, player2Symbol) {
    const gameBoard = [[null, null, null], [null, null, null], [null, null, null]];
    let currentTurn = Math.random() < .5 ? player1 : player2;
    let currentSymbol = currentTurn == player1 ? player1Symbol : player2Symbol;
    console.log(`${currentTurn} makes the first move:`);
    logGameBoard();

    function makeMove(row, column) {
        if (gameBoard[row][column]) {
            console.clear();
            console.log(`Row ${row}, column ${column} is occupied`);
            logGameBoard();
        }
        else {
            console.clear();
            console.log(`${currentTurn} is placing ${currentSymbol} at row ${row}, column ${column}`);
            gameBoard[row][column] = currentSymbol;
            logGameBoard();
            if (checkGameBoard()) {
                console.log(`${checkGameBoard()} wins`)
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
                gameBoard[0][j] != null && gameBoard[1][j] != null && gameBoard[2][j] != null) {
                return gameBoard[0][j];
            }
        }
        
    }

    return {
        makeMove,
    }
});

let game = TicTacToe("Dylan", "X", "Sarah", "O");

// log gamestate as ongoing or who won
// if gamestate !ongoing don't allow new moves
// add reset function