import React from 'react';
import RoomChatMain from '../components/room-chat-main';
import RoomChatInput from '../components/room-chat-input';

export default function Room() {
  return (
    <div className="room-main">
      <RoomChatMain />
      <RoomChatInput />
    </div>
  );
}
