function fibbonaci(num) {
    let result = [0, 1];
    if (num < 0) {
        console.log("Enter a number bigger than 0");
        return;
    } else if (num === 0) {
        return result[0];
    } else if (num === 1) {
        return result;
    }
    for (let i = 2; i < num; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }
    return result;
}

console.log(fibbonaci(13));

function fibbonaciRecursive(num) {
    if (num === 1) {
        return [0, 1];
    } else {
        let result = fibbonaciRecursive(num - 1);
        result.push(result[result.length - 1] + result[result.length - 2]);
        return result;
    }
}

console.log(fibbonaciRecursive(8));
