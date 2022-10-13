function smallestTwoNumbers(arr) {
    let smallestNums = arr.sort((a, b) => a - b).slice(0, 2);
    console.log(smallestNums.join(' '));
}
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);