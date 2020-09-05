import React, { useState, useEffect } from 'react';
import ChatMainHead from './chat-main-head';
import ChatMainBody from './chat-main-body';

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

  useEffect(getRooms, []);

  const create = (roomname: String) => {
    fetch('/api/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ roomname: roomname, username: props.username }),
    })
      .then((res) => res.json())
      .then((data) => {
        const newRooms = [data.room, ...rooms] as any;
        if (data.success) {
          setRooms(newRooms);
          props.openWindow(data.room._id, data.room);
        }
      })
      .catch((err) => {
        console.error(`Something wrong happened while creating:${err.message}`);
      });
  };

  const createChatroom = (roomname: String) => {
    create(roomname);
  };

  return (
    <div className="main-chat">
      <ChatMainHead createChatroom={createChatroom} />
      <ChatMainBody rooms={rooms} openWindow={props.openWindow} />
    </div>
  );
}
