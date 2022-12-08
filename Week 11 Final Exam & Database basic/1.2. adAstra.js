function solve(input) {
    let str = input.shift();
    let regExp = /(#|\|)(?<item>[A-Za-z]+\s*[A-Za-z]+\s*)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<cal>\d+)\1/gm;
    let totalCal = 0;

    while ((matched = regExp.exec(str)) != null) {
        let cal = Number(matched.groups.cal);
        totalCal += cal;
    }
    let days = Math.floor(totalCal / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    while ((matched = regExp.exec(str)) != null) {
        let cal = Number(matched.groups.cal);
        let item = matched.groups.item;
        let date = matched.groups.date;
        console.log(`Item: ${item}, Best before: ${date}, Nutrition: ${cal}`);
    }
}
solve(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);