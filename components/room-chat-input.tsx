import React from 'react';

export default function RoomChatInput() {
  return (
    <div className="room-chat-input-box">
      <textarea className="room-chat-input"></textarea>
      <button className="send-btn cursor-pointer">Send</button>
    </div>
  );
}
