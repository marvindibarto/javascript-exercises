const palindromes = function (array) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleanedString = array
        .toLowerCase()
        .split("")
        .filter((character) => alphanumerical.includes(character))
        .join('');

    const reversedString = cleanedString.split("").reverse().join("")
    return cleanedString == reversedString
};

// Do not edit below this line
module.exports = palindromes;
