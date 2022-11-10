function solve(arr) {
    let map = new Map();

    for (const el of arr) {
        let line = el.split(' ');
        let name = line.shift();
        let grades = line.map(Number);

        if (!map.has(name)) {
            map.set(name, []);
        }

        for (const grade of grades) {
            map.get(name).push(grade);
        }
    }

    function avgGrade(arrGrades) {
        let total = 0;

        arrGrades.forEach(el => {
            total += el;
        });
        let average = total / arrGrades.length;
        return average;
    }

    let sorted = Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
    for (let key of sorted) {
        console.log(`${key[0]}: ${avgGrade(key[1]).toFixed(2)}`);
    }
}
solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);