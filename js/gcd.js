// Returns the gcd of two integers x, y
// For testing in browser
function gcd(x, y) {
// For npm test
// exports.gcd = function(x, y) {
    if (isNaN(parseFloat(x))) {
        return null;
    }
    if (arguments.length === 1) {
        return x;
    }
    if (isNaN(parseFloat(y))) {
        return null;
    }
    if (x % 1 !== 0 || y % 1 !== 0) {
        return "Error. Non-integer parameters";
    }
    if (x < 0 || y < 0) {
        return "Error. Negative parameters";
    }
    if (x === 0 || y === 0) {
        return 0;
    }
    return gcdIterator(x, y);
}

function gcdIterator(x, y) {
    return y === 0 ? x : gcdIterator(y, x % y);
}