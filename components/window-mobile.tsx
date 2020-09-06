import React from 'react';
import Left from '../components/left';
import Top from '../components/top';
import ChatMain from '../components/chat-main';
import Room from '../components/room';
import EnterUsername from '../components/enter-username';

export default function WindowMobile(props: any) {
  let element = null;
  switch (props.category) {
    case 'username':
      element = (
        <div
          className="username-box"
          style={{ height: '100vh', borderRadius: 0 }}
        >
          <EnterUsername setUsername={props.setUsername} />
        </div>
      );
      break;
    case 'main':
      element = (
        <div className="main-box" style={{ height: '100vh', borderRadius: 0 }}>
          <Left username={props.username} signout={props.signout} />
          <ChatMain openWindow={props.openWindow} username={props.username} />
        </div>
      );
      break;
    case 'chat-room':
      element = (
        <div className="room-box">
          <Top window={props.window} />
          <Room username={props.username} window={props.window} />
        </div>
      );
      break;
  }

  return <>{element}</>;
}
