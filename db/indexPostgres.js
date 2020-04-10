const { Pool, Client } = require('pg');

const client = new Client({
  user: 'Calvin',
  host: 'localhost',
  database: 'soundcloud',
  port: 5432,
});
client.connect();

const getComments = (id, callback) => {
  console.log('db getComments pinged')
  const queryStr = `select * from public.comments 
  INNER JOIN public.users ON public.comments."user" = public.users.user_id 
  INNER JOIN public.songs ON public.comments.song_id_comments = public.songs.song_id 
  where public.comments.song_id_comments = ${id};`;

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
