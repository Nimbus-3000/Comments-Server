/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../db/indexPostgres.js');


const app = express();
const port = 4001;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')));
/*
http://localhost:4001/api/songId/20/comments
*/
app.get('/api/songId/:id/comments', (req, res) => {
  const id = req.params.id
  db.getComments(id, (err, comments) => {
    // console.log(comments);
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(comments);
    }
  });
});

// add comment
app.post('/api/songId/:id/comments', (req, res) => {
  const id = req.params.id;
  const body = req.body;

  db.addComment(id, body, (err, posted) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).send(posted);
    }
  });
});

app.patch('/api/songId/:songId/comments/:commentId/replies', (req, res) => {
  const {songId} = req.params;
  const {commentId} = req.params;
  const body = req.body;
  db.replyComment(body, (err, posted) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).send(posted);
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    console.log(err, `unable to connect to port ${port}`);
  } else {
    console.log(`connected to server at port ${port}`);
  }
});
