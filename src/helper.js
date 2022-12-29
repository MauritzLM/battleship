// get random num inclusive min and max
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// function compareArrays(arr1, arr2) {
//     if (arr1.toString() === arr2.toString()) {
//         return true;
//     }
//     return false
// }

module.exports = getRandomIntInclusive;
