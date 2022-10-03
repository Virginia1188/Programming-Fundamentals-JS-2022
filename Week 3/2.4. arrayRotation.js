function solve(arr, rotations) {
    let newArr = [];
    for (let j = 0; j <= rotations - 1; j++) {
        newArr = [];
        for (let i = 0; i <= arr.length - 2; i++) {
            newArr[i] = arr[i + 1];
        }
        newArr.push(arr[0]);
        arr = newArr;
    }
    console.log(newArr.join(' '));
}
solve([32, 21, 61, 1], 4)