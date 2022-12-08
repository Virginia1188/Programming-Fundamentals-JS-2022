function solve(input) {
    let text = input.shift();
    let numRegExp = /\d/g;
    let emojiFounder = /::[A-Z][a-z]{2,}::|\*\*[A-Z][a-z]{2,}\*\*/g;
    let numArr = text.match(numRegExp).map((x) => parseInt(x));
    let coolThreshold = numArr.reduce((a, b) => a * b);
    console.log(`Cool threshold: ${coolThreshold}`);
    let emojis = text.match(emojiFounder);
    let emojiObj = {};
    let count = 0;

    for (const emoji of emojis) {
        let sum = 0;
        for (let i = 2; i < emoji.length - 2; i++) {
            const char = emoji[i].charCodeAt();
            sum += char;
        }
        if (sum > coolThreshold) {
            emojiObj[emoji] = sum;
        }
        count++;
    }

    console.log(`${count} emojis found in the text. The cool ones are:`);
    for (const key in emojiObj) {
        console.log(key);
    }

}
solve(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);