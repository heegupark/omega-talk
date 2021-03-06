import React, { useState } from 'react';
import CircleMenu from '../components/circle-menu';

export default function EnterUsername(props: any) {
  const [username, setUsername] = useState('');
  const [label, setLabel] = useState('Enter username');

  const handleEnterBtnClick = () => {
    if (username.trim().length < 1) {
      setLabel('Please enter username');
    } else {
      localStorage.setItem('omega-talk-username', username);
      props.setUsername(username);
      props.setView('main');
    }
  };

  const handleEnterUsername = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleEnterBtnClick();
    }
  };

  const handleCancelBtnClick = () => {
    setUsername('');
    setLabel('Please enter username');
  };
  return (
    <div className="enter-username-box">
      <div className="top">
        <CircleMenu
          isMobile={props.isMobile}
          handleCloseWindow={props.handleCloseWindow}
          handleExpand={props.handleExpand}
          handleMinimize={props.handleMinimize}
        />
      </div>
      <div className="chat-bubble">
        <i className="fas fa-comment"></i>
      </div>
      <div className="enter-username-input-box">
        <input
          className="enter-username-input"
          value={username}
          placeholder={label}
          autoFocus
          onKeyDown={(e) => handleEnterUsername(e)}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </div>
      <div className="username-btn">
        <button
          onClick={handleEnterBtnClick}
          className="username-enter-btn cursor-pointer"
        >
          Enter
        </button>
        <button
          onClick={handleCancelBtnClick}
          className="username-cancel-btn cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
