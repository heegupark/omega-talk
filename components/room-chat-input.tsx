import React, { useState } from 'react';

export default function RoomChatInput(props: any) {
  const [message, setMessage] = useState('');
  const handleSendBtnClick = () => {
    if (message.length > 1) {
      props.sendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="room-chat-input-box">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="room-chat-input"
      ></textarea>
      <button onClick={handleSendBtnClick} className="send-btn cursor-pointer">
        Send
      </button>
    </div>
  );
}
