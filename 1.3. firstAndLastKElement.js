function firstAndLastKNumbers(arrOfNums) {
    let k = arrOfNums.shift();
    
    let firstKElements = arrOfNums.slice(0, k);
    let lastKElements = arrOfNums.slice(arrOfNums.length - k, arrOfNums.length);
    console.log(firstKElements.join(' '));
    console.log(lastKElements.join(' '));
}
firstAndLastKNumbers([2,
    7, 8, 9]

);