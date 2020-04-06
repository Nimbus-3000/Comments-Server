DROP DATABASE IF EXISTS soundcloud;

CREATE DATABASE soundcloud;

\c soundcloud;

CREATE SCHEMA nimubs; 

DROP

CREATE TABLE "users" (
  "user_id" SERIAL PRIMARY KEY, 
  "user_name" varchar(20), --faker random 
  "location" varchar(30), --faker random 
  "image" varchar(300), --faker random image
  "tracks" integer, --random number
  "num_of_songs" integer, --random number??
  "followers" integer --random number
);

CREATE TABLE "songs" (
  "song_id" SERIAL PRIMARY KEY,
  "likes" integer,
  "reposts" integer,
  "followers" integer,
  "song_name" varchar(30),
  "user_id_songs" varchar(30), -- references user table with user_id
  "length" varchar(10)
);

CREATE TABLE "comments" (
  "comment_id" SERIAL PRIMARY KEY, -- num between 1 and 1,000,000
  "text" varchar(300),
  "user" varchar(30), -- references user_id in users: random num between 1 and 20,000,000
  "song" integer, -- references song_id in songs: random number between 1 and 1,000,000
  "reply_id" integer, -- references comment_id of comments if a reply, otherwise NULL to represent parent comment
  "song_timestamp" varchar(10),
  "date" date
);

-- ALTER TABLE "songs" ADD FOREIGN KEY ("song_id") REFERENCES "comments" ("song");

-- ALTER TABLE "users" ADD FOREIGN KEY ("user_id") REFERENCES "comments" ("user");

-- ALTER TABLE "comments" ADD FOREIGN KEY ("comment_id") REFERENCES "comments" ("reply_id");
