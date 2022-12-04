// const ship = require("./ship");

// gameboard factory

const gameBoard = () => {

    const playerPlacements = {}

    const missedShots = {};

    // create grid
    const createBoard = () => {

        const board = [];

        for (let i = 65; i <= 74; i++) {
            for (let j = 1; j <= 10; j++) {
                let coords = [String.fromCharCode(i), j];
                board.push(coords);
            }
        }
        return board;
    }

    // placeship method
    const placeShip = (ship, coords) => {
        // check that ship length == coords length
        if (ship.getLength() !== coords.length) {
            return 'incorrect placement';
        }

        else {

            playerPlacements[ship.getName()] = [...coords];

        }

        return playerPlacements;

    }

    // receive attack method

    return { createBoard, placeShip };
}

module.exports = gameBoard;