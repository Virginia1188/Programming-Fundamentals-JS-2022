function solve(arr){
    let arrSum = 0;
    let newArr = [];
    let newArrSum = 0;
    for(i = 0; i <= arr.length - 1; i ++){
        let currentNumber = Number(arr[i]);
        arrSum += currentNumber;
        if(currentNumber % 2 == 0){
            currentNumber += i;
        }else{
            currentNumber -= i;
        }
        newArrSum += currentNumber;
        newArr.push(currentNumber);
    }
    console.log(newArr);
    console.log(arrSum);
    console.log(newArrSum);
}
solve([-5, 11, 3, 0, 2])