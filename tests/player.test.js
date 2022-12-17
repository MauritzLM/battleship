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
    const enemyBoard = gameBoard();
    expect(newPlayer.makeAttack(['A', 1], enemyBoard.board)).toBe('attack made at A,1');
    expect(newPlayer.makeAttack(['A', 1], enemyBoard.board)).toBe('invalid coordinates');
})


// test cpu plays: random coords, legal moves
test('making a random valid attack', () => {
    const newPlayer = player();
    // enemy board
    const enemyBoard = gameBoard();
    expect(newPlayer.makeRandomAttack(enemyBoard.board)).toEqual('attack made at coords');
})

// // test legal move
// test('checking if an attack is legal', () => {
//     const newPlayer = player();
//     const enemyBoard = gameBoard();
//     expect(newPlayer.makeAttack(['A', 1], enemyBoard.board)).toBe(true);
// })