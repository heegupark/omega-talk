import React from 'react';

export default function ChatMainBody(props: any) {
  const convertDate = (dateAt: any) => {
    const today = new Date();
    const thisDate = new Date(dateAt);
    const year = thisDate.toString().split(' ')[3];
    const month = thisDate.toString().split(' ')[1];
    const day = thisDate.toString().split(' ')[2];
    let date = `${month} ${day}`;
    if (
      today.toString().split(' ')[3] === year &&
      today.toString().split(' ')[1] === month &&
      today.toString().split(' ')[2] === day
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

  const covertRoomname = (name: any) => {
    return name.length > 12 ? name.substring(0, 11) + '...' : name;
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
            <div className="room-name">{covertRoomname(room.roomname)}</div>
            <div className="room-date">{date}</div>
          </div>
        );
      })}
    </div>
  );
}
