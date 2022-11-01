function convirstToObject(jsonString) {
    let person = JSON.parse(jsonString);
    Object.keys(person);
    for (let key of Object.keys(person)) {
        console.log(`${key}: ${person[key]}`);
    }
}
convirstToObject('{"name": "George", "age": 40, "town": "Sofia"}');