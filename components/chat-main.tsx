import React, { useState, useEffect } from 'react';
import ChatMainHead from './chat-main-head';
import ChatMainBody from './chat-main-body';
import socketIOClient from 'socket.io-client';
const socket = socketIOClient('/');
// const socket = socketIOClient(`:${process.env.socketPort}/`);

export default function ChatMain(props: any) {
  const [rooms, setRooms] = useState([]);
  const getRooms = () => {
    fetch('/api/rooms', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setRooms(data.rooms);
      })
      .catch((err) => {
        console.error(
          `Something wrong happened while getting room information:${err.message}`
        );
      });
  };

  useEffect(() => {
    getRooms();
    return () => {};
  }, []);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      socket.on('main', (data: any) => {
        if (data.success) {
          setRooms((rooms: any) => [data.data, ...rooms] as any);
          if (props.username === data.data.owner) {
            props.openWindow(data.data._id, data.data);
          }
        }
      });
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const create = (roomname: String) => {
    const roomData = { roomname: roomname, username: props.username };
    if (socket) {
      socket.emit('create-room', roomData);
    }
  };

  const createChatroom = (roomname: String) => {
    create(roomname);
  };

  return (
    <div className={props.isMobile ? 'main-chat-mobile' : 'main-chat'}>
      <ChatMainHead createChatroom={createChatroom} />
      <ChatMainBody
        username={props.username}
        rooms={rooms}
        openWindow={props.openWindow}
      />
    </div>
  );
}
