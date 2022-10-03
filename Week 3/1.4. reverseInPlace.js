function solve(arr){
let output = '';
for(i = 1; i <= arr.length; i++){
    output += arr[arr.length - i] + ' ';
}
console.log(output);
}
solve(['abc', 'def', 'hig', 'klm', 'nop'])