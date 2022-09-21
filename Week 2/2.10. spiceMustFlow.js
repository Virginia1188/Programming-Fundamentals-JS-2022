function solve(y){
    let days = 0;
    let totalYield = 0;
    let yield = y;
    let currentY = 0;
    while(yield >= 100){
        days++;
        totalYield += yield - 26;
        yield -= 10;
    }

    if(totalYield >= 26){
        totalYield -= 26;
    }
    console.log(days);
    console.log(totalYield);
}
solve(200)