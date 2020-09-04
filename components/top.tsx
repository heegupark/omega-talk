import React, { Component } from 'react';
import CircleMenu from '../components/circle-menu';

export default function Top(props: any) {
  return (
    <div className="top-box">
      <div className="top">
        <CircleMenu
          handleCloseWindow={props.handleCloseWindow}
          handleExpand={props.handleExpand}
          handleMinimize={props.handleMinimize}
        />
      </div>
      <div className="top-body">
        <div className="top-profile-box">
          <i className="far fa-user"></i>
        </div>
        <div>
          <div className="chatroom-title">{props.window.roomname}</div>
          <div className="chatroom-humber">
            <i className="fas fa-user-alt"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
