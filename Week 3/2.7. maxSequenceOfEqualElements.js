function solve(arr) {
    let maxSequence = [];
    let maxCount = 0;
    for (i = 0; i <= arr.length - 1; i++) {
        let currentElement = arr[i];
        let currentSequence = [];
        currentSequence.push(currentElement);
        currentCount = 0;

        for (j = i + 1; j <= arr.length - 1; j++) {
            let nextElement = arr[j];
            if (currentElement == nextElement) {
                currentCount++;
                currentSequence.push(nextElement);
            } else {
                break;
            }
        }

        if (currentCount > maxCount) {
            maxCount = currentCount;
            currentCount = 0;
            maxSequence = currentSequence;
            currentSequence = [];
        } else {
            currentSequence = [];
            currentCount = 0;
        }
    }
    console.log(maxSequence.join(' '));
}
solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);