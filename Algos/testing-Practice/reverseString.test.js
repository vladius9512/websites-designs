const reverseString = require("./reverseString");

test("asbd to equal dbsa", () => {
    expect(reverseString("asbd")).toBe("dbsa");
});

test("Success to equal sseccuS", () => {
    expect(reverseString("Success")).toBe("sseccuS");
});
