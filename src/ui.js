// dom module
// 1. display both players boards render them using info from gameboard class/factory
// 2. let user click on coord in enemy board

const renderGameBoard = (gameBoard) => {

    // render board
    const board = document.createElement("div");
    board.classList.add("player-board");

    for (let j = 0; j < gameBoard.length; j++) {
        // create block
        let coord = document.createElement("div");
        coord.textContent = `${gameBoard[j].toString()}`;
        board.appendChild(coord);
    }


    // render placement of ships * 
    const renderPlacements = (playerShips, coordsArr) => {
        // change backgroundColor of coords
        for (ship in playerShips) {
            const placementsArr = playerShips[ship][1];

            // console.log(placementsArr);
            for (let i = 0; i < placementsArr.length; i++) {
                for (let j = 0; j < coordsArr.length; j++) {
                    // compare placement[i] with coords[j]
                    let displayCoords = coordsArr[j].textContent.split(",");
                    displayCoords.splice(1, 1, Number(displayCoords[1]));
                    // console.log(displayCoords);
                    // console.log(placementsArr[i]);
                    if (placementsArr[i].toString() === displayCoords.toString()) {
                        coordsArr[j].classList.add("placement");
                        // break;
                    }
                }
            }
        }
    }

    // render attacks

    return { board, renderPlacements };
}

module.exports = renderGameBoard;