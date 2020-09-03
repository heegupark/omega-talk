import React, { useState, useEffect } from 'react';
import ChatMainHead from './chat-main-head';
import ChatMainBody from './chat-main-body';

export default function ChatMain() {
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
        console.log(data.rooms);
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
      body: JSON.stringify({ roomname: roomname }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(`Something wrong happened while creating:${err.message}`);
      });
  };

  const createChatroom = (roomname: String) => {
    console.log('createChatroom');
    create(roomname);
  };

  return (
    <>
      <ChatMainHead createChatroom={createChatroom} />
      <ChatMainBody rooms={rooms} />
    </>
  );
}
