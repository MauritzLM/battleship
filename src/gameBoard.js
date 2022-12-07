// const ship = require("./ship");

const ship = require("./ship");

// gameboard factory

const gameBoard = () => {

    const playerShips = {};

    const missedShots = [];

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
    const placeShip = (ship, placement) => {
        // check that ship length == coords length
        if (ship.getLength() !== placement.length) {
            return 'incorrect placement';
        }

        // check that coords are valid

        // add ship to player ships
        const name = ship.getName();
        playerShips[name] = [];
        playerShips[name][0] = ship;
        playerShips[name][1] = [...placement];

        return playerShips;
    }

    // receive attack method
    const receiveAttack = (coords) => {
        // search player placements for coords
        for (const ship in playerShips) {
            let placementsArr = playerShips[ship][1];
            for (let i = 0; i < placementsArr.length; i++) {
                // if (found) return true
                if (coords.toString() === placementsArr[i].toString()) {
                    // add hit to ship
                    playerShips[ship][0].hit();
                    // check if sunk
                    playerShips[ship][0].isSunk();
                    return true;
                }
            }
        }

        // if (!found) add to missed shots and return false
        missedShots.push(coords);
        return false;
    }

    return { createBoard, placeShip, receiveAttack };
}

module.exports = gameBoard;