import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FormComment = ({ addComment, comments }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const add = () => {
    if (text.length > 500) {
      alert('The maximum number of characters in a comment is 500');
      setText(''); 
    }
    else if (name.length > 20) {
      alert('The maximum number of characters in a name is 20');
      setName('');  
    }
    else if (name.length === 0 || text.length === 0){
      alert('Error, please try again');
    }
    else {
      const newItem = {
        id: uuidv4(),
        name,
        text,
        time: new Date().toLocaleString(),
      }

      addComment(newItem);
      setText('');
      setName('');
      
      let localStore = JSON.parse(localStorage.getItem("state"));
      if (!localStore) {
        localStore = [...comments, newItem];
      } else {
        localStore.push(newItem);
      }
      localStorage.setItem("state", JSON.stringify(localStore));
    };

  };

  return (
    <div className="formComment">
      <h2 className="headerComment">Comments:</h2>
      <textarea 
        className='textareaComment'
        type="text"
        placeholder="Leave a comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className='containerInputBtn'>
        <input 
          className="inputComment"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button
          className='buttonAddComment'
          onClick={add} 
        >
          Отправить
        </button>
      </div>

    </div>
  )
};


export default FormComment;