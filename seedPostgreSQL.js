const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker');

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const dataGeneratonSongs = () => {
  const writeSongs = fs.createWriteStream('songs.csv');
  writeSongs.write('likes,reposts,followers,tracks,song_name,user_id_songs,length\n', 'utf8');

  function writeTenMillionSongs(writer, encoding, callback) {
    let i = 1000000;

    function write() {
      let ok = true;
      do {
        i -= 1;
        const fakeLength = `${getRandomIntInclusive(0, 1)}` + ':' + `${getRandomIntInclusive(0, 59)}` + ':' + `${getRandomIntInclusive(0, 59)}`;
        const likes = getRandomIntInclusive(0, 20000);
        const reposts = getRandomIntInclusive(0, 20000);
        const followers = getRandomIntInclusive(0, 20000);
        const tracks = getRandomIntInclusive(0, 20000);
        const song_name = faker.hacker.verb() + ' ' +  faker.hacker.adjective() + ' ' +  faker.hacker.noun();
        const user_id_songs = getRandomIntInclusive(1, 10000000);
        const length = fakeLength;
        const data = `${likes},${reposts},${followers},${tracks},${song_name},${user_id_songs},${length}`;
        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
      } while (i > 0 && ok);
      if (i > 0) {
        writer.once('drain', write);
      }
      if (i === 100000) {
        console.log('wrote one million');
      }
      if (i === 200000) {
        console.log('wrote two million');
      }
      if (i === 500000) {
        console.log('wrote five million');
      }
      if (i === 1000000) {
        console.log('wrote ten million');
      }
    }
    write();
  }

  writeTenMillionSongs(writeSongs, 'utf-8', () => {
    writeSongs.end();
  });
};
dataGeneratonSongs();


/* CREATE TABLE "songs" (
  "song_id" SERIAL PRIMARY KEY,
  "likes" integer,
  "reposts" integer,
  "followers" integer,
  "song_name" varchar(30),
  "user_id_songs" varchar(30), -- references user table with user_id
  "length" varchar(10)
); */


/* const dataGeneraton = () => {

  for (let x = 1; x <= 5; x += 1) {
    const dataSet = [];
    const csvWriter = createCsvWriter({
      path: `./CsvFiles/songs${x}.csv`,
      header: [
        { id: 'likes', title: 'likes' },
        { id: 'reposts', title: 'reposts' },
        { id: 'followers', title: 'followers' },
        { id: 'tracks', title: 'tracks' },
        { id: 'song_name', title: 'song_name' },
        { id: 'user_id_songs', title: 'user_id_songs' },
        { id: 'length', title: 'length' }
      ],
    });
    for (let i = 0; i < 1000000; i += 1) {
      const fakeLength = `${getRandomIntInclusive(0, 1)}` + ':' + `${getRandomIntInclusive(0, 59)}` + ':' + `${getRandomIntInclusive(0, 59)}`;
      dataSet.push(
        {
          likes: getRandomIntInclusive(0, 20000),
          reposts: getRandomIntInclusive(0, 20000),
          followers: getRandomIntInclusive(0, 20000),
          tracks: getRandomIntInclusive(0, 20000),
          song_name: faker.hacker.adjective() + ' ' +  faker.hacker.adjective(),
          user_id_songs: getRandomIntInclusive(1, 10000000),
          length: fakeLength
        },
      );
    }

    csvWriter.writeRecords(dataSet)
      .then(() => {
        console.log('done');
      });
  }
}; */