function solve(n1,n2,n3){
    let sum = n1 + n2 + n3;
    if(sum % 1 === 0){
        console.log(`${sum} - Integer`);
    }else{
        console.log(`${sum} - Float`);
    }
}
solve(100, 200, 303)