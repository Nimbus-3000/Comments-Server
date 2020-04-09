/* eslint-disable no-inner-declarations */
/* eslint-disable no-console */
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker');

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const dataGenerationSongs1 = () => {
  const writeSongs = fs.createWriteStream('./CsvFiles/songs.csv');
  writeSongs.write('likes,reposts,tracks,song_name,user_id_songs,length\n', 'utf8');

  function writeTenMillionSongs(writer, encoding, callback) {
    let i = 5000000;

    function write() {
      let ok = true;
      do {
        i -= 1;
        const fakeLength = `${getRandomIntInclusive(0, 1)}` + ':' + `${getRandomIntInclusive(0, 59)}` + ':' + `${getRandomIntInclusive(0, 59)}`;
        const likes = getRandomIntInclusive(0, 20000);
        const reposts = getRandomIntInclusive(0, 20000);
        const tracks = getRandomIntInclusive(0, 20000);
        const song_name = faker.hacker.verb() + ' ' +  faker.hacker.adjective() + ' ' +  faker.hacker.noun();
        const user_id_songs = getRandomIntInclusive(1, 10000000);
        const length = fakeLength;
        const data = `${likes},${reposts},${tracks},${song_name},${user_id_songs},${length}\n`;
        if (i === 4000000) {
          console.log('wrote one million');
        }
        if (i === 300000) {
          console.log('wrote two million');
        }
        if (i === 200000) {
          console.log('wrote three million');
        }
        if (i === 0) {
          console.log('wrote five million');
        }
        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
      } while (i > 0 && ok);
      if (i > 0) {
        writer.once('drain', write);
      }
    }
    write();
  }

  writeTenMillionSongs(writeSongs, 'utf-8', () => {
    writeSongs.end();
  });
};

const dataGenerationSongs2 = () => {
  const writeSongs = fs.createWriteStream('./CsvFiles/songs2.csv');
  writeSongs.write('likes,reposts,tracks,song_name,user_id_songs,length\n', 'utf8');

  function writeTenMillionSongs(writer, encoding, callback) {
    let i = 5000000;

    function write() {
      let ok = true;
      do {
        i -= 1;
        const fakeLength = `${getRandomIntInclusive(0, 1)}` + ':' + `${getRandomIntInclusive(0, 59)}` + ':' + `${getRandomIntInclusive(0, 59)}`;
        const likes = getRandomIntInclusive(0, 20000);
        const reposts = getRandomIntInclusive(0, 20000);
        const tracks = getRandomIntInclusive(0, 20000);
        const song_name = faker.hacker.verb() + ' ' +  faker.hacker.adjective() + ' ' +  faker.hacker.noun();
        const user_id_songs = getRandomIntInclusive(1, 10000000);
        const length = fakeLength;
        const data = `${likes},${reposts},${tracks},${song_name},${user_id_songs},${length}\n`;
        if (i === 4000000) {
          console.log('wrote one million');
        }
        if (i === 300000) {
          console.log('wrote two million');
        }
        if (i === 200000) {
          console.log('wrote three million');
        }
        if (i === 0) {
          console.log('wrote five million');
        }
        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
      } while (i > 0 && ok);
      if (i > 0) {
        writer.once('drain', write);
      }
    }
    write();
  }

  writeTenMillionSongs(writeSongs, 'utf-8', () => {
    writeSongs.end();
  });
};
// dataGenerationSongs1();
// dataGenerationSongs2();

const dataGenerationUsersPart1 = () => {
  const writeUsers = fs.createWriteStream('./CsvFiles/users1.csv');
  writeUsers.write('user_name,location,image,num_of_songs,followers\n', 'utf8');

  function writeFiveMillionUsers(writer, encoding, callback) {
    let i = 5000000;

    function write() {
      let ok = true;
      do {
        i -= 1;
        const user_name = faker.internet.userName();
        const location = faker.address.cityPrefix() + faker.address.citySuffix() ;
        const image = faker.internet.avatar();
        const num_of_songs = getRandomIntInclusive(0, 100);
        const followers = getRandomIntInclusive(0, 30000);
        const data = `${user_name},${location},${image},${num_of_songs},${followers}\n`;
        if (i === 4000000) {
          console.log('wrote one million');
        }
        if (i === 300000) {
          console.log('wrote two million');
        }
        if (i === 200000) {
          console.log('wrote three million');
        }
        if (i === 0) {
          console.log('wrote five million');
        }
        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
      } while (i > 0 && ok);
      if (i > 0) {
        writer.once('drain', write);
      }
    }
    write();
  }

  writeFiveMillionUsers(writeUsers, 'utf-8', () => {
    writeUsers.end();
  });
};

const dataGenerationUsersPart2 = () => {
  const writeUsers = fs.createWriteStream('./CsvFiles/users2.csv');
  writeUsers.write('user_name,location,image,num_of_songs,followers\n', 'utf8');

  function writeFiveMillionUsers(writer, encoding, callback) {
    let i = 5000000;

    function write() {
      let ok = true;
      do {
        i -= 1;
        const user_name = faker.internet.userName();
        const location = faker.address.cityPrefix() + faker.address.citySuffix() ;
        const image = faker.internet.avatar();
        const num_of_songs = getRandomIntInclusive(0, 100);
        const followers = getRandomIntInclusive(0, 30000);
        const data = `${user_name},${location},${image},${num_of_songs},${followers}\n`;
        if (i === 4000000) {
          console.log('wrote one million');
        }
        if (i === 300000) {
          console.log('wrote two million');
        }
        if (i === 200000) {
          console.log('wrote three million');
        }
        if (i === 0) {
          console.log('wrote five million');
        }
        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
      } while (i > 0 && ok);
      if (i > 0) {
        writer.once('drain', write);
      }
    }
    write();
  }

  writeFiveMillionUsers(writeUsers, 'utf-8', () => {
    writeUsers.end();
  });
};
// dataGenerationUsersPart1();
// dataGenerationUsersPart2();

const dataGenerationCommentsPart1 = () => {
  function writeFiveMillionComments(writer, encoding, callback) {
    let i = 10000000;
    function write() {
      let ok = true;
      do {
        i -= 1;
        const year = `${getRandomIntInclusive(2008, 2019)}`;
        const month = `${getRandomIntInclusive(1, 12)}`;
        const day = `${getRandomIntInclusive(1, 30)}`;
        const date = year + '-'  + month + '-' + day;
        const fakeLength = `${getRandomIntInclusive(0, 1)}` + ':' + `${getRandomIntInclusive(0, 59)}` + ':' + `${getRandomIntInclusive(0, 59)}`;
        const text = faker.lorem.sentence() + ' ' + faker.lorem.sentence();
        const user = getRandomIntInclusive(1, 10000000);
        const song_id_comments = getRandomIntInclusive(1, 10000000);
        const reply_id = 1;
        const song_timestamp = fakeLength;
        const data = `${text},${user},${song_id_comments},${reply_id},${song_timestamp},${date}\n`;
        if (i === 4000000) {
          console.log('wrote one million');
        }
        if (i === 300000) {
          console.log('wrote two million');
        }
        if (i === 200000) {
          console.log('wrote three million');
        }
        if (i === 0) {
          console.log('wrote ten million');
        }
        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
      } while (i > 0 && ok);
      if (i > 0) {
        writer.once('drain', write);
      }
    }
    write();
  }
  for (let x = 1; x <= 8; x += 1) {
    const writeComments = fs.createWriteStream(`./CsvFiles/comments${x}.csv`);
    writeComments.write('text,user,song_id_comments,reply_id,song_timestamp,date\n', 'utf8');
    writeFiveMillionComments(writeComments, 'utf-8', () => {
      writeComments.end();
    });
  }
};
dataGenerationCommentsPart1();

const dataGenerationCommentsPart2 = () => {
  function writeFiveMillionComments(writer, encoding, callback) {
    let i = 10000000;
    function write() {
      let ok = true;
      do {
        i -= 1;
        const year = `${getRandomIntInclusive(2008, 2019)}`;
        const month = `${getRandomIntInclusive(1, 12)}`;
        const day = `${getRandomIntInclusive(1, 30)}`;
        const date = year + '-'  + month + '-' + day;
        const fakeLength = `${getRandomIntInclusive(0, 1)}` + ':' + `${getRandomIntInclusive(0, 59)}` + ':' + `${getRandomIntInclusive(0, 59)}`;
        const text = faker.lorem.sentence() + ' ' + faker.lorem.sentence();
        const user = getRandomIntInclusive(1, 10000000);
        const song_id_comments = getRandomIntInclusive(1, 10000000);
        const reply_id = getRandomIntInclusive(1, 80000000);
        const song_timestamp = fakeLength;
        const data = `${text},${user},${song_id_comments},${reply_id},${song_timestamp},${date}\n`;
        if (i === 4000000) {
          console.log('wrote one million');
        }
        if (i === 300000) {
          console.log('wrote two million');
        }
        if (i === 200000) {
          console.log('wrote three million');
        }
        if (i === 0) {
          console.log('wrote ten million');
        }
        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
      } while (i > 0 && ok);
      if (i > 0) {
        writer.once('drain', write);
      }
    }
    write();
  }
  for (let x = 1; x <= 2; x += 1) {
    const writeComments = fs.createWriteStream(`./CsvFiles/commentReplies${x}.csv`);
    writeComments.write('text,user,song_id_comments,reply_id,song_timestamp,date\n', 'utf8');
    writeFiveMillionComments(writeComments, 'utf-8', () => {
      writeComments.end();
    });
  }
};

// dataGenerationCommentsPart2();
