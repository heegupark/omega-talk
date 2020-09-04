import React, { useState, useRef, useEffect } from 'react';
import { Rnd } from 'react-rnd';
import Left from '../components/left';
import Top from '../components/top';
import ChatMain from '../components/chat-main';
import Room from '../components/room';
import EnterUsername from '../components/enter-username';
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';

export interface State extends SnackbarOrigin {
  open: boolean;
}

export default function Window(props: any) {
  const [position, setPosition] = useState(
    props.window
      ? {
          x: props.window.positionX,
          y: props.window.positionY,
        }
      : {
          x: 200,
          y: 50,
        }
  );
  const [tempPosition, setTempPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 400, height: 640 });
  const [tempSize, setTempSize] = useState({ width: 400, height: 640 });
  // const [zIndex, setZIndex] = useState(props.window ? props.window.zIndex : 0);
  const [zIndex, setZIndex] = useState(0);
  let [isExpanded, setIsExpanded] = useState(false);
  let [isMinimized, setIsMinimized] = useState(false);
  let [isDraggable, setIsDraggable] = useState(true);

  useEffect(() => {
    setZIndex(props.zIndex);
  }, [props.zIndex]);

  const [state, setState] = React.useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const closeMinimize = () => {
    setState({ ...state, open: false });
  };

  const expand = () => {
    setTempPosition({ x: position.x, y: position.y });
    setPosition({ x: 0, y: 0 });
    if (!isMinimized) setTempSize({ width: size.width, height: size.height });
    setSize({ width: window.innerWidth, height: window.innerHeight });
    setIsDraggable(false);
    setIsExpanded(true);
  };

  const shrink = () => {
    setPosition({ x: tempPosition.x, y: tempPosition.y });
    setSize({ width: tempSize.width, height: tempSize.height });
    setIsDraggable(true);
    setIsExpanded(false);
  };

  const handleExpand = () => {
    if (isMinimized) {
      setIsMinimized(false);
      closeMinimize();
      expand();
    } else {
      if (isExpanded) {
        shrink();
      } else {
        expand();
      }
    }
  };

  const handleMinimize = () => {
    if (isMinimized) {
      setPosition({ x: position.x, y: position.y });
      closeMinimize();
    } else {
      setState({ open: true, vertical: 'bottom', horizontal: 'center' });
    }
    setIsMinimized(!isMinimized);
  };

  const handleCloseWindow = () => {
    console.log('close');
  };

  let element = null;
  switch (props.category) {
    case 'username':
      element = (
        <div className="username-box">
          <EnterUsername
            handleCloseWindow={handleCloseWindow}
            setUsername={props.setUsername}
          />
        </div>
      );
      break;
    case 'main':
      element = (
        <div className="main-box">
          <Left
            handleCloseWind={handleCloseWindow}
            handleMinimize={handleMinimize}
            handleExpand={handleExpand}
          />
          <ChatMain openWindow={props.openWindow} />
        </div>
      );
      break;
    case 'chat-room':
      element = (
        <div className="room-box">
          <Top
            handleCloseWindow={handleCloseWindow}
            window={props.window}
            handleMinimize={handleMinimize}
            handleExpand={handleExpand}
          />
          <Room />
        </div>
      );
      break;
  }

  return (
    <>
      {!isMinimized && (
        <Rnd
          default={{
            x: position.x,
            y: position.y,
            width: size.width,
            height: size.height,
          }}
          position={{
            x: position.x,
            y: position.y,
          }}
          size={{
            width: size.width,
            height: size.height,
          }}
          minWidth={320}
          minHeight={640}
          onDragStop={(e, d) => {
            setPosition({ x: d.x, y: d.y });
          }}
          onDragStart={() => {
            setZIndex(props.maxZIndex + 1);
            props.setMaxZIndex(props.maxZIndex + 1);
          }}
          onResizeStop={(e, direction, ref, delta, position) => {
            setSize({
              width: Number(ref.style.width.split('px')[0]),
              height: Number(ref.style.height.split('px')[0]),
            });
          }}
          disableDragging={!isDraggable}
          style={{ zIndex }}
        >
          {element}
        </Rnd>
      )}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        // onClose={closeMinimize}
        key={vertical + horizontal}
      >
        <span className="minimized">
          <Left handleMinimize={handleMinimize} handleExpand={handleExpand} />
        </span>
      </Snackbar>
    </>
  );
}
