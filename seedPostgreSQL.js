const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker');

const csvWriter = createCsvWriter({
  path: './CsvFiles/test.csv',
  header:[
    { id: 'likes', title: 'likes' },
    { id: 'reposts', title: 'reposts' },
    { id: 'followers', title: 'followers' },
    { id: 'tracks', title: 'tracks' },
    { id: 'song_name', title: 'song_name' },
    { id: 'artist', title: 'artist' },
    { id: 'length', title: 'length' }
  ],
});

const test = {
  likes: 4,
  reposts: 124,
  followers: 124,
  tracks: 4342,
  song_name: "test song",
  artist: "tester",
  length: "1:20" 
};
const dataSet = [];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const dataGeneraton = () => {
  for (let i = 0; i < 100; i += 1) {
    const fakeLength = `${getRandomIntInclusive(0, 2)}` + ':' + `${getRandomIntInclusive(0, 59)}` + ':' + `${getRandomIntInclusive(0, 59)}`;
    dataSet.push(
      {
        likes: getRandomIntInclusive(0, 2000),
        reposts: getRandomIntInclusive(0, 2000),
        followers: getRandomIntInclusive(0, 2000),
        tracks: getRandomIntInclusive(0, 2000),
        song_name: faker.hacker.adjective(),
        artist: faker.internet.userName(),
        length: fakeLength
      },
    );
  }
};

dataGeneraton();


csvWriter.writeRecords(dataSet)
  .then(() => {
    console.log('done');
  });