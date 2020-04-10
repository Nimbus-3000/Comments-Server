const { Pool, Client } = require('pg');

const client = new Client({
  user: 'Calvin',
  host: 'localhost',
  database: 'soundcloud',
  port: 5432,
});
client.connect();

const getComments = (callback) => {
  console.log('db getComments pinged')
  const queryStr = 'select * from public.songs INNER JOIN public.users ON public.songs.user_id_songs = public.users.user_id where public.songs.song_id = 8000000;'

  client.query(queryStr, (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      // console.log(res.rows);
      callback(res.rows)
    }
  });

  // client
  //   .query(queryStr)
  //   .then(res => console.log(res.rows[0]))
  //   .catch(e => console.error(e.stack))
};

module.exports = { getComments };
