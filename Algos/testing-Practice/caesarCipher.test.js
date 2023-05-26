const cipher = require("./caesarCipher");

test("abc shifted by 1 to equal bcd", () => {
    expect(cipher("abc", 1)).toBe("bcd");
});

test("z shifted by 1 to equal a", () => {
    expect(cipher("z", 1)).toBe("a");
});

test("y shifted by 3 to equal b", () => {
    expect(cipher("y", 3)).toBe("b");
});

test("Y shifted by 3 to equal b", () => {
    expect(cipher("Y", 3)).toBe("B");
});

test("Umpa, Lumpa! shifted by 10 to Ewzk, Vewzk!", () => {
    expect(cipher("Umpa, Lumpa!", 10)).toBe("Ewzk, Vewzk!");
});
