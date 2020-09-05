import React, { useState, useEffect } from 'react';
import RoomChatMain from '../components/room-chat-main';
import RoomChatInput from '../components/room-chat-input';

export default function Room(props: any) {
  const [messages, setMessages] = useState([]);
  const roommainRef = React.useRef<HTMLDivElement>(null);

  const sendMessage = (message: string) => {
    fetch('/api/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: props.window._id,
        roomname: props.window.roomname,
        username: props.username,
        message,
      }),
    })
      .then((res) => res.json())
      .then((data: any) => {
        if (data.success) {
          console.log(data);
          setMessages([...messages, data.data] as any);
        }
      })
      .catch((err) => {
        console.error(
          `Something wrong happened while sending a message:${err.message}`
        );
      });
  };
  const getMessages = () => {
    fetch(`/api/getmessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: props.window._id,
      }),
    })
      .then((res) => res.json())
      .then((data: any) => {
        if (data.success) {
          console.log(data);
          setMessages(data.data);
        }
      })
      .catch((err) => {
        console.error(
          `Something wrong happened while getting messages:${err.message}`
        );
      });
  };

  useEffect(() => {
    getMessages();
  }, []);
  return (
    <div className="room-main" ref={roommainRef}>
      <RoomChatMain
        roommainHeight={roommainRef.current?.clientHeight}
        username={props.username}
        messages={messages}
      />
      <RoomChatInput sendMessage={sendMessage} />
    </div>
  );
}
