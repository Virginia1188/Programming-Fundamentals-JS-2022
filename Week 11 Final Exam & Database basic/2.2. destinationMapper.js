function solve(input) {
    let regExp = /(=|\/)(?<name>[A-Z][A-Za-z]{2,})\1/g;
    let points = 0;
    let destinations = [];
    let matches = input.matchAll(regExp);
    for (const match of matches) {
        points += match.groups.name.length;
        destinations.push(match.groups.name);
    }
    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${points}`);
}
solve("=Hawai=/Cyprus/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");