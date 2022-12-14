const player = require("../src/player");
const gameBoard = require("../src/gameBoard");
const ship = require("../src/ship");

// test taking turns
test('taking turns', () => {
    const newPlayer = player();
    newPlayer.changeTurn();
    expect(newPlayer.isTurn()).toBe(false);
})

// making an attack/guess
test('making an attack', () => {
    const newPlayer = player();
    // create enemy board
    const enemyBoard = gameBoard();
    expect(newPlayer.makeAttack(['A', 1], enemyBoard)).toBe('attack made');
    // expect(newPlayer.isTurn()).toBe(false);
})


// test cpu plays: random coords, legal moves
test('making a random attack', () => {
    const newPlayer = player();
    // enemy board
    const enemyBoard = gameBoard();
    expect(newPlayer.makeRandomAttack(enemyBoard)).toEqual([]);
})