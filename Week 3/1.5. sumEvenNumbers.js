function solve(arr) {
    let sumOfEven = 0;
    for (i = 0; i <= arr.length; i++) {
        let currentNumber = Number(arr[i]);
        if (currentNumber % 2 == 0) {
            sumOfEven += currentNumber;
        }
    }
    console.log(sumOfEven);
}
solve(['3', '5', '7', '9'])