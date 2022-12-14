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

    // function to style coords depending on status
    const styleCoords = (typeArr, coordsArr, style) => {
        // loop over type array
        typeArr.forEach(type => {
            // loop over coordsArr
            for (let i = 0; i < coordsArr.length; i++) {
                let displayCoords = coordsArr[i].textContent.split(",");
                displayCoords.splice(1, 1, Number(displayCoords[1]));
                // if true add style
                if (type.toString() === displayCoords.toString()) {
                    coordsArr[i].className = style;
                }
            }
        });

    }

    // render placement of ships 
    const renderPlacements = (playerShips, coordsArr) => {
        // change backgroundColor of coords
        for (ship in playerShips) {
            const placementsArr = playerShips[ship][1];

            styleCoords(placementsArr, coordsArr, "placement");
        }
    }

    // update ui after enemy has made attack
    const renderShots = (hits, misses, coordsArr) => {

        styleCoords(hits, coordsArr, "hit");
        styleCoords(misses, coordsArr, "missed");
    }

    // render attacks

    return { board, renderPlacements, renderShots };
}

const renderScoreBoard = () => {

    // method to create scoreboard
    const createScoreBoard = () => {
        const player1Score = document.createElement("p");
        const player2Score = document.createElement("p");
        const scoreDiv = document.createElement("div");

        player1Score.classList.add("player1");
        player2Score.classList.add("player2");
        scoreDiv.classList.add("scoreboard");

        scoreDiv.append(player1Score, player2Score);

        return scoreDiv;
    }

    // method to update score
    const updateScore = (player, playerShipStatus) => {
        // how many ships does player have left?*

        // how enemy ships are left?
        const playerShips = playerShipStatus;
        // update text content of p
        player.textContent = `ships left: ${playerShips}`;
    }

    return { createScoreBoard, updateScore };
}



module.exports = { renderGameBoard, renderScoreBoard };