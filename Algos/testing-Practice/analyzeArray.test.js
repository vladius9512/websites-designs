const analyzeArray = require("./analyzeArray");

test("for [1,8,3,4,2,6] the results to be 4,1,8,6", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});
