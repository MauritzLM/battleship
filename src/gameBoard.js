
// gameboard factory

const gameBoard = () => {

    const playerShips = {};

    const boardStatus = {
        missedShots: [],
        hits: [],
        shipsSunk: 0,
    };

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

    const board = createBoard();

    // check if all ships have been sunk
    const allShipsSunk = () => {
        const numberOfShips = Object.keys(playerShips).length;
        if (boardStatus.shipsSunk === numberOfShips) {
            return true;
        }

        return false;
    }

    // get missed shots
    const missedShots = () => {
        return boardStatus.missedShots;
    }

    // get hits
    const hits = () => {
        return boardStatus.hits;
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
        // check if coords are valid   ?
        // check board and missed shots
        // search player placements for coords
        for (const ship in playerShips) {
            let placementsArr = playerShips[ship][1];
            for (let i = 0; i < placementsArr.length; i++) {
                // if (found) return true
                if (coords.toString() === placementsArr[i].toString()) {
                    // add hit to ship
                    playerShips[ship][0].hit();
                    // add to recorded shots;
                    boardStatus.hits.push(coords);
                    // check if ship is sunk
                    if (playerShips[ship][0].isSunk()) {
                        boardStatus.shipsSunk++;
                    };

                    // check if all ships have been sunk *

                    return true;
                }
            }
        }

        // if (!found) add to missed shots and return false
        boardStatus.missedShots.push(coords);
        return false;
    }


    return { board, placeShip, receiveAttack, missedShots, hits, allShipsSunk };
}

module.exports = gameBoard;