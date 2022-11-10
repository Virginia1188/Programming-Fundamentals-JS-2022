function solve(arr) {

    let addressBook = {};

    arr.forEach(el => {
        let [name, address] = el.split(':');
        addressBook[name] = address;
    });


    let sorted = Object.entries(addressBook).sort((a, b) => a[0].localeCompare(b[0]));
    for (const [key, value] of sorted) {
        console.log(`${key} -> ${value}`);
    }
}
solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);