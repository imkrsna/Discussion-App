import { useEffect, useState } from 'react';
import Header from './components/Header';
import Database from './services/database';
import Content from './components/Content';
import Errors from './components/Error';

const App = () => {
  // states
  const [comments, setComments] = useState([]);
  const [errors, setErrors] = useState([]);
  const [userName, setUserName] = useState(null);
  const [parentId, setParentId] = useState(null);

  // handlers
  const handleUsername = (uName) => setUserName(uName);
  const handleNewComment = (text) => {
    const newComment = {
      parentId: parentId,
      author: userName,
      text: text
    };

    Database
      .addComment(newComment)
      .then(response => setComments(comments.concat(response.data)))
      .catch(error => setErrors(errors.concat(error.response.data.data)));
  
    setParentId(null);
  };

  // loading all comments
  useEffect(() => {
    Database
      .getComment()
      .then(response => setComments(response.data))
      .catch(error => setErrors(errors.concat(error.response.data.data)));
    }, []);
    
  if (userName) {
    return (
      <div className="container">
        <div className="app">
          <Header handler={handleNewComment} userName={userName} comments={comments} parentId={parentId} />
          <Content comments={comments} setParentId={setParentId}/>
        </div>
        <Errors errors={errors}/>
      </div>
    );

  } else {
    return (
      <div className="container">
        <div className="app">
          <Header handler={handleUsername} userName={userName} />
        </div>
        <Errors errors={errors}/>
      </div>
    );
  }
};

export default App;