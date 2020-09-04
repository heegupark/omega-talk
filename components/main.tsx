import React, { useState } from 'react';
import Window from '../components/window';

export default function Main() {
  const [maxZIndex, setMaxZIndex] = useState(0);
  const [windows, setWindows] = useState([] as any);
  const [lastPosition, setLastPosition] = useState({ x: 200, y: 50 });
  const [username, setUsername] = useState('');

  const openWindow = (_id: any, roomname: any) => {
    const isOpened = windows.findIndex((item: any) => item._id === _id);
    const newWindow = {
      _id,
      roomname,
      positionX: lastPosition.x + 20,
      positionY: lastPosition.y + 20,
      zIndex: maxZIndex + 1,
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
      console.log(newWindows);
      setWindows(newWindows as any);
    }
  };
  return (
    <>
      {username ? (
        <>
          <Window
            category="main"
            maxZIndex={maxZIndex}
            lastPosition={lastPosition}
            setMaxZIndex={setMaxZIndex}
            openWindow={openWindow}
          />
          {windows.map((window: any) => {
            return (
              <Window
                key={window._id}
                window={window}
                zIndex={window.zIndex}
                maxZIndex={maxZIndex}
                category="chat-room"
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
