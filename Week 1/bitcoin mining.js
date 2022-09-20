function bitcoinMining(input){
    let index = 0;
    let gold = Number(input[0]);
    let days = 0;
    let dayBought = 0;
    let btc = 0;
    let leftMoney = 0;
    let money = 0;

    while(days <= 1000){
        gold = Number(input[index]);

        if (gold < 0){
            break;
        }
        if (gold === "NaN"){
            break;
        }

        money = gold * 67.51;
        days++;
        if(days % 3 == 0){

        }
        if(money >= 11949.16){
            btc++;
            dayBought = days;
            money = money - 11949.16;
        }
        index++;
    }
    if(btc >= 1){
        console.log(`Bought bitcoins: ${btc}`);
        console.log(`Day of the first purchased bitcoin: ${dayBought}`);
        console.log(`Left money: ${money.toFixed(2)} lv.`);
    }else{
        console.log(`Bought bitcoins: ${btc}`);
        console.log(`Left money: ${money.toFixed(2)} lv.`);
    }
}
bitcoinMining([100, 200, 300])