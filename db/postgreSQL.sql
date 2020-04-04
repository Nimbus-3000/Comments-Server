DROP DATABASE IF EXISTS soundCloudComments;

CREATE DATABASE soundCloudComments;

\c soundCloudComments;

CREATE SCHEMA nimubs; 

DROP

CREATE TABLE "users" (
  "user_id" SERIAL PRIMARY KEY,
  "user_name" varchar(20),
  "location" varchar(30),
  "image" varchar(300),
  "followers" integer
);

CREATE TABLE "songs" (
  "song_id" SERIAL PRIMARY KEY,
  "likes" integer,
  "reposts" integer,
  "followers" integer,
  "tracks" integer,
  "song_name" varchar(30),
  "artist" varchar(30),
  "length" varchar(10)
);

CREATE TABLE "comments" (
  "comment_id" SERIAL PRIMARY KEY,
  "text" varchar(300),
  "user" varchar(30),
  "song" integer,
  "reply_id" integer,
  "song_timestamp" varchar(10),
  "date" date
);

ALTER TABLE "songs" ADD FOREIGN KEY ("song_id") REFERENCES "comments" ("song");

ALTER TABLE "users" ADD FOREIGN KEY ("user_id") REFERENCES "comments" ("user");

ALTER TABLE "comments" ADD FOREIGN KEY ("comment_id") REFERENCES "comments" ("reply_id");
