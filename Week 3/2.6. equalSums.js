function solve(arr) {
    let arrElement = 0;
    let flag = false;
    for (let i = 0; i <= arr.length - 1; i++) {

        let leftSum = 0;
        let rightSum = 0;
        for (let j = i - 1; j >= 0; j--) {
            leftSum += Number(arr[j]);
        }
        for (let l = i + 1; l <= arr.length - 1; l++) {
            rightSum += Number(arr[l]);
        }
        if (leftSum === rightSum) {
            arrElement = i;
            flag = true;
        }
    }
    if (flag === false) {
        console.log(`no`);
    } else {
        console.log(arrElement);
    }
}
solve([1, 2, 3, 3]);