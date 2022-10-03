function solve(n, arr){
    let newArr = [];
    for(let i = 1; i <= n; i++){
        newArr[newArr.length] = arr[n - i];
    }
    let output = '';
    for(let i = 0; i <= newArr.length - 1; i ++){
        output += newArr[i] + ' ';
    }
    console.log(output);
}
solve(4, [-1, 20, 99, 5])