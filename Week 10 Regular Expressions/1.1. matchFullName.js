function solve(strInput) {
    let regExp = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let validNames = [];
    // let validName = regExp.exec(strInput);
    while ((validName = regExp.exec(strInput)) !== null) {
        validNames.push(validNames[0]);
    }
    console.log(validNames.join(' '));
}
solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");