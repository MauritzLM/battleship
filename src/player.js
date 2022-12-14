import { getRandomIntInclusive } from "./helper";

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
    }

    const makeAttack = (coords, enemyBoard) => {
        // check correct turn
        if (myTurn) {
            // call receive attack on other board
            enemyBoard.receiveAttack(coords);
            attacksMade.push(coords);
            return 'attack made';
        }

        return 'not your turn';
    }

    const makeRandomAttack = (enemyBoard) => {

        if (myTurn) {
            // get random coords
            const boardLength = enemyBoard.length;
            const randomNum = getRandomIntInclusive(0, boardLength);
            const randomCoords = enemyBoard[randomNum];

            // check coords are not in attacksMade array

            // make attack
            enemyBoard.receiveAttack(randomCoords);
            attacksMade.push(randomCoords);

            return randomCoords;
        }

        return 'not your turn';
    }

    return { isTurn, changeTurn, makeAttack, makeRandomAttack, name };
}

module.exports = player;