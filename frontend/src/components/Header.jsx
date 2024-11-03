import { useEffect, useState } from "react";

const HeaderInput = ({ placeholder, handler }) => {
  const [inputVar, setInputVar] = useState('');
  
  // handlers
  const handleInput = (event) => setInputVar(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    handler(inputVar);
    setInputVar('');
  };

  return (
    <form className="header__inputbox" onSubmit={handleSubmit}>
      <input
        type="text"
        className="header__input"
        placeholder={placeholder}
        value={inputVar}
        onChange={handleInput}
      />
      <button type="submit" className="header__button">Add</button>
    </form>
  );
};

const Header = ({ handler, userName, comments, parentId }) => {
  let placeholder = "";
  if (userName) {
    if (parentId) {
      const parent = comments.find(c => c.id === parentId).author;
      placeholder = `Replying to ${parent}`;
    } else {
      placeholder = "What’s on your mind?";
    }
  } else {
    placeholder = "What is your name?";
  }

  return (
    <div className="app__header">
      <div className="header__heading">Discussion</div>
      <HeaderInput placeholder={placeholder} handler={handler} />
    </div>
  );
};

export default Header;