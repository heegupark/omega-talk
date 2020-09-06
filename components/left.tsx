import React from 'react';
import CircleMenu from '../components/circle-menu';
import Tooltip from '@material-ui/core/Tooltip';

export default function Left(props: any) {
  let style =
    props.styleCategory === 'minimized'
      ? 'minimized'
      : props.isMobile
      ? 'left-mobile'
      : 'left';
  style += props.category === 'chat-room' ? ' bg-white' : ' bg-brown';
  return (
    <div className={style}>
      <CircleMenu
        isMobile={props.isMobile}
        handleCloseWindow={props.handleCloseWindow}
        handleExpand={props.handleExpand}
        handleMinimize={props.handleMinimize}
        isMinimized={props.styleCategory === 'minimized'}
      />
      {props.styleCategory !== 'minimized' && (
        <>
          <Tooltip title={props.username} arrow>
            <div className="profile cursor-default">
              <i className="far fa-user-circle"></i>
            </div>
          </Tooltip>
          <Tooltip title="sign out" arrow>
            <div
              className="signout cursor-pointer"
              onClick={() => props.signout()}
            >
              <i className="fas fa-sign-out-alt"></i>
            </div>
          </Tooltip>
        </>
      )}
    </div>
  );
}
