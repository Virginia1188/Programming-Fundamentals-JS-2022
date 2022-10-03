function solve(input){
    let nonDecreasingArr = [];
    let biggest = 0;
    let allNumbers = input.length;
    for(let i = 0; i < allNumbers; i ++){
        let currentNumber = input[i];
        if(currentNumber >= biggest){
            biggest = currentNumber;
            nonDecreasingArr.push(currentNumber);
        }
    }
    console.log(nonDecreasingArr.join(' '));
}
solve([ 20, 3, 2, 15, 6, 1]);