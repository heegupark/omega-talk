import React from 'react';

export default function ChatMainBody(props: any) {
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

  const openChatroom = (_id: any, room: any) => {
    props.openWindow(_id, room);
  };

  return (
    <div className="chat-main-body">
      {props.rooms.map((room: any) => {
        const date = convertDate(room.updatedAt);
        return (
          <div
            key={room._id}
            className="chat-room-row cursor-pointer"
            onClick={() => openChatroom(room._id, room)}
          >
            <div className="icon-box">
              <i className="far fa-user"></i>
            </div>
            <div className="room-name">
              {room.roomname}
              {/* <span className="participants-count">{`(${room.participants.length})`}</span> */}
            </div>
            <div className="room-date">{date}</div>
          </div>
        );
      })}
    </div>
  );
}
