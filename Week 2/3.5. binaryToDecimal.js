function solve(n){
    let sum = 0;
    let binary = n.toString();
    for(i = 0; i <= binary.length -1; i ++){
        sum = (sum * 2) + Number(binary[i]);
    }
    console.log(sum);
}
solve(00001001);