import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

const useStyles = makeStyles(() =>
  createStyles({
    head: {
      margin: '13px',
      color: 'rgb(66, 54, 48)',
    },
    iconbox: {
      width: '50px',
    },
    icon: {
      color: 'rgb(203,214,242)',
      backgroundColor: 'rgb(160,182,233)',
      borderRadius: '30%',
      width: '40px',
      height: '40px',
    },
    room: {
      height: '30px',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
    },
    roomname: {
      paddingTop: '5px',
      width: '60%',
    },
    date: {
      color: 'rgb(173,173,173)',
      fontSize: '13px',
    },
  })
);

export default function ChatMainBody(props: any) {
  const classes = useStyles();
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const convertDate = (dateAt: any) => {
    const today = new Date();
    const year = new Date(dateAt).getFullYear();
    const month = new Date(dateAt).getMonth();
    const monthName = monthNames[new Date(dateAt).getMonth()];
    const day = new Date(dateAt).getDay();
    let date = `${monthName} ${day}`;
    if (
      today.getFullYear() === year &&
      today.getMonth() === month &&
      today.getDay() === day
    ) {
      date = new Date(dateAt).toLocaleTimeString(navigator.language, {
        hour: '2-digit',
        minute: '2-digit',
      });
    }
    return date;
  };
  return (
    <div className={classes.head}>
      {props.rooms.map((room: any) => {
        const date = convertDate(room.updatedAt);
        return (
          <div key={room._id} className={classes.room}>
            <div className={classes.iconbox}>
              <PermIdentityIcon className={classes.icon} />
            </div>
            <div className={classes.roomname}>{room.roomname}</div>
            <div className={classes.date}>{date}</div>
          </div>
        );
      })}
    </div>
  );
}
