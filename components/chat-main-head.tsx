import React from 'react';
import Popover from '@material-ui/core/Popover';
import CreateChatroom from './create-chatroom';
import { makeStyles, createStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      height: '100%',
      borderRadius: '5px',
      border: '1px solid rgb(228, 228, 228)',
    },
    head: {
      margin: '13px',
      color: 'rgb(66, 54, 48)',
    },
    title: {
      float: 'left',
      fontWeight: 800,
      fontSize: '18px',
    },
    bubble: {
      cursor: 'pointer',
      float: 'right',
      fontSize: '24px',
    },
  })
);

export default function ChatMainHead(props: any) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className={classes.head}>
      <span className={classes.title}>Chats</span>
      <span className={classes.bubble} onClick={handleClick}>
        <i className="fas fa-comment-medical"></i>
      </span>
      <Popover
        elevation={1}
        className={classes.paper}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <CreateChatroom
          handleClose={handleClose}
          createChatroom={props.createChatroom}
        />
      </Popover>
    </div>
  );
}
