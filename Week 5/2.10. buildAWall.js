function buildAWall(wallSections) {
    let dailyConcrete = [];
    let sortedSection = wallSections.sort((a, b) => a - b);
    let maxDays = 30 - sortedSection[0];
    let totalDays = 0;
    //console.log(maxDays);

    while (maxDays > totalDays) {
        let currentConcrete = 0;
        for (let i = 0; i < wallSections.length; i++) {
            let section = wallSections[i];
            if (section < 30) {
                wallSections[i] += 1;
                currentConcrete += 195;
            }
        }
        totalDays++;
        dailyConcrete.push(currentConcrete);

    }
    let totalPrice = (dailyConcrete.reduce((a, b) => a + b)) * 1900;
    console.log(dailyConcrete.join(', '));
    console.log(`${totalPrice} pesos`);

}
buildAWall([17, 22, 17, 19, 17]);