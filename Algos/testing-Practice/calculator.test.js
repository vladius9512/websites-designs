const calculator = require("./calculator");

test("1+2 to equal 3", () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test("10-2 to equal 8", () => {
    expect(calculator.subtract(10, 2)).toBe(8);
});

test("33/0 to throw error", () => {
    expect(calculator.divide(33, 0)).toBe("Cant divide by 0");
});

test("33/3 to return 11", () => {
    expect(calculator.divide(33, 3)).toBe(11);
});

test("33*233 to return 7689", () => {
    expect(calculator.multiply(33, 233)).toBe(7689);
});
