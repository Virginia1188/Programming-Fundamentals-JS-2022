function solve(arr) {
    let maxNumbers = [];
    
    for (let i = 0; i < arr.length ; i++) {
        let currentInteger = arr[i];
        let isItBigger = true;
        for (let j = i + 1; j < arr.length; j++) {
            let nextElement = arr[j];
            if (currentInteger > nextElement) {
                continue;
            } else {
                isItBigger = false;
                break;
            }
        }
        if (isItBigger == true) {
            maxNumbers.push(currentInteger);
        }
    }
    console.log(maxNumbers.join(' '));
}
solve([27, 19, 42, 2, 13, 45, 48])