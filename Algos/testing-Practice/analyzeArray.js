function analyzeArray(array) {
    const min = Math.min.apply(null, array);
    const max = Math.max.apply(null, array);
    const average = array.reduce((acc, cur) => acc + cur) / array.length;
    return {
        average: average,
        min: min,
        max: max,
        length: array.length,
    };
}

module.exports = analyzeArray;
