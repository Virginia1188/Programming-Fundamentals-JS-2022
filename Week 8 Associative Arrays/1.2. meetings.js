function solve(arr) {

    let meetings = {};

    for (let el of arr) {
        let [day, name] = el.split(' ');
        if (meetings[day]) {
            console.log(`Conflict on ${day}!`);
            continue;
        }
        meetings[day] = name;
        console.log(`Scheduled for ${day}`);
    }
    for (const key in meetings) {
        console.log(`${key} -> ${meetings[key]}`);
    }
}
solve(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']
);