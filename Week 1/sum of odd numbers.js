function solve(n){
    let sum = 0;
    let counter = 1;

    for (i = 1; counter <= n; i++){
        if (i % 2 == 1){
            console.log(i);
            sum += i;
            counter++;
        }else{
            continue;
        }
    }
    console.log(`Sum: ${sum}`);
}
solve(3)