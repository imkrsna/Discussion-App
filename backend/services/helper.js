// importing database
const { Comments } = require('./database');

const deleteComment = (id) => {
  let comment = Comments.getData().find(c => c.id === id);
  
  if (comment) {
    // finding all child comments
    const children = Comments.getData().filter(c => c.parentId === comment.id);
    // deleting all child comments
    children.forEach(child => deleteComment(child.id));
    
    // deleting current comment
    let comments = Comments.getData().filter(c => c.id !== comment.id);
    Comments.setData(comments);
  }
}

exports.deleteComment = deleteComment;