const getRandomIntInclusive = require("../src/helper")

// create a player
const player = (name) => {

    let myTurn = true;

    const attacksMade = [];

    const isTurn = () => { return myTurn };

    const changeTurn = () => {
        if (myTurn) {
            myTurn = false
        }
        else {
            myTurn = true;
        }
    };

    // check if a move is valid
    const isvalidMove = (coords, attacksMade, board) => {

        let valid = false
        // check coords and array 
        for (let i = 0; i < attacksMade.length; i++) {
            // compare board[i] with coords
            if (coords.toString() === attacksMade[i].toString()) {
                return valid;
            }
        }

        // check coords in board
        for (let i = 0; i < board.length; i++) {
            // compare board[i] with coords
            if (coords.toString() === board[i].toString()) {
                valid = true
            }
        }

        return valid;
    }

    // enter coordinates to attack on enemy board
    const makeAttack = (coords, enemyBoard, receiveAttack) => {
        // check correct turn
        if (myTurn) {
            // see if coords are valid
            if (isvalidMove(coords, attacksMade, enemyBoard)) {
                attacksMade.push(coords);

                receiveAttack(coords);

                return `attack made at ${coords}`;
            }

            else {
                return 'invalid coordinates';
            }
            // call receive attack on other board
            // enemyBoard.receiveAttack(coords); ?


            // change turn and return*

        }

        return 'not your turn';
    }

    // get random coords given a board
    const getRandomCoords = (enemyBoard) => {
        const boardLength = enemyBoard.length;
        const randomNum = getRandomIntInclusive(0, boardLength - 1);
        const randomCoords = enemyBoard[randomNum];

        return randomCoords;
    }

    // make a valid random attack
    const makeRandomAttack = (enemyBoard) => {

        if (myTurn) {
            // get random coords
            let randomCoords = getRandomCoords(enemyBoard);

            while (!isvalidMove(randomCoords, attacksMade, enemyBoard)) {
                // get new coords while invalid
                randomCoords = getRandomCoords(enemyBoard);
            }

            // make attack
            // enemyBoard.receiveAttack(randomCoords);
            attacksMade.push(randomCoords);

            return `attack made at ${randomCoords}`;
        }

        return 'not your turn';
    }

    return { isTurn, changeTurn, makeAttack, makeRandomAttack, name };
}

module.exports = player;