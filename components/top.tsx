import React from 'react';
import CircleMenu from '../components/circle-menu';

export default function Top(props: any) {
  const handleBackBtnClick = () => {
    props.closeWindow(props.window._id);
    props.setView('main');
  };

  return (
    <div className="top-box">
      <div className="top">
        <CircleMenu
          isMobile={props.isMobile}
          handleCloseWindow={props.handleCloseWindow}
          handleExpand={props.handleExpand}
          handleMinimize={props.handleMinimize}
        />
      </div>
      <div className="top-body">
        {props.isMobile ? (
          <div
            className="back-btn cursor-pointer"
            onClick={() => handleBackBtnClick()}
          >
            <i className="fas fa-arrow-left"></i>
          </div>
        ) : (
          <div className="top-profile-box">
            <i className="far fa-user"></i>
          </div>
        )}
        <div>
          <div className="chatroom-title">{props.window.roomname}</div>
          <div className="chatroom-humber">
            <i className="fas fa-user-alt"></i>
            <span className="participants-count">{`${
              props.window && props.window.participants
            }`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
