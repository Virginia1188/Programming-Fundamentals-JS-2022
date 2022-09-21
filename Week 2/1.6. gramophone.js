function solve(band,album,song){
    let songDuration = (album.length * band.length) * song.length / 2;
    let rotation = Math.ceil(songDuration / 2.5);
    console.log(`The plate was rotated ${rotation} times.`);
}
solve('Rammstein', 'Sehnsucht', 'Engel')