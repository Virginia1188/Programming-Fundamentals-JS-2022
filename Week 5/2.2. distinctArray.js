function distinctArray(arrOfNums) {
    for (let i = 0; i < arrOfNums.length; i++) {
        let currentNum = arrOfNums[i];
        for (let j = arrOfNums.length; j > i; j--) {
            let nextNum = arrOfNums[j];
            if (currentNum === nextNum) {
                arrOfNums.splice(j, 1);
            }
        }
    }
    console.log(arrOfNums.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);