import React, { useState, useEffect } from 'react';
import Window from '../components/window';
import { isTablet } from 'react-device-detect';
import socketIOClient from 'socket.io-client';
const socket = socketIOClient(`:${process.env.socketPort}/`);

export default function Main(props: any) {
  const [maxZIndex, setMaxZIndex] = useState(0);
  const [windows, setWindows] = useState([] as any);
  const [lastPosition, setLastPosition] = useState({ x: 200, y: 50 });
  const [username, setUsername] = useState('' as any);
  const [view, setView] = useState('username');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (document.body.clientWidth <= 600 || isTablet) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('omega-talk-username')) {
      setUsername(localStorage.getItem('omega-talk-username'));
      setView('main');
    }
  }, []);

  const openWindow = (_id: string, room: any) => {
    const isOpened = windows.findIndex((window: any) => window._id === _id);
    const newWindow = {
      _id,
      roomname: room.roomname,
      positionX: lastPosition.x + 20,
      positionY: lastPosition.y + 20,
      zIndex: maxZIndex + 100,
      owner: room.owner,
      participants: room.participants.length,
    };
    if (isOpened === -1) {
      setWindows((windows: any) => [...windows, newWindow] as any);
      setLastPosition({ x: newWindow.positionX, y: newWindow.positionY });
      if (socket) {
        socket.emit('joinroom', {
          _id,
          username,
        });
      }
    } else {
      const newWindows = windows.map((window: any) => {
        if (window._id === _id) {
          window.zIndex = maxZIndex + 1;
        }
        return window;
      });
      setWindows(() => newWindows);
    }
    setView('chat-room');
  };

  const closeWindow = (_id: any) => {
    const newWindows = windows.filter((item: any) => item._id !== _id);
    setWindows(newWindows as any);
    // setView('main');
  };

  const signout = () => {
    localStorage.removeItem('omega-talk-username');
    setView('username');
    setUsername('');
  };

  return (
    <>
      {isMobile ? (
        <Window
          view={view}
          setView={setView}
          category={view}
          isMobile={isMobile}
          maxZIndex={maxZIndex}
          username={username}
          lastPosition={lastPosition}
          setLastPosition={setLastPosition}
          setMaxZIndex={setMaxZIndex}
          openWindow={openWindow}
          signout={signout}
          setUsername={setUsername}
          closeWindow={closeWindow}
          window={windows[0]}
        />
      ) : username ? (
        <>
          <Window
            view={view}
            setView={setView}
            category="main"
            isMobile={isMobile}
            maxZIndex={maxZIndex}
            username={username}
            lastPosition={lastPosition}
            setLastPosition={setLastPosition}
            setMaxZIndex={setMaxZIndex}
            openWindow={openWindow}
            signout={signout}
          />
          {windows.map((window: any) => {
            return (
              <Window
                key={window._id}
                window={window}
                username={username}
                zIndex={window.zIndex}
                view={view}
                isMobile={isMobile}
                setView={setView}
                setLastPosition={setLastPosition}
                maxZIndex={maxZIndex}
                category="chat-room"
                closeWindow={closeWindow}
                setMaxZIndex={setMaxZIndex}
              />
            );
          })}
        </>
      ) : (
        <Window
          setUsername={setUsername}
          view={view}
          setView={setView}
          category="username"
          isMobile={isMobile}
          maxZIndex={maxZIndex}
          setLastPosition={setLastPosition}
          lastPosition={lastPosition}
          setMaxZIndex={setMaxZIndex}
        />
      )}
    </>
  );
}
