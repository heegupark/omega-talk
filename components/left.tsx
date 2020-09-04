import React, { Component } from 'react';
import CircleMenu from '../components/circle-menu';

export default function Left(props: any) {
  return (
    <div className="left">
      <CircleMenu
        handleCloseWindow={props.handleCloseWindow}
        handleExpand={props.handleExpand}
        handleMinimize={props.handleMinimize}
      />
    </div>
  );
}
