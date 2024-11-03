import { timeAgo } from "../services/helper";

const CommentHeader = ({ comment, setParentId }) => {
  const handleReply = () => setParentId(comment.id); 

  return (
    <div className="comment__header">
      <div className="comment__meta">
        <div className="meta__username">{comment.author}</div>
        <div className="meta__time">{timeAgo(comment.timestamp)}</div>
      </div>
      <div className="comment__reply">
        <button onClick={handleReply}>↩️</button>
      </div>
    </div>
  );
};


const Comment = ({ comments, comment, setParentId }) => {
  const children = comments.filter(c => c.parentId === comment.id);

  return (
    <div className="comment">
      <div className="comment__main">
        <CommentHeader comment={comment} setParentId={setParentId} />
        <div className="comment__content">{comment.text}</div>
      </div>
      <div className="comment__sub">
        {children.map(child => <Comment key={child.id} comments={comments} comment={child} setParentId={setParentId} />)}
      </div>
    </div>
  );
}

const Content = ({ comments, setParentId }) => {
  const parentComments = comments.filter(c => c.parentId === null);

  return (
    <div className="app__content">
      {parentComments.map(comment => <Comment key={comment.id} comments={comments} comment={comment} setParentId={setParentId} />)}
    </div>
  );
};

export default Content;