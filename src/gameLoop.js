const ship = require("./ship");
const gameBoard = require("./gameBoard");
const player = require("./player");
const ui = require("./ui");


// main gameloop
// 1. setup players and gameboards with predetermined coords
// 2. steps through game turn by turn using only methods from other objects

// create player 
const player1 = player();

// create gameboard
const player1_gameBoard = gameBoard();

// render gameboard
const mainContent = document.createElement("main");
const displayBoard = ui.renderGameBoard(player1_gameBoard.board);

// scoreboard
const renderScoreBoard = ui.renderScoreBoard();
const scoreBoard = renderScoreBoard.createScoreBoard();

// get p elements for both players

// to update scoreboard: renderScoreBoard.updateScore(playerscoreElement, playerBoard.shipsLeft());

mainContent.append(scoreBoard, displayBoard.board);
document.body.appendChild(mainContent);

// placeship

player1_gameBoard.placeShip(ship("patrol", 2), [["B", 3], ["B", 4]]);
player1_gameBoard.placeShip(ship("submarine", 3), [["E", 8], ["F", 8], ["G", 8]])
player1_gameBoard.placeShip(ship("destroyer", 3), [["C", 6], ["C", 7], ["C", 8]]);
player1_gameBoard.placeShip(ship("battleship", 4), [["C", 2], ["D", 2], ["E", 2], ["F", 2]]);
player1_gameBoard.placeShip(ship("carrier", 5), [["I", 5], ["I", 6], ["I", 7], ["I", 8], ["I", 9]]);

const coordsArr = document.querySelectorAll(".player-board div");

const player1Score = document.querySelector(".player1");
const player2Score = document.querySelector(".player2");
displayBoard.renderPlacements(player1_gameBoard.playerShips, coordsArr);


// update player1 scoreboard
renderScoreBoard.updateScore(player1Score, player1_gameBoard.shipsLeft());


// create cpu player
const playerCpu = player();

// change cpu player turn
playerCpu.changeTurn();

// cpu board
const cpu_gameBoard = gameBoard();

const displayCpuBoard = ui.renderGameBoard(cpu_gameBoard.board);
displayCpuBoard.board.className = "cpu-board";
mainContent.appendChild(displayCpuBoard.board);

cpu_gameBoard.placeShip(ship("patrol", 2), [["F", 9], ["G", 9]]);
cpu_gameBoard.placeShip(ship("submarine", 3), [["A", 5], ["A", 6], ["A", 7]])
cpu_gameBoard.placeShip(ship("destroyer", 3), [["D", 5], ["E", 5], ["F", 5]]);
cpu_gameBoard.placeShip(ship("battleship", 4), [["H", 1], ["H", 2], ["H", 3], ["H", 4]]);
cpu_gameBoard.placeShip(ship("carrier", 5), [["J", 6], ["J", 7], ["J", 8], ["J", 9], ["J", 10]]);

const cpuCoords = document.querySelectorAll(".cpu-board div");
displayCpuBoard.renderPlacements(cpu_gameBoard.playerShips, cpuCoords);

// update cpu scoreboard
renderScoreBoard.updateScore(player2Score, cpu_gameBoard.shipsLeft());

// manage turn


// player with current turn makes attack


// add eventlistener if player 1 turn (click attack)
cpuCoords.forEach(div => {
    div.addEventListener('click', (e) => {
        // get attack coords
        let getCoords = e.currentTarget.textContent;
        let coords = getCoords.split(',');
        coords.splice(1, 1, Number(coords[1]));
        // run make attack function
        player1.makeAttack(coords, cpu_gameBoard.board, cpu_gameBoard.receiveAttack);

        // update board ui
        displayCpuBoard.renderShots(cpu_gameBoard.hits(), cpu_gameBoard.missedShots(), cpuCoords);

        //update score 
        renderScoreBoard.updateScore(player2Score, cpu_gameBoard.shipsLeft());

        // check if gameover?*

        console.log(cpu_gameBoard.missedShots());
        console.log(cpu_gameBoard.hits());
    });
});

// change/manage turn*

// make random attack*

// check if gameover*




