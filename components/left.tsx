import React, { Component } from 'react';
import CircleMenu from '../components/circle-menu';

export default function Left(props) {
  return (
    <>
      <div className="circle-menu">
        <CircleMenu
          handleExpand={props.handleExpand}
          handleMinimize={props.handleMinimize}
        />
      </div>
    </>
  );
}
