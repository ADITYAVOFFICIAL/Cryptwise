import React from 'react';
import './Erorr.css';
import Navbar from '../Navbar/Navbar';

const Chatbot = () => {
  return (
    <div className='chatbot-bg'>
      <div className='chat-nav'>
        <Navbar />
      </div>
      <div className='center-content'>
        <h1 className='text-h fade-in'>404</h1>
        <p className='text-p fade-in'>The page you are looking for does not exist</p>
      </div>
    </div>
  );
};

export default Chatbot;
