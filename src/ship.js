// ship factory function
const ship = (length) => {
    // length = length;
    let hits = 0;
    let beenSunk = false;

    const getHits = () => hits;

    const hit = () => {
        hits++;
    }

    const isSunk = () => {
        if (!beenSunk && length === hits) {
            beenSunk = true
        }
        return beenSunk;
    }

    return { getHits, hit, isSunk }

}

module.exports = ship;