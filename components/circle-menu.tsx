import React from 'react';

export default function CircleMenu(props: any) {
  return (
    <div className="circle-menu">
      <div className="circle-menu-box">
        <i
          onClick={() => props.handleCloseWindow()}
          className="close fas fa-times"
        ></i>
        <i
          onClick={() => props.handleMinimize()}
          className="minimize fas fa-minus"
        ></i>
        <i
          onClick={() => props.handleExpand()}
          className="expand fas fa-expand-arrows-alt"
        ></i>
      </div>
    </div>
  );
}
