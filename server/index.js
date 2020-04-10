/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../db/indexPostgres.js');


const app = express();
const port = 4001;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')));
//http://localhost:4001/api/songId/20/comments
app.get('/api/songId/:id/comments', (req, res) => {
  const id = req.params.id
  db.getComments(id, (comments) => {
    // console.log(comments);
    res.send(comments);
  });
});

app.get('/api/reply', (req, res) => {
  // console.log('get request succeeded');
  db.getAllComments((err, data) => {
    if (err) {
      res.status(400).send('unable to retrieve data from database');
    } else {
      res.send(data);
    }
  });
});

app.get('/api/tracker', (req, res) => {
  db.getAllTrackers((err, data) => {
    if (err) {
      res.status(400).send('unable to retrieve tracker data from database');
    } else {
      res.send(data);
    }
  });
});

app.post('/api/comments', (req, res) => {
  db.logCommentInDB(req.body.input, (err, data) => {
    if (err) {
      res.status(400).send('unable to log comment into database')
    } else {
      res.send(data);
    }
  });
});

app.post('/api/reply', (req, res) => {
  db.logReplyInDB(req.body.reply, req.body.id, (err, data) => {
    if (err) {
      res.status(400).send('unable to log reply in database')
    } else {
      res.send(data);
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
