function solve(input) {
    let companyList = {};
    for (const line of input) {
        let [company, id] = line.split(' -> ');
        let ids = new Set();
        if (companyList.hasOwnProperty(company)) {
            companyList[company].add(id);
            continue;
        }
        companyList[company] = new Set([id]);
    }
    for (const [key, value] of Object.entries(companyList).sort((a, b) => a[0].localeCompare(b[0]))) {
        console.log(key);
        for (const id of value) {
            console.log(`-- ${id}`);
        }
    }
}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);