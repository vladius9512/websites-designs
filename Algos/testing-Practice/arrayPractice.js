function square(arr) {
    return arr.map((number) => Math.pow(number, 2));
}

function sumOfPositives(arr) {
    let filtered = arr.filter((elem) => elem > 0);
    if (filtered.length === 0) return 0;
    return filtered.reduce((acc, cur) => acc + cur, 0);
}

function getNameInitials(str) {
    return str
        .split(" ")
        .map((word) => word.slice(0, 1))
        .join("");
}

function differenceMaxMin(input) {
    const ages = input.map((member) => member.age);
    return [
        Math.min(...ages),
        Math.max(...ages),
        Math.max(...ages) - Math.min(...ages),
    ];
}

function numeronyms(string) {
    return string
        .split(" ")
        .map((word) => word.slice(0, 1) + (word.length - 2) + word.slice(-1))
        .join(" ");
}

function factorial(number) {
    const arr = new Array(number).fill(null);
    return arr
        .map((cur, index) => {
            return index + 1;
        })
        .reduce((acc, cur) => acc * cur);
}

function counterOfElem(arr) {
    const flatArr = arr.flat();
    return flatArr.reduce((acc, cur) => {
        if (acc[cur]) {
            acc[cur] += 1;
        } else {
            acc[cur] = 1;
        }
        return acc;
    }, {});
}

function filterStudents(studentsArr, average) {
    const studentsAverage = studentsArr.map((student) => {
        const sum = student.scores.reduce((acc, cur) => acc + cur);
        return { name: student.name, average: sum / student.scores.length };
    });
    return studentsAverage.filter((student) => student.average > average);
}

function filterByCategories(products, price) {
    const productsByCategory = products.reduce((acc, product) => {
        const category = product.category;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(product);
        return acc;
    }, {});
    const avgPriceByCategory = Object.keys(productsByCategory).map(
        (category) => {
            const sum = productsByCategory[category].reduce(
                (acc, product) => acc + product.price,
                0
            );
            return {
                category: category,
                average: sum / productsByCategory[category].length,
            };
        }
    );
    return avgPriceByCategory.filter((category) => category.average > price);
}

module.exports = {
    square,
    sumOfPositives,
    getNameInitials,
    differenceMaxMin,
    numeronyms,
    factorial,
    counterOfElem,
    filterStudents,
    filterByCategories,
};
