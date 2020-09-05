import React, { useState, useEffect } from 'react';
import Window from '../components/window';

export default function Main() {
  const [maxZIndex, setMaxZIndex] = useState(0);
  const [windows, setWindows] = useState([] as any);
  const [lastPosition, setLastPosition] = useState({ x: 200, y: 50 });
  const [username, setUsername] = useState('' as any);

  useEffect(() => {
    if (localStorage.getItem('omega-talk-username')) {
      setUsername(localStorage.getItem('omega-talk-username'));
    }
  }, []);
  const openWindow = (_id: any, room: any) => {
    const isOpened = windows.findIndex((item: any) => item._id === _id);
    const newWindow = {
      _id,
      roomname: room.roomname,
      positionX: lastPosition.x + 20,
      positionY: lastPosition.y + 20,
      zIndex: maxZIndex + 1,
      owner: room.owner,
      participants: room.participants.length,
    };
    if (isOpened === -1) {
      setMaxZIndex(maxZIndex + 1);
      setWindows([...windows, newWindow] as any);
      setLastPosition({ x: newWindow.positionX, y: newWindow.positionY });
    } else {
      const newWindows = windows.map((item: any) => {
        if (item._id === _id) {
          item.zIndex = maxZIndex + 1;
        }
        return item;
      });
      setWindows(newWindows as any);
    }
  };

  const closeWindow = (_id: any) => {
    const newWindows = windows.filter((item: any) => item._id !== _id);
    setWindows(newWindows as any);
  };

  const signout = () => {
    localStorage.removeItem('omega-talk-username');
    setUsername('');
  };

  return (
    <>
      {username ? (
        <>
          <Window
            category="main"
            maxZIndex={maxZIndex}
            username={username}
            lastPosition={lastPosition}
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
          category="username"
          maxZIndex={maxZIndex}
          lastPosition={lastPosition}
          setMaxZIndex={setMaxZIndex}
        />
      )}
    </>
  );
}
