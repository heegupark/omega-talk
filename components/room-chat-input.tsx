import React, { useState } from 'react';

export default function RoomChatInput(props: any) {
  const [message, setMessage] = useState('');
  const handleSendBtnClick = () => {
    if (message.length > 0) {
      props.sendMessage(message);
      setMessage('');
    }
  };
  const handleEnterMessage = (e: any) => {
    if (e.key === 'Enter') {
      handleSendBtnClick();
    }
  };
  return (
    <>
      {props.isMobile ? (
        <div className="room-chat-input-box-mobile">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
