function solve(n){
    for(i = 1; i <= n; i++){
        let lastDigit = i % 10;
        let firstDigit = parseInt(i/10);
        let sum = firstDigit + lastDigit;

        if(sum == 5){
            console.log(`${i} -> True`);
        }else if(sum == 7){
            console.log(`${i} -> True`);
        }else if (sum == 11){
            console.log(`${i} -> True`);
        }else{
            console.log(`${i} -> False`);
        }
    }
}
solve(15)