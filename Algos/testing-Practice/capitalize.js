function capitalize(string) {
    const firstLetter = string.slice(0, 1);
    return firstLetter.toUpperCase() + string.slice(1);
}

module.exports = capitalize;
