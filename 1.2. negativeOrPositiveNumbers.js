function negativeOrPositiveNumbers(arr) {
    let numArr = arr.map(Number);
    let newArr = [];

    for (num of numArr) {
        if (num < 0) {
            newArr.unshift(num);
        } else {
            newArr.push(num);
        }
    }
    console.log(newArr.join(`\n`));
}
negativeOrPositiveNumbers(['7', '-2', '8', '9']);