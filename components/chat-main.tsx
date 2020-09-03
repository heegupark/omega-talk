import React from 'react';
import ChatMainHead from './chat-main-head';

export default function ChatMain() {
  const createChatroom = () => {
    console.log('createChatroom');
  };
  return (
    <>
      <ChatMainHead createChatroom={createChatroom} />
    </>
  );
}
