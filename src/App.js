import React from 'react';
import './App.css';
import Navy from './components/my-navbar/Nav';
import Carousel from './components/Carousel/Carousel';
import Message from './components/Title/Message';

const App = () => {
  return (
    <div>
    <Navy />
    <Carousel />
    <Message />
    </div>
  );
}

export default App;
