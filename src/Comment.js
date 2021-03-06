import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, addComment, removeComment}) =>
  <li>
    {text} <span>votes: {votes}</span> 
    <button onClick={() => thumbUpComment(id)}>Thumb up</button>
    <button onClick={() => thumbDownComment(id)}>Thumb down</button>
    <button onClick={() => addComment(text)}>add</button>
    <button onClick={() => removeComment(id)}>remove</button>
  </li>;

export default Comment;