const gameBoard = require("../src/gameBoard");
const ship = require("../src/ship");

test('test placing of ships at given coordinates', () => {
    // create a gameboard instance
    const board = gameBoard();

    // place ship on gameboard
    expect(board.placeShip(ship('destroyer', 3), [['A', 1], ['B', 1], ['C', 1]])).toEqual({ "destroyer": [['A', 1], ['B', 1], ['C', 1]] })
})

// test('test receive attack determines if hit', () => {

//     expect(board.receiveAttack(['A', 1])).toBe(true);
// })

// test('test tracking of missed attacks', () => {

// })

// test('test if all ships have been sunk', () => {

// })