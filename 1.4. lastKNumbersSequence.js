function lastKNumbersSequence(n, k) {
    let sequence = [];
    sequence.push(1);

    for (let i = 1; i < n; i++) {
        let sum = 0;
        if (i < k) {
            for (num of sequence) {
                sum += num;
            }
            sequence.push(sum);
            sum = 0;
        } else {
            let currentElements = sequence.slice(i - k, i);
            sum = currentElements.reduce((x, y) => x + y);
            sequence.push(sum);
            sum = 0;
        }
    }
    console.log(sequence.join(' '));
}
lastKNumbersSequence(8, 2);