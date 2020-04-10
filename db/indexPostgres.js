/* eslint-disable camelcase */
/* eslint-disable no-console */
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
      callback(err.stack, null);
    } else {
      callback(null, res.rows);
    }
  });
};

const addComment = (id, body, callback) => {
  console.log('db addComment pinged');
  const {
    text,
    user,
    song_id_comments,
    reply_id,
    song_timestamp,
    date,
  } = body;

  const queryStr = `
  INSERT INTO comments VALUES
        (DEFAULT,
        '${text}',
        ${user},
        ${song_id_comments},
        ${reply_id},
        '${song_timestamp}',
        '${date}');`;

  client.query(queryStr, (err, res) => {
    if (err) {
      console.log(err.stack);
      callback(err.stack, null);
    } else {
      console.log('posted comment to DB');
      callback(null, res);
    }
  });
};

module.exports = { getComments, addComment };
