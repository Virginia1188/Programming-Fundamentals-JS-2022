function solve(arr) {
    class Employee {
        constructor(name, personalNum) {
            this.name = name;
            this.personalNum = personalNum;
        }
    }
    let allEmployees = [];
    for (let i = 0; i < arr.length; i++) {
        let name = arr[i];
        let personalNum = name.length;
        let employee = new Employee(name, personalNum);
        allEmployees.push(employee);
    }
    allEmployees.forEach((i) => console.log(`Name: ${i.name} -- Personal Number: ${i.personalNum}`));
}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
);