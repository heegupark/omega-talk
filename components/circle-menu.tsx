import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

export default function CircleMenu(props: any) {
  return (
    <div className="circle-menu">
      <div className="circle-menu-box">
        {!props.isMobile && (
          <>
            <Tooltip title="close window" arrow>
              <i
                onClick={() => props.handleCloseWindow()}
                className="close fas fa-times"
              ></i>
            </Tooltip>
            <Tooltip
              title={props.isMinimized ? 'back to original size' : 'minimize'}
              arrow
            >
              <i
                onClick={() => props.handleMinimize()}
                className="minimize fas fa-minus"
              ></i>
            </Tooltip>
            <Tooltip title="enter full screen" arrow>
              <i
                onClick={() => props.handleExpand()}
                className="expand fas fa-expand-arrows-alt"
              ></i>
            </Tooltip>
          </>
        )}
      </div>
    </div>
  );
}
