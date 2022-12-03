const ship = require("../src/ship");

// hit function
test('number of hits increase when using hit function', () => {
    const newShip = ship(4);
    newShip.hit();
    newShip.hit();
    expect(newShip.getHits()).toBe(2)
})

// issunk function
test('test isSunk function', () => {
    const newShip = ship(1);
    newShip.hit();
    expect(newShip.isSunk()).toBe(true);
})