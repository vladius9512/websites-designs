const {
    square,
    sumOfPositives,
    getNameInitials,
    differenceMaxMin,
    numeronyms,
    factorial,
    counterOfElem,
    filterStudents,
    filterByCategories,
} = require("./arrayPractice");

test("Square all the array elements. For [1,2,3,4,5] it should be [1,4,9,16,25", () => {
    expect(square([1, 2, 3, 4, 5])).toStrictEqual([1, 4, 9, 16, 25]);
});

test("Sum only the positive elements from array [1,-4,12,0,-3,29,-150] to be 42", () => {
    expect(sumOfPositives([1, -4, 12, 0, -3, 29, -150])).toEqual(42);
    expect(sumOfPositives([])).toBe(0);
});

test("Return only the first letter of each word so that str = George Raymond Richard Martin equals GRRM", () => {
    expect(getNameInitials("George Raymond Richard Martin")).toEqual("GRRM");
});

test("Find the difference between the oldest and youngest. So if the ages are [13,63,56,45,65], it should return [13,67,54]", () => {
    expect(
        differenceMaxMin([
            {
                name: "a",
                age: 13,
            },
            {
                name: "b",
                age: 56,
            },
            {
                name: "c",
                age: 45,
            },
            {
                name: "d",
                age: 67,
            },
            {
                name: "e",
                age: 65,
            },
        ])
    ).toEqual([13, 67, 54]);
});

test("Good luck everyone should equal g2d l2k e6e", () => {
    expect(numeronyms("good luck everyone")).toEqual("g2d l2k e6e");
});

test("factorial of a number, so that 6 should be 720", () => {
    expect(factorial(6)).toBe(720);
});

test("counts the elements in array of arrays", () => {
    expect(
        counterOfElem([
            ["a", "b", "c"],
            ["c", "d", "f"],
            ["d", "f", "g"],
        ])
    ).toEqual({
        a: 1,
        b: 1,
        c: 2,
        d: 2,
        f: 2,
        g: 1,
    });
});

test("filter the students from the array who have an average score bigger than the one asked", () => {
    expect(
        filterStudents(
            [
                { name: "a", scores: [90, 85, 92] },
                { name: "b", scores: [75, 70, 85] },
                { name: "c", scores: [90, 95, 85] },
                { name: "d", scores: [100, 100, 100] },
            ],
            90
        )
    ).toEqual([{ name: "d", average: 100 }]);
});

test("Calculate the average price of products in each category and return only the categories with average bigger than price", () => {
    expect(
        filterByCategories(
            [
                { name: "Product 1", price: 20, category: "Electronics" },
                { name: "Product 2", price: 30, category: "Clothes" },
                { name: "Product 3", price: 40, category: "Electronics" },
                { name: "Product 4", price: 50, category: "Clothes" },
                { name: "Product 5", price: 60, category: "Clothes" },
                { name: "Product 6", price: 70, category: "Electronics" },
                { name: "Product 7", price: 80, category: "Clothes" },
                { name: "Product 8", price: 90, category: "Electronics" },
            ],
            50
        )
    ).toEqual([
        { category: "Electronics", average: 55 },
        { category: "Clothes", average: 55 },
    ]);
});
