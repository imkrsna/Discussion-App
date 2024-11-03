import axios from 'axios';

const Database = (() => {
  const baseURL = '/api/data';

  // get comment
  const getComment = (id = "") => {
    const request = axios.get(`${baseURL}/${id}`);
    return request.then(response => response.data);
  };
  
  // add comment
  const addComment = (comment) => {
    const request = axios.post(baseURL, comment);
    return request.then(response => response.data);
  }
  
  // delete comment
  const deleteComment = (id) => {
    const request = axios.delete(`${baseURL}/${id}`);
    return request.then(response => response.data);
  };
  
  return {getComment, addComment, deleteComment};
})();

export default Database;