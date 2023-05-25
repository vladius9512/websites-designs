const capitalize = require("./capitalize");

test("bro to equal Bro", () => {
    expect(capitalize("bro")).toBe("Bro");
});

test("aliba riba pigga to equal Aliba riba pigga", () => {
    expect(capitalize("aliba riba pigga")).toBe("Aliba riba pigga");
});
