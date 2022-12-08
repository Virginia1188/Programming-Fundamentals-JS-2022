function solve(input) {
    let stops = input.shift();

    let line = input.shift();
    while (line != 'Travel') {
        let [command, ...arguments] = line.split(':');
        switch (command) {
            case 'Add Stop':
                let index = Number(arguments[0]);
                let addStr = arguments[1];
                if (index >= 0 && index <= stops.length) {
                    stops = stops.slice(0, index) + addStr + stops.slice(index);
                }
                console.log(stops);
                break;
            case 'Remove Stop':
                let startIndex = Number(arguments[0]);
                let endIndex = Number(arguments[1]);
                if (startIndex >= 0 && startIndex <= stops.length && endIndex >= 0 && endIndex + 1 <= stops.length) {
                    let subStr = stops.substring(startIndex, endIndex + 1);
                    stops = stops.replace(subStr, '');
                }
                console.log(stops);
                break;
            case 'Switch':
                let oldStr = arguments[0];
                let newStr = arguments[1];
                if (stops.includes(oldStr)) {
                    let splitted = stops.split(oldStr);
                    stops = splitted.join(newStr);
                }
                console.log(stops);
                break;
        }
        line = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}
solve(['Albania:Bulgaria:Cyprus:Deuchland',
    'Add Stop:3:Nigeria',
    'Remove Stop:4:8',
    'Switch:Albania: Azərbaycan',
    'Travel']);