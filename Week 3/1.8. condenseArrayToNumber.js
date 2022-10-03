function solve(arr){
    let condensedArr = [];
    while(arr.length > 1){
        for(i = 0; i <= arr.length - 2; i++){
            condensedArr[i] = arr[i] + arr[i + 1];
        }
        arr = condensedArr;
        condensedArr = [];
    }
    console.log(arr.toString());
}
solve([1])