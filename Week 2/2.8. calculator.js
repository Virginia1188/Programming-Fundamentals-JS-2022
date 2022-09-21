function solve(n1,op,n2){
    if (op == "+"){
        console.log((n1 + n2).toFixed(2));
    }else if(op == "-"){
        console.log((n1 - n2).toFixed(2));
    }else if(op == "/"){
        console.log((n1 / n2).toFixed(2));
    }else if(op == "*"){
        console.log((n1 * n2).toFixed(2));
    }
}
solve(5,
    '+',
    10
    )