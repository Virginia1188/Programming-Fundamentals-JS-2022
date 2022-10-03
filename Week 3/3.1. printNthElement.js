function solve(arr) {
    let n = Number(arr[arr.length - 1]);
    let newArr = [];
    for (let i = 0; i < arr.length - 1; i += n) {
        let currentElement = arr[i];
        newArr.push(currentElement);
    }
    console.log(newArr.join(' '));

}
solve(['1', '2', '3', '4', '5', '6'])