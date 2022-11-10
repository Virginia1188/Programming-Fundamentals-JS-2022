function solve(arrWords) {
    let map = new Map();
    let number = 1;

    arrWords.forEach(word => {

        if (!map.has(word)) {
            map.set(word, 1);
        } else {
            map.set(word, map.get(word) + 1);
        }
    });

    let sorted = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);

    for (const key of sorted) {
        console.log(`${key[0]} -> ${key[1]} times`);
    }
}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);