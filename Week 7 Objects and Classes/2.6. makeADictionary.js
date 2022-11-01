function makeADictionary(arr) {
    let dictionry = {};

    for (const el of arr) {
        let definition = Object.values(JSON.parse(el));
        let term = Object.keys(JSON.parse(el));

        if (!dictionry[term]) {
            dictionry[term];
        }
        dictionry[term] = definition.toString();

    }

    let sorted = Object.keys(dictionry).sort((a, b) => a.localeCompare(b));
    for (const word of sorted) {
        console.log(`Term: ${word} => Definition: ${dictionry[word]}`);
    }
}
makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'

]);