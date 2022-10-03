function solve(arr, magicNumber) {

    for (let i = 0; i <= arr.length - 1; i++) {
        let currentElement = arr[i];

        for (j = i + 1; j <= arr.length - 1; j++) {
            let nextElement = arr[j];
            if (currentElement + nextElement == magicNumber) {
                console.log(`${currentElement} ${nextElement}`);
            }
        }
    }
}
solve([14, 20, 60, 13, 7, 19, 8],
    27
);