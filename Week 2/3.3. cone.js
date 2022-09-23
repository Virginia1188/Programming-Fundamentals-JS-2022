function solve(radius,height){
    let volume = (1/3) * Math.PI * (radius ** 2) * height;
    let surface = Math.PI * radius*(radius + Math.sqrt((radius ** 2) + height ** 2));
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${surface.toFixed(4)}`);
}
solve(3,
    5
    )