-Route to get all comments (READ)

```
/api/songId/:id/comments
HTTP Method: GET
Data is sent with the query parameters
Data type: text
```

-Route to add comment (UPDATE)

```
/api/songId/:id/comments
HTTP Method: POST
Data is sent in request body
Data type: text (comment input) along with the songId 
Data: 
 
keys needed in body:
    text,
    user,
    song_id_comments,
    reply_id,
    song_timestamp,
    date,
  
```

-Route to add reply (PATCH)

```
/api/songId/:songId/comments/:commentId/replies
HTTP Method: PATCH
Data is sent through request body
Data type: text (comment input) and commentId (references which comment to add reply)


```

-Route to delete comment (DELETE)

```
/api/songId/:songId/comments/:commentId

HTTP Method: Delete
Data is sent through URL parameters
Data type: text (the ID of comment to be deleted)
```
