import React, { useState, useEffect } from 'react';
import RoomChatMain from '../components/room-chat-main';
import RoomChatInput from '../components/room-chat-input';
import socketIOClient from 'socket.io-client';
const socket = socketIOClient(`:${process.env.socketPort}/`);

export default function Room(props: any) {
  const [messages, setMessages] = useState([]);
  const roommainRef = React.useRef<HTMLDivElement>(null);

  const sendMessage = (message: string) => {
    if (socket) {
      socket.emit('chat', {
        _id: props.window._id,
        roomname: props.window.roomname,
        username: props.username,
        message,
      });
    }
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

  useEffect(() => {
    const room = props.window._id;
    socket.on(`room-${room}`, (data: any) => {
      if (data.data) {
        setMessages((messages: any) => [...messages, data.data] as any);
      }
    });
    return () => {};
  }, [props.window._id]);

  return (
    <div className="room-main" ref={roommainRef}>
      <RoomChatMain
        roommainHeight={roommainRef.current?.clientHeight}
        username={props.username}
        roomId={props.window._id}
        messages={messages}
      />
      <RoomChatInput sendMessage={sendMessage} />
    </div>
  );
}
