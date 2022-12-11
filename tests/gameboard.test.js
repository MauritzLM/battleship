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
    expect(board.placeShip(mockShip('destroyer', 3), [['A', 1], ['B', 1], ['C', 1]])).toEqual({
        "destroyer": [{
            "getLength": function () { return this.name },
            "getName": function () { return this.length },
        },
        [['A', 1], ['B', 1], ['C', 1]]
        ]
    })
})

// receive attack
test('test receive attack determines if hit', () => {
    const board = gameBoard();
    board.placeShip(ship('destroyer', 3), [['A', 1], ['B', 1], ['C', 1]]);
    expect(board.receiveAttack(['B', 1])).toBe(true);
})

// missed attacks
test('test tracking of missed attacks', () => {
    const board = gameBoard();
    board.placeShip(ship('destroyer', 3), [['A', 1], ['B', 1], ['C', 1]]);
    board.receiveAttack(['B', 1]);
    board.receiveAttack(['B', 2]);
    expect(board.missedShots).toEqual([['B', 2]]);
})

// have all ships been sunk
test('test if all ships have been sunk', () => {
    const board = gameBoard();
    board.placeShip(ship('destroyer', 3), [['A', 1], ['B', 1], ['C', 1]]);
    board.placeShip(ship('patrol', 2), [['F', 5], ['F', 6]]);
    board.receiveAttack(['A', 1]);
    board.receiveAttack(['B', 1]);
    board.receiveAttack(['C', 1]);
    board.receiveAttack(['F', 5]);
    board.receiveAttack(['F', 6]);
    expect(board.allShipsSunk()).toBe(true);
})