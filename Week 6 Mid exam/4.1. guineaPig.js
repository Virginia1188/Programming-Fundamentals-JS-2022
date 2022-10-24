function guineaPig(input) {
    let food = Number(input.shift()) * 1000;
    let hey = Number(input.shift()) * 1000;
    let cover = Number(input.shift()) * 1000;
    let guineaPigWeight = Number(input.shift()) * 1000;

    for (i = 1; i < 31; i++) {
        food -= 300;
        if (i % 2 == 0) {
            hey -= food * 0.05;
        }
        if (i % 3 == 0) {
            cover -= guineaPigWeight / 3;
        }
        if (food <= 0 || hey <= 0 || cover <= 0) {
            break;
        }
    }
    if (food <= 0 || hey <= 0 || cover <= 0) {
        console.log("Merry must go to the pet store!");
    } else {
        console.log(`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hey / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`);
    }
}
guineaPig((["10",
    "5",
    "5.2",
    "1"])

);