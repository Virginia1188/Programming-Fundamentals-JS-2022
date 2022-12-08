function solve(input) {
    let regExp = /@#+(?<item>[A-Z][0-9A-Za-z]{4,}[A-Z])@#+/g;
    let numRegExp = /\d/g;
    let numOfCodes = Number(input.shift());
    let count = 0;
    let lineToCheck = input.shift();
    while (count < numOfCodes) {
        let match = lineToCheck.match(regExp);
        if (match == null) {
            console.log(`Invalid barcode`);

        } else {
            let nums = lineToCheck.match(numRegExp);
            if (nums == null) {
                console.log(`Product group: 00`);
            } else {
                console.log(`Product group: ${nums.join('')}`);
            }
        }
        count++;
        lineToCheck = input.shift();
    }
}
solve(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"]);