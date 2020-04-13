-- DROP DATABASE IF EXISTS soundcloud;
-- CREATE DATABASE soundcloud;
-- \c soundcloud;


-- CREATE SCHEMA nimubs; 

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY, 
  user_name varchar(30), 
  location varchar(30), 
  image varchar(300), 
  num_of_songs integer, 
  followers integer 
);

DROP TABLE IF EXISTS songs;

CREATE TABLE songs (
  song_id SERIAL PRIMARY KEY, 
  likes integer,
  reposts integer,
  tracks varchar(30),
  song_name varchar(50),
  user_id_songs integer, -- references user table with user_id
  length varchar(10)
);

DROP TABLE IF EXISTS comments;

CREATE TABLE comments (
  comment_id SERIAL PRIMARY KEY, 
  text varchar(300),
  "user" int, -- references user_id in users: random num between 1 and 10,000,000
  song_id_comments integer, -- references song_id in songs: random number between 1 and 10,000,000
  reply_id integer, -- references comment_id of comments if a reply, otherwise NULL to represent parent comment
  song_timestamp varchar(10),
  date varchar(30)
);

-- ALTER TABLE public.songs ADD CONSTRAINT songUsers FOREIGN KEY (user_id_songs) REFERENCES public.users (user_id);

-- ALTER TABLE public.comments ADD CONSTRAINT commentsSongId FOREIGN KEY (song_id_comments) REFERENCES public.songs (song_id);

-- ALTER TABLE public.comments ADD CONSTRAINT commentsUserId FOREIGN KEY ("user") REFERENCES public.users (user_id);

-- ALTER TABLE public.comments ADD CONSTRAINT commentsReply FOREIGN KEY (reply_id) REFERENCES public.comments (comment_id);
