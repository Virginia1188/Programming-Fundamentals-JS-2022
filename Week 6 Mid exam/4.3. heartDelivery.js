function heartDelivery(commands) {
    let neighborhood = commands.shift().split('@').map(Number);
    let placesLeft = neighborhood.length;
    let lastPosition = 0;
    let currentPosition = 0;

    while (commands != "Love!") {
        let currentLine = commands[0];
        let currentCommand = currentLine.split(' ');
        let command = currentCommand[0];
        let jump = Number(currentCommand[1]);
        

        if (currentPosition + jump < neighborhood.length) {
            currentPosition = currentPosition + jump;
        } else {
            currentPosition = 0;
        }

        if (neighborhood[currentPosition]) {
            if (neighborhood[currentPosition] <= 0) {
                console.log(`Place ${currentPosition} already had Valentine's day.`);
            } else {
                neighborhood[currentPosition] -= 2;
                if (neighborhood[currentPosition] <= 0) {
                    console.log(`Place ${currentPosition} has Valentine's day.`);
                    placesLeft--;
                }
            }
        } else {
            if (neighborhood[0] <= 0) {
                console.log(`Place 0 already had Valentine's day.`);
            } else {
                neighborhood[0] -= 2;
                if (neighborhood[0] <= 0) {
                    console.log(`Place 0 has Valentine's day.`);
                    placesLeft--;
                }
            }
        }
        lastPosition = currentPosition;
        currentLine = commands.shift();
    }

    console.log(`Cupid's last position was ${lastPosition}.`);
    if (placesLeft <= 0) {
        console.log("Mission was successful.");
    } else {
        console.log(`Cupid has failed ${placesLeft} places.`);
    }
}
heartDelivery(["2@2@2",
"Jump 2",
"Jump 1",
"Jump 1",
"Love!"])
;