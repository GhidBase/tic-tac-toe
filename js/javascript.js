let TicTacToe = (function(player1, player1Symbol, player2, player2Symbol) {
    const gameBoard = [["X", null, null], [null, null, null], [null, null, null]];
    let firstMove = Math.random() < .5 ? player1 : player2;
    console.log(`${firstMove} makes the first move`)

    function makeMove(column, row) {
        if (gameBoard[row][column]) {
            console.log(`Row ${row}, column ${column} is occupied`);
        }
        else {
            console.log(`Row ${row}, column ${column} is empty, placing symbol`);
        }
    }

    return {
        makeMove,
    }
});

let game = TicTacToe("Dylan", "X", "Sarah", "O");