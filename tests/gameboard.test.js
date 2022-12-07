const gameBoard = require("../src/gameBoard");
const ship = require("../src/ship");

test('test placing of ships at given coordinates', () => {
    // ship mock function
    const mockShip = (name, length) => {
        const getName = function () { return name };
        const getLength = function () { return length };
        return { getName, getLength }
    }
    // create a gameboard instance
    const board = gameBoard();

    // place ship on gameboard
    // expect(board.placeShip(mockShip('destroyer', 3), [['A', 1], ['B', 1], ['C', 1]])).toEqual({
    //     "destroyer": [{
    //         "getLength": function () { return this.name },
    //         "getName": function () { return this.length },
    //     },
    //     [['A', 1], ['B', 1], ['C', 1]]
    //     ]
    // })
    expect(board.placeShip(ship('destroyer', 3), [['A', 1], ['B', 1]])).toBe('incorrect placement')
})

test('test receive attack determines if hit', () => {
    const board = gameBoard();
    board.placeShip(ship('destroyer', 3), [['A', 1], ['B', 1], ['C', 1]]);
    expect(board.receiveAttack(['B', 1])).toBe(true);
})

// test('test tracking of missed attacks', () => {

// })

// test('test if all ships have been sunk', () => {

// })