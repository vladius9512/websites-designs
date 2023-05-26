function caesarCipher(string, shift) {
    const lettersArr = string.split("");
    let shiftedString = "";
    for (const letter of lettersArr) {
        if (
            letter !== "!" &&
            letter !== "?" &&
            letter !== "," &&
            letter !== "." &&
            letter !== " "
        ) {
            let asciiVal = toAscii(letter);
            if (asciiVal >= 65 && asciiVal <= 90) {
                if (asciiVal + shift <= 90) {
                    asciiVal += shift;
                } else {
                    asciiVal = ((asciiVal + shift) % 90) + 64;
                }
            } else if (asciiVal + shift <= 122) {
                asciiVal += shift;
            } else {
                asciiVal = ((asciiVal + shift) % 122) + 96;
            }
            shiftedString += fromAsciiToChar(asciiVal);
        } else {
            shiftedString += letter;
        }
    }
    return shiftedString;
}

function toAscii(char) {
    return char.charCodeAt();
}

function fromAsciiToChar(value) {
    return String.fromCharCode(value);
}

module.exports = caesarCipher;
