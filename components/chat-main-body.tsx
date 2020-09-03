import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    head: {
      margin: '13px',
      color: 'rgb(66, 54, 48)',
    },
  })
);

export default function ChatMainBody(props: any) {
  const classes = useStyles();
  return (
    <div className={classes.head}>
      {props.rooms.map((room: any) => {
        return <div key={room._id}>{room.roomname}</div>;
      })}
    </div>
  );
}
