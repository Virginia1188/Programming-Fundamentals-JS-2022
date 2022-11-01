function solve(arr) {
    let numOfSongs = arr.shift();
    let typeSong = arr.pop();
    let songs = [];

    class Song {
        constructor(type, name, time) {
            this.typeList = type;
            this.name = name;
            this.time = time;
        }
    }

    for (let i = 0; i < numOfSongs; i++) {
        let [type, name, time] = arr[i].split('_');
        let song = new Song(type, name, time);
        songs.push(song);
    }

    if (typeSong === "all") {
        songs.forEach((i) => console.log(i.name));
    } else {
        let filtered = songs.filter((i) => i.typeList === typeSong);
        filtered.forEach((i) => console.log(i.name));
    }
}
solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']

);