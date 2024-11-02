// importing modules
const { Comments } = require('./database');
const { deleteComment } = require('./helper');
const { v4: uuid4 } = require('uuid');

const setRoutes = (app) => {

  // get all comments
  app.get('/api/data', (request, response) => {
    response.json({success: true, data: Comments.getData()});
  });

  // get specific comment
  app.get('/api/data/:id', (request, response) => {
    const id = request.params.id;
    const comment = Comments.getData().find(c => c.id === id);
    if (comment) {
      response.json({success: true, data: comment});
    } else {
      response.status(404).json({success: false, data: `Comment with ID '${id}' not found!`});
    }
  });

  // add new comment
  app.post('/api/data', (request, response) => {
    const commentText = request.body.text;

    if (commentText) {
      // creating new comment
      const newComment = {
        id: uuid4(),
        parentId: request.body.parentId || null,
        author: request.body.author || 'Anonymous',
        timestamp: Date.now(),
        text: commentText,
      };

      // adding new comment
      let comments = Comments.getData().concat(newComment);
      Comments.setData(comments);

      // setting new comment
      response.json({success: true, data: newComment});
    } else {
      response.status(400).json({success: false, data: `Bad Request!`});
    }
  });

  // deleting comment
  app.delete('/api/data/:id', (request, response) => {
    const id = request.params.id;
    const comment = Comments.getData().find(c => c.id === id);

    if (comment) {
      deleteComment(comment.id);
      response.json({success: true, data: `Comment with ID '${id}' deleted!`});
    } else {
      response.status(404).json({success: false, data: `Comment with ID '${id}' not found!`});
    }
  });

}

exports.setRoutes = setRoutes;