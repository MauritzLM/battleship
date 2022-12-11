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

        // check that coords are valid(adjacent and not occupied)

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
                    // check if ship is sunk
                    playerShips[ship][0].isSunk();
                    // check if all ships have been sunk 

                    return true;
                }
            }
        }

        // if (!found) add to missed shots and return false
        missedShots.push(coords);
        return false;
    }

    const allShipsSunk = () => {
        for (const ship in playerShips) {
            // get the sunk status of ship
            let sunk = playerShips[ship][0].isSunk();
            if (!sunk) {
                return false;
            }

        }
        return true
    }

    return { createBoard, placeShip, receiveAttack, missedShots, allShipsSunk };
}

module.exports = gameBoard;