function sumFirstAndLast(arr){
    let numArr = arr.map(Number);
    let sum = numArr[0] + numArr[numArr.length - 1];
    console.log(sum);
}
sumFirstAndLast(['20', '30', '40'])