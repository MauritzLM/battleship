const ship = require("./ship");
const gameBoard = require("./gameBoard");
const player = require("./player");
const renderGameBoard = require("./ui");

// main gameloop
// 1. setup players and gameboards with predetermined coords
// 2. steps through game turn by turn using only methods from other objects

// create player 
// const player1 = player(mo);

// create gameboard
const player1_gameBoard = gameBoard();


// render gameboard
const mainContent = document.createElement("main");
mainContent.appendChild(renderGameBoard(player1_gameBoard.board));

document.body.appendChild(mainContent);


