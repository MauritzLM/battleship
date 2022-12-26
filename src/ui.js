// dom module
// 1. display both players boards render them using info from gameboard class/factory
// 2. let user click on coord in enemy board

const renderGameBoard = (gameBoard) => {

    // render board
    const board = document.createElement("div");
    board.classList.add("player-board");

    // render each column

    //for (let i = 0; i < 10; i++) {
    // create column
    // let column = document.createElement("div");

    for (let j = 0; j < gameBoard.length; j++) {
        // create block
        let coord = document.createElement("div");
        coord.textContent = `${gameBoard[j].toString()}`;
        board.appendChild(coord);
    }
    // board.appendChild(column);
    // }

    // render coord in each column

    // render placement of ships 

    // render attacks

    return board;
}

module.exports = renderGameBoard;