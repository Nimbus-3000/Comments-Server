-Route to get all comments (READ)

```
/api/songId/:id/comments
HTTP Method: GET
Data is sent with the query parameters
Data type: text
```
  -reponse:

```
data type: JSON object

[ {}, {}, {}, {} ]

Each ^ {} is:
---------------------------------------------------------------
_id: "5e83c1c193c41112657cb095"
songId: 3
name: [{…}] // always one object containing user name and info
text: "Dolorum sed consequatur maiores."
time: 1585615213686
reply: (3) [{…}, {…}, {…}] // array of all reply objects
--------------------------------------------------------------------
Each ^ reply is: {}

name: [{…}] // single object containing user info
_id: "5e83c1c193c41112657cb097"
text: "Ipsa porro et omnis."
time: 1585617569103
--------------------------------------------------------------------
^ each name is: {}

_id: "5e83c1c193c41112657cb098"
name: "Marlee Koelpin"
location: "West Charlotte"
followers: 33
image: "https://s3.amazonaws.com/uifaces/faces/twitter/samuelkraft/128.jpg"
```

-Route to add comment (UPDATE)

```
/api/songId/:id/comment

HTTP Method: POST
Data is sent in request body
Data type: text (comment input) along with the songId 
Data: 

const user = { // user is always this template 
  name: 'Guest',
  location: 'San Francisco',
  followers: 0,
  image: 'https://theholybucket.s3-us-west-1.amazonaws.com/projectaudibly/guest-icon.png',
};
const comments = {
  songId: id,
  commentId: commentId,
  name: user,
  text: input, // from request body
  time: new Date().getTime(),
  reply: [],
};
```

-Route to add reply (PATCH)

```
/api/songId/:id/reply

HTTP Method: PATCH
Data is sent through request body
Data type: text (comment input) and commentId (references which comment to add reply)

const user = {
  name: 'Guest',
  location: 'San Francisco',
  followers: 0,
  image: 'https://theholybucket.s3-us-west-1.amazonaws.com/projectaudibly/guest-icon.png',
};
const myReply = {
  songId: songIdGen(),
  name: user,
  text: input, // text sent through req body
  time: new Date().getTime(),
};
```

-Route to delete comment (DELETE)

```
/api/songId/:id/delete

HTTP Method: Delete
Data is sent through request body
Data type: text (the ID of comment to be deleted)
```
