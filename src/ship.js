// ship factory function
const ship = (name, length) => {
    let hits = 0;
    let beenSunk = false;

    const getHits = () => hits;
    const getLength = () => length;
    const getName = () => name;

    const hit = () => {
        hits++;
    }

    const isSunk = () => {
        if (!beenSunk && length === hits) {
            beenSunk = true
        }
        return beenSunk;
    }

    return { getLength, getHits, getName, hit, isSunk }

}

module.exports = ship;