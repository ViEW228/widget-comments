import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import { v4 as uuidv4 } from 'uuid';

import CommentsWidget from './containers/app';
import { createStore } from 'redux';
import comments from './reducers';

const initialState = [
  { 
    id: uuidv4(),
    name: 'VooDooSh', 
    text: 'Heroes of Might & Magic III the best game in the world!', 
    time: '03.09.2021, 17:48:21',
    button: true,
  },
  { 
    id: uuidv4(),
    name: 'Ben Broad', 
    text: 'Сollectible online card game based on the Warcraft universe', 
    time: '04.09.2021, 17:58:26',
    button: true,
  },
  { 
    id: uuidv4(),
    name: 'My commit', 
    text: 'Hello, I glad to see you in the vastness of my mini web-application', 
    time: '08.09.2021, 11:48:23',
    button: true,
  }
];

const store = createStore(comments, initialState);

ReactDOM.render(
  <CommentsWidget store={store} />,
  document.querySelector('#commentsWidget')
);

