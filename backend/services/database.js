const Comments = (() => {
  let data = [{
    id: '1',
    parentId: null,
    author: 'Spider-Man',
    timestamp: 1730542279914,
    text: "Hello everyone it's your friendly neighbour hood spiderman",
  },
  {
    id: '2',
    parentId: '1',
    author: 'Batman',
    timestamp: 1730542279914,
    text: "Oh Hello, Spider-Man",
  },
  {
    id: '3',
    parentId: null,
    author: 'Rick Ashley',
    timestamp: 1730542279914,
    text: "Never gonna give you up!",
  }];
  return {
    getData: () => data,
    setData: (newData) => data = newData,
  };
})();

exports.Comments = Comments;