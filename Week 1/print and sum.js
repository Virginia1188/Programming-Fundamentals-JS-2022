function solve(n,m){
    let sum = 0;
    let str = "";

    for(i = n; i <= m; i++){
        sum += i;
        str += i + " ";
    }
    console.log(str);
    console.log(`Sum: ${sum}`);
}
solve(0, 26)