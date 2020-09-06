import React, { useState, useRef } from 'react';
import { Rnd } from 'react-rnd';
import Left from '../components/left';
import ChatMain from '../components/chat-main';
import Button from '@material-ui/core/Button';
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';

export interface State extends SnackbarOrigin {
  open: boolean;
}

export default function ChatRoom() {
  const [position, setPosition] = useState({ x: 200, y: 50 });
  const [tempPosition, setTempPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 400, height: 640 });
  const [tempSize, setTempSize] = useState({ width: 400, height: 640 });
  let [isExpanded, setIsExpanded] = useState(false);
  let [isMinimized, setIsMinimized] = useState(false);
  let [isDraggable, setIsDraggable] = useState(true);

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
          onResizeStop={(e, direction, ref, delta, position) => {
            setSize({
              width: Number(ref.style.width.split('px')[0]),
              height: Number(ref.style.height.split('px')[0]),
            });
          }}
          disableDragging={!isDraggable}
        >
          <div className="box">
            <div className="left">
              <Left
                handleMinimize={handleMinimize}
                handleExpand={handleExpand}
              />
            </div>
            <div className="main-chat">
              <ChatMain />
            </div>
          </div>
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
