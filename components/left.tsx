import React, { Component } from 'react';
import CircleMenu from '../components/circle-menu';

export default function Left(props: any) {
  let style = props.styleCategory === 'minimized' ? 'minimized' : 'left';
  style += props.category === 'chat-room' ? ' bg-white' : ' bg-brown';
  return (
    <div className={style}>
      <CircleMenu
        handleCloseWindow={props.handleCloseWindow}
        handleExpand={props.handleExpand}
        handleMinimize={props.handleMinimize}
      />
    </div>
  );
}
