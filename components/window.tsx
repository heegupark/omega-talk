import React, { useState, useEffect } from 'react';
import { Rnd } from 'react-rnd';
import Left from '../components/left';
import Top from '../components/top';
import ChatMain from '../components/chat-main';
import Room from '../components/room';
import EnterUsername from '../components/enter-username';
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';
import Tooltip from '@material-ui/core/Tooltip';

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
  const [marginLeft, setMarginLeft] = useState(0);
  const [isCloseMainWindow, setIsCloseMainWindow] = useState(false);
  let [isExpanded, setIsExpanded] = useState(false);
  let [isMinimized, setIsMinimized] = useState(false);
  let [isDraggable, setIsDraggable] = useState(true);

  useEffect(() => {
    setZIndex(props.zIndex);
  }, [props.zIndex]);

  const [state, setState] = React.useState<State>({
    open: false,
    vertical: 'bottom',
    horizontal: 'left',
  });
  const { open, vertical, horizontal } = state;

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
    const numOfMinimized = document.querySelectorAll('#minimized').length;
    setMarginLeft(numOfMinimized * 100);
    if (isMinimized) {
      setPosition({ x: position.x, y: position.y });
      closeMinimize();
    } else {
      setState({ open: true, vertical: 'bottom', horizontal: 'left' });
    }
    setIsMinimized(!isMinimized);
  };

  const handleCloseWindow = () => {
    if (props.window) {
      props.closeWindow(props.window._id);
    } else {
      setIsCloseMainWindow(true);
      setIsMinimized(false);
      setState({ open: true, vertical: 'top', horizontal: 'left' });
    }
  };

  const openMainWindow = () => {
    setIsMinimized(false);
    setIsCloseMainWindow(false);
    setState({ ...state, open: false });
  };

  let element = null;
  switch (props.category) {
    case 'username':
      element = (
        <div
          className={props.isMobile ? 'username-box-mobile' : 'username-box'}
        >
          <EnterUsername
            isMobile={props.isMobile}
            handleExpand={handleExpand}
            handleMinimize={handleMinimize}
            handleCloseWindow={handleCloseWindow}
            setUsername={props.setUsername}
            setView={props.setView}
          />
        </div>
      );
      break;
    case 'main':
      element = (
        <div className="main-box">
          <Left
            isMobile={props.isMobile}
            username={props.username}
            signout={props.signout}
            handleCloseWindow={handleCloseWindow}
            handleMinimize={handleMinimize}
            handleExpand={handleExpand}
          />
          <ChatMain
            isMobile={props.isMobile}
            setView={props.setView}
            openWindow={props.openWindow}
            username={props.username}
          />
        </div>
      );
      break;
    case 'chat-room':
      element = (
        <div className="room-box">
          <Top
            isMobile={props.isMobile}
            setView={props.setView}
            handleCloseWindow={handleCloseWindow}
            window={props.window}
            closeWindow={props.closeWindow}
            handleMinimize={handleMinimize}
            handleExpand={handleExpand}
          />
          <Room
            isMobile={props.isMobile}
            username={props.username}
            window={props.window}
          />
        </div>
      );
      break;
  }
  return (
    <>
      {props.isMobile ? (
        <div style={{ height: '100vh' }}>{element}</div>
      ) : (
        !isMinimized &&
        !isCloseMainWindow && (
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
              props.setLastPosition({ x: d.x, y: d.y });
            }}
            onDragStart={() => {
              setZIndex(props.maxZIndex + 1);
              props.setMaxZIndex(() => props.maxZIndex + 1);
            }}
            onResizeStop={(e, direction, ref, delta, position) => {
              setSize({
                width: Number(ref.style.width.split('px')[0]),
                height: Number(ref.style.height.split('px')[0]),
              });
            }}
            disableDragging={props.isMobile || !isDraggable}
            style={{ zIndex }}
          >
            {element}
          </Rnd>
        )
      )}
      <Snackbar
        id="minimized"
        style={vertical === 'top' ? { marginLeft: 0 } : { marginLeft }}
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        key={vertical + horizontal}
      >
        <>
          {isCloseMainWindow ? (
            <Tooltip title="open main window" arrow>
              <span
                onClick={() => openMainWindow()}
                className="closed-box bg-brown cursor-pointer"
              >
                <i className="far fa-comment"></i>
              </span>
            </Tooltip>
          ) : (
            <span className="minimized-box">
              <Left
                styleCategory="minimized"
                category={props.category}
                handleCloseWindow={handleCloseWindow}
                window={props.window}
                handleMinimize={handleMinimize}
                handleExpand={handleExpand}
              />
            </span>
          )}
        </>
      </Snackbar>
    </>
  );
}
