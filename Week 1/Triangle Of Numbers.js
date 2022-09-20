function solve(n){
    let str = "";
    for (i = 1; i <= n; i++){
        for(j = 1; j <= i; j++){
            str += i + " ";
        }
        console.log(str);
        str = "";
    }
}
solve(5)