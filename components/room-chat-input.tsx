import React, { useState } from 'react';

export default function RoomChatInput(props: any) {
  const [message, setMessage] = useState('');
  const handleSendBtnClick = () => {
    if (message.trim().length > 0) {
      props.sendMessage(message);
      setMessage('');
    }
  };
  const handleEnterMessage = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendBtnClick();
    }
  };
  return (
    <>
      {props.isMobile ? (
        <div className="room-chat-input-box-mobile">
          <input
            value={message}
            autoFocus
            onKeyDown={(e) => handleEnterMessage(e)}
            onChange={(e) => {
              if (e.target.value.trim().length < 1) {
                setMessage(e.target.value.trim());
              } else {
                setMessage(e.target.value);
              }
            }}
            className="room-chat-input-mobile"
          />
          <button
            onClick={handleSendBtnClick}
            style={{
              backgroundColor: message.length > 0 ? 'rgb(255, 229, 0)' : '',
            }}
            className="send-btn-mobile"
          >
            Send
          </button>
        </div>
      ) : (
        <div className="room-chat-input-box">
          <textarea
            value={message}
            autoFocus
            onKeyDown={(e) => handleEnterMessage(e)}
            onChange={(e) => setMessage(e.target.value)}
            className="room-chat-input"
          ></textarea>
          <button
            onClick={handleSendBtnClick}
            style={{
              backgroundColor: message.length > 0 ? 'rgb(255, 229, 0)' : '',
            }}
            className="send-btn cursor-pointer"
          >
            Send
          </button>
        </div>
      )}
    </>
  );
}
